const crowdPlaces = [
  { id: "airport", name: "제주국제공항", keyword: "제주국제공항", region: "jeju", lat: 33.506, lng: 126.493 },
  { id: "dongmun", name: "동문시장", keyword: "제주동문시장", region: "jeju", lat: 33.512, lng: 126.528 },
  { id: "hamdeok", name: "함덕해수욕장", keyword: "함덕해수욕장", region: "east", lat: 33.543, lng: 126.669 },
  { id: "saryeoni", name: "사려니숲길", keyword: "사려니숲길", region: "east", lat: 33.406, lng: 126.633 },
  { id: "bijarim", name: "비자림", keyword: "비자림", region: "east", lat: 33.49, lng: 126.809 },
  { id: "seongsan", name: "성산일출봉", keyword: "성산일출봉", region: "east", lat: 33.459, lng: 126.942 },
  { id: "seopjikoji", name: "섭지코지", keyword: "섭지코지", region: "east", lat: 33.424, lng: 126.93 },
  { id: "aqua", name: "아쿠아플라넷 제주", keyword: "아쿠아플라넷 제주", region: "east", lat: 33.432, lng: 126.927 },
  { id: "bunker", name: "빛의 벙커", keyword: "빛의 벙커", region: "east", lat: 33.439, lng: 126.899 },
  { id: "pyoseon", name: "표선해수욕장", keyword: "표선해수욕장", region: "south", lat: 33.326, lng: 126.844 },
  { id: "olle", name: "서귀포매일올레시장", keyword: "서귀포매일올레시장", region: "south", lat: 33.25, lng: 126.563 },
  { id: "jungmun", name: "중문관광단지", keyword: "중문관광단지", region: "south", lat: 33.245, lng: 126.411 },
  { id: "sanbang", name: "산방산", keyword: "산방산", region: "south", lat: 33.238, lng: 126.313 },
  { id: "osulloc", name: "오설록 티뮤지엄", keyword: "오설록 티뮤지엄", region: "west", lat: 33.305, lng: 126.289 },
  { id: "hyeopjae", name: "협재해수욕장", keyword: "협재해수욕장", region: "west", lat: 33.394, lng: 126.239 },
  { id: "arte", name: "아르떼뮤지엄 제주", keyword: "아르떼뮤지엄 제주", region: "west", lat: 33.396, lng: 126.345 },
  { id: "aewol", name: "애월카페거리", keyword: "애월카페거리", region: "west", lat: 33.462, lng: 126.311 },
  { id: "hallim", name: "한림공원", keyword: "한림공원", region: "west", lat: 33.39, lng: 126.24 }
];

const crowdLevelMeta = {
  1: { label: "여유", className: "level-1" },
  2: { label: "보통", className: "level-2" },
  3: { label: "혼잡", className: "level-3" },
  4: { label: "매우 혼잡", className: "level-4" },
  0: { label: "조회 전", className: "level-0" }
};

const crowdKeyStorage = "jeju-tmap-app-key-v1";
const crowdCacheStorage = "jeju-crowd-cache-v1";
const crowdPoiStorage = "jeju-crowd-pois-v1";
const crowdUsageStorage = "jeju-crowd-usage-v1";
const crowdCacheDuration = 3 * 60 * 60 * 1000;
const crowdPoiCacheDuration = 30 * 24 * 60 * 60 * 1000;
const crowdMonthlyRefreshLimit = 3;
const crowdPlacesPerRefresh = 3;
let crowdMapInstance = null;
let crowdClusterLayer = null;
let crowdResults = [];
let crowdActiveRegion = "all";
let crowdLoading = false;
const crowdMarkers = new Map();

const crowdDom = selector => document.querySelector(selector);

function getCrowdAppKey() {
  return localStorage.getItem(crowdKeyStorage)?.trim() || "";
}

function setCrowdStatus(state, text) {
  const element = crowdDom("#crowdLiveStatus");
  element.dataset.state = state;
  element.querySelector("span").textContent = text;
}

function ensureCrowdMap() {
  if (crowdMapInstance) return true;
  if (!window.L) return false;
  crowdMapInstance = L.map("crowdMap", {
    center: [33.39, 126.55],
    zoom: 9,
    zoomControl: false,
    scrollWheelZoom: false
  });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    keepBuffer: 8,
    updateWhenIdle: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO'
  }).addTo(crowdMapInstance);
  L.control.zoom({ position: "bottomleft" }).addTo(crowdMapInstance);
  return true;
}

