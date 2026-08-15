const lodging = {
  name: "삼달리 숙소",
  query: "제주특별자치도 서귀포시 성산읍 삼달하동로32번길 2-1"
};

const planAItinerary = {
  1: {
    note: "15시 15분 제주 도착. 렌트카는 15시 40분부터 인수하고 뒤 일정은 대기시간보고 결정하기!",
    items: [
      { time: "15:15", name: "제주공항 도착", category: "노랑양말 픽", description: "제주에는 15시 15분 도착이야. 짐 찾고 15시 40분부터 렌트카 받으면 돼!", meta: ["제주 도착 15:15", "렌터카 인수 15:40부터"], query: "제주국제공항" },
      { time: "16:10", name: "아베베 베이커리 제주점", category: "노랑양말 픽 간식", description: "동문시장 근처에서 빵 포장하는 첫 코스야.", meta: ["이동 15분", "주차랑 대기 생각하기"], query: "아베베베이커리 제주" },
      { time: "16:50", name: "우동 카덴", category: "노랑양말 픽 식사", description: "17시가 마지막 주문이라 차 받고 바로 가도 좀 빠듯할듯ㅜㅜ", meta: ["17시 마지막 주문", "대기 길면 바로 빼기"], query: "우동 카덴 제주", alert: true },
      { time: "17:30", name: "제동목장 입구", category: "노랑양말 픽 풍경", description: "목장차 지나가는 길은 막지 말고 입구에서 짧게 보기!", meta: ["이동 6분", "목장 안에는 들어가지 말기"], query: "제주시 조천읍 교래7길 218" },
      { time: "18:10", name: "안친오름", category: "노랑양말 픽 자연", description: "사유지 들어가도 되는지랑 일몰 시간은 한번 보고 가야할듯.", meta: ["입장료 1인 5,000원", "해 남았을 때만"], query: "안친오름 제주", alert: true },
      { time: "18:50", name: "픽업커피 행원점", category: "노랑양말 픽 카페", description: "18시까지라 실제 도착 시간에는 못갈것 같아.", meta: ["18시까지", "시간 안 맞음"], query: "픽업커피 행원점 제주", alert: true },
      { time: "19:50", name: lodging.name, category: "노랑양말 픽 숙소", description: "중간에 숙소 들르는 일정이야. 우리가 묵는 주소로 연결해놨어.", meta: ["2박 같은 숙소", "삼달하동로32번길 2-1"], query: lodging.query },
      { time: "20:20", name: "고래휴게소 표선점", category: "노랑양말 픽 저녁", description: "표선쪽에서 저녁 먹는 곳이야.", meta: ["차 타고 이동", "당일 영업 한번 보기"], query: "고래휴게소 표선점" },
      { time: "21:10", name: "책게일주", category: "노랑양말 픽 후보", description: "노랑양말이 적어둔 이름 그대로 옮겼는데 정확한 장소는 못찾았어.", meta: ["덕산리 469", "상호 한번 더 보기"], query: "책게일주 제주 덕산리 469", map: false, link: false, alert: true },
      { time: "21:40", name: "사부작", category: "노랑양말 픽 예약", description: "예약제 식당이라 시간하고 영업일 맞는지 먼저 확인하기!", meta: ["예약 가능", "노랑양말 픽"], query: "사부작 제주 표선" },
      { time: "22:20", name: lodging.name, category: "노랑양말 픽 끝", description: "삼달리 숙소로 돌아와서 첫날 마무리하기!", meta: ["2박 모두 같은 숙소", "늦으면 체크인 연락하기"], query: lodging.query }
    ]
  },
  2: {
    note: "노랑양말이 처음 짠건 동쪽이랑 중문이랑 서귀포를 하루에 다 도는 일정이야. 전부 가면 숙소 엄청 늦게 들어갈듯ㅜㅜ 김녕팜랜드 뒤에 동쪽에 더 있을지 중문 갈지 하나만 고르자.",
    items: [
      { time: "10:00", name: "국수마을", category: "아침", description: "노랑양말이 골라둔 둘째날 첫 밥이야.", meta: ["10시 오픈", "주차 30분 무료"], query: "국수마을 제주" },
      { time: "11:00", name: "여름문구사", category: "소품", description: "세화 작은 문구점에서 제주 기념품 구경하기!", meta: ["주차 공간 확인", "당일 영업 확인"], query: "여름문구사 제주" },
      { time: "11:45", name: "픽업커피 행원점", category: "카페", description: "행원 바다 보면서 잠깐 쉬자.", meta: ["노랑양말 픽", "영업시간 한번 보기"], query: "픽업커피 행원점 제주" },
      { time: "12:30", name: "코난해변", category: "바다", description: "바람 많이 안불면 바다 30분만 보고 이동하기!", meta: ["해안 산책 30분", "강풍 시 생략"], query: "코난해변 제주" },
      { time: "13:20", name: "카페 모알보알", category: "카페", description: "구좌 바다 보면서 50분 정도 쉬기!", meta: ["주차 가능 표기", "체류 50분 이내"], query: "카페 모알보알 제주" },
      { time: "14:40", name: "김녕팜랜드", category: "체험", description: "동물 먹이주기 체험하기. 늦으면 못할 수도 있으니까 마감시간 먼저 확인!", meta: ["1인 10,000원", "체험 마감 한번 보기"], query: "김녕팜랜드" },
      { time: "16:15", name: "대현목장", category: "목장", description: "들어가도 되는지 보고 잠깐 들르자.", meta: ["노랑양말 픽", "사유지인지 한번 보기"], query: "대현목장 제주" },
      { time: "17:00", name: "봉주르마담", category: "베이커리", description: "인기 빵은 일찍 품절될 수 있으니까 남은 메뉴 먼저 확인하기!", meta: ["품절 가능", "당일 영업 확인"], query: "봉주르마담 제주" },
      { time: "18:30", name: "순천미향", category: "저녁", description: "중문에서 먹는 갈치 저녁.", meta: ["19시까지 표기", "마지막 주문 확인"], query: "순천미향 제주" },
      { time: "19:40", name: "풀베개", category: "카페", description: "비오는 창밖 보기 좋은 카페인데 이 시간에는 늦을것 같아.", meta: ["19시까지", "시간 안 맞을듯"], query: "풀베개 제주", alert: true },
      { time: "20:30", name: "중문회어시장", category: "포장", description: "숙소에서 먹을 회 포장하기!", meta: ["포장 시간 확인", "숙소까지 장거리"], query: "중문회어시장" },
      { time: "21:20", name: "할머니떡집", category: "간식", description: "서귀포 올레시장 안에 있는 떡집.", meta: ["재고 확인", "시장 운영 확인"], query: "서귀포 올레시장 할머니떡집" },
      { time: "22:30", name: lodging.name, category: "고정 숙소", description: "성산읍 삼달리 숙소로 돌아오기!", meta: ["약 50분 이동 예상", "졸음운전 금지"], query: lodging.query }
    ]
  },
  3: {
    note: "렌트카 반납은 11시 50분. 아침은 공항 가는길에 둘 중 하나만 먹고 11시 10분에 주유하기!",
    items: [
      { time: "08:20", name: lodging.name, category: "체크아웃", description: "짐이랑 충전기 확인하고 8시 30분 전까지 출발하기!", meta: ["분리수거 확인", "전 짐 차에 싣기"], query: lodging.query },
      { time: "10:00", name: "공항 근처 아침 식사", category: "선택 아침", description: "우진해장국이나 올래국수 중 대기 짧은 곳으로 결정하기. 10시 50분에는 무조건 나오기!", meta: ["둘 중 한 곳만", "대기 길면 바로 패스"], query: "제주공항 아침 맛집", map: false },
      { time: "11:10", name: "렌터카 주유", category: "꼭 할 것", description: "반납 지점 근처에서 주유하고 영수증이랑 계기판 사진을 남기자.", meta: ["11:30까지 주유 완료", "계기판 사진"], query: "제주공항 주유소" },
      { time: "11:50", name: "렌터카 반납", category: "고정 일정", description: "11시 50분까지 반납하기. 차에 놓고 내린 물건 없는지 마지막으로 확인!", meta: ["시간 변경 금지", "셔틀 타기 전 짐 확인"], query: "제주공항 렌터카하우스" },
      { time: "12:10", name: "제주공항", category: "귀가", description: "셔틀에서 내리면 바로 탑승 수속하고 점심은 남는시간보고 결정하기!", meta: ["탑승 수속", "보안 검색 여유 두기"], query: "제주국제공항" }
    ]
  }
};

const itinerary = {
  1: {
    note: "15시 15분 제주 도착. 렌트카 받고 16시쯤 출발하기! 우동 카덴이랑 목장은 빠듯해서 빼고 숙소랑 저녁 먼저 챙기기.",
    items: [
      { time: "15:15", name: "제주공항 도착", category: "도착", description: "수하물 찾고 예약한 렌터카 셔틀 승차장으로 바로 이동하기!", meta: ["항공편 도착", "수하물 확인"], query: "제주국제공항" },
      { time: "15:40", name: "렌터카 인수", category: "고정 일정", description: "예약 시간부터 차 받고 외관이랑 기름 얼마나 있는지 사진 찍자.", meta: ["인수 15:40부터", "출발 전 사진 찍기"], query: "제주공항 렌터카하우스" },
      { time: "16:10", name: "아베베 베이커리 제주점", category: "선택 간식", description: "대기랑 주차 안길면 빵만 포장하기. 16시 40분 넘으면 바로 숙소로 출발!", meta: ["포장만", "30분 제한"], query: "아베베베이커리 제주" },
      { time: "16:45", name: "삼달리로 이동", category: "이동", description: "해 지기 전에 동쪽 숙소로 이동하기. 교통 상황보고 70분에서 90분 잡기!", meta: ["장거리 첫 운전", "중간 관광 없음"], query: lodging.query, map: false },
      { time: "18:10", name: lodging.name, category: "체크인", description: "성산읍 삼달리 숙소 체크인하고 짐부터 내리기!", meta: ["2박 고정", "삼달하동로32번길 2-1"], query: lodging.query },
      { time: "18:50", name: "성산 저녁 식사", category: "저녁", description: "멀리 가지 말고 성산이나 표선에서 주차 편한 식당 고르기!", meta: ["숙소 근처 우선", "첫날 무리 금지"], query: "제주 삼달리 맛집", map: false }
    ]
  },
  2: {
    note: "삼달리 숙소 기준으로 동쪽 바다 따라서 돌기. 친봉산장은 시간 남으면 가는걸로!",
    items: [
      { time: "09:30", name: "여름문구사", category: "소품", description: "세화 작은 문구점에서 제주 기념품 구경하기!", meta: ["영업 여부 확인", "주차 공간 협소"], query: "여름문구사 제주" },
      { time: "10:30", name: "코난해변", category: "바다", description: "바람 많이 안불면 구좌 바다에서 30분만 쉬기!", meta: ["해안 한 곳만 선택", "갓길 주차 주의"], query: "코난해변 제주" },
      { time: "11:30", name: "김녕팜랜드", category: "체험", description: "동물 먹이주기 체험하고 점심 먹으러 이동하기!", meta: ["운영시간 확인", "체험 약 60분"], query: "김녕팜랜드" },
      { time: "13:00", name: "동쪽 점심 식사", category: "식사", description: "김녕이나 구좌에서 지금 위치랑 가까운 식당 고르기!", meta: ["주차 가능한 식당", "현 위치에서 선택"], query: "제주 김녕 맛집", map: false },
      { time: "15:20", name: "친봉산장", category: "선택 카페", description: "체력 남고 길 안막힐 때만 가기. 피곤하면 성산 카페로 변경!", meta: ["선택 일정", "당일 영업 확인"], query: "친봉산장 제주" },
      { time: "17:40", name: "성산 저녁 식사", category: "저녁", description: "숙소 가까운 성산이나 표선에서 저녁먹기!", meta: ["숙소 근처 우선", "주차 가능한 식당"], query: "제주 삼달리 맛집", map: false },
      { time: "19:30", name: lodging.name, category: "고정 숙소", description: "첫날이랑 같은 삼달리 숙소로 돌아오기!", meta: ["2박 모두 같은 숙소", "다음 날 체크아웃 준비"], query: lodging.query }
    ]
  },
  3: {
    note: "렌트카 반납은 11시 50분. 8시 30분에 숙소에서 출발해서 아침먹고 주유까지 여유있게 하기!",
    items: [
      { time: "08:20", name: "체크아웃", category: "준비", description: "짐 다 싣고 8시 30분 전까지 출발하기!", meta: ["짐 먼저 싣기", "냉장고랑 충전기 확인"], query: lodging.query },
      { time: "10:00", name: "공항 근처 아침 식사", category: "선택 아침", description: "대기 없는 곳에서 가볍게 먹기. 10시 50분되면 바로 출발!", meta: ["대기 길면 패스", "10:50 출발"], query: "제주공항 아침 맛집", map: false },
      { time: "11:10", name: "렌터카 주유", category: "꼭 할 것", description: "반납 지점 근처에서 주유하고 계기판 사진 남기기!", meta: ["11:30까지 완료", "영수증 챙기기"], query: "제주공항 주유소" },
      { time: "11:50", name: "렌터카 반납", category: "고정 일정", description: "11시 50분까지 반납하기. 차 안에 두고 내린 물건 없는지 마지막으로 확인!", meta: ["시간 변경 금지", "셔틀 탑승"], query: "제주공항 렌터카하우스" },
      { time: "12:10", name: "제주공항", category: "귀가", description: "셔틀에서 내리면 바로 탑승 수속하고 점심은 남는시간보고 결정하기!", meta: ["탑승 수속", "보안 검색"], query: "제주국제공항" }
    ]
  }
};

