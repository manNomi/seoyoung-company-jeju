const lodging = {
  name: "삼달리 숙소",
  query: "제주특별자치도 서귀포시 성산읍 삼달하동로32번길 2-1"
};

const planAItinerary = {
  1: {
    note: "서영이가 처음 적어둔건 15시 15분 도착 기준이야. 실제로는 15시 50분 도착이구 시간 안 맞는건 노랗게 해놨어.",
    items: [
      { time: "처음 15:15", name: "제주공항 도착", category: "서영픽", description: "처음에는 15시 15분 도착으로 잡았어. 실제로는 15시 50분 도착이구 렌트카 받고 16시 30분쯤 출발할듯!", meta: ["실제 도착 15:50", "약 35분 차이"], query: "제주국제공항", alert: true },
      { time: "+15분", name: "아베베 베이커리 제주점", category: "서영픽 간식", description: "동문시장 근처에서 빵 포장하는 첫 코스야.", meta: ["이동 15분", "주차랑 대기 생각하기"], query: "아베베베이커리 제주" },
      { time: "+28분", name: "우동 카덴", category: "서영픽 식사", description: "17시가 마지막 주문이라 실제 도착 시간에는 못갈듯ㅜㅜ", meta: ["17시 마지막 주문", "우리끼리 픽에서는 뺐어"], query: "우동 카덴 제주", alert: true },
      { time: "+6분", name: "제동목장 입구", category: "서영픽 풍경", description: "목장 코스야. 목장차 지나가는 길은 막지 말고 짧게 보고 가자.", meta: ["이동 6분", "목장 안에는 들어가지 말기"], query: "제주시 조천읍 교래7길 218" },
      { time: "+21분", name: "안친오름", category: "서영픽 자연", description: "사유지 들어가도 되는지랑 일몰 시간은 한번 보고 가야할듯.", meta: ["입장료 1인 5,000원", "해 남았을 때만"], query: "안친오름 제주", alert: true },
      { time: "+20분", name: "픽업커피 행원점", category: "서영픽 카페", description: "18시까지라 실제 도착 시간에는 못갈것 같아.", meta: ["18시까지", "시간 안 맞음"], query: "픽업커피 행원점 제주", alert: true },
      { time: "+39분", name: lodging.name, category: "서영픽 숙소", description: "중간에 숙소 들르는 일정이야. 우리가 묵는 주소로 연결해놨어.", meta: ["2박 같은 숙소", "삼달하동로32번길 2-1"], query: lodging.query },
      { time: "+10분", name: "고래휴게소 표선점", category: "서영픽 저녁", description: "표선쪽에서 저녁 먹는 곳이야.", meta: ["차 타고 이동", "당일 영업 한번 보기"], query: "고래휴게소 표선점" },
      { time: "+10분", name: "책게일주", category: "서영픽 후보", description: "서영이가 적어둔 이름 그대로 옮겼는데 정확한 장소는 못찾았어.", meta: ["덕산리 469", "상호 한번 더 보기"], query: "책게일주 제주 덕산리 469", map: false, link: false, alert: true },
      { time: "+12분", name: "사부작", category: "서영픽 예약", description: "예약제 식당이야. 시간하고 영업일 맞으면 가자.", meta: ["예약 가능", "서영이 픽"], query: "사부작 제주 표선" },
      { time: "+11분", name: lodging.name, category: "서영픽 끝", description: "삼달리 숙소에서 첫날 마무리하자.", meta: ["2박 모두 같은 숙소", "늦으면 체크인 연락하기"], query: lodging.query }
    ]
  },
  2: {
    note: "서영이가 처음 짠건 동쪽이랑 중문이랑 서귀포를 하루에 다 도는 일정이야. 전부 가면 숙소 엄청 늦게 들어갈듯ㅜㅜ 김녕팜랜드 뒤에 동쪽에 더 있을지 중문 갈지 하나만 고르자.",
    items: [
      { time: "10:00", name: "국수마을", category: "아침", description: "서영이가 골라둔 둘째날 첫 밥이야.", meta: ["10시 오픈", "주차 30분 무료"], query: "국수마을 제주" },
      { time: "11:00", name: "여름문구사", category: "소품", description: "세화의 작은 문구점에서 기념품을 구경해요.", meta: ["주차 공간 확인", "당일 영업 확인"], query: "여름문구사 제주" },
      { time: "11:45", name: "픽업커피 행원점", category: "카페", description: "행원 바다 보면서 잠깐 쉬자.", meta: ["서영이 픽", "영업시간 한번 보기"], query: "픽업커피 행원점 제주" },
      { time: "12:30", name: "코난해변", category: "바다", description: "바람이 강하지 않을 때 짧게 바다를 보고 이동해요.", meta: ["해안 산책 30분", "강풍 시 생략"], query: "코난해변 제주" },
      { time: "13:20", name: "카페 모알보알", category: "카페", description: "구좌 해안에서 쉬는 카페 코스예요.", meta: ["주차 가능 표기", "체류 50분 이내"], query: "카페 모알보알 제주" },
      { time: "14:40", name: "김녕팜랜드", category: "체험", description: "동물 먹이주는 코스야. 늦으면 체험 못할 수도 있으니까 시간 한번 보자.", meta: ["1인 10,000원", "체험 마감 한번 보기"], query: "김녕팜랜드" },
      { time: "16:15", name: "대현목장", category: "목장", description: "들어가도 되는지 보고 잠깐 들르자.", meta: ["서영이 픽", "사유지인지 한번 보기"], query: "대현목장 제주" },
      { time: "17:00", name: "봉주르마담", category: "베이커리", description: "인기 빵은 일찍 품절될 수 있어 남은 메뉴를 확인해요.", meta: ["품절 가능", "당일 영업 확인"], query: "봉주르마담 제주" },
      { time: "18:30", name: "갈치미향", category: "저녁", description: "중문에서 먹는 갈치 저녁.", meta: ["19시까지 표기", "마지막 주문 확인"], query: "갈치미향 제주" },
      { time: "19:40", name: "풀베개", category: "카페", description: "비오는 창밖 보기 좋은 카페인데 이 시간에는 늦을것 같아.", meta: ["19시까지", "시간 안 맞을듯"], query: "풀베개 제주", alert: true },
      { time: "20:30", name: "중문회어시장", category: "포장", description: "숙소에서 먹을 회를 포장합니다.", meta: ["포장 시간 확인", "숙소까지 장거리"], query: "중문회어시장" },
      { time: "21:20", name: "할머니떡집", category: "간식", description: "서귀포 올레시장 안에 있는 떡집.", meta: ["재고 확인", "시장 운영 확인"], query: "서귀포 올레시장 할머니떡집" },
      { time: "22:30", name: lodging.name, category: "고정 숙소", description: "성산읍 삼달리 숙소로 돌아와요.", meta: ["약 50분 이동 예상", "졸음운전 금지"], query: lodging.query }
    ]
  },
  3: {
    note: "아침은 둘 중에 땡기는거 하나만 가자. 돌아오는 비행기 시간은 아직 없어서 공항에는 출발 2시간 전까지 가는걸로 해놨어.",
    items: [
      { time: "출발 5시간 전", name: lodging.name, category: "체크아웃", description: "같은 숙소에서 짐을 싣고 항공편 시간을 기준으로 출발해요.", meta: ["주소 재확인", "분리수거와 짐 확인"], query: lodging.query },
      { time: "선택 1", name: "우진해장국", category: "아침 후보", description: "오전 6시부터 먹을 수 있어. 둘 중에 땡기는거 가자.", meta: ["둘 중 한 곳만", "대기시간 생각하기"], query: "우진해장국", map: false },
      { time: "선택 2", name: "올래국수", category: "아침 후보", description: "오전 8시부터 먹을 수 있어. 늦잠자면 여기 갈듯!", meta: ["둘 중 한 곳만", "영업시간 한번 보기"], query: "올래국수", map: false },
      { time: "출발 2시간 전", name: "제주공항", category: "귀가", description: "주유와 렌터카 반납 시간을 포함해 공항으로 이동합니다.", meta: ["렌터카 반납", "탑승 수속"], query: "제주국제공항" }
    ]
  }
};

