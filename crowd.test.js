const test = require("node:test");
const assert = require("node:assert/strict");
const { normalizeCrowdResult, normalizePlaceName, matchSupportedPlaces, mapWithConcurrency, formatCrowdTime } = require("./crowd.js");

const place = { id: "fixture", name: "테스트 장소", region: "east", lat: 33.4, lng: 126.8 };

test("장소 혼잡도가 있으면 주변 혼잡도보다 우선한다", () => {
  const result = normalizeCrowdResult(place, {
    contents: {
      poiName: "테스트 장소",
      rltm: [
        { type: 2, congestion: 0.26231, congestionLevel: 3, datetime: "20260811150000" },
        { type: 1, congestion: 0.03126, congestionLevel: 2, datetime: "20260811150500" }
      ]
    }
  });

  assert.equal(result.type, 1);
  assert.equal(result.level, 2);
  assert.ok(Math.abs(result.peoplePer100 - 3.126) < 1e-9);
  assert.equal(result.datetime, "20260811150500");
});

test("장소 혼잡도가 없으면 주변 혼잡도를 사용한다", () => {
  const result = normalizeCrowdResult(place, {
    contents: { rltm: [{ type: 2, congestion: 0.075, congestionLevel: 3, datetime: "20260811151000" }] }
  });

  assert.equal(result.available, true);
  assert.equal(result.type, 2);
  assert.equal(result.level, 3);
  assert.equal(result.peoplePer100, 7.5);
});

test("혼잡도 응답이 없으면 조회 불가 상태가 된다", () => {
  const result = normalizeCrowdResult(place, { contents: { rltm: [] } });

  assert.equal(result.available, false);
  assert.equal(result.level, 0);
});

test("동시 조회 결과는 입력 순서를 유지하고 개별 실패를 격리한다", async () => {
  const results = await mapWithConcurrency(
    [{ id: "a" }, { id: "b" }, { id: "c" }],
    2,
    async item => {
      if (item.id === "b") throw Object.assign(new Error("인증 실패"), { status: 403 });
      return { ...item, available: true };
    }
  );

  assert.deepEqual(results.map(item => item.id), ["a", "b", "c"]);
  assert.equal(results[1].status, 403);
  assert.equal(results[2].available, true);
});

test("TMAP 시각 문자열을 여행 중 읽기 쉬운 형식으로 바꾼다", () => {
  assert.equal(formatCrowdTime("20260811152730"), "15:27 기준");
  assert.equal(formatCrowdTime(""), "조회 시각 없음");
});

test("장소 이름의 제주 표기와 공백을 제거해 비교한다", () => {
  assert.equal(normalizePlaceName("아쿠아플라넷 제주"), "아쿠아플라넷");
  assert.equal(normalizePlaceName("제주 아쿠아 플라넷"), "아쿠아플라넷");
});

test("혼잡도 제공 장소 목록의 POI ID를 여행 장소에 연결한다", () => {
  const places = [{ id: "aqua", name: "아쿠아플라넷 제주", keyword: "아쿠아플라넷 제주" }, { id: "forest", name: "사려니숲길" }];
  const matched = matchSupportedPlaces(places, [{ poiId: 1234567, poiName: "제주아쿠아플라넷" }]);

  assert.equal(matched[0].poiId, "1234567");
  assert.equal(matched[0].supported, true);
  assert.equal(matched[1].supported, false);
});