const recommendations = [
  { region: "east", name: "산굼부리", tags: ["1일차", "숲과 오름"], time: "약 50분", detour: "우동 카덴 근처", description: "큰 오르막 없이 분화구 풍경을 볼 수 있습니다. 첫날 시간이 1시간 정도 남을 때 들릅니다.", query: "산굼부리", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500283&menuId=DOM_000001703010008000" },
  { region: "east", name: "제주돌문화공원", tags: ["1일차", "비 오는 날"], time: "1시간 이상", detour: "교래 동선", description: "제주의 돌과 설문대할망 이야기를 다루는 공원입니다. 야외 구간이 넓고 월요일 휴관 여부를 확인해야 합니다.", query: "제주돌문화공원", source: "https://www.visitjeju.net/kr/search?q=%EB%8F%8C%EB%AC%B8%ED%99%94%EA%B3%B5%EC%9B%90&searchtype=2" },
  { region: "east", name: "세화해변", tags: ["2일차", "바다"], time: "20분", detour: "여름문구사 근처", description: "여름문구사에서 가까운 작은 해변입니다. 오래 머물기보다 짧게 걷거나 사진을 찍을 때 맞습니다.", query: "세화해변", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500361&menuId=DOM_000001718002000000" },
  { region: "east", name: "별방진", tags: ["2일차", "짧은 산책"], time: "20분", detour: "세화에서 약 10분", description: "낮은 성곽 위에서 바다와 마을이 함께 보입니다. 동쪽 해안을 이동하다 20분 정도 들를 수 있습니다.", query: "별방진 제주", source: "https://www.visitjeju.net/kr/search?q=%EC%84%B1%EA%B3%BD&searchtype=2" },
  { region: "east", name: "월정리해변", tags: ["2일차", "카페와 바다"], time: "30분", detour: "코난해변 동선", description: "김녕과 세화 사이에서 카페에 들러 쉬기 편합니다. 코난해변과 가까우므로 둘 중 한 곳만 고릅니다.", query: "월정리해변", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500496&menuId=DOM_000001719001000000" },
  { region: "east", name: "김녕성세기해변", tags: ["2일차", "바다"], time: "30분", detour: "김녕팜랜드 근처", description: "김녕 일정 앞뒤로 들를 수 있는 해변입니다. 이동 피로를 줄이려면 해변은 한 곳만 고릅니다.", query: "김녕성세기해변", source: "https://www.visitjeju.net/kr/search?q=%EA%B9%80%EB%85%95%EC%84%B1%EC%84%B8%EA%B8%B0%ED%95%B4%EB%B3%80&searchtype=2" },
  { region: "east", name: "섭섭이네", tags: ["구좌", "로컬 식당"], time: "60분", detour: "송당리 1379-13", description: "송당에 있는 로컬 식당입니다. 비밀의숲을 방문하는 날 식사 장소로 잡을 수 있습니다.", query: "제주 제주시 구좌읍 송당리 1379-13 섭섭이네" },
  { region: "east", name: "비밀의숲", tags: ["구좌", "삼나무 숲길"], time: "60분", detour: "송당리 2173", description: "곧게 뻗은 삼나무 사이로 걷는 숲길입니다. 비가 강하거나 바람이 센 날에는 들어가지 않습니다.", query: "제주 제주시 구좌읍 송당리 2173 비밀의숲" },
  { region: "east", name: "차한모금", tags: ["구좌", "숲속 카페"], time: "60분", detour: "평대리 3193-1", description: "빙수와 차를 파는 숲속 카페입니다. 비자림이나 평대리 일정 사이에 한 시간 정도 잡습니다.", query: "제주 제주시 구좌읍 평대리 3193-1 차한모금" },
  { region: "east", name: "섭지코지", tags: ["성산", "해안 산책"], time: "60분", detour: "성산읍 고성리", description: "초원과 바다를 함께 보는 해안 산책로입니다. 강풍이나 호우가 있으면 방문하지 않습니다.", query: "제주 서귀포시 성산읍 고성리 섭지코지", source: "https://www.visitjeju.net/kr/search?q=%EC%84%AD%EC%A7%80%EC%BD%94%EC%A7%80&searchtype=2" },
  { region: "east", name: "온평바다한그릇", tags: ["성산", "해산물 식당"], time: "60분", detour: "온평리 1192-1", description: "성게와 전복과 딱새우를 한 그릇에 담아내는 식당입니다. 삼달리 숙소에서 가까워 저녁 장소로 검토할 수 있습니다.", query: "제주 서귀포시 성산읍 온평리 1192-1 온평바다한그릇" },
  { region: "east", name: "카페구할구", tags: ["월정리", "카페"], time: "50분", detour: "월정리 514", description: "월정리 골목에 있는 작은 카페입니다. 월정리해변이나 코난해변을 방문하는 날 들를 수 있습니다.", query: "제주 제주시 구좌읍 월정리 514 카페구할구" },
  { region: "east", name: "코난해변", tags: ["구좌", "사진"], time: "30분", detour: "행원리 575-6", description: "물빛 때문에 코난해변이라는 이름으로 알려진 곳입니다. 월정리해변과 가까우므로 둘 중 한 곳만 고릅니다.", query: "제주 제주시 구좌읍 행원리 575-6 코난해변" },
  { region: "east", name: "여름문구사", tags: ["세화", "문구와 소품"], time: "40분", detour: "세화리 1397-6", description: "제주 관련 문구와 소품을 파는 작은 가게입니다. 세화해변에서 걸어갈 수 있는지 지도에서 확인하세요.", query: "제주 제주시 구좌읍 세화리 1397-6 여름문구사" },
  { region: "south", name: "약천사", tags: ["2일차", "조용한 쉼"], time: "30분", detour: "봉주르마담 근처", description: "큰 법당과 바다 전망이 있는 사찰입니다. 중문으로 넘어가기 전 30분 정도 들릅니다.", query: "약천사 제주", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_000000000018300&menuId=DOM_000001718003000000" },
  { region: "south", name: "대포 주상절리", tags: ["2일차", "해안 지형"], time: "40분", detour: "중문 동선", description: "중문 동선에서 주상절리 해안을 볼 수 있습니다. 강풍이나 호우 때는 제외합니다.", query: "대포 주상절리", source: "https://www.visitjeju.net/kr/themtour/view?contentsid=CNTS_200000000013146&menuId=DOM_000002000000000221" },
  { region: "airport", name: "도두봉", tags: ["3일차", "공항 근처"], time: "40분", detour: "공항에서 가까움", description: "비행 전 시간이 충분할 때만 방문합니다. 정상까지 약 15분이고 공항과 바다가 보입니다.", query: "도두봉", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_200000000012346" }
];

const rainItineraryA = {
  1: {
    note: "첫날은 공항 근처 팝업만 짧게 보고 삼달리 숙소로 바로 이동하기. 비가 세거나 차가 늦게 나오면 팝업도 빼자!",
    items: [
      { time: "15:15", name: "제주공항 도착", category: "도착", description: "수하물 찾고 렌터카 셔틀 승차장으로 바로 이동하기!", meta: ["우산 바로 꺼내기", "수하물 확인"], query: "제주국제공항" },
      { time: "15:40", name: "렌터카 인수", category: "고정 일정", description: "차 사진찍고 와이퍼랑 타이어까지 확인하기!", meta: ["인수 15:40부터", "빗길 운전 준비"], query: "제주공항 렌터카하우스" },
      { time: "16:20", name: "Jeju Archive Store", category: "선택 팝업", description: "비가 많이 안오고 주차가 괜찮을 때만 40분 구경하기!", meta: ["8월 31일까지", "11:30부터 19:30", "늦으면 바로 패스"], query: "제주특별자치도 제주시 탑동로2길 7" },
      { time: "17:10", name: "삼달리로 이동", category: "빗길 이동", description: "도로 통제 확인하고 숙소로 바로 이동하기. 중간 관광은 넣지 말자!", meta: ["70분에서 90분", "중간 관광 없음"], query: lodging.query, map: false },
      { time: "18:30", name: lodging.name, category: "체크인", description: "숙소 체크인하고 젖은 옷이랑 신발부터 말리기!", meta: ["2박 모두 같은 숙소", "삼달하동로32번길 2-1"], query: lodging.query },
      { time: "19:00", name: "성산이나 온평리 저녁", category: "저녁", description: "숙소에서 멀리 가지 말고 주차 편한 식당에서 따뜻한거 먹기!", meta: ["숙소 근처 우선", "당일 영업 확인"], query: "제주 삼달리 맛집", map: false }
    ]
  },
  2: {
    note: "A 코스는 보슬비일 때 가는 동쪽 실내 코스야. 천둥이 치거나 비가 세지면 두모악과 오른을 빼고 B 코스로 바꾸자!",
    items: [
      { time: "09:20", name: lodging.name, category: "A 코스 출발", description: "강수 레이더를 보고 비가 보슬보슬 내릴 때 출발하기!", meta: ["두모악부터 시작", "천둥이면 B 코스로"], query: lodging.query },
      { time: "09:30", name: "김영갑갤러리 두모악", category: "사진 전시", description: "숙소 가까운 갤러리에서 비오는 제주 사진을 천천히 보기!", meta: ["수요일 휴관", "약 45분", "정원은 미끄럼 주의"], query: "김영갑갤러리 두모악" },
      { time: "10:40", name: "아쿠아플라넷 제주", category: "실내 관람", description: "10시 50분 공연부터 보고 수족관까지 여유롭게 둘러보기!", meta: ["연중무휴", "약 2시간 20분", "공연 시간 재확인"], query: "제주 아쿠아플라넷" },
      { time: "13:30", name: "성산 고성리 점심", category: "점심", description: "아쿠아플라넷에서 빛의 벙커로 가는 길에 주차 편한 식당 고르기!", meta: ["한 시간 안에", "대기 길면 푸드코트"], query: "제주 성산 고성리 맛집", map: false },
      { time: "15:00", name: "빛의 벙커", category: "실내 전시", description: "반 고흐와 고갱 미디어아트를 15시 회차로 보기!", meta: ["약 50분", "온라인 예매 권장", "입장 시간 재확인"], query: "빛의 벙커 제주" },
      { time: "16:10", name: "오른", category: "실내 카페", description: "창가에서 비오는 성산 바다 보면서 한 시간 쉬기!", meta: ["월요일 방문 가능", "당일 영업 확인", "약 70분"], query: "제주 오른" },
      { time: "18:00", name: "성산이나 온평리 저녁", category: "저녁", description: "숙소 방향으로 내려오면서 주차 편한 식당에서 저녁 먹기!", meta: ["숙소 방향", "당일 영업 확인"], query: "제주 온평리 맛집", map: false },
      { time: "19:30", name: lodging.name, category: "고정 숙소", description: "삼달리 숙소로 돌아와서 젖은 짐 정리하기!", meta: ["2박 모두 같은 숙소", "다음 날 체크아웃 준비"], query: lodging.query }
    ]
  },
  3: {
    note: "렌터카 반납은 11시 50분 고정이야. 비가 오면 아침 식사도 대기가 길 경우 바로 빼자!",
    items: [
      { time: "08:10", name: "체크아웃과 운항 확인", category: "준비", description: "젖은 짐 나눠 담고 도로 통제 확인하기!", meta: ["비닐봉투 준비", "8시 20분 출발"], query: lodging.query },
      { time: "08:20", name: "제주공항으로 이동", category: "빗길 이동", description: "중간 관광은 넣지 말고 공항 방향으로 바로 이동하기!", meta: ["70분에서 90분", "도로 통제 확인"], query: "제주국제공항", map: false },
      { time: "09:50", name: "공항 근처 아침 식사", category: "선택 아침", description: "비 많이오면 아침은 빼고 공항으로 바로 이동하기!", meta: ["호우면 바로 패스", "10:40 출발"], query: "제주공항 아침 맛집", map: false },
      { time: "11:00", name: "렌터카 주유", category: "꼭 할 것", description: "빗길 생각해서 조금 일찍 주유하고 계기판 사진 남기기!", meta: ["11:25까지 완료", "영수증 챙기기"], query: "제주공항 주유소" },
      { time: "11:50", name: "렌터카 반납", category: "고정 일정", description: "비가 와도 제주공항 렌터카 반납은 11시 50분 고정이야.", meta: ["시간 변경 금지", "젖은 짐 확인"], query: "제주공항 렌터카하우스" },
      { time: "12:10", name: "제주공항", category: "귀가", description: "셔틀에서 내리면 바로 탑승 수속하고 젖은 짐 정리하기!", meta: ["탑승 수속", "보안 검색"], query: "제주국제공항" }
    ]
  }
};

const rainItineraryB = {
  ...rainItineraryA,
  2: {
    note: "B 코스는 비가 왕창 오거나 천둥이 칠 때 가는 완전 실내 코스야. 도로 통제가 있으면 빛의 벙커도 빼고 숙소로 돌아가자!",
    items: [
      { time: "09:20", name: lodging.name, category: "B 코스 출발", description: "강수 레이더와 도로 통제를 확인하고 천천히 출발하기!", meta: ["호우 코스", "와이퍼와 타이어 확인"], query: lodging.query },
      { time: "09:40", name: "아쿠아플라넷 제주", category: "완전 실내", description: "주차한 뒤 한 건물에서 공연과 수족관을 여유롭게 보기!", meta: ["연중무휴", "약 2시간 50분", "공연 시간 재확인"], query: "제주 아쿠아플라넷" },
      { time: "12:40", name: "아쿠아플라넷 푸드코트", category: "실내 점심", description: "비를 다시 맞지 않도록 건물 안에서 바로 점심 먹기!", meta: ["이동 최소화", "대기 짧은 메뉴"], query: "제주 아쿠아플라넷", map: false },
      { time: "14:10", name: "빛의 벙커", category: "완전 실내", description: "주차장에서 바로 이동해서 반 고흐와 고갱 전시 보기!", meta: ["약 50분", "온라인 예매 권장", "도로 통제면 생략"], query: "빛의 벙커 제주" },
      { time: "15:30", name: "성산 저녁 포장", category: "선택 포장", description: "숙소에서 먹을 저녁이 필요할 때만 주차 편한 곳에서 포장하기!", meta: ["차에서 주문 확인", "비 세면 배달로 변경"], query: "제주 성산 포장 맛집", map: false },
      { time: "16:30", name: lodging.name, category: "일찍 복귀", description: "더 돌아다니지 말고 삼달리 숙소에서 쉬기!", meta: ["젖은 짐 정리", "도로 통제 전 복귀"], query: lodging.query }
    ]
  }
};

const rainItineraries = { a: rainItineraryA, b: rainItineraryB };

const rainRecommendations = [
  { region: "airport", name: "Jeju Archive Store", tags: ["8월 기간 한정", "완전 실내"], time: "50분", detour: "탑동로2길 7", description: "7월 31일부터 8월 31일까지 열리는 스투시 공식 아카이브 스토어예요. 제주 익스클루시브 빈티지와 매일 바뀌는 라인업을 볼 수 있고 운영시간은 11시 30분부터 19시 30분이에요.", query: "제주특별자치도 제주시 탑동로2길 7", source: "https://kr.stussy.com/blogs/news/jeju-archive-store" },
  { region: "airport", name: "국립제주박물관", tags: ["무료", "월요일 휴관"], time: "90분", detour: "일주동로 17", description: "제주 역사랑 어린이 전시를 같이 볼 수 있는 무료 실내 박물관이야. 오전 9시부터 오후 6시까지 열고 월요일은 쉬어. 이번 여행 둘째 날은 월요일이라 후보로만 챙겨두자.", query: "국립제주박물관", source: "https://jeju.museum.go.kr/html/kr/guide/guide_0701.html" },
  { region: "south", name: "제주워터월드", tags: ["완전 실내", "전 연령"], time: "100분", detour: "월드컵로 33", description: "물과 미디어아트를 같이 즐기는 체험형 실내 공간이야. 오전 10시부터 오후 8시까지고 마지막 입장은 오후 7시야. 서귀포 쪽에서 비가 오래 올 때 넣기 좋아.", query: "제주워터월드", source: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=68268" },
  { region: "south", name: "자롤로뮤지엄", tags: ["완전 실내", "3D 전시"], time: "90분", detour: "중문관광로 227-20", description: "중문에 있는 몰입형 실내 전시야. 오전 10시부터 오후 8시까지고 마지막 입장은 오후 7시야. 원문에는 제주시로 적혀 있었지만 주소는 서귀포시가 맞아.", query: "자롤로뮤지엄", source: "https://zarolo.net/" },
  { region: "airport", name: "테마파크 툰", tags: ["완전 실내", "체험형 전시"], time: "90분", detour: "은수길 69", description: "웹툰 캐릭터랑 미디어 체험을 한 번에 보는 실내 공간이야. 오전 9시부터 오후 7시까지고 마지막 입장은 오후 6시야. 지도에는 연동 1320 대신 도로명 주소인 은수길 69로 찾으면 편해.", query: "테마파크 툰 제주", source: "https://themeparktoon.com/" },
  { region: "airport", name: "제주도립미술관", tags: ["실내 미술관", "월요일 확인"], time: "80분", detour: "1100로 2894-78", description: "공항에서 멀지 않아서 비 오는 날 전시랑 건축을 같이 보기 좋아. 보통 오전 9시부터 오후 6시까지고 월요일은 쉬지만 8월 17일은 대체공휴일이라 특별 운영 공지를 한 번 더 보자.", query: "제주도립미술관", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500544" },
  { region: "west", name: "문화예술 공공수장고", tags: ["실내 전시", "공사 영향 확인"], time: "40분", detour: "저지12길 84-2", description: "미디어아트랑 거울방을 짧게 보기 좋은 저지리 실내 전시야. 2026년 증축 공사가 진행될 수 있어서 무료 관람이랑 운영시간은 출발 전에 전화나 공식 공지로 꼭 확인하자.", query: "문화예술 공공수장고 제주", source: "https://www.ddojeju.com/place/CP199116" },
  { region: "airport", name: "제주교육박물관", tags: ["무료", "월요일 휴관"], time: "70분", detour: "이도이동 539-14", description: "제주 교육의 옛 기록과 교실 풍경을 보는 무료 박물관이야. 오전 9시부터 오후 6시까지고 월요일은 쉬어서 이번 일정에는 후보로만 넣어둘게.", query: "제주교육박물관", source: "https://org.jje.go.kr/jjemuseum/index.jje" },
  { region: "east", name: "스타벅스 더제주송당파크R점", tags: ["호우 대안", "대형 실내 카페"], time: "70분", detour: "비자림로 1189", description: "제주동화마을 안에 있는 큰 리저브 매장이야. 비가 많이 오면 야원 대신 실내에서 쉬기 좋고 제주 전용 푸드랑 매장 전용 상품도 볼 수 있어. 강풍이나 호우에는 야외 정원은 빼자.", query: "스타벅스 더제주송당파크R점", source: "https://map.naver.com/p/entry/place/1259129302" },
  { region: "east", name: "절물자연휴양림", tags: ["약한 비", "삼나무 숲"], time: "70분", detour: "명림로 584", description: "완만한 데크를 따라 삼나무 숲을 걷기 좋아. 안개랑 가벼운 비에는 예쁘지만 호우와 낙뢰랑 강풍이 있으면 바로 취소하자.", query: "제주 제주시 명림로 584 절물자연휴양림", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500570" },
  { region: "east", name: "천미천", tags: ["비 그친 뒤", "범람 주의"], time: "30분", detour: "송당리 2657", description: "비가 그친 뒤 물이 흐를 때 풍경이 예쁜 하천이지만 태풍 때 범람 피해가 있었어. 비가 오는 중에는 가지 말고 비가 멈춘 뒤에도 수위랑 출입 상태를 먼저 보자.", query: "제주 제주시 구좌읍 송당리 2657 천미천", source: "https://www.jejunews.com/news/articleView.html?idxno=2184312" },
  { region: "east", name: "비자림", tags: ["약한 비", "비자나무 숲"], time: "80분", detour: "비자숲길 55", description: "숲이 가벼운 비를 어느 정도 막아주고 젖은 비자나무 색이 예뻐. 호우와 강풍에는 입장 통제를 확인하고 취소하자.", query: "제주 제주시 구좌읍 비자숲길 55 비자림", source: "https://www.visitjeju.net/kr/themtour/view?contentsid=CNTS_300000000013335&menuId=DOM_000002000000000221" },
  { region: "west", name: "산양큰엉곶", tags: ["약한 비", "유료 숲길"], time: "90분", detour: "연명로 179", description: "비에 젖은 곶자왈 숲이 예쁜 곳이야. 야외 비중이 커서 보슬비까지만 가고 호우와 낙뢰랑 강풍이면 빼자. 입장 마감도 당일 확인해야 돼.", query: "제주 제주시 한경면 연명로 179 산양큰엉곶" },
  { region: "south", name: "토끼나무숲", tags: ["약한 비", "운영 확인"], time: "60분", detour: "녹산로 180-21", description: "표선 녹산로 쪽 숲 후보야. 운영 주체랑 최신 영업시간을 확인하기 어려워서 방문 전에 지도나 전화로 영업 여부를 꼭 확인하자. 호우에는 가지 말자.", query: "제주 서귀포시 표선면 녹산로 180-21 토끼나무숲" },
  { region: "east", name: "제동목장 입구", tags: ["비 온 다음날", "새벽"], time: "20분", detour: "입구 교래7길 218", description: "목장 소재지는 교래리 산16이지만 사진 지점은 입구 삼거리로 안내해요. GS25 교래퐁낭점 옆 공터나 삼다수 숲길 주차장을 이용하고 목장 차량의 통행을 막지 마세요.", query: "제주시 조천읍 교래7길 218", source: "https://www.visitjeju.or.kr/issue/news/weekly.htm?act=download&no=2&page=5&seq=56348" },
  { region: "east", name: "사려니숲길", tags: ["약한 비", "무료"], time: "60분", detour: "제동목장 근처", description: "공식 관광 영상에도 소개된 비 오는 제주 대표 숲길이에요. 남조로 입구로 가고 호우나 낙뢰가 있으면 취소하세요.", query: "남조로 사려니숲길", source: "https://www.youtube.com/watch?v=gux_pyEIcUY" },
  { region: "south", name: "물영아리오름 습지", tags: ["약한 비", "람사르 습지"], time: "90분", detour: "남원읍", description: "습할 때 숲과 습지의 분위기가 좋지만 정상 계단이 가파릅니다. 호우와 강풍 및 낙뢰 때는 일정에서 빼세요.", query: "물영아리오름 습지", source: "https://rsis.ramsar.org/ris/1648" },
  { region: "south", name: "엉또폭포", tags: ["비 온 뒤", "조건부"], time: "30분", detour: "서귀포시 강정동", description: "강수량이 충분할 때만 폭포가 나타나는 조건부 장소예요. 현장 통제와 폭포 유무를 먼저 확인하세요.", query: "엉또폭포", source: "https://www.visitjeju.net/kr/search?q=%EC%97%89%EB%98%90%ED%8F%AD%ED%8F%AC&searchtype=2" },
  { region: "south", name: "친봉산장", tags: ["실내", "카페"], time: "70분", detour: "서귀포시 하신상로 417", description: "산장 형태의 실내 카페입니다. 동쪽에서 사계리로 이동하는 날 중간에 들를 수 있습니다.", query: "친봉산장 제주", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_300000000012677" },
  { region: "west", name: "제주도립김창열미술관", tags: ["호우 대안", "실내"], time: "60분", detour: "한경면", description: "물방울 작품과 건축을 함께 보는 실내 대안이에요. 8월 17일은 대체공휴일이므로 특별 운영과 다음날 휴관 여부를 반드시 확인하세요.", query: "제주도립김창열미술관", source: "https://kimtschangyeul.jeju.go.kr/" },
  { region: "west", name: "오설록 티뮤지엄", tags: ["호우 대안", "연중무휴"], time: "60분", detour: "안덕면", description: "강한 비에도 머물 수 있는 실내 장소입니다. 공식 안내 운영시간은 오전 10시부터 오후 7시입니다.", query: "오설록 티뮤지엄", source: "https://www.osulloc.com/kr/ko/store-introduction/jeju-map" },
  { region: "west", name: "아르떼뮤지엄 제주", tags: ["호우 대안", "완전 실내"], time: "90분", detour: "애월읍 어음리 1503", description: "빛이랑 소리로 꽉 채운 실내 전시라 비가 세게 와도 괜찮아. 현재 안내는 오전 10시부터 오후 8시까지고 마지막 입장은 오후 7시야. 마지막 날은 렌터카를 11시 50분에 반납해야 해서 이번에는 후보로만 챙겨두자.", query: "아르떼뮤지엄 제주", source: "https://www.kr.artemuseum.com/?redirect=no" },
  { region: "west", name: "풀베개", tags: ["카페", "비 오는 날"], time: "60분", detour: "안덕면 서광리 1756-1", description: "정원과 실내가 있는 카페입니다. 당일 영업시간은 공식 채널에서 다시 확인하세요.", query: "풀베개 제주", source: "https://www.instagram.com/pulbege/" },
  { region: "west", name: "슬로보트", tags: ["하귀", "바다 카페"], time: "60분", detour: "애월읍 하귀1리 330", description: "공항으로 가는 길에 있는 하귀리 카페입니다. 비행기가 오후 4시 이후일 때만 한 시간 안으로 머무릅니다.", query: "슬로보트 제주 하귀1리 330" },
  { region: "west", name: "인디안 썸머 애월", tags: ["식사", "음료"], time: "90분", detour: "애월읍 애월리 2127-10", description: "낮에는 브런치와 커피를 팔고 저녁에는 수제맥주와 와인을 판매합니다. 운전자는 논알코올 메뉴를 확인하세요.", query: "인디안 썸머 애월" },
  { region: "west", name: "도치돌알파카목장", tags: ["가벼운 비", "동물 체험"], time: "90분", detour: "애월읍", description: "먹이 체험이 가능하지만 야외 산책 비중이 높아요. 호우나 강풍에는 아르떼뮤지엄으로 바꾸는 편이 안전해요.", query: "도치돌알파카목장", source: "https://www.instagram.com/dochidol_ranch/" },
  { region: "west", name: "성이시돌목장", tags: ["비 그친 뒤", "무료"], time: "30분", detour: "한림읍 금악리 116", description: "평지라 짧게 들르기 좋지만 비바람이 강할 때는 피하세요. 김창열미술관과 서쪽 일정으로 묶을 수 있어요.", query: "성이시돌목장", source: "https://www.instagram.com/explore/tags/%EC%84%B1%EC%9D%B4%EC%8B%9C%EB%8F%8C%EB%AA%A9%EC%9E%A5/" },
  { region: "west", name: "금오름", tags: ["비 그친 뒤", "주의"], time: "70분", detour: "한림읍", description: "분화구에 물이 고인 풍경을 볼 수 있지만 젖은 경사면이 미끄러워요. 비가 내리는 중이거나 강풍이면 제외하세요.", query: "금오름", source: "https://www.instagram.com/explore/tags/%EA%B8%88%EC%98%A4%EB%A6%84/" },
  { region: "east", name: "섭지코지", tags: ["흐린 날", "강풍 제외"], time: "60분", detour: "성산읍", description: "가벼운 비에는 바다와 초지 풍경이 좋지만 바람을 그대로 맞는 곳이에요. 강풍주의보가 있으면 방문하지 마세요.", query: "섭지코지", source: "https://www.visitjeju.net/kr/search?q=%EC%84%AD%EC%A7%80%EC%BD%94%EC%A7%80&searchtype=2" },
  { region: "south", name: "테라로사 서귀포점", tags: ["카페", "실내"], time: "60분", detour: "하효동 1306-1", description: "쇠소깍과 효돈 사이에 있는 실내 카페입니다. 영업시간과 주차 안내를 당일 확인하세요.", query: "테라로사 서귀포점 하효동 1306-1" },
  { region: "south", name: "파르다르", tags: ["카페", "서귀포"], time: "60분", detour: "법환동 555", description: "법환동 공영주차장 옆 카페입니다. 엉또폭포나 서귀포 시내를 방문하는 날 들를 수 있습니다.", query: "파르다르 제주 법환동 555" },
  { region: "east", name: "빛의벙커", tags: ["호우 대안", "실내 전시"], time: "90분", detour: "성산읍 고성리 2039-22", description: "성산 쪽에서 비를 피하며 몰입형 전시를 볼 수 있어요. 전시 회차와 마지막 입장을 확인하세요.", query: "빛의벙커 제주" },
  { region: "south", name: "베케", tags: ["카페", "정원"], time: "70분", detour: "신효동 1139-1", description: "정원 풍경이 좋은 카페예요. 비가 강할 때는 실내에서만 머물고 정원 관람 가능 여부를 확인하세요.", query: "베케 제주 신효동 1139-1" },
  { region: "airport", name: "미르담", tags: ["카페", "공항 근처"], time: "50분", detour: "용담이동 899-2", description: "공항 일정 전후에 넣기 좋은 카페예요. 제니스빌라 주차장을 지나 진입하는 안내를 참고하세요.", query: "미르담 제주 용담이동 899-2" },
  { region: "west", name: "바이닐 제주", tags: ["서쪽 후보", "LP 카페"], time: "90분", detour: "한림읍 옹포리 643", description: "개별 턴테이블로 LP를 들을 수 있는 실내 카페야. 이번에는 11시 50분 렌터카 반납 때문에 일정에서 빼고 다음 제주 후보로 남겨뒀어.", query: "바이닐 제주", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_300000000013141" },
  { region: "west", name: "리버브 제주", tags: ["카페", "한림"], time: "60분", detour: "귀덕리 3189 3층", description: "한림 해안에 있는 실내 카페입니다. 비바람이 강하면 바다 산책은 제외합니다.", query: "리버브 제주 귀덕리 3189" },
  { region: "west", name: "플레이사계시장", tags: ["시장", "사계리"], time: "60분", detour: "사계리 126-1", description: "돈사빠나 안덕 서쪽 일정에서 함께 볼 수 있습니다. 운영일을 먼저 확인하세요.", query: "플레이사계시장" },
  { region: "west", name: "포도뮤지엄", tags: ["호우 대안", "실내 전시"], time: "90분", detour: "안덕면 상천리 837", description: "안덕에서 강한 비를 피할 수 있는 미술관입니다. 사전 예약과 휴관일을 확인하세요.", query: "포도뮤지엄 제주" },
  { region: "west", name: "유동룡미술관", tags: ["서쪽 후보", "실내 전시"], time: "80분", detour: "한림읍 월림리 115-161", description: "이타미 준의 건축과 철학을 공간으로 경험하는 미술관이야. 8월 17일은 월요일이고 마지막 날은 렌터카 반납이 빨라서 이번 핵심 일정에서는 뺐어.", query: "유동룡미술관", source: "https://www.itamijunmuseum.com/" },
  { region: "south", name: "쇠소깍 산물 관광농원", tags: ["체험", "약한 비"], time: "70분", detour: "남원읍 하례리 155-1", description: "농원 체험은 야외 비중이 있으므로 가벼운 비에만 선택해요. 호우에는 인근 실내 카페로 바꾸세요.", query: "쇠소깍 산물 관광농원" },
  { region: "west", name: "돌코리숲", tags: ["숲 체험", "호우 제외"], time: "80분", detour: "안덕면 서광리 725", description: "젖은 숲길은 미끄러울 수 있어 약한 비에만 방문해요. 현장 통제와 체험 운영 여부를 확인하세요.", query: "돌코리숲 제주" },
  { region: "west", name: "토토아뜰리에", tags: ["체험", "예약 확인"], time: "90분", detour: "애월읍 상귀리 152", description: "비 오는 날 이용할 수 있는 체험 공간입니다. 프로그램 시간과 예약 가능 여부를 먼저 확인하세요.", query: "토토아뜰리에 제주" },
  { region: "airport", name: "노형수퍼마켙", tags: ["호우 대안", "실내 체험"], time: "90분", detour: "해안동 2137-1", description: "공항이랑 서쪽 사이에서 비를 피하기 좋은 미디어 전시야. 오전 9시부터 오후 7시까지고 마지막 입장은 오후 6시야. 첫째 날 시간이 밀리면 무리해서 넣지 말자.", query: "노형수퍼마켙 제주", source: "https://access.visitkorea.or.kr/ms/detail.do?cotId=60bf63e2-6a3c-4ac6-88b3-91b1790e45a8" },
  { region: "east", name: "헛간 더반스위트", tags: ["카페", "구좌"], time: "60분", detour: "덕천리 1186", description: "구좌 중산간에 있는 카페입니다. 영업일과 좁은 진입로 상태를 확인하세요.", query: "헛간 더반스위트 제주" },
  { region: "east", name: "카페세바", tags: ["카페", "조천"], time: "60분", detour: "선흘리 1093-1", description: "선흘에 있는 실내 카페입니다. 사려니숲길이나 비케이브를 방문하는 날 들를 수 있습니다.", query: "카페세바 제주" },
  { region: "east", name: "비케이브", tags: ["카페", "조천"], time: "70분", detour: "선흘리 161-6", description: "선흘에 있는 카페입니다. 야외 공간은 비가 약할 때만 이용하고 당일 영업을 확인하세요.", query: "비케이브 제주" },
  { region: "east", name: "흘 HEUL", tags: ["카페", "조천"], time: "60분", detour: "선흘리 469-8", description: "조천 숲 동선에 있는 카페입니다. 비가 강하면 실내 좌석 여부를 먼저 확인하세요.", query: "흘 HEUL 제주" },
  { region: "east", name: "성읍녹차동굴", tags: ["동굴", "접근 확인"], time: "40분", detour: "성읍리 2270", description: "사유지 여부와 출입 가능 상태를 반드시 확인해야 해요. 호우 때는 동굴과 배수로 주변에 접근하지 마세요.", query: "성읍녹차동굴" },
  { region: "east", name: "오늘은녹차한잔", tags: ["카페", "표선"], time: "60분", detour: "성읍리 2197", description: "성읍 녹차밭 인근의 카페입니다. 녹차동굴 출입이 어렵다면 이곳으로 변경합니다.", query: "오늘은녹차한잔 제주" },
  { region: "west", name: "이끼숲소길", tags: ["카페", "애월"], time: "60분", detour: "소길리 1413", description: "애월 중산간에 있는 카페입니다. 젖은 야외 바닥을 조심하고 영업일을 확인하세요.", query: "이끼숲소길 제주" },
  { region: "airport", name: "마음에온", tags: ["카페", "제주시"], time: "50분", detour: "일도일동 1301-4", description: "제주시 원도심에 있어 공항 이동 전후에 들를 수 있습니다.", query: "마음에온 제주" },
  { region: "east", name: "야원", tags: ["코스 포함", "정원 카페"], time: "70분", detour: "대흘리 1197-56", description: "초가와 옹기 정원을 볼 수 있는 조천 카페예요. 비가 강하면 실내 위주로 이용하세요.", query: "제주 카페 야원", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_200000000013907&menuId=DOM_000001719000000000" },
  { region: "south", name: "이승악오름", tags: ["비 그친 뒤", "호우 제외"], time: "90분", detour: "남원읍 신례리 산2-1", description: "숲길 분위기가 좋지만 젖은 길과 급경사를 고려해야 해요. 비가 내리는 중이거나 낙뢰 예보가 있으면 제외하세요.", query: "이승악오름 제주" },
  { region: "east", name: "올데이모즈", tags: ["비오는 날 후보", "월요일 휴무"], time: "60분", detour: "조천읍 대흘북길 26", description: "녹차밭 풍경 보면서 아침 보내기 좋은 카페야. 둘째 날인 8월 17일이 월요일 정기휴무라 핵심 일정에서는 뺐고 특별 운영 공지가 있을 때만 바꾸자.", query: "올데이모즈 제주" },
  { region: "west", name: "돈사빠", tags: ["서쪽 후보", "흑돼지"], time: "90분", detour: "대정읍 중산간서로 2405", description: "서쪽에서 먹기 좋은 흑돼지 후보야. 삼달리 숙소와 반대쪽이라 이번 일정에는 넣지 않고 다음 제주 후보로 남겨뒀어.", query: "돈사빠 제주" },
];

const placeKindMeta = {
  cafe: { label: "카페", time: "약 60분" },
  food: { label: "식당", time: "약 70분" },
  spot: { label: "가볼 만한 곳", time: "약 60분" }
};

const additionalPlaceGroups = [
  {
    region: "east", route: "제주시에서 동쪽", kind: "cafe",
    names: "하토말차,홉히,키에키,커피템플,무우수커피로스터스,링로드,애재,야원,카멜커피,차한모금,먀,레이오버"
  },
  {
    region: "east", route: "제주시에서 동쪽", kind: "food",
    names: "잘도식당,풍어회센타,영미식당,성춘,고기장,늘봄흑돼지,도두해녀의집,우진해장국,태풍쌀국수,제주미담,라스또르따스,조천수산,돈방석,저팔계깡통연탄구이,로티,선흘곶,각지불,도우보이,백구옥,김녕오라이,말젯문,명진전복,소금바치순이네,으뜨미"
  },
  {
    region: "east", route: "제주시에서 동쪽", kind: "spot",
    names: "샛도리물,이호해수욕장,삼양해수욕장,신흥해수욕장,함덕해수욕장,돌문화공원,사려니숲길,제주동화마을,청굴물,김녕해수욕장,만장굴,세화해수욕장"
  },
  {
    region: "south", route: "동쪽에서 서귀포", kind: "cafe",
    names: "카페쿠리,월간레코드,목화휴게소,프릳츠,오른,밭디,가시림,오늘은 녹차한잔,담소요,대한목장,라룬블루,세러데이아일랜드"
  },
  {
    region: "south", route: "동쪽에서 서귀포", kind: "food",
    names: "피갈회옥,제주길흑돼지참숯구이,맛나식당,섭지해녀의집,한라산아래첫마을,표선우동가게,만덕이네,계절식,랑이식당,미미파스타,백한철꽈배기,취향의섬,공천포식당"
  },
  {
    region: "south", route: "동쪽에서 서귀포", kind: "spot",
    names: "우도,성산일출봉,광치기해변,아쿠아플라넷,섭지코지,표선해수욕장,태웃개,큰엉해안경승지,쇠소깍,사라오름,이승악"
  },
  {
    region: "south", route: "서귀포에서 서쪽", kind: "cafe",
    names: "베케,너리,댄싱두루미,믈커피 스페셜티점,허니문하우스,테라로사 커피,바다다,위이,비밀역,원앤온리,메종노트르테르,패스브루,인무드,너흐,모아시,믈커피로스터스,나무북카페"
  },
  {
    region: "south", route: "서귀포에서 서쪽", kind: "food",
    names: "리볼버,퍼랭,석경초밥,오는정김밥,삼보식당,함쉐프키친,쌍둥이횟집,중문고등어쌈밥,중문수두리 보말칼국수,선채향,달팽이식당,번네식당,폭,오랑우탄면사무소,명호돗갈비,메릭빌,옥돔식당,미영이네,덕승식당,홍성방"
  },
  {
    region: "west", route: "서귀포에서 서쪽", kind: "spot",
    names: "중문색달해수욕장,대포주상절리,헬로키티아일랜드,오설록,용머리해안,사계해변,산방산,바다기찻길"
  },
  {
    region: "west", route: "서쪽에서 애월", kind: "cafe",
    names: "마마롱,제주당,슬로보트,커피냅로스터스,도토리 제주점,픽업카페 애월점,슬랩,ttr,잔물결,호텔샌드,리버브,베릴,로비,3인칭관찰자시점,프롬더아일랜드,카페데스틸"
  },
  {
    region: "west", route: "서쪽에서 애월", kind: "food",
    names: "저지면옥,금자매식당,한양동식당,대금식당,등대아구찜,바다술상,뽈살집,고기부엌,수선화식당,수우동,동경밥상,집밥 단소,크라운돼지,바다속고등어쌈밥,호탕,부산아지매집"
  },
  {
    region: "west", route: "서쪽에서 애월", kind: "spot",
    names: "신창풍차해안도로,금오름,성이시돌목장,새별오름,판포포구,금능해수욕장,협재해수욕장,한담해변"
  }
];

const specialPlaceDescriptions = {
  "제주동화마을": "매장이랑 조경 볼거 많고 지브리 전시도 하는 중이래. 스타벅스 리저브랑 코리코카페도 있어서 여기만 봐도 시간 꽤 쓸듯! 전시는 가기 전에 한번 보자.",
  "피갈회옥": "넷플릭스 모태솔로지만에 나온 곳이라 저장해놨어. 그날 땡기면 가자.",
  "제주길흑돼지참숯구이": "뷔랑 박서준이 다녀간 곳이라 저장해놨어. 영업하는지 보고 가자.",
  "용머리해안": "바다 상태에 따라 못 들어갈 수도 있어. 당일에 064-760-6321로 관람되는지 꼭 물어보자.",
  "바다기찻길": "서귀포시 대정읍 일과대수로27번길 38로 가면 돼. 물때표 보고 만조 전후에 갈듯!"
};

function additionalPlaceDescription(group, name) {
  if (specialPlaceDescriptions[name]) return specialPlaceDescriptions[name];
  if (group.kind === "cafe") return `${group.route}쪽 카페야. 근처 지나가면 쉬었다 갈듯!`;
  if (group.kind === "food") return `${group.route}쪽에서 밥먹을 곳으로 저장해놨어. 그날 땡기면 가자.`;
  return `${group.route}쪽에서 같이 볼만한 곳이야. 날씨 괜찮으면 가자.`;
}

const additionalRecommendations = additionalPlaceGroups.flatMap(group => group.names.split(",").map(rawName => {
  const name = rawName.trim();
  const kind = placeKindMeta[group.kind];
  return {
    region: group.region,
    kind: group.kind,
    name,
    tags: [kind.label, group.route],
    time: kind.time,
    detour: group.route,
    description: additionalPlaceDescription(group, name),
    query: `제주 ${name}`
  };
}));

const placeNameAliases = {
  돌문화공원: "제주돌문화공원",
  세화해수욕장: "세화해변",
  이승악: "이승악오름",
  오설록: "오설록티뮤지엄",
  리버브: "리버브제주",
  테라로사커피: "테라로사서귀포점"
};

function recommendationIdentity(name) {
  const normalized = name.replace(/\s/g, "");
  return placeNameAliases[normalized] || normalized;
}

function inferPlaceKind(item) {
  if (item.kind) return item.kind;
  const text = `${item.name} ${item.tags.join(" ")}`;
  if (/카페|커피|디저트|베이커리|브런치|LP|차\b/.test(text)) return "cafe";
  if (/식당|식사|맛집|해산물|흑돼지|저녁|국수|시장/.test(text)) return "food";
  return "spot";
}

function getRecommendationSource() {
  const primary = isRainPlan() ? rainRecommendations : recommendations;
  return uniqueRecommendations([...primary, ...additionalRecommendations]);
}

function uniqueRecommendations(items) {
  const seen = new Set();
  return items
    .map(item => ({ ...item, kind: inferPlaceKind(item) }))
    .filter(item => {
      const identity = recommendationIdentity(item.name);
      if (seen.has(identity)) return false;
      seen.add(identity);
      return true;
    });
}

function getAllRecommendationSource() {
  return uniqueRecommendations([...recommendations, ...rainRecommendations, ...additionalRecommendations]);
}

const timeline = document.querySelector("#timeline");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const stateKey = "jeju-trip-completed-v1";
const modeKey = "jeju-trip-mode-v1";
const planVersionKey = "jeju-trip-plan-version-v1";
const rainCourseKey = "jeju-trip-rain-course-v1";
const dayKey = "jeju-trip-active-day-v1";
let completed = JSON.parse(localStorage.getItem(stateKey) || "{}");
const today = new Date();
const calendarDay = today.getFullYear() === 2026 && today.getMonth() === 7 && today.getDate() >= 16 && today.getDate() <= 18 ? today.getDate() - 15 : 1;
const savedDay = Number(localStorage.getItem(dayKey));
let activeDay = [1, 2, 3].includes(savedDay) ? savedDay : calendarDay;
let activeMode = localStorage.getItem(modeKey) === "rain" ? "rain" : "sunny";
let activePlanVersion = localStorage.getItem(planVersionKey) === "a" ? "a" : "b";
let activeRainCourse = localStorage.getItem(rainCourseKey) === "b" ? "b" : "a";
let routeAnimationFrame = null;
let trekMap = null;
let trekMapLayers = null;
let placesMap = null;
let placesClusterLayer = null;
let routeMarkers = [];
let routeTravelerMarker = null;
let activePlacesMapRegion = "all";
let activePlacesMapKind = "all";
let activeRecommendationFilter = "all";
let activeRecommendationType = "all";
let recommendationLimit = 9;
let activeAppTab = "plan";

const appTabHashes = {
  plan: "#plan",
  route: "#route-map",
  map: "#places-map",
  places: "#nearby",
  allPlaces: "#all-places"
};

function tabNameFromHash(hash = window.location.hash) {
  return Object.entries(appTabHashes).find(([, value]) => value === hash)?.[0] || "plan";
}

function setActiveAppTab(tabName, options = {}) {
  const { updateHash = false, scroll = true } = options;
  if (!appTabHashes[tabName]) return;

  if (tabName !== "map") setPlacesMapExpanded(false);

  activeAppTab = tabName;
  document.querySelectorAll("[data-tab-panel]").forEach(panel => {
    const isActive = panel.dataset.tabPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });
  document.querySelectorAll("[data-tab-target]").forEach(tab => {
    const isActive = tab.dataset.tabTarget === tabName || (tabName === "allPlaces" && tab.dataset.tabTarget === "places");
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  if (updateHash && window.location.hash !== appTabHashes[tabName]) {
    window.history.pushState({ tab: tabName }, "", appTabHashes[tabName]);
  }
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });

  if (tabName === "route") {
    window.setTimeout(() => {
      renderTripMap();
      trekMap?.invalidateSize();
    }, 30);
  }
  if (tabName === "map") {
    window.setTimeout(() => {
      renderPlacesMap();
      placesMap?.invalidateSize();
    }, 30);
  }
  if (tabName === "allPlaces") renderAllPlaces();
}

function setPlacesMapExpanded(expanded) {
  const section = document.querySelector("#places-map");
  const button = document.querySelector("#placesMapExpandButton");
  if (!section || !button) return;

  const isExpanded = Boolean(expanded);
  section.classList.toggle("map-expanded", isExpanded);
  document.body.classList.toggle("places-map-open", isExpanded);
  button.setAttribute("aria-expanded", String(isExpanded));
  button.querySelector("span").textContent = isExpanded ? "지도 닫기" : "지도 크게 보기";
  button.classList.toggle("active", isExpanded);

  window.setTimeout(() => {
    placesMap?.invalidateSize({ animate: false });
    if (isExpanded) renderPlacesMap();
  }, 80);
}

function initializeAppTabs() {
  setActiveAppTab(tabNameFromHash(), { scroll: false });
  const tabs = [...document.querySelectorAll("[data-tab-target]")];
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", event => {
      event.preventDefault();
      setActiveAppTab(tab.dataset.tabTarget, { updateHash: true });
    });
    tab.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextTab = tabs[(index + direction + tabs.length) % tabs.length];
      nextTab.focus();
      setActiveAppTab(nextTab.dataset.tabTarget, { updateHash: true });
    });
  });
  window.addEventListener("popstate", () => setActiveAppTab(tabNameFromHash(), { scroll: false }));
  window.addEventListener("hashchange", () => {
    if (Object.values(appTabHashes).includes(window.location.hash)) {
      setActiveAppTab(tabNameFromHash(), { scroll: false });
    }
  });
  document.querySelector("#openAllPlaces")?.addEventListener("click", event => {
    event.preventDefault();
    setActiveAppTab("allPlaces", { updateHash: true });
  });
  document.querySelector("#backToPlaces")?.addEventListener("click", event => {
    event.preventDefault();
    setActiveAppTab("places", { updateHash: true });
  });
}

const exactPlaceCoordinates = {
  "제주공항 도착": [126.493, 33.506],
  "제주공항": [126.493, 33.506],
  "렌터카 인수": [126.499, 33.503],
  "렌터카 주유": [126.501, 33.498],
  "렌터카 반납": [126.499, 33.503],
  "Jeju Archive Store": [126.523, 33.518],
  "스타벅스 더제주송당파크R점": [126.755, 33.44],
  "절물자연휴양림": [126.629, 33.438],
  "천미천": [126.752, 33.447],
  "비자림": [126.811, 33.491],
  "산양큰엉곶": [126.299, 33.305],
  "토끼나무숲": [126.78, 33.402],
  "아베베 베이커리 제주점": [126.527, 33.514],
  "우동 카덴": [126.666, 33.435],
  "제동목장 입구": [126.692, 33.429],
  "안친오름": [126.729, 33.407],
  "숙소로 이동": [126.668, 33.331],
  "고래휴게소 표선점": [126.831, 33.326],
  "국수마을": [126.569, 33.252],
  "여름문구사": [126.859, 33.523],
  "동쪽 카페": [126.823, 33.543],
  "코난해변": [126.801, 33.558],
  "김녕팜랜드": [126.754, 33.539],
  "대현목장": [126.69, 33.43],
  "친봉산장": [126.5963, 33.291],
  "아르떼뮤지엄 제주": [126.3441, 33.4059],
  "슬로보트": [126.4145, 33.4821],
  "인디안 썸머 애월": [126.3215, 33.4605],
  "봉주르마담": [126.532, 33.251],
  "순천미향": [126.407, 33.251],
  "중문회어시장": [126.413, 33.252],
  "할머니떡집": [126.564, 33.25],
  "숙소": [126.41, 33.245],
  "우진해장국": [126.52, 33.51],
  "올래국수": [126.497, 33.489],
  "우진해장국 또는 올래국수": [126.511, 33.502],
  "금티지": [126.531, 33.505],
  "제주시 저녁 식사": [126.54, 33.493],
  "숙소 체크인": [126.62, 33.38],
  "강수 레이더 확인": [126.62, 33.45],
  "사려니숲길": [126.633, 33.406],
  "올데이모즈": [126.664, 33.486],
  "아침 식사": [126.663, 33.466],
  "야원": [126.664, 33.454],
  "서쪽으로 이동": [126.47, 33.39],
  "유동룡미술관": [126.274, 33.34],
  "바이닐 제주": [126.256, 33.407],
  "돈사빠": [126.278, 33.282],
  "체크아웃과 짐 정리": [126.31, 33.24],
  "삼달리 숙소": [126.858, 33.373],
  "김영갑갤러리 두모악": [126.8542, 33.3721],
  "아쿠아플라넷 제주": [126.9274, 33.4332],
  "빛의 벙커": [126.899, 33.439],
  "오른": [126.9161, 33.472],
  "카페 모알보알": [126.827, 33.555],
  "픽업커피 행원점": [126.816, 33.558],
  "삼달리로 이동": [126.858, 33.373],
  "사부작": [126.815, 33.327]
};

const regionAnchors = {
  east: [126.72, 33.43],
  west: [126.29, 33.37],
  south: [126.52, 33.25],
  airport: [126.50, 33.49]
};

const mapUrl = (query) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;

function travelVoice(value) {
  return String(value)
    .replaceAll("보입니다.", "보여.")
    .replaceAll("방문하지 않습니다.", "가지는 말자.")
    .replace(/([가-힣]+)입니다\./g, (_, noun) => `${noun}임.`)
    .replaceAll("비 오는", "비오는")
    .replaceAll(" 및 ", "이랑 ")
    .replaceAll("할 것 같아", "할것 같아")
    .replaceAll("저녁 장소로 검토할 수 있어.", "저녁으로 가도 될듯!")
    .replaceAll("확인되지 않아", "아직 몰라서")
    .replaceAll("확인되지 않은", "아직 모르는")
    .replaceAll("판단하도록 구성했어.", "보고 정하면 돼.")
    .replaceAll("확인 필요", "한번 봐야함")
    .replaceAll("영업시간 확인", "영업시간 한번 보기")
    .replaceAll("당일 영업 확인", "당일에 한번 보기")
    .replaceAll("확인 후", "한번 보고")
    .replaceAll("고릅니다.", "고르면 돼.")
    .replaceAll("가파릅니다.", "가팔라.")
    .replaceAll("들릅니다.", "들르자.")
    .replaceAll("머무릅니다.", "머물자.")
    .replaceAll("변경합니다.", "바꾸자.")
    .replaceAll("판매합니다.", "팔아.")
    .replaceAll("편합니다.", "편해.")
    .replaceAll("포장합니다.", "포장하자.")
    .replaceAll("출발합니다.", "출발하자.")
    .replaceAll("잡습니다.", "잡자.")
    .replaceAll("맞습니다.", "맞아.")
    .replaceAll("않습니다.", "않아.")
    .replaceAll("제외합니다.", "빼자.")
    .replaceAll("방문합니다.", "가자.")
    .replaceAll("이동합니다.", "이동하자.")
    .replaceAll("권장합니다.", "이게 나을듯.")
    .replaceAll("적합합니다.", "괜찮을듯.")
    .replaceAll("위험합니다.", "위험해.")
    .replaceAll("해야 합니다.", "해야 해.")
    .replaceAll("할 수 있습니다.", "할 수 있어.")
    .replaceAll("수 있습니다.", "수 있어.")
    .replaceAll("확인해 주세요.", "확인해줘.")
    .replaceAll("방문하지 마세요.", "가지는 말자.")
    .replaceAll("접근하지 마세요.", "가까이 가지 말자.")
    .replaceAll("확인하세요.", "한번 보자.")
    .replaceAll("선택하세요.", "하나만 고르자.")
    .replaceAll("제외하세요.", "빼자.")
    .replaceAll("이용하세요.", "이용하자.")
    .replaceAll("취소하세요.", "취소하자.")
    .replaceAll("피하세요.", "피하자.")
    .replaceAll("참고하세요.", "참고하자.")
    .replaceAll("이동하세요.", "이동하자.")
    .replaceAll("시작하세요.", "시작하자.")
    .replaceAll("새로고침하세요.", "새로 보자.")
    .replaceAll("바꾸세요.", "바꾸자.")
    .replaceAll("빼세요.", "빼자.")
    .replaceAll("마세요.", "말자.")
    .replaceAll("주세요.", "줘.")
    .replaceAll("있습니다.", "있어.")
    .replaceAll("없습니다.", "없어.")
    .replaceAll("합니다.", "해.")
    .replaceAll("못했어요.", "못했어.")
    .replaceAll("표시했어요.", "표시했어.")
    .replaceAll("줄였어요.", "줄였어.")
    .replaceAll("잡았어요.", "잡았어.")
    .replaceAll("옮겼어요.", "옮겼어.")
    .replaceAll("연결했어요.", "연결했어.")
    .replaceAll("않았어요.", "않았어.")
    .replaceAll("넣었어요.", "넣었어.")
    .replaceAll("남겼어요.", "남겼어.")
    .replaceAll("구성했어요.", "구성했어.")
    .replaceAll("바꿨어요.", "바꿨어.")
    .replaceAll("이에요.", "임.")
    .replaceAll("예요.", "임.")
    .replaceAll("있어요.", "있어.")
    .replaceAll("없어요.", "없어.")
    .replaceAll("돌아와요.", "돌아와.")
    .replaceAll("어려워요.", "어려워.")
    .replaceAll("먹어요.", "먹어.")
    .replaceAll("구경해요.", "구경하자.")
    .replaceAll("보내요.", "보내자.")
    .replaceAll("커요.", "커.")
    .replaceAll("쉬어가요.", "쉬어가.")
    .replaceAll("미끄러워요.", "미끄러워.")
    .replaceAll("머물러요.", "머물러.")
    .replaceAll("높아요.", "높아.")
    .replaceAll("안전해요.", "안전해.")
    .replaceAll("잡아요.", "잡아.")
    .replaceAll("바꿔요.", "바꿔.")
    .replaceAll("들러요.", "들러.")
    .replaceAll("걸어요.", "걸어.")
    .replaceAll("내려요.", "내려.")
    .replaceAll("말려요.", "말려.")
    .replaceAll("마쳐요.", "마쳐.")
    .replaceAll("포장해요.", "포장하자.")
    .replaceAll("출발해요.", "출발하자.")
    .replaceAll("이동해요.", "이동하자.")
    .replaceAll("확인해요.", "한번 보자.")
    .replaceAll("방문해요.", "가자.")
    .replaceAll("선택해요.", "고르자.")
    .replaceAll("촬영해요.", "사진 찍자.")
    .replaceAll("정리해요.", "정리하자.")
    .replaceAll("조심해요.", "조심해.")
    .replaceAll("안내해요.", "안내해.")
    .replaceAll("시작해요.", "시작해.")
    .replaceAll("마무리해요.", "마무리해.")
    .replaceAll("갱신해요.", "새로 봐.")
    .replaceAll("해요.", "해.")
    .replaceAll("이야.", "임.")
    .replaceAll("후보야.", "후보임.")
    .replaceAll("카페야.", "카페임.")
    .replaceAll("코스야.", "코스임.")
    .replaceAll("할 수 있어.", "할 수 있음.")
    .replaceAll("수 있어.", "수 있음.")
    .replaceAll("있어.", "있음.")
    .replaceAll("없어.", "없음.")
    .replaceAll("해야 해.", "해야 함.")
    .replaceAll("가자.", "가기!")
    .replaceAll("보자.", "보기!")
    .replaceAll("하자.", "하기!")
    .replaceAll("고르면 돼.", "하나 고르기!")
    .replaceAll("들르자.", "들르기!")
    .replaceAll("머물자.", "머물기!")
    .replaceAll("바꾸자.", "변경하기!")
    .replaceAll("포장하자.", "포장하기!")
    .replaceAll("출발하자.", "출발하기!")
    .replaceAll("이동하자.", "이동하기!")
    .replaceAll("정리하자.", "정리하기!")
    .replaceAll("사진 찍자.", "사진찍기!");
}

function travelCategory(value) {
  return travelVoice(value).replaceAll("처음 계획", "노랑양말 픽").replaceAll("고정 일정", "꼭 할 것");
}

let mascotToastTimer;

function reactHangyodon(reaction = "pop") {
  const hero = document.querySelector(".hangyodon-hero");
  const floater = document.querySelector("#hangyodonFloater");
  [hero, floater].forEach(element => {
    if (!element) return;
    element.classList.remove("reaction-pop", "reaction-rain", "reaction-done");
    void element.offsetWidth;
    element.classList.add(`reaction-${reaction}`);
  });
}

function showMascotToast(message) {
  const toast = document.querySelector("#hangyodonToast");
  const text = document.querySelector("#hangyodonToastText");
  if (!toast || !text) return;
  window.clearTimeout(mascotToastTimer);
  text.textContent = message;
  toast.classList.add("show");
  mascotToastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderTimeline() {
  const plan = getActivePlan();
  const day = plan[activeDay];
  const dayLabels = activePlanVersion === "a"
    ? ["공항에서 삼달리까지", "노랑양말이 처음 찜한 곳", "아침 먹고 공항으로"]
    : isRainPlan()
      ? ["공항에서 삼달리까지", activeRainCourse === "a" ? "삼달리와 성산 A 코스" : "성산 완전 실내 B 코스", "삼달리에서 공항까지"]
      : ["제주시에서 삼달리까지", "동쪽 해안과 삼달리", "삼달리에서 공항까지"];
  timeline.innerHTML = `
    <header class="timeline-day-header">
      <span>${activeDay}일차</span>
      <div><small>8월 ${15 + activeDay}일</small><strong>${dayLabels[activeDay - 1]}</strong></div>
      <em>${day.items.length}곳</em>
    </header>` + day.items.map((item, index) => {
    const id = getProgressKey(activeDay, index);
    const isDone = Boolean(completed[id]);
    return `
      <article class="timeline-item">
        <time class="time">${item.time}</time>
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="place-card ${isDone ? "completed" : ""} ${item.alert ? "needs-attention" : ""}">
          <div>
            <div class="place-topline"><span class="category">${travelCategory(item.category)}</span><h3>${item.name}</h3></div>
            <p>${travelVoice(item.description)}</p>
            <div class="place-meta">${item.meta.map(value => `<span>${travelVoice(value)}</span>`).join("")}</div>
          </div>
          <div class="place-actions">
            ${item.link === false ? '<span class="map-link disabled">상호 확인</span>' : `<a class="map-link" href="${mapUrl(item.query)}" target="_blank" rel="noreferrer">지도 열기</a>`}
            <button class="check-button" type="button" data-item-id="${id}" data-item-name="${escapeHtml(item.name)}" aria-label="${item.name} 완료 표시">${isDone ? "✓" : ""}</button>
          </div>
        </div>
      </article>`;
  }).join("") + `<div class="timeline-note">${travelVoice(day.note)}</div>`;

  timeline.querySelectorAll(".check-button").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.itemId;
      completed[id] = !completed[id];
      localStorage.setItem(stateKey, JSON.stringify(completed));
      if (completed[id]) {
        reactHangyodon("done");
        showMascotToast(`${button.dataset.itemName} 체크 완료!`);
      } else {
        showMascotToast(`${button.dataset.itemName} 체크 취소함`);
      }
      renderTimeline();
      updateProgress();
    });
  });
}

function stableOffset(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) hash = ((hash << 5) - hash) + value.charCodeAt(index);
  return [((Math.abs(hash) % 101) / 100 - .5) * .13, ((Math.abs(hash >> 7) % 101) / 100 - .5) * .09];
}

function getPlaceCoordinates(item, index = 0) {
  if (exactPlaceCoordinates[item.name]) return exactPlaceCoordinates[item.name];
  const anchor = regionAnchors[item.region] || [126.53, 33.37];
  const [lngOffset, latOffset] = stableOffset(`${item.name}-${index}`);
  return [anchor[0] + lngOffset, anchor[1] + latOffset];
}

function getActivePlan() {
  if (activePlanVersion === "a") return planAItinerary;
  return activeMode === "rain" ? rainItineraries[activeRainCourse] : itinerary;
}

function isRainPlan() {
  return activePlanVersion === "b" && activeMode === "rain";
}

function getProgressKey(day, index) {
  if (activePlanVersion === "a") return `plan-a-${day}-${index}`;
  if (activeMode === "rain") return activeRainCourse === "b" && day === 2 ? `rain-b-${day}-${index}` : `rain-${day}-${index}`;
  return `${day}-${index}`;
}

function getMappableDay() {
  const day = getActivePlan()[activeDay];
  return { ...day, items: day.items.filter(item => item.map !== false) };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

const fallbackPlaceImages = {
  cafe: "./assets/jeju/tangerine.webp",
  food: "./assets/jeju/coast.webp",
  spot: "./assets/jeju/saryeoni.webp"
};

function getPlacePreview(item) {
  const naver = window.NAVER_PLACE_DATA?.[item.name] || {};
  return {
    image: naver.image || fallbackPlaceImages[item.kind] || "./jeju-cover.webp",
    imageFallback: fallbackPlaceImages[item.kind] || "./jeju-cover.webp",
    imageAlt: naver.image ? `${item.name} 네이버 대표 이미지` : `${item.name} 제주 대체 이미지`,
    isNaverImage: Boolean(naver.image),
    description: naver.summary || travelVoice(item.description),
    url: naver.url || mapUrl(item.query)
  };
}

function placePreviewCard(item) {
  const preview = getPlacePreview(item);
  const kindLabel = placeKindMeta[item.kind].label;
  return `<article class="place-preview-card kind-${item.kind}">
    <img src="${escapeHtml(preview.image)}" data-fallback-src="${escapeHtml(preview.imageFallback)}" alt="${escapeHtml(preview.imageAlt)}" loading="lazy" />
    <div>
      <span>${kindLabel}${preview.isNaverImage ? " · 네이버 대표 사진" : " · 대체 사진"}</span>
      <strong>${escapeHtml(item.name)}</strong>
      <p>${escapeHtml(preview.description)}</p>
      <a href="${escapeHtml(preview.url)}" target="_blank" rel="noreferrer">네이버 지도에서 보기 <b>↗</b></a>
    </div>
  </article>`;
}

document.addEventListener("error", event => {
  const image = event.target.closest?.("img[data-fallback-src]");
  if (!image || image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = image.dataset.fallbackSrc;
  image.alt = image.alt.replace("네이버 대표 이미지", "제주 대체 이미지");
}, true);

function ensureTrekMap() {
  if (trekMap) return true;
  if (!window.L) {
    document.querySelector("#jejuMap").innerHTML = '<p class="map-load-error">지도가 잠깐 숨었어. 페이지를 다시 열어줘.</p>';
    return false;
  }
  trekMap = L.map("jejuMap", {
    center: [33.38, 126.54],
    zoom: 9,
    zoomControl: false,
    scrollWheelZoom: false
  });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    keepBuffer: 8,
    updateWhenZooming: false,
    updateWhenIdle: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO'
  }).addTo(trekMap);
  L.control.zoom({ position: "bottomleft" }).addTo(trekMap);
  trekMapLayers = L.layerGroup().addTo(trekMap);
  setTimeout(() => trekMap.invalidateSize(), 0);
  return true;
}

function ensurePlacesMap() {
  if (placesMap) return true;
  if (!window.L) {
    document.querySelector("#placesMap").innerHTML = '<p class="map-load-error">지도가 잠깐 숨었어. 페이지를 다시 열어줘.</p>';
    return false;
  }
  placesMap = L.map("placesMap", {
    center: [33.38, 126.54],
    zoom: 9,
    zoomControl: false,
    scrollWheelZoom: false
  });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    keepBuffer: 8,
    updateWhenZooming: false,
    updateWhenIdle: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO'
  }).addTo(placesMap);
  L.control.zoom({ position: "bottomleft" }).addTo(placesMap);
  setTimeout(() => placesMap.invalidateSize(), 0);
  return true;
}