function normalizeCrowdResult(place, response) {
  const rawItems = response?.contents?.rltm;
  const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];
  const selected = items.find(item => Number(item.type) === 1) || items.find(item => Number(item.type) === 2);
  if (!selected) return { ...place, available: false, level: 0 };
  const congestion = Number(selected.congestion);
  return {
    ...place,
    available: Number.isFinite(congestion),
    type: Number(selected.type),
    level: Math.min(4, Math.max(1, Number(selected.congestionLevel) || 1)),
    congestion,
    peoplePer100: congestion * 100,
    datetime: selected.datetime || "",
    poiName: response?.contents?.poiName || place.name
  };
}

async function fetchJson(url, appKey) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(url, { headers: { Accept: "application/json", appKey }, signal: controller.signal });
    if (!response.ok) {
      const error = new Error(`TMAP API ${response.status}`);
      error.status = response.status;
      throw error;
    }
    return response.json();
  } finally {
    window.clearTimeout(timer);
  }
}

async function fetchPlaceCrowd(place, appKey) {
  if (!place.poiId) return { ...place, available: false, level: 0, supported: false };
  try {
    const crowdUrl = `https://apis.openapi.sk.com/puzzle/place/congestion/rltm/pois/${encodeURIComponent(place.poiId)}?lat=${place.lat}&lng=${place.lng}`;
    const response = await fetchJson(crowdUrl, appKey);
    return normalizeCrowdResult({ ...place, supported: true }, response);
  } catch (error) {
    if (error.status === 404) return { ...place, available: false, level: 0, supported: true };
    throw error;
  }
}

function normalizePlaceName(value = "") {
  return value.toLowerCase().replace(/제주특별자치도|제주도|제주/g, "").replace(/[^0-9a-z가-힣]/g, "");
}

function matchSupportedPlaces(places, supportedPois) {
  return places.map(place => {
    const target = normalizePlaceName(place.keyword || place.name);
    const matched = supportedPois.find(poi => {
      const candidate = normalizePlaceName(poi.poiName);
      return candidate === target || (candidate.length >= 4 && (candidate.includes(target) || target.includes(candidate)));
    });
    return matched ? { ...place, poiId: String(matched.poiId), supported: true } : { ...place, supported: false };
  });
}

function readStoredJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

async function resolveSupportedPlaces(appKey) {
  const cached = readStoredJson(crowdPoiStorage);
  let pois = cached?.pois;
  if (!Array.isArray(pois) || Date.now() - cached.updatedAt > crowdPoiCacheDuration) {
    const response = await fetchJson("https://apis.openapi.sk.com/puzzle/place/meta/pois?offset=0&limit=1000", appKey);
    pois = Array.isArray(response?.contents) ? response.contents : [];
    localStorage.setItem(crowdPoiStorage, JSON.stringify({ updatedAt: Date.now(), pois }));
  }
  return matchSupportedPlaces(crowdPlaces, pois);
}

function currentCrowdMonth() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function readCrowdUsage() {
  const usage = readStoredJson(crowdUsageStorage);
  return usage?.month === currentCrowdMonth() ? usage : { month: currentCrowdMonth(), refreshes: 0 };
}

function saveCrowdUsage(refreshes) {
  localStorage.setItem(crowdUsageStorage, JSON.stringify({ month: currentCrowdMonth(), refreshes }));
}

async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      try {
        results[index] = await worker(items[index], index);
      } catch (error) {
        results[index] = { ...items[index], available: false, level: 0, error: error.message, status: error.status };
      }
    }
  }
  await Promise.all(Array.from({ length: limit }, run));
  return results;
}