const itinerary = {
  1: {
    note: "첫날은 15시 50분 도착이구 렌트카 받으면 16시 30분쯤 될듯! 우동 카덴이랑 목장은 시간 안 맞아서 빼고 일단 숙소랑 저녁부터 가자.",
    items: [
      { time: "15:50", name: "제주공항 도착", category: "도착", description: "수하물을 찾고 예약한 렌터카 셔틀 승차장으로 이동해요.", meta: ["항공편 도착", "수하물 확인"], query: "제주국제공항" },
      { time: "16:20", name: "렌터카 인수", category: "고정 일정", description: "예약 시간에 맞춰 차 받고 외관이랑 기름 얼마나 있는지 사진 찍자.", meta: ["약 30분 예상", "출발 전 사진 찍기"], query: "제주공항 렌터카하우스" },
      { time: "16:50", name: "아베베 베이커리 제주점", category: "선택 간식", description: "대기와 주차가 길지 않을 때만 빵을 포장해요. 17시 20분이 넘으면 바로 숙소 방향으로 출발해요.", meta: ["포장만", "30분 제한"], query: "아베베베이커리 제주" },
      { time: "17:25", name: "삼달리로 이동", category: "이동", description: "해가 지기 전에 동쪽 숙소로 이동해요. 교통 상황에 따라 약 70분에서 90분을 잡아요.", meta: ["장거리 첫 운전", "중간 관광 없음"], query: lodging.query, map: false },
      { time: "18:50", name: lodging.name, category: "체크인", description: "성산읍 삼달리 숙소에 체크인하고 짐을 내려요.", meta: ["2박 고정", "삼달하동로32번길 2-1"], query: lodging.query },
      { time: "19:30", name: "성산 저녁 식사", category: "저녁", description: "숙소에서 멀리 가지 않고 성산이나 표선의 주차 가능한 식당을 선택해요.", meta: ["숙소 근처 우선", "첫날 무리 금지"], query: "제주 삼달리 맛집", map: false }
    ]
  },
  2: {
    note: "숙소가 삼달리니까 동쪽 바다 따라서 돌고 다시 숙소 오는걸로 짰어. 친봉산장은 시간 남으면 갈듯!",
    items: [
      { time: "09:30", name: "여름문구사", category: "소품", description: "세화의 작은 문구점에서 제주다운 기념품을 구경해요.", meta: ["영업 여부 확인", "주차 공간 협소"], query: "여름문구사 제주" },
      { time: "10:30", name: "코난해변", category: "바다", description: "바람이 강하지 않을 때 구좌 해안에서 30분만 쉬어가요.", meta: ["해안 한 곳만 선택", "갓길 주차 주의"], query: "코난해변 제주" },
      { time: "11:30", name: "김녕팜랜드", category: "체험", description: "동물과 교감하는 체험을 하고 점심 전 동쪽 일정을 마쳐요.", meta: ["운영시간 확인", "체험 약 60분"], query: "김녕팜랜드" },
      { time: "13:00", name: "동쪽 점심 식사", category: "식사", description: "김녕이나 구좌에서 주차 가능한 식당을 고릅니다.", meta: ["주차 가능한 식당", "현 위치에서 선택"], query: "제주 김녕 맛집", map: false },
      { time: "15:20", name: "친봉산장", category: "선택 카페", description: "체력이 남고 도로가 원활할 때만 상효동까지 이동해요. 피곤하면 성산 쪽 카페로 바꿔요.", meta: ["선택 일정", "당일 영업 확인"], query: "친봉산장 제주" },
      { time: "17:40", name: "성산 저녁 식사", category: "저녁", description: "숙소와 가까운 성산이나 표선에서 저녁을 먹어요.", meta: ["숙소 근처 우선", "주차 가능한 식당"], query: "제주 삼달리 맛집", map: false },
      { time: "19:30", name: lodging.name, category: "고정 숙소", description: "첫날과 같은 삼달리 숙소로 돌아와요.", meta: ["2박 모두 같은 숙소", "다음 날 체크아웃 준비"], query: lodging.query }
    ]
  },
  3: {
    note: "돌아오는 비행기 시간은 아직 모르니까 그거 보고 정하면 돼. 오후 4시 전 비행기면 서쪽은 다 빼고 바로 공항가자.",
    items: [
      { time: "08:30", name: "체크아웃과 아침 식사", category: "준비", description: "삼달리 숙소에서 짐을 싣고 항공편 시간을 다시 확인해요.", meta: ["짐 먼저 싣기", "비행 5시간 전 판단"], query: lodging.query },
      { time: "10:00", name: "유동룡미술관", category: "실내 전시", description: "화요일 오전에 예약 가능한 경우에만 방문해요.", meta: ["10시 개관", "사전 예약 확인", "약 80분"], query: "유동룡미술관" },
      { time: "11:50", name: "바이닐 제주", category: "선택 카페", description: "유동룡미술관에서 멀지 않은 LP 카페예요. 비행 시간이 충분할 때만 한 시간 이내로 머물러요.", meta: ["한림읍 옹포리 643", "당일 영업 확인", "60분 이내"], query: "바이닐 제주" },
      { time: "출발 2시간 전", name: "제주공항", category: "귀가", description: "주유와 렌터카 반납 시간을 포함해 공항으로 이동합니다.", meta: ["관광 즉시 중단", "주유 후 반납"], query: "제주국제공항" }
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

const rainItinerary = {
  1: {
    note: "도착하는 날 비오면 관광은 안할거야. 렌트카 받고 비 많이 안오면 빵만 포장하구 바로 삼달리 가자.",
    items: [
      { time: "15:50", name: "제주공항 도착", category: "도착", description: "수하물을 찾고 렌터카 셔틀 승차장으로 이동해요.", meta: ["우산 바로 꺼내기", "수하물 확인"], query: "제주국제공항" },
      { time: "16:20", name: "렌터카 인수", category: "고정 일정", description: "차 사진찍고 와이퍼랑 타이어도 한번 보자.", meta: ["약 30분 예상", "빗길 운전 준비"], query: "제주공항 렌터카하우스" },
      { time: "16:50", name: "아베베 베이커리 제주점", category: "선택 간식", description: "비와 교통이 심하지 않을 때만 포장해요. 대기가 길면 바로 숙소로 출발합니다.", meta: ["포장만", "17시 20분 출발 제한"], query: "아베베베이커리 제주" },
      { time: "17:25", name: "삼달리로 이동", category: "빗길 이동", description: "침수 알림과 도로 통제를 확인하며 숙소로 이동해요.", meta: ["70분에서 90분", "중간 관광 없음"], query: lodging.query, map: false },
      { time: "18:50", name: lodging.name, category: "체크인", description: "성산읍 삼달리 숙소에 체크인하고 젖은 옷과 신발을 말려요.", meta: ["2박 모두 같은 숙소", "삼달하동로32번길 2-1"], query: lodging.query },
      { time: "19:30", name: "성산 저녁 식사", category: "저녁", description: "숙소와 가까운 곳에서 따뜻한 식사를 하고 바로 돌아와요.", meta: ["숙소 근처 우선", "침수 구간 우회"], query: "제주 삼달리 맛집", map: false }
    ]
  },
  2: {
    note: "숙소가 삼달리라 조천이랑 성산쪽만 돌거야. 천둥치거나 비 왕창오면 사려니숲길 빼고 빛의 벙커부터 가자.",
    items: [
      { time: "05:40", name: "강수 레이더 확인", category: "필수 판단", description: "교래 지역에 비와 낙뢰가 없을 때만 새벽 야외 코스를 시작해요.", meta: ["일출 약 05:57", "비가 오면 실내에서 대기"], query: "제주 날씨", map: false },
      { time: "06:20", name: "사려니숲길", category: "조건부 숲길", description: "비가 잦아들고 낙뢰와 강풍이 없을 때만 남조로 입구에서 40분 정도 짧게 걸어요.", meta: ["입장료 무료", "남조로 입구 검색", "호우 시 바로 취소"], query: "남조로 사려니숲길" },
      { time: "08:00", name: "조천 아침 식사", category: "식사", description: "따뜻한 식사를 하며 젖은 옷을 정리하고 야원 운영 여부를 확인해요.", meta: ["주차 가능한 식당", "야원 11시 확인"], query: "제주 조천 아침 맛집", map: false },
      { time: "10:30", name: "야원", category: "정원 카페", description: "초가와 옹기 정원이 있는 카페예요. 비가 강하면 실내 위주로 머물고 젖은 돌길을 조심해요.", meta: ["번영로 1218", "오픈 시간 확인", "호우 시 짧게"], query: "제주 카페 야원" },
      { time: "12:20", name: "빛의 벙커", category: "실내 전시", description: "성산으로 내려가 비가 강한 오후를 실내 몰입형 전시에서 보내요.", meta: ["온라인 예매 권장", "전시와 휴관 당일 확인", "약 90분"], query: "빛의 벙커 제주" },
      { time: "14:30", name: "서툰가족", category: "선택 코스", description: "저장해 둔 비 오는 날 장소입니다. 정확한 위치와 영업 여부가 확인되지 않아 성산권으로 확인될 때만 방문합니다.", meta: ["장소 확인 필요", "동선 밖이면 생략"], query: "서툰가족 제주", map: false, alert: true },
      { time: "17:20", name: "성산 저녁 식사", category: "저녁", description: "숙소와 가까운 성산이나 표선에서 따뜻한 저녁을 먹어요.", meta: ["숙소 근처 우선", "침수 구간 우회"], query: "제주 삼달리 맛집", map: false },
      { time: "19:00", name: lodging.name, category: "고정 숙소", description: "첫날과 같은 삼달리 숙소로 돌아와 젖은 짐을 정리해요.", meta: ["2박 모두 같은 숙소", "다음 날 체크아웃 준비"], query: lodging.query }
    ]
  },
  3: {
    note: "비행기가 오후 4시 뒤면 유동룡미술관이랑 바이닐 제주도 갈듯! 돈사빠는 공항 반대쪽이라 이번에는 갈만한 곳에만 넣어놨어.",
    items: [
      { time: "08:30", name: "체크아웃과 운항 확인", category: "준비", description: "삼달리 숙소에서 젖은 짐을 분리하고 항공편과 도로 상황을 먼저 확인해요.", meta: ["비닐봉투 준비", "비행 5시간 전 판단"], query: lodging.query },
      { time: "10:00", name: "유동룡미술관", category: "실내 전시", description: "화요일 오전에 예약 가능한 경우에만 방문해요.", meta: ["10시 개관", "사전 예약 확인", "약 80분"], query: "유동룡미술관" },
      { time: "11:50", name: "바이닐 제주", category: "LP 카페", description: "개별 턴테이블로 음악을 들으며 비를 피하는 마지막 코스예요.", meta: ["한림읍 옹포리 643", "당일 영업 확인", "60분 이내"], query: "바이닐 제주" },
      { time: "출발 2시간 전", name: "제주공항", category: "귀가", description: "주유와 렌터카 반납 시간을 포함해 평소보다 일찍 공항으로 이동해요.", meta: ["강풍 시 즉시 이동", "우회도로 고려"], query: "제주국제공항" }
    ]
  }
};

const rainRecommendations = [
  { region: "east", name: "제동목장 입구", tags: ["비 온 다음날", "새벽"], time: "20분", detour: "입구 교래7길 218", description: "목장 소재지는 교래리 산16이지만 사진 지점은 입구 삼거리로 안내해요. GS25 교래퐁낭점 옆 공터나 삼다수 숲길 주차장을 이용하고 목장 차량의 통행을 막지 마세요.", query: "제주시 조천읍 교래7길 218", source: "https://www.visitjeju.or.kr/issue/news/weekly.htm?act=download&no=2&page=5&seq=56348" },
  { region: "east", name: "사려니숲길", tags: ["약한 비", "무료"], time: "60분", detour: "제동목장 근처", description: "공식 관광 영상에도 소개된 비 오는 제주 대표 숲길이에요. 남조로 입구로 가고 호우나 낙뢰가 있으면 취소하세요.", query: "남조로 사려니숲길", source: "https://www.youtube.com/watch?v=gux_pyEIcUY" },
  { region: "south", name: "물영아리오름 습지", tags: ["약한 비", "람사르 습지"], time: "90분", detour: "남원읍", description: "습할 때 숲과 습지의 분위기가 좋지만 정상 계단이 가파릅니다. 호우와 강풍 및 낙뢰 때는 일정에서 빼세요.", query: "물영아리오름 습지", source: "https://rsis.ramsar.org/ris/1648" },
  { region: "south", name: "엉또폭포", tags: ["비 온 뒤", "조건부"], time: "30분", detour: "서귀포시 강정동", description: "강수량이 충분할 때만 폭포가 나타나는 조건부 장소예요. 현장 통제와 폭포 유무를 먼저 확인하세요.", query: "엉또폭포", source: "https://www.visitjeju.net/kr/search?q=%EC%97%89%EB%98%90%ED%8F%AD%ED%8F%AC&searchtype=2" },
  { region: "south", name: "친봉산장", tags: ["실내", "카페"], time: "70분", detour: "서귀포시 하신상로 417", description: "산장 형태의 실내 카페입니다. 동쪽에서 사계리로 이동하는 날 중간에 들를 수 있습니다.", query: "친봉산장 제주", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_300000000012677" },
  { region: "west", name: "제주도립김창열미술관", tags: ["호우 대안", "실내"], time: "60분", detour: "한경면", description: "물방울 작품과 건축을 함께 보는 실내 대안이에요. 8월 17일은 대체공휴일이므로 특별 운영과 다음날 휴관 여부를 반드시 확인하세요.", query: "제주도립김창열미술관", source: "https://kimtschangyeul.jeju.go.kr/" },
  { region: "west", name: "오설록 티뮤지엄", tags: ["호우 대안", "연중무휴"], time: "60분", detour: "안덕면", description: "강한 비에도 머물 수 있는 실내 장소입니다. 공식 안내 운영시간은 오전 10시부터 오후 7시입니다.", query: "오설록 티뮤지엄", source: "https://www.osulloc.com/kr/ko/store-introduction/jeju-map" },
  { region: "west", name: "아르떼뮤지엄 제주", tags: ["호우 대안", "실내"], time: "90분", detour: "애월읍 어음리 1503", description: "빛과 소리 중심의 실내 전시입니다. 마지막 날에는 비행기가 늦을 때만 방문합니다.", query: "아르떼뮤지엄 제주", source: "https://www.kr.artemuseum.com/?redirect=no" },
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
  { region: "west", name: "바이닐 제주", tags: ["코스 포함", "LP 카페"], time: "90분", detour: "한림읍 옹포리 643", description: "개별 턴테이블로 LP를 들을 수 있는 실내 카페예요. 유동룡미술관 다음 순서로 넣었어요.", query: "바이닐 제주", source: "https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_300000000013141" },
  { region: "west", name: "리버브 제주", tags: ["카페", "한림"], time: "60분", detour: "귀덕리 3189 3층", description: "한림 해안에 있는 실내 카페입니다. 비바람이 강하면 바다 산책은 제외합니다.", query: "리버브 제주 귀덕리 3189" },
  { region: "west", name: "플레이사계시장", tags: ["시장", "사계리"], time: "60분", detour: "사계리 126-1", description: "돈사빠나 안덕 서쪽 일정에서 함께 볼 수 있습니다. 운영일을 먼저 확인하세요.", query: "플레이사계시장" },
  { region: "west", name: "포도뮤지엄", tags: ["호우 대안", "실내 전시"], time: "90분", detour: "안덕면 상천리 837", description: "안덕에서 강한 비를 피할 수 있는 미술관입니다. 사전 예약과 휴관일을 확인하세요.", query: "포도뮤지엄 제주" },
  { region: "west", name: "유동룡미술관", tags: ["코스 포함", "실내 전시"], time: "80분", detour: "한림읍 월림리 115-161", description: "이타미 준의 건축과 철학을 공간으로 경험하는 미술관이에요. 대체공휴일 운영과 예약 방식을 확인하세요.", query: "유동룡미술관", source: "https://www.itamijunmuseum.com/" },
  { region: "south", name: "쇠소깍 산물 관광농원", tags: ["체험", "약한 비"], time: "70분", detour: "남원읍 하례리 155-1", description: "농원 체험은 야외 비중이 있으므로 가벼운 비에만 선택해요. 호우에는 인근 실내 카페로 바꾸세요.", query: "쇠소깍 산물 관광농원" },
  { region: "west", name: "돌코리숲", tags: ["숲 체험", "호우 제외"], time: "80분", detour: "안덕면 서광리 725", description: "젖은 숲길은 미끄러울 수 있어 약한 비에만 방문해요. 현장 통제와 체험 운영 여부를 확인하세요.", query: "돌코리숲 제주" },
  { region: "west", name: "토토아뜰리에", tags: ["체험", "예약 확인"], time: "90분", detour: "애월읍 상귀리 152", description: "비 오는 날 이용할 수 있는 체험 공간입니다. 프로그램 시간과 예약 가능 여부를 먼저 확인하세요.", query: "토토아뜰리에 제주" },
  { region: "airport", name: "노형수퍼마켙", tags: ["호우 대안", "실내 체험"], time: "90분", detour: "해안동 2137-1", description: "공항과 서쪽 사이에 있는 실내 전시입니다. 입장 시간을 확인하세요.", query: "노형수퍼마켙 제주" },
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
  { region: "east", name: "올데이모즈", tags: ["코스 포함", "운영 확인"], time: "60분", detour: "조천읍 대흘북길 26", description: "녹차밭 풍경을 보며 아침 시간을 보내기 좋은 카페예요. 월요일 통상 휴무라 8월 17일 특별 운영 여부를 확인해야 해요.", query: "올데이모즈 제주" },
  { region: "west", name: "돈사빠", tags: ["코스 포함", "흑돼지"], time: "90분", detour: "대정읍 중산간서로 2405", description: "유동룡미술관과 바이닐 제주 다음에 이어지는 저녁 식사 장소예요. 영업시간과 휴무를 확인하세요.", query: "돈사빠 제주" },
];

const timeline = document.querySelector("#timeline");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const stateKey = "jeju-trip-completed-v1";
const modeKey = "jeju-trip-mode-v1";
const planVersionKey = "jeju-trip-plan-version-v1";
const dayKey = "jeju-trip-active-day-v1";
let completed = JSON.parse(localStorage.getItem(stateKey) || "{}");
const today = new Date();
const calendarDay = today.getFullYear() === 2026 && today.getMonth() === 7 && today.getDate() >= 16 && today.getDate() <= 18 ? today.getDate() - 15 : 1;
const savedDay = Number(localStorage.getItem(dayKey));
let activeDay = [1, 2, 3].includes(savedDay) ? savedDay : calendarDay;
let activeMode = localStorage.getItem(modeKey) === "rain" ? "rain" : "sunny";
let activePlanVersion = localStorage.getItem(planVersionKey) === "a" ? "a" : "b";
let activeMapView = "route";
let routeAnimationFrame = null;
let trekMap = null;
let trekMapLayers = null;
let trekClusterLayer = null;
let routeMarkers = [];
let routeTravelerMarker = null;
let activeRecommendationFilter = "all";
let recommendationLimit = 9;
let activeAppTab = "plan";

const appTabHashes = {
  plan: "#plan",
  map: "#route-map",
  crowd: "#crowd-map",
  places: "#nearby"
};

function tabNameFromHash(hash = window.location.hash) {
  return Object.entries(appTabHashes).find(([, value]) => value === hash)?.[0] || "plan";
}

function setActiveAppTab(tabName, options = {}) {
  const { updateHash = false, scroll = true } = options;
  if (!appTabHashes[tabName]) return;

  activeAppTab = tabName;
  document.querySelectorAll("[data-tab-panel]").forEach(panel => {
    const isActive = panel.dataset.tabPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });
  document.querySelectorAll("[data-tab-target]").forEach(tab => {
    const isActive = tab.dataset.tabTarget === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  if (updateHash && window.location.hash !== appTabHashes[tabName]) {
    window.history.pushState({ tab: tabName }, "", appTabHashes[tabName]);
  }
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });

  if (tabName === "map") {
    window.setTimeout(() => {
      renderTripMap();
      trekMap?.invalidateSize();
    }, 30);
  }
  if (tabName === "crowd") {
    window.setTimeout(() => window.showCrowdMap?.(), 30);
  }
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
}

const exactPlaceCoordinates = {
  "제주공항 도착": [126.493, 33.506],
  "제주공항": [126.493, 33.506],
  "렌터카 인수": [126.499, 33.503],
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
  "갈치미향": [126.407, 33.251],
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
  "빛의 벙커": [126.899, 33.439],
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
    .replace(/([가-힣]+)입니다\./g, (_, noun) => {
      const lastCode = noun.charCodeAt(noun.length - 1) - 0xac00;
      const hasBatchim = lastCode >= 0 && lastCode % 28 !== 0;
      return `${noun}${hasBatchim ? "이야" : "야"}.`;
    })
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
    .replaceAll("이에요.", "이야.")
    .replaceAll("예요.", "야.")
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
    .replaceAll("해요.", "해.");
}

function travelCategory(value) {
  return travelVoice(value).replaceAll("처음 계획", "서영픽").replaceAll("고정 일정", "꼭 할 것");
}

function renderTimeline() {
  const plan = getActivePlan();
  const day = plan[activeDay];
  const dayLabels = activePlanVersion === "a"
    ? ["공항에서 삼달리까지", "서영이가 처음 찜한 곳", "아침 먹고 공항으로"]
    : isRainPlan()
      ? ["공항에서 삼달리까지", "조천과 성산 실내 코스", "삼달리에서 공항까지"]
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
            <button class="check-button" type="button" data-item-id="${id}" aria-label="${item.name} 완료 표시">${isDone ? "✓" : ""}</button>
          </div>
        </div>
      </article>`;
  }).join("") + `<div class="timeline-note">${travelVoice(day.note)}</div>`;

  timeline.querySelectorAll(".check-button").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.itemId;
      completed[id] = !completed[id];
      localStorage.setItem(stateKey, JSON.stringify(completed));
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
  return activeMode === "rain" ? rainItinerary : itinerary;
}

function isRainPlan() {
  return activePlanVersion === "b" && activeMode === "rain";
}

function getProgressKey(day, index) {
  if (activePlanVersion === "a") return `plan-a-${day}-${index}`;
  return activeMode === "rain" ? `rain-${day}-${index}` : `${day}-${index}`;
}

function getMappableDay() {
  const day = getActivePlan()[activeDay];
  return { ...day, items: day.items.filter(item => item.map !== false) };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

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

function routeMarkerIcon(item, index, selected = false) {
  const size = selected ? 44 : 36;
  return L.divIcon({
    className: "trek-marker-wrapper",
    html: `<div class="trek-place-marker ${selected ? "selected" : ""}" style="width:${size}px;height:${size}px"><span class="trek-place-glyph">${index + 1}</span></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2)]
  });
}