const mapMarkerMeta = {
  cafe: { label: "카페", icon: "./assets/icons/map-cafe.svg" },
  food: { label: "식당", icon: "./assets/icons/map-food.svg" },
  spot: { label: "가볼 만한 곳", icon: "./assets/icons/map-spot.svg" },
  stay: { label: "숙소", icon: "./assets/icons/map-stay.svg" },
  transport: { label: "이동", icon: "./assets/icons/map-transport.svg" }
};

function getRouteMarkerKind(item) {
  const identity = `${item.name} ${item.category}`;
  if (/공항|렌트|렌터카|셔틀|반납/.test(identity)) return "transport";
  if (/숙소|체크인|체크아웃/.test(identity)) return "stay";
  if (/카페|커피|디저트|베이커리|브런치|빵|간식/.test(identity)) return "cafe";
  if (/아침|점심|저녁|식사|식당|국수|우동|갈치|흑돼지|고기|김밥|해장국|회|전복/.test(identity)) return "food";
  return "spot";
}

function markerSymbol(kind) {
  const marker = mapMarkerMeta[kind] || mapMarkerMeta.spot;
  return `<img class="trek-place-symbol" src="${marker.icon}" alt="" aria-hidden="true" />`;
}

function routeMarkerIcon(item, index, selected = false) {
  const kind = getRouteMarkerKind(item);
  const size = selected ? 48 : 40;
  return L.divIcon({
    className: "trek-marker-wrapper",
    html: `<div class="trek-place-marker route-place-marker kind-${kind} ${selected ? "selected" : ""}" style="width:${size}px;height:${size}px">${markerSymbol(kind)}<span class="trek-order-badge">${index + 1}</span></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2)]
  });
}

function clusterPlaceIcon(item) {
  return L.divIcon({
    className: "trek-marker-wrapper",
    html: `<div class="trek-place-marker cluster-place-marker kind-${item.kind}">${markerSymbol(item.kind)}</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });
}