function crowdMarkerIcon(item) {
  const meta = crowdLevelMeta[item.level || 0];
  const value = item.available ? Math.max(1, Math.round(item.peoplePer100)) : "·";
  return L.divIcon({
    className: "crowd-marker-shell",
    html: `<div class="crowd-marker ${meta.className}"><strong>${value}</strong><span>${meta.label}</span></div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -25]
  });
}

function crowdClusterIcon(cluster) {
  const children = cluster.getAllChildMarkers();
  const levels = children.map(marker => marker._crowdPlace?.level || 0);
  const available = levels.filter(Boolean);
  const maxLevel = available.length ? Math.max(...available) : 0;
  const meta = crowdLevelMeta[maxLevel];
  const size = children.length >= 10 ? 52 : 46;
  return L.divIcon({
    className: "crowd-cluster-shell",
    html: `<div class="crowd-cluster ${meta.className}" style="width:${size}px;height:${size}px"><strong>${children.length}</strong><span>${available.length ? "곳" : "아직"}</span></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}

function formatCrowdTime(value) {
  if (!value || value.length < 12) return "아직 안 봤어";
  return `${value.slice(8, 10)}:${value.slice(10, 12)} 기준`;
}

function renderCrowdMap() {
  if (!ensureCrowdMap()) return;
  if (crowdClusterLayer) crowdMapInstance.removeLayer(crowdClusterLayer);
  crowdMarkers.clear();
  crowdClusterLayer = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 52,
    spiderfyOnMaxZoom: true,
    iconCreateFunction: crowdClusterIcon
  });
  const source = (crowdResults.length ? crowdResults : crowdPlaces)
    .filter(item => crowdActiveRegion === "all" || item.region === crowdActiveRegion);
  const bounds = [];
  source.forEach(item => {
    const meta = crowdLevelMeta[item.level || 0];
    const detail = item.available
      ? `${item.peoplePer100.toFixed(1)}명 / 100㎡ · ${formatCrowdTime(item.datetime)}`
      : "여기는 아직 실시간 데이터가 없어.";
    const marker = L.marker([item.lat, item.lng], { icon: crowdMarkerIcon(item), title: `${item.name} ${meta.label}`, keyboard: true });
    marker._crowdPlace = item;
    marker.bindPopup(`<div class="crowd-popup"><small>${meta.label}</small><strong>${escapeHtml(item.name)}</strong><p>${detail}</p><a href="${mapUrl(item.name)}" target="_blank" rel="noreferrer">네이버 지도에서 보기 ↗</a></div>`, { className: "trek-map-popup", maxWidth: 240 });
    crowdClusterLayer.addLayer(marker);
    crowdMarkers.set(item.id, marker);
    bounds.push([item.lat, item.lng]);
  });
  crowdMapInstance.addLayer(crowdClusterLayer);
  const mapBounds = L.latLngBounds(bounds);
  if (mapBounds.isValid()) crowdMapInstance.fitBounds(mapBounds, { padding: [38, 38], maxZoom: 10, animate: false });
}

function renderCrowdRanking() {
  const source = (crowdResults.length ? crowdResults : crowdPlaces)
    .filter(item => crowdActiveRegion === "all" || item.region === crowdActiveRegion)
    .sort((a, b) => (b.level || 0) - (a.level || 0) || (b.congestion || 0) - (a.congestion || 0));
  crowdDom("#crowdRankingList").innerHTML = source.map((item, index) => {
    const meta = crowdLevelMeta[item.level || 0];
    const density = item.available ? `${item.peoplePer100.toFixed(1)}명 / 100㎡` : "아직 몰라";
    return `<li><button type="button" data-crowd-place="${item.id}"><span class="crowd-rank">${String(index + 1).padStart(2, "0")}</span><div><strong>${escapeHtml(item.name)}</strong><small>${density}</small></div><em class="${meta.className}">${meta.label}</em></button></li>`;
  }).join("");
  crowdDom("#crowdRankingList").querySelectorAll("[data-crowd-place]").forEach(button => {
    button.addEventListener("click", () => {
      const item = source.find(place => place.id === button.dataset.crowdPlace);
      if (!item) return;
      crowdMapInstance.setView([item.lat, item.lng], 13, { animate: true });
      crowdMarkers.get(item.id)?.openPopup();
    });
  });
}