function clusterPlaceIcon(item) {
  const label = escapeHtml(item.name.slice(0, 1));
  return L.divIcon({
    className: "trek-marker-wrapper",
    html: `<div class="trek-place-marker cluster-place-marker"><span class="trek-place-glyph">${label}</span></div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
}

function clearTrekMapLayers() {
  cancelAnimationFrame(routeAnimationFrame);
  routeAnimationFrame = null;
  routeMarkers = [];
  routeTravelerMarker = null;
  if (trekClusterLayer && trekMap) {
    trekMap.removeLayer(trekClusterLayer);
    trekClusterLayer = null;
  }
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
    <div class="map-panel-topline"><span>${activePlanVersion === "a" ? "서영이 픽" : isRainPlan() ? "비 주륵주륵" : "해 짱짱"}</span><b>${day.items.length}곳</b></div>
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

function renderClusterInsight(source, selectedItems = []) {
  const panel = document.querySelector("#mapInsightPanel");
  if (selectedItems.length) {
    panel.innerHTML = `
      <div class="map-panel-topline"><span>선택한 지역</span><b>${selectedItems.length}곳</b></div>
      <h3 class="cluster-panel-title">이 근처 ${selectedItems.length}곳</h3>
      <p class="cluster-panel-copy">마커 위치는 대략적인 권역이야. 이름을 누르고 네이버 지도에서 정확한 위치를 보자.</p>
      <div class="cluster-place-list">${selectedItems.map((item, index) => `<a href="${mapUrl(item.query)}" target="_blank" rel="noreferrer"><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.name}</strong><b>↗</b></a>`).join("")}</div>`;
    return;
  }
  panel.innerHTML = `
    <div class="map-panel-topline"><span>콕콕 모아보기</span><b>${source.length}곳</b></div>
    <h3 class="cluster-panel-title">가까운 곳끼리 모였어</h3>
    <p class="cluster-panel-copy">원의 숫자는 근처에 모인 장소 수야. 하나 고르고 네이버 지도에서 정확한 위치를 보자.</p>
    <div class="region-counts">${Object.entries({ east: "동쪽", west: "서쪽", south: "서귀포", airport: "공항 근처" }).map(([region, label]) => `<div><span>${label}</span><strong>${source.filter(item => item.region === region).length}</strong></div>`).join("")}</div>`;
}

function renderClusterView() {
  if (!ensureTrekMap()) return;
  clearTrekMapLayers();
  const source = isRainPlan() ? rainRecommendations : recommendations;
  trekClusterLayer = L.markerClusterGroup({
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
      return L.divIcon({ html: `<div class="marker-cluster-custom" style="width:${size}px;height:${size}px"><span>${count}</span></div>`, className: "marker-cluster-wrapper", iconSize: L.point(size, size) });
    }
  });
  const latLngs = [];
  source.forEach((item, index) => {
    const [lng, lat] = getPlaceCoordinates(item, index);
    latLngs.push([lat, lng]);
    const marker = L.marker([lat, lng], { icon: clusterPlaceIcon(item), title: item.name, riseOnHover: true, keyboard: true });
    marker._trekItem = item;
    marker.bindTooltip(item.name, { direction: "top", offset: [0, -18], className: "map-tooltip", opacity: 1 });
    marker.bindPopup(`<div class="trek-map-popup-card"><small>${escapeHtml(item.tags.join(" / "))}</small><strong>${escapeHtml(item.name)}</strong><p>${escapeHtml(travelVoice(item.description))}</p><a href="${mapUrl(item.query)}" target="_blank" rel="noreferrer">네이버 지도에서 보기 ↗</a></div>`, { className: "trek-map-popup", maxWidth: 260 });
    marker.on("click", () => renderClusterInsight(source, [item]));
    trekClusterLayer.addLayer(marker);
  });
  trekClusterLayer.on("clusterclick", event => renderClusterInsight(source, event.layer.getAllChildMarkers().map(marker => marker._trekItem).filter(Boolean)));
  trekMap.addLayer(trekClusterLayer);
  const bounds = L.latLngBounds(latLngs);
  if (bounds.isValid()) trekMap.fitBounds(bounds, { padding: [46, 46], maxZoom: 10, animate: true });
  renderClusterInsight(source);
}

function renderTripMap() {
  document.querySelector("#mapDayChip").textContent = activeMapView === "route" ? `${activeDay}일차` : "전체 장소";
  document.querySelector("#mapModeHint").textContent = activeMapView === "route" ? "숫자는 우리가 갈 순서야." : "근처에 있는 곳끼리 모아놨어.";
  document.querySelector("#mapPlayButton").hidden = activeMapView !== "route";
  if (activeAppTab !== "map") return;
  if (activeMapView === "route") renderRouteView();
  else renderClusterView();
}

function updateProgress() {
  const plan = getActivePlan();
  const total = Object.values(plan).reduce((sum, day) => sum + day.items.length, 0);
  const done = Object.entries(completed).filter(([key, value]) => {
    if (!value) return false;
    if (activePlanVersion === "a") return key.startsWith("plan-a-");
    if (activeMode === "rain") return key.startsWith("rain-");
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
  document.querySelector("#heroStatusText").textContent = activePlanVersion === "a" ? "서영이 픽" : rainActive ? "비 주륵주륵" : "해 짱짱";
  document.querySelector("#planTitle").textContent = activePlanVersion === "a" ? "서영이가 짠 제주" : rainActive ? "비 주륵주륵 제주" : "해 짱짱 제주";
  document.querySelector("#planDescription").textContent = activePlanVersion === "a"
    ? "서영이가 처음 짠거 그대로야. 시간 안 맞는건 노랗게 해놨어."
    : rainActive
      ? "삼달리 집 기준으로 짰어. 비 많이오면 실내로 가자."
      : "도착 시간 맞춰서 다시 짰어. 이대로 가면 될듯!!";
  document.querySelector("#weatherSummary").textContent = rainActive ? "비 주륵주륵" : "해 짱짱 제주";
  document.querySelector("#weatherDetail").textContent = rainActive ? "비바람 세면 실내 갈듯" : "덥고 습하니까 물 꼭 챙기자";
  document.querySelector("#focusSummary").textContent = "삼달리 우리 집";
  document.querySelector("#focusDetail").textContent = activePlanVersion === "a" ? "시간 안 맞는건 노랗게" : rainActive ? "동쪽 실내 위주로 갈듯" : "동쪽 위주로 돌자";
  document.querySelector("#recommendationTitle").textContent = rainActive ? "비와도 갈만함!" : "여기도 갈만함!";
  document.querySelector("#recommendationDescription").textContent = rainActive ? "비 멈추면 밖에도 가고 많이오면 실내 가자." : "근처 지나가면 한번 가보자. 얼마나 걸리는지도 적어놨어.";
  const dayDescriptions = activePlanVersion === "a"
    ? ["공항에서 삼달리까지", "서영이가 처음 찜한 곳", "아침 먹고 공항으로"]
    : rainActive
      ? ["공항에서 삼달리까지", "조천과 성산 실내 코스", "삼달리에서 공항까지"]
      : ["제주시에서 삼달리까지", "동쪽 해안과 삼달리", "삼달리에서 공항까지"];
  document.querySelectorAll(".day-tab > div > small").forEach((element, index) => { element.textContent = dayDescriptions[index]; });
  const activePlan = getActivePlan();
  document.querySelectorAll(".day-tab-count").forEach((element, index) => { element.textContent = `${activePlan[index + 1].items.length}곳`; });
  const quickLinks = document.querySelector("#quickLinks");
  quickLinks.innerHTML = rainActive ? `
    <div class="side-card-title"><span>비 올 때 급하면 여기</span></div>
    <a href="${mapUrl("남조로 사려니숲길")}" target="_blank" rel="noreferrer"><div><strong>사려니숲길</strong><small>남조로 입구</small></div><b>↗</b></a>
    <a href="${mapUrl("제주 카페 야원")}" target="_blank" rel="noreferrer"><div><strong>야원</strong><small>11시 오픈 확인</small></div><b>↗</b></a>
    <a href="${mapUrl(lodging.query)}" target="_blank" rel="noreferrer"><div><strong>삼달리 숙소</strong><small>2박 고정</small></div><b>↗</b></a>` : `
    <div class="side-card-title"><span>급할 때 여기</span></div>
    <a href="${mapUrl("제주국제공항")}" target="_blank" rel="noreferrer"><div><strong>제주공항</strong><small>지도에서 보기</small></div><b>↗</b></a>
    <a href="${mapUrl("안친오름")}" target="_blank" rel="noreferrer"><div><strong>안친오름</strong><small>입장 여부 확인</small></div><b>↗</b></a>
    <a href="${mapUrl(lodging.query)}" target="_blank" rel="noreferrer"><div><strong>삼달리 숙소</strong><small>2박 고정</small></div><b>↗</b></a>`;
  document.querySelectorAll(".filter-button").forEach((button, index) => button.classList.toggle("active", index === 0));
  activeRecommendationFilter = "all";
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

document.querySelectorAll(".map-view-button").forEach(button => {
  button.addEventListener("click", () => {
    activeMapView = button.dataset.mapView;
    document.querySelectorAll(".map-view-button").forEach(item => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderTripMap();
  });
});

document.querySelector("#mapPlayButton").addEventListener("click", startRouteAnimation);

function renderRecommendations(filter = activeRecommendationFilter) {
  activeRecommendationFilter = filter;
  const source = isRainPlan() ? rainRecommendations : recommendations;
  const cards = source.filter(item => filter === "all" || item.region === filter);
  const visibleCards = cards.slice(0, recommendationLimit);
  document.querySelector("#recommendationGrid").innerHTML = visibleCards.map((item, index) => `
    <article class="recommendation-card" data-number="${String(index + 1).padStart(2, "0")}">
      <div class="recommendation-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <h3>${item.name}</h3>
      <p>${travelVoice(item.description)}</p>
      <div class="recommendation-footer">
        <span>${item.detour} / ${item.time}</span>
        <div>
          <a href="${item.source || mapUrl(item.query)}" target="_blank" rel="noreferrer" aria-label="${item.name} 여행 정보">정보</a>
          <a href="${mapUrl(item.query)}" target="_blank" rel="noreferrer">지도</a>
        </div>
      </div>
    </article>`).join("");
  const remaining = Math.max(0, cards.length - visibleCards.length);
  document.querySelector("#recommendationCount").textContent = `찜한 곳 ${cards.length}개 중에 ${visibleCards.length}개 보는 중`;
  const moreButton = document.querySelector("#recommendationMoreButton");
  document.querySelector(".recommendation-more").hidden = cards.length <= 9;
  moreButton.hidden = cards.length <= 9;
  moreButton.textContent = remaining > 0 ? `${remaining}곳 더 볼래` : "조금만 볼래";
}

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.classList.toggle("active", item === button));
    recommendationLimit = 9;
    renderRecommendations(button.dataset.filter);
  });
});

document.querySelector("#recommendationMoreButton").addEventListener("click", () => {
  const source = isRainPlan() ? rainRecommendations : recommendations;
  const total = source.filter(item => activeRecommendationFilter === "all" || item.region === activeRecommendationFilter).length;
  recommendationLimit = recommendationLimit < total ? total : 9;
  renderRecommendations();
});

const themeButton = document.querySelector("#themeButton");
const themeKey = "jeju-trip-theme-v1";
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  themeButton.textContent = "밝게";
}

themeButton.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  themeButton.textContent = isDark ? "밝게" : "어둡게";
  localStorage.setItem(themeKey, isDark ? "dark" : "light");
});

initializeAppTabs();
setPlanVersion(activePlanVersion);
setActiveDay(activeDay);