function clearTrekMapLayers() {
  cancelAnimationFrame(routeAnimationFrame);
  routeAnimationFrame = null;
  routeMarkers = [];
  routeTravelerMarker = null;
  trekMapLayers?.clearLayers();
}

function renderRouteView() {
  if (!ensureTrekMap()) return;
  clearTrekMapLayers();
  const day = getMappableDay();
  const latLngs = day.items.map((item, index) => {
    const [lng, lat] = getPlaceCoordinates(item, index);
    return [lat, lng];
  });
  if (latLngs.length > 1) {
    L.polyline(latLngs, { color: "#0a5cc2", weight: 8, opacity: 1, lineCap: "round", lineJoin: "round", interactive: false, className: "trek-route-casing" }).addTo(trekMapLayers);
    L.polyline(latLngs, { color: "#0a84ff", weight: 5, opacity: 1, lineCap: "round", lineJoin: "round", interactive: false, className: "trek-route-core" }).addTo(trekMapLayers);
  }
  routeMarkers = day.items.map((item, index) => {
    const marker = L.marker(latLngs[index], { icon: routeMarkerIcon(item, index, index === 0), title: item.name, riseOnHover: true, keyboard: true })
      .addTo(trekMapLayers)
      .bindTooltip(item.name, { direction: "top", offset: [0, -18], className: "map-tooltip", opacity: 1 })
      .on("click", () => selectMapStop(index));
    return { marker, item, index, latLng: latLngs[index] };
  });
  routeTravelerMarker = L.marker(latLngs[0], {
    icon: L.divIcon({ className: "trek-traveler-wrapper", html: '<div class="trek-traveler"><span></span></div>', iconSize: [34, 34], iconAnchor: [17, 17] }),
    interactive: false,
    zIndexOffset: 2000
  }).addTo(trekMapLayers);
  const bounds = L.latLngBounds(latLngs);
  if (bounds.isValid()) trekMap.fitBounds(bounds, { padding: [48, 48], maxZoom: 12, animate: true });
  renderRouteInsight(day, 0);
}