function renderCrowdSummary(updatedAt = 0) {
  const available = crowdResults.filter(item => item.available);
  const quietest = [...available].sort((a, b) => a.congestion - b.congestion)[0];
  const busiest = [...available].sort((a, b) => b.congestion - a.congestion)[0];
  crowdDom("#crowdQuietest").textContent = quietest?.name || "아직 연결 전";
  crowdDom("#crowdQuietestDetail").textContent = quietest ? `${crowdLevelMeta[quietest.level].label} · ${quietest.peoplePer100.toFixed(1)}명 / 100㎡` : "연결하면 알려줄게";
  crowdDom("#crowdBusiest").textContent = busiest?.name || "아직 연결 전";
  crowdDom("#crowdBusiestDetail").textContent = busiest ? `${crowdLevelMeta[busiest.level].label} · ${busiest.peoplePer100.toFixed(1)}명 / 100㎡` : "연결하면 알려줄게";
  crowdDom("#crowdCoverage").textContent = `${available.length} / ${crowdPlaces.length}`;
  crowdDom("#crowdUpdated").textContent = updatedAt ? new Date(updatedAt).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }) : "아직 없음";
}

function renderCrowdAll(updatedAt = 0) {
  renderCrowdMap();
  renderCrowdRanking();
  renderCrowdSummary(updatedAt);
  window.setTimeout(() => crowdMapInstance?.invalidateSize(), 30);
}

function readCrowdCache() {
  const cached = readStoredJson(crowdCacheStorage);
  if (!cached?.updatedAt || !Array.isArray(cached.results)) return null;
  return { ...cached, stale: Date.now() - cached.updatedAt > crowdCacheDuration };
}

function updateRefreshAvailability(updatedAt) {
  const button = crowdDom("#crowdRefreshButton");
  const remaining = Math.max(0, crowdCacheDuration - (Date.now() - updatedAt));
  const usage = readCrowdUsage();
  const refreshesLeft = Math.max(0, crowdMonthlyRefreshLimit - usage.refreshes);
  button.disabled = remaining > 0 || refreshesLeft === 0;
  button.innerHTML = remaining > 0
    ? `<span>✓</span> ${Math.ceil(remaining / 3600000)}시간 뒤에 다시 보자`
    : refreshesLeft
      ? `<span>↻</span> 다시 보기 · 이번 달 ${refreshesLeft}번 남음`
      : "<span>✓</span> 이번 달은 여기까지";
}

async function loadCrowdData({ force = false } = {}) {
  if (crowdLoading) return;
  const appKey = getCrowdAppKey();
  if (!appKey) {
    crowdDom("#crowdConnectPanel").hidden = false;
    setCrowdStatus("idle", "아직 연결 전");
    renderCrowdAll();
    return;
  }
  const cached = readCrowdCache();
  if (cached && !force) {
    crowdResults = cached.results;
    crowdDom("#crowdConnectPanel").hidden = true;
    setCrowdStatus(cached.stale ? "warning" : "live", cached.stale ? "아까 본 결과" : "지금 연결 중");
    crowdDom("#crowdRankingCaption").textContent = cached.stale ? "아까 본 결과야. 궁금할 때 다시 보자." : "북적이는 순서야. 장소를 누르면 지도에서 바로 볼 수 있어.";
    renderCrowdAll(cached.updatedAt);
    updateRefreshAvailability(cached.updatedAt);
    return;
  }
  const usage = readCrowdUsage();
  if (usage.refreshes >= crowdMonthlyRefreshLimit) {
    setCrowdStatus("warning", "무료 조회 아끼는 중");
    crowdDom("#crowdConnectPanel").hidden = true;
    if (cached) {
      crowdResults = cached.results;
      renderCrowdAll(cached.updatedAt);
    }
    updateRefreshAvailability(cached?.updatedAt || 0);
    return;
  }
  crowdLoading = true;
  const button = crowdDom("#crowdRefreshButton");
  button.disabled = true;
  button.innerHTML = `<span class="spin">↻</span> ${crowdPlacesPerRefresh}곳 살펴보는 중`;
  setCrowdStatus("loading", "살펴보는 중");
  crowdDom("#crowdConnectPanel").hidden = true;
  try {
    const resolvedPlaces = await resolveSupportedPlaces(appKey);
    const livePlaces = resolvedPlaces.filter(place => place.supported).slice(0, crowdPlacesPerRefresh);
    if (!livePlaces.length) throw new Error("TMAP에서 볼 수 있는 장소를 못 찾았어.");
    saveCrowdUsage(usage.refreshes + 1);
    const liveResults = await mapWithConcurrency(livePlaces, crowdPlacesPerRefresh, place => fetchPlaceCrowd(place, appKey));
    const liveById = new Map(liveResults.map(place => [place.id, place]));
    const results = resolvedPlaces.map(place => liveById.get(place.id) || { ...place, available: false, level: 0 });
    const authFailure = results.find(item => item.status === 401 || item.status === 403);
    if (authFailure) throw Object.assign(new Error("AppKey가 맞지 않는 것 같아."), { authFailure: true });
    const requestFailure = results.find(item => item.status === 429 || item.status >= 500);
    const allRequestsFailed = results.every(item => item.error);
    if (requestFailure || allRequestsFailed) throw new Error(requestFailure?.status === 429 ? "오늘 무료 조회를 다 썼는지 확인해보자." : "TMAP이 잠깐 대답을 안 해.");
    crowdResults = results;
    const updatedAt = Date.now();
    localStorage.setItem(crowdCacheStorage, JSON.stringify({ updatedAt, results }));
    const count = results.filter(item => item.available).length;
    setCrowdStatus(count ? "live" : "warning", count ? "지금 연결 중" : "볼 수 있는 곳 없음");
    crowdDom("#crowdRankingCaption").textContent = count ? "북적이는 순서야. 장소를 누르면 지도에서 바로 볼 수 있어." : "TMAP에서 혼잡도를 보여주는 곳을 못 찾았어.";
    renderCrowdAll(updatedAt);
    updateRefreshAvailability(updatedAt);
  } catch (error) {
    setCrowdStatus("error", "연결이 삐끗했어");
    crowdDom("#crowdConnectPanel").hidden = false;
    crowdDom("#crowdConnectPanel p").textContent = error.authFailure ? "AppKey가 맞는지랑 TMAP PUZZLE 사용 설정을 확인해보자." : "TMAP 데이터를 못 불러왔어. 인터넷이랑 API 설정을 보고 다시 연결해보자.";
    button.disabled = false;
    button.innerHTML = "<span>↻</span> 다시 해볼래";
  } finally {
    crowdLoading = false;
  }
}

