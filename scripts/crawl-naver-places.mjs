import fs from "node:fs/promises";
import vm from "node:vm";

const appSource = await fs.readFile(new URL("../app.js", import.meta.url), "utf8");
const dataSource = `${appSource.split("const timeline =")[0]}\nglobalThis.__places = getAllRecommendationSource();`;
const context = {};
vm.createContext(context);
vm.runInContext(dataSource, context);

const places = context.__places;
const outputPath = new URL("../naver-places.js", import.meta.url);
const refresh = process.argv.includes("--refresh");
const existing = refresh ? {} : await readExisting(outputPath);
const results = { ...existing };
const pending = places.filter(place => !results[place.name]);
const concurrency = 4;
let cursor = 0;
let completed = 0;

console.log(`네이버 장소 ${places.length}곳 중 ${pending.length}곳을 조회합니다.`);

await Promise.all(Array.from({ length: concurrency }, async () => {
  while (cursor < pending.length) {
    const index = cursor++;
    const place = pending[index];
    results[place.name] = await crawlPlace(place);
    completed += 1;
    if (completed % 20 === 0 || completed === pending.length) {
      console.log(`${completed}/${pending.length} 완료`);
      await writeOutput(outputPath, results);
    }
    await wait(220);
  }
}));

await writeOutput(outputPath, results);
const matched = Object.values(results).filter(place => place.matched).length;
console.log(`완료: 정확 일치 ${matched}곳, 대체 이미지 ${places.length - matched}곳`);

async function crawlPlace(place) {
  const searchUrl = `https://m.search.naver.com/search.naver?where=m&query=${encodeURIComponent(place.query || `제주 ${place.name}`)}`;
  try {
    const response = await fetch(searchUrl, {
      headers: {
        "accept-language": "ko-KR,ko;q=0.9",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15"
      },
      signal: AbortSignal.timeout(18000)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const section = html.split('id="place-main-section-root"')[1]?.slice(0, 180000) || "";
    const hrefMatch = section.match(/href="https:\/\/m\.place\.naver\.com\/[^/]+\/(\d+)\/home[^\"]*"[^>]*>([^<]+)<\/a>/);
    const id = hrefMatch?.[1] || "";
    const resultName = decodeHtml(hrefMatch?.[2] || "").trim();
    const matched = Boolean(id && isSamePlace(place.name, resultName));
    const image = matched ? decodeHtml(section.match(/<img src="(https:\/\/search\.pstatic\.net\/common\/\?[^\"]+)"[^>]*class="[^"]*K0PDV/)?.[1] || "") : "";
    const summary = matched ? decodeHtml(section.match(/<span class="oPmH_">([^<]+)<\/span>/)?.[1] || "") : "";
    return {
      id: matched ? id : "",
      matched,
      name: matched ? resultName : place.name,
      image,
      summary: summary || place.description,
      url: matched ? `https://map.naver.com/p/entry/place/${id}` : `https://map.naver.com/p/search/${encodeURIComponent(place.query)}`,
      query: place.query
    };
  } catch (error) {
    return {
      id: "",
      matched: false,
      name: place.name,
      image: "",
      summary: place.description,
      url: `https://map.naver.com/p/search/${encodeURIComponent(place.query)}`,
      query: place.query,
      error: error.message
    };
  }
}

function isSamePlace(expected, actual) {
  const normalize = value => value.replace(/[\s·&._-]/g, "").replace(/제주(점)?$/g, "").toLowerCase();
  const left = normalize(expected);
  const right = normalize(actual);
  return left.length > 1 && right.length > 1 && (left === right || left.includes(right) || right.includes(left));
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

async function readExisting(path) {
  try {
    const source = await fs.readFile(path, "utf8");
    return JSON.parse(source.replace(/^window\.NAVER_PLACE_DATA\s*=\s*/, "").replace(/;\s*$/, ""));
  } catch {
    return {};
  }
}

async function writeOutput(path, data) {
  const ordered = Object.fromEntries(places.map(place => [place.name, data[place.name]]).filter(([, value]) => value));
  await fs.writeFile(path, `window.NAVER_PLACE_DATA = ${JSON.stringify(ordered, null, 2)};\n`);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