function renderRouteInsight(day, activeIndex) {
  const activeItem = day.items[activeIndex];
  document.querySelector("#mapInsightPanel").innerHTML = `
    <div class="map-panel-topline"><span>${activePlanVersion === "a" ? "노랑양말 픽" : isRainPlan() ? "비 주륵주륵" : "해 짱짱"}</span><b>${day.items.length}곳</b></div>
    <div class="active-stop-card">
      <span class="active-stop-number">${String(activeIndex + 1).padStart(2, "0")}</span>
      <div><small>${activeItem.time} / ${travelCategory(activeItem.category)}</small><h3>${activeItem.name}</h3><p>${travelVoice(activeItem.description)}</p><a class="active-stop-map-link" href="${mapUrl(activeItem.query)}" target="_blank" rel="noreferrer">네이버 지도에서 길찾기 ↗</a></div>
    </div>
    <ol class="map-stop-list">
      ${day.items.map((item, index) => `<li class="${index === activeIndex ? "active" : ""}" data-panel-stop="${index}"><button type="button"><span>${index + 1}</span><div><strong>${item.name}</strong><small>${item.time}</small></div></button></li>`).join("")}
    </ol>`;
  document.querySelectorAll("[data-panel-stop]").forEach(row => row.querySelector("button").addEventListener("click", () => selectMapStop(Number(row.dataset.panelStop))));
}