function initializeCrowdControls() {
  crowdDom("#crowdKeyForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = crowdDom("#crowdKeyInput");
    const value = input.value.trim();
    if (value.length < 10) {
      input.setCustomValidity("TMAP AppKey를 한 번 더 확인해줘.");
      input.reportValidity();
      return;
    }
    input.setCustomValidity("");
    localStorage.setItem(crowdKeyStorage, value);
    localStorage.removeItem(crowdCacheStorage);
    input.value = "";
    loadCrowdData({ force: true });
  });
  crowdDom("#crowdKeySettings").addEventListener("click", () => {
    crowdDom("#crowdConnectPanel").hidden = false;
    crowdDom("#crowdKeyInput").focus();
  });
  crowdDom("#crowdRefreshButton").addEventListener("click", () => loadCrowdData({ force: true }));
  document.querySelectorAll("[data-crowd-region]").forEach(button => {
    button.addEventListener("click", () => {
      crowdActiveRegion = button.dataset.crowdRegion;
      document.querySelectorAll("[data-crowd-region]").forEach(item => item.classList.toggle("active", item === button));
      renderCrowdMap();
      renderCrowdRanking();
    });
  });
}

let crowdInitialized = false;
function showCrowdMap() {
  if (!crowdInitialized) {
    crowdInitialized = true;
    initializeCrowdControls();
    ensureCrowdMap();
    const cached = readCrowdCache();
    if (cached) {
      crowdResults = cached.results;
      renderCrowdAll(cached.updatedAt);
      updateRefreshAvailability(cached.updatedAt);
    } else {
      renderCrowdAll();
    }
    loadCrowdData();
  } else {
    renderCrowdMap();
  }
  window.setTimeout(() => crowdMapInstance?.invalidateSize(), 50);
}

if (typeof window !== "undefined") window.showCrowdMap = showCrowdMap;

if (typeof module !== "undefined") {
  module.exports = { crowdLevelMeta, normalizeCrowdResult, normalizePlaceName, matchSupportedPlaces, mapWithConcurrency, formatCrowdTime };
}

if (typeof document !== "undefined" && !crowdDom('[data-tab-panel="crowd"]')?.hidden) showCrowdMap();