function selectMapStop(index, { fromAnimation = false, pan = true } = {}) {
  if (!fromAnimation) {
    cancelAnimationFrame(routeAnimationFrame);
    document.querySelector("#mapPlayButton").innerHTML = "<span>↻</span> 다시 가볼까";
  }
  const day = getMappableDay();
  routeMarkers.forEach(entry => {
    entry.marker.setIcon(routeMarkerIcon(entry.item, entry.index, entry.index === index));
    entry.marker.setZIndexOffset(entry.index === index ? 1000 : 0);
  });
  renderRouteInsight(day, index);
  const selected = routeMarkers[index];
  if (!selected) return;
  if (!fromAnimation) routeTravelerMarker?.setLatLng(selected.latLng);
  if (pan) trekMap?.panTo(selected.latLng, { animate: true, duration: .25 });
}

function startRouteAnimation() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return selectMapStop(0);
  cancelAnimationFrame(routeAnimationFrame);
  if (!trekMap || !routeTravelerMarker || routeMarkers.length < 2) return;
  const points = routeMarkers.map(entry => L.latLng(entry.latLng));
  const segmentLengths = points.slice(1).map((point, index) => trekMap.distance(points[index], point));
  const totalLength = segmentLengths.reduce((sum, length) => sum + length, 0);
  const stopCount = routeMarkers.length;
  const duration = Math.max(5200, stopCount * 820);
  const startedAt = performance.now();
  let lastStop = -1;
  const playButton = document.querySelector("#mapPlayButton");
  playButton.innerHTML = "<span>■</span> 가는 중";
  const move = now => {
    const progress = Math.min((now - startedAt) / duration, 1);
    let remaining = totalLength * progress;
    let segmentIndex = 0;
    while (segmentIndex < segmentLengths.length - 1 && remaining > segmentLengths[segmentIndex]) {
      remaining -= segmentLengths[segmentIndex];
      segmentIndex += 1;
    }
    const segmentProgress = segmentLengths[segmentIndex] ? remaining / segmentLengths[segmentIndex] : 0;
    const start = points[segmentIndex];
    const end = points[segmentIndex + 1];
    routeTravelerMarker.setLatLng([start.lat + (end.lat - start.lat) * segmentProgress, start.lng + (end.lng - start.lng) * segmentProgress]);
    const stopIndex = Math.min(stopCount - 1, Math.round(progress * (stopCount - 1)));
    if (stopIndex !== lastStop) {
      lastStop = stopIndex;
      selectMapStop(stopIndex, { fromAnimation: true, pan: false });
    }
    if (progress < 1) routeAnimationFrame = requestAnimationFrame(move);
    else playButton.innerHTML = "<span>↻</span> 다시 가볼까";
  };
  routeAnimationFrame = requestAnimationFrame(move);
}

function getPlacesMapSource() {
  return getAllRecommendationSource().filter(item => {
    const matchesRegion = activePlacesMapRegion === "all" || item.region === activePlacesMapRegion;
    const matchesKind = activePlacesMapKind === "all" || item.kind === activePlacesMapKind;
    return matchesRegion && matchesKind;
  });
}

function renderPlacesMapInsight(source, selectedItems = []) {
  const panel = document.querySelector("#placesMapInsightPanel");
  if (!source.length) {
    panel.innerHTML = `
      <div class="map-panel-topline"><span>검색 결과</span><b>0곳</b></div>
      <h3 class="cluster-panel-title">여기에는 저장한 곳이 없어</h3>
      <p class="cluster-panel-copy">지역이나 종류를 다르게 골라봐.</p>`;
    return;
  }
  if (selectedItems.length) {
    panel.innerHTML = `
      <div class="map-panel-topline"><span>선택한 지역</span><b>${selectedItems.length}곳</b></div>
      <h3 class="cluster-panel-title">이 근처 ${selectedItems.length}곳</h3>
      <p class="cluster-panel-copy">사진이랑 설명 확인하고 네이버 지도로 바로 열면 돼.</p>
      <div class="place-preview-list">${selectedItems.slice(0, 12).map(placePreviewCard).join("")}</div>`;
    return;
  }
  panel.innerHTML = `
    <div class="map-panel-topline"><span>저장한 장소</span><b>${source.length}곳</b></div>
    <h3 class="cluster-panel-title">제주 곳곳에 모아뒀어</h3>
    <p class="cluster-panel-copy">SVG 아이콘을 누르면 근처 장소가 펼쳐져. 카페랑 식당이랑 가볼 만한 곳을 모양이랑 색으로 나눠놨어.</p>
    <div class="region-counts">${Object.entries({ east: "동쪽", west: "서쪽", south: "서귀포", airport: "공항 근처" }).map(([region, label]) => `<div><span>${label}</span><strong>${source.filter(item => item.region === region).length}</strong></div>`).join("")}</div>`;
}

function renderPlacesMap() {
  if (activeAppTab !== "map" || !ensurePlacesMap()) return;
  if (placesClusterLayer) placesMap.removeLayer(placesClusterLayer);
  const source = getPlacesMapSource();
  document.querySelector("#placesMapCount").textContent = `${source.length}곳`;
  if (!source.length) {
    placesClusterLayer = null;
    placesMap.setView([33.38, 126.54], 9, { animate: true });
    renderPlacesMapInsight(source);
    return;
  }
  placesClusterLayer = L.markerClusterGroup({
    chunkedLoading: true,
    chunkInterval: 30,
    chunkDelay: 0,
    maxClusterRadius: 30,
    disableClusteringAtZoom: 11,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    animate: true,
    iconCreateFunction: cluster => {
      const count = cluster.getChildCount();
      const size = count < 10 ? 36 : count < 50 ? 42 : 48;
      return L.divIcon({ html: `<div class="marker-cluster-custom" style="width:${size}px;height:${size}px"><img src="./assets/icons/map-cluster.svg" alt="" aria-hidden="true" /><span>${count}</span></div>`, className: "marker-cluster-wrapper", iconSize: L.point(size, size) });
    }
  });
  const latLngs = [];
  source.forEach(item => {
    const preview = getPlacePreview(item);
    const [lng, lat] = getPlaceCoordinates(item);
    latLngs.push([lat, lng]);
    const marker = L.marker([lat, lng], { icon: clusterPlaceIcon(item), title: item.name, riseOnHover: true, keyboard: true });
    marker._trekItem = item;
    marker.bindTooltip(item.name, { direction: "top", offset: [0, -18], className: "map-tooltip", opacity: 1 });
    marker.bindPopup(`<div class="trek-map-popup-card place-popup-card"><img src="${escapeHtml(preview.image)}" data-fallback-src="${escapeHtml(preview.imageFallback)}" alt="${escapeHtml(preview.imageAlt)}" /><small>${escapeHtml(item.tags.join(" / "))}</small><strong>${escapeHtml(item.name)}</strong><p>${escapeHtml(preview.description)}</p><a href="${escapeHtml(preview.url)}" target="_blank" rel="noreferrer">네이버 지도에서 보기 ↗</a></div>`, { className: "trek-map-popup", maxWidth: 280 });
    marker.on("click", () => renderPlacesMapInsight(source, [item]));
    placesClusterLayer.addLayer(marker);
  });
  placesClusterLayer.on("clusterclick", event => renderPlacesMapInsight(source, event.layer.getAllChildMarkers().map(marker => marker._trekItem).filter(Boolean)));
  placesMap.addLayer(placesClusterLayer);
  const bounds = L.latLngBounds(latLngs);
  if (bounds.isValid()) placesMap.fitBounds(bounds, { padding: [46, 46], maxZoom: 10, animate: true });
  renderPlacesMapInsight(source);
}

function renderTripMap() {
  document.querySelector("#mapDayChip").textContent = `${activeDay}일차`;
  if (activeAppTab !== "route") return;
  renderRouteView();
}

function updateProgress() {
  const plan = getActivePlan();
  const total = Object.values(plan).reduce((sum, day) => sum + day.items.length, 0);
  const done = Object.entries(completed).filter(([key, value]) => {
    if (!value) return false;
    if (activePlanVersion === "a") return key.startsWith("plan-a-");
    if (activeMode === "rain") {
      return activeRainCourse === "a"
        ? /^rain-[123]-/.test(key)
        : key.startsWith("rain-1-") || key.startsWith("rain-3-") || key.startsWith("rain-b-2-");
    }
    return !key.startsWith("rain-") && !key.startsWith("plan-a-");
  }).length;
  progressText.textContent = `${done} / ${total} 완료`;
  progressBar.style.width = `${(done / total) * 100}%`;
}

function setPlanVersion(version) {
  activePlanVersion = version;
  localStorage.setItem(planVersionKey, version);
  document.querySelectorAll("[data-plan-version]").forEach(button => {
    const isActive = button.dataset.planVersion === version;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-plan-b-control]").forEach(control => { control.hidden = version === "a"; });
  setPlanMode(activeMode);
}

function setPlanMode(mode) {
  activeMode = mode;
  localStorage.setItem(modeKey, mode);
  const rainActive = isRainPlan();
  document.querySelector(".trek-page").classList.toggle("rain-mode", rainActive);
  document.querySelectorAll("[data-plan-mode]").forEach(button => {
    const isActive = button.dataset.planMode === mode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll("[data-rain-course]").forEach(button => {
    const isActive = button.dataset.rainCourse === activeRainCourse;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelector("#heroStatusText").textContent = activePlanVersion === "a" ? "노랑양말 픽" : rainActive ? "비 주륵주륵" : "해 짱짱";
  document.querySelector(".hangyodon-bubble").textContent = activePlanVersion === "a"
    ? "제주 워크숍을 가보자"
    : rainActive
      ? "비오면 실내로 변경!"
      : "제주 워크숍을 가보자!";
  reactHangyodon(rainActive ? "rain" : "pop");
  document.querySelector("#planTitle").textContent = activePlanVersion === "a"
    ? "노랑양말이 짠 제주"
    : rainActive
      ? `비오는 날 ${activeRainCourse.toUpperCase()} 코스`
      : "비오는 날 픽";
  document.querySelector("#planDescription").textContent = activePlanVersion === "a"
    ? ""
    : rainActive
      ? activeRainCourse === "a"
        ? "보슬비면 두모악부터 오른까지 여유롭게!"
        : "비가 왕창 오면 아쿠아플라넷과 빛의 벙커만!"
      : "도착 시간이랑 숙소 기준으로 다시 정리한 일정!";
  document.querySelector("#weatherSummary").textContent = rainActive ? "비 주륵주륵" : "해 짱짱 제주";
  document.querySelector("#weatherDetail").textContent = rainActive ? "비바람 세면 실내로 변경" : "덥고 습하니까 물 꼭 챙기기";
  document.querySelector("#focusSummary").textContent = "삼달리 우리 집";
  document.querySelector("#focusDetail").textContent = activePlanVersion === "a"
    ? "시간 안 맞는건 노랗게"
    : rainActive
      ? activeRainCourse === "a" ? "동쪽 실내 네 곳" : "완전 실내 두 곳"
      : "동쪽 위주로 이동";
  document.querySelector("#recommendationTitle").textContent = rainActive ? "비와도 갈만함!" : "여기도 갈만함!";
  document.querySelector("#recommendationDescription").textContent = rainActive ? "비 멈추면 야외 추가하고 많이오면 실내로 변경!" : "근처 지나갈 때 하나씩 보기. 걸리는 시간도 적어둠!";
  const dayDescriptions = activePlanVersion === "a"
    ? ["공항에서 삼달리까지", "노랑양말이 처음 찜한 곳", "아침 먹고 공항으로"]
    : rainActive
      ? ["공항에서 삼달리까지", activeRainCourse === "a" ? "삼달리와 성산 A 코스" : "성산 완전 실내 B 코스", "삼달리에서 공항까지"]
      : ["제주시에서 삼달리까지", "동쪽 해안과 삼달리", "삼달리에서 공항까지"];
  document.querySelectorAll(".day-tab > div > small").forEach((element, index) => { element.textContent = dayDescriptions[index]; });
  const activePlan = getActivePlan();
  document.querySelectorAll(".day-tab-count").forEach((element, index) => { element.textContent = `${activePlan[index + 1].items.length}곳`; });
  const quickLinks = document.querySelector("#quickLinks");
  quickLinks.innerHTML = rainActive ? `
    <div class="side-card-title"><span>${activeRainCourse.toUpperCase()} 코스 바로 열기</span></div>
    <a href="${mapUrl(activeRainCourse === "a" ? "김영갑갤러리 두모악" : "제주 아쿠아플라넷")}" target="_blank" rel="noreferrer"><div><strong>${activeRainCourse === "a" ? "김영갑갤러리 두모악" : "아쿠아플라넷 제주"}</strong><small>${activeRainCourse === "a" ? "첫 번째 장소" : "완전 실내"}</small></div><b>↗</b></a>
    <a href="${mapUrl("빛의 벙커 제주")}" target="_blank" rel="noreferrer"><div><strong>빛의 벙커</strong><small>${activeRainCourse === "a" ? "15시 회차" : "14시 10분 회차"}</small></div><b>↗</b></a>
    <a href="${mapUrl(lodging.query)}" target="_blank" rel="noreferrer"><div><strong>삼달리 숙소</strong><small>2박 고정</small></div><b>↗</b></a>` : `
    <div class="side-card-title"><span>급할 때 여기</span></div>
    <a href="${mapUrl("제주국제공항")}" target="_blank" rel="noreferrer"><div><strong>제주공항</strong><small>지도에서 보기</small></div><b>↗</b></a>
    <a href="${mapUrl("안친오름")}" target="_blank" rel="noreferrer"><div><strong>안친오름</strong><small>입장 여부 확인</small></div><b>↗</b></a>
    <a href="${mapUrl(lodging.query)}" target="_blank" rel="noreferrer"><div><strong>삼달리 숙소</strong><small>2박 고정</small></div><b>↗</b></a>`;
  document.querySelectorAll(".filter-button").forEach((button, index) => button.classList.toggle("active", index === 0));
  document.querySelectorAll(".place-type-button").forEach((button, index) => button.classList.toggle("active", index === 0));
  activeRecommendationFilter = "all";
  activeRecommendationType = "all";
  recommendationLimit = 9;
  renderTimeline();
  renderRecommendations();
  updateProgress();
  renderTripMap();
}

document.querySelectorAll(".plan-mode-button").forEach(button => {
  button.addEventListener("click", () => setPlanMode(button.dataset.planMode));
});

document.querySelectorAll(".map-plan-button").forEach(button => {
  button.addEventListener("click", () => setPlanMode(button.dataset.planMode));
});

document.querySelectorAll("[data-rain-course]").forEach(button => {
  button.addEventListener("click", () => {
    activeRainCourse = button.dataset.rainCourse === "b" ? "b" : "a";
    localStorage.setItem(rainCourseKey, activeRainCourse);
    setPlanMode("rain");
  });
});

document.querySelectorAll("[data-plan-version]").forEach(button => {
  button.addEventListener("click", () => setPlanVersion(button.dataset.planVersion));
});

function setActiveDay(day) {
  activeDay = Number(day);
  localStorage.setItem(dayKey, String(activeDay));
  document.querySelectorAll(".day-tab").forEach(item => {
    const isActive = Number(item.dataset.day) === activeDay;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });
  document.querySelectorAll(".map-day-button").forEach(item => {
    const isActive = Number(item.dataset.mapDay) === activeDay;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });
  renderTimeline();
  renderTripMap();
}

document.querySelectorAll(".day-tab").forEach(tab => {
  tab.addEventListener("click", () => setActiveDay(tab.dataset.day));
});

document.querySelectorAll(".map-day-button").forEach(button => {
  button.addEventListener("click", () => setActiveDay(button.dataset.mapDay));
});

document.querySelectorAll("[data-map-region]").forEach(button => {
  button.addEventListener("click", () => {
    activePlacesMapRegion = button.dataset.mapRegion;
    document.querySelectorAll("[data-map-region]").forEach(item => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderPlacesMap();
  });
});

document.querySelectorAll("[data-map-kind]").forEach(button => {
  button.addEventListener("click", () => {
    activePlacesMapKind = button.dataset.mapKind;
    document.querySelectorAll("[data-map-kind]").forEach(item => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderPlacesMap();
  });
});

document.querySelector("#placesMapExpandButton")?.addEventListener("click", event => {
  setPlacesMapExpanded(event.currentTarget.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.body.classList.contains("places-map-open")) {
    setPlacesMapExpanded(false);
    document.querySelector("#placesMapExpandButton")?.focus();
  }
});

document.querySelector("#mapPlayButton").addEventListener("click", startRouteAnimation);

function renderRecommendations(filter = activeRecommendationFilter) {
  activeRecommendationFilter = filter;
  const source = getRecommendationSource();
  const cards = source.filter(item => (filter === "all" || item.region === filter) && (activeRecommendationType === "all" || item.kind === activeRecommendationType));
  const visibleCards = cards.slice(0, recommendationLimit);
  document.querySelector("#recommendationGrid").innerHTML = visibleCards.map((item, index) => {
    const kindLabel = placeKindMeta[item.kind].label;
    const tags = [kindLabel, ...item.tags.filter(tag => tag !== kindLabel)];
    const preview = getPlacePreview(item);
    return `
    <article class="recommendation-card kind-${item.kind}" data-number="${String(index + 1).padStart(2, "0")}">
      <img class="recommendation-image" src="${escapeHtml(preview.image)}" data-fallback-src="${escapeHtml(preview.imageFallback)}" alt="${escapeHtml(preview.imageAlt)}" loading="lazy" />
      <div class="recommendation-tags">${tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <h3>${item.name}</h3>
      <p>${escapeHtml(preview.description)}</p>
      <div class="recommendation-footer">
        <span>${item.detour} / ${item.time}</span>
        <div>
          <a href="${item.source || mapUrl(item.query)}" target="_blank" rel="noreferrer" aria-label="${item.name} 여행 정보">정보</a>
          <a href="${escapeHtml(preview.url)}" target="_blank" rel="noreferrer">네이버 지도</a>
        </div>
      </div>
    </article>`;
  }).join("");
  const remaining = Math.max(0, cards.length - visibleCards.length);
  document.querySelector("#recommendationCount").textContent = `찜한 곳 ${cards.length}개 중 ${visibleCards.length}개 꺼내봄`;
  const moreButton = document.querySelector("#recommendationMoreButton");
  document.querySelector(".recommendation-more").hidden = cards.length <= 9;
  moreButton.hidden = cards.length <= 9;
  moreButton.textContent = remaining > 0 ? `${remaining}곳 더 볼래` : "조금만 볼래";
}

const allPlacesRegionLabels = { east: "동쪽", south: "서귀포", west: "서쪽", airport: "공항 근처" };

function renderAllPlaces() {
  const searchInput = document.querySelector("#allPlacesSearch");
  const regionFilter = document.querySelector("#allPlacesRegion");
  const kindFilter = document.querySelector("#allPlacesKind");
  if (!searchInput || !regionFilter || !kindFilter) return;
  const keyword = searchInput.value.trim().toLowerCase();
  const source = getAllRecommendationSource();
  const filtered = source.filter(item => {
    const matchesSearch = !keyword || `${item.name} ${item.tags.join(" ")} ${item.detour}`.toLowerCase().includes(keyword);
    const matchesRegion = regionFilter.value === "all" || item.region === regionFilter.value;
    const matchesKind = kindFilter.value === "all" || item.kind === kindFilter.value;
    return matchesSearch && matchesRegion && matchesKind;
  });
  document.querySelector("#allPlacesTotal").textContent = `전체 ${source.length}곳`;
  document.querySelector("#allPlacesResult").textContent = keyword || regionFilter.value !== "all" || kindFilter.value !== "all"
    ? `${filtered.length}곳 찾았어`
    : `카페 ${source.filter(item => item.kind === "cafe").length} / 맛집 ${source.filter(item => item.kind === "food").length} / 명소 ${source.filter(item => item.kind === "spot").length}`;
  document.querySelector("#allPlacesGroups").innerHTML = Object.entries(allPlacesRegionLabels).map(([region, label]) => {
    const items = filtered.filter(item => item.region === region);
    if (!items.length) return "";
    return `<section class="all-place-group"><header><h3>${label}</h3><span>${items.length}곳</span></header><div class="all-place-list">${items.map(item => {
      const kindLabel = placeKindMeta[item.kind].label;
      const preview = getPlacePreview(item);
      return `<a class="all-place-row kind-${item.kind}" href="${escapeHtml(preview.url)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(preview.image)}" data-fallback-src="${escapeHtml(preview.imageFallback)}" alt="" loading="lazy" /><span>${kindLabel}</span><div><strong>${item.name}</strong><small>${escapeHtml(preview.description)}</small></div><b>네이버 ↗</b></a>`;
    }).join("")}</div></section>`;
  }).join("") || `<div class="all-places-empty"><strong>검색 결과가 없어</strong><p>이름을 조금만 짧게 써봐!</p></div>`;
}

document.querySelectorAll("#allPlacesSearch, #allPlacesRegion, #allPlacesKind").forEach(control => {
  control.addEventListener("input", renderAllPlaces);
  control.addEventListener("change", renderAllPlaces);
});

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.classList.toggle("active", item === button));
    recommendationLimit = 9;
    renderRecommendations(button.dataset.filter);
  });
});

document.querySelectorAll(".place-type-button").forEach(button => {
  button.addEventListener("click", () => {
    activeRecommendationType = button.dataset.placeType;
    document.querySelectorAll(".place-type-button").forEach(item => item.classList.toggle("active", item === button));
    recommendationLimit = 9;
    renderRecommendations();
  });
});

document.querySelector("#recommendationMoreButton").addEventListener("click", () => {
  const source = getRecommendationSource();
  const total = source.filter(item => (activeRecommendationFilter === "all" || item.region === activeRecommendationFilter) && (activeRecommendationType === "all" || item.kind === activeRecommendationType)).length;
  recommendationLimit = recommendationLimit < total ? total : 9;
  renderRecommendations();
});

const hangyodonFloater = document.querySelector("#hangyodonFloater");
const hangyodonFloaterBubble = document.querySelector("#hangyodonFloaterBubble");
const mascotTips = [
  "일정 체크하면 여기서 알려줌!",
  "지도 탭에서 3일치 동선 보기!",
  "비오면 비 주륵주륵 누르기!"
];
let mascotTipIndex = 0;

hangyodonFloater?.addEventListener("click", () => {
  mascotTipIndex = (mascotTipIndex + 1) % mascotTips.length;
  hangyodonFloaterBubble.textContent = mascotTips[mascotTipIndex];
  hangyodonFloater.classList.toggle("bubble-open", true);
  hangyodonFloater.setAttribute("aria-expanded", "true");
  reactHangyodon("pop");
  window.setTimeout(() => {
    hangyodonFloater.classList.remove("bubble-open");
    hangyodonFloater.setAttribute("aria-expanded", "false");
  }, 2600);
});

initializeAppTabs();
setPlanVersion(activePlanVersion);
setActiveDay(activeDay);
