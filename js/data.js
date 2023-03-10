
/* 
1. 더불어민주당 문재인 후보
2. 자유한국당 홍준표 후보
3. 국민의당 안철수 후보
4. 바른정당 유승민 후보
5. 정의당 심상정 후보
*/

// 질문 배열
const qnaList = [
  {
    q: '후보별 주요 공약 1 ',
    a: [
      { answer: '1. 일자리를 책임지는 대한민국', person: 1},
      { answer: '2. 강한 안보, 강한 대한민국!', person: 2 },
      { answer: '3. 튼튼한 자강 안보', person: 3 },
      { answer: '4. 아이 키우고 싶은 나라', person: 4 },
      { answer: '5. 국민주권형 정치개혁, 검찰개혁', person: 5 },
    ]
  },
  {
    q: '후보별 주요 공약 2 ',
    a: [
      { answer: '1. 교육, 과학기술, 창업혁명', person: 3 },
      { answer: '2. 국민이 주인인 대한민국', person: 1},
      { answer: '3. 기업에 자유를, 서민에게 기회를', person: 2 },
      { answer: '4. 일하면서 대접받는 나라', person: 4 },
      { answer: '5. 조세개혁, 재벌개혁', person: 5},
    ]
  },
  {
    q: '후보별 주요 공약  3',
    a: [
      { answer: '1. 더불어 사는 공동체 복지', person: 4 },
      { answer: '2. 정경유착 근절, 중소상공인 보호', person: 3},
      { answer: '3. 서민맞춤형 복지 지도 완성', person: 2},
      { answer: '4. 공정하고 정의로운 대한민국', person: 1 },
      { answer: '5. 보육, 의료, 노후 안심 복지 실현', person: 5 },//5
    ]
  },
  {
    q: '후보별 주요 공약  4',
    a: [
      { answer: '1. 교육 희망 사다리 구축 ', person: 2 },//2
      { answer: '2. 임금격차와 고용불안 해소', person: 3 },//3
      { answer: '3. 창업하고 싶은 나라, 공정한 시장경제', person: 4 },//4
      { answer: '4. 강하고 평화로운 대한민국', person: 1 },//1
      { answer: '5. 튼튼한 안보, 균형 외교', person: 5},//5
    ]
  },
  {
    q: '후보별 주요 공약  5',
    a: [
      { answer: '1. 사람 중심의 교육혁명, 과학기술', person: 5 },//5
      { answer: '2. 혁신 중소기업, 튼튼한 자영업', person:4},//4
      { answer: '3. 기득권 타파와 협치, 통합의 정치', person: 3 },//3
      { answer: '4. 서민복지 확대로 사회안정망 조성', person: 2 },//2
      { answer: '5. 청년의 꿈을 지켜주는 대한민국', person: 1 },//1
    ]
  },

  {
    q: '후보별 주요 공약  6',
    a: [
      { answer: '1. 소상공인 보호와 지역경제 활성화', person: 2},//2
      { answer: '2. 격차 해소, 사회안전망 완비', person:3},//3
      { answer: '3. 성 평등한 대한민국', person:1 },//1
      { answer: '4. 미세먼지, 화학물질, 원전불안 해결', person: 4 },//4
      { answer: '5. 농어민, 중고상공인 보호, 서민주거 안정', person: 5 },//5
    ]
  },
  {
    q: '후보별 주요 공약  7',
    a: [
      { answer: '1. 어르신이 행복한 9988 대한민국', person: 1 },//1
      { answer: '2. 부패척결과 공공부문 개혁으로 사회부조리 차단', person: 2 },//2
      { answer: '3. 국민이 안전한 재난 제로 사회', person: 3 },//3
      { answer: '4. "게임체인지"를 선도하는 최강군 육성', person:4 },//4
      { answer: '5. 고용 안정, 차별없는 사회', person: 5},//5
    ]
  },
  {
    q: '후보별 주요 공약 8',
    a: [
      { answer: '1. 모두를 위한 미래교육', person: 4},//4
      { answer: '2. 여성이 건강하고 행복한 성평등사회', person: 5 },//5
      { answer: '3. 아이 키우기 좋은 대한민국', person: 1},//1
      { answer: '4. 깨끗한 물과 맑은 공기로 청정 대한민국', person: 2 },//2
      { answer: '5. 모두를 위한 성평등 대한민국', person: 3 },//5
    ]
  },
  {
    q: '후보별 주요 공약 9',
    a: [
      { answer: '1. 탈핵, 언론 독립, 문화예술인 지원', person: 5 },//5
      { answer: '2. 농어민‧자영업자·소상공인의 소득이 늘어나는 활기찬 대한민국', person: 1 },//1
      { answer: '3. 깨끗한 환경, 안전한 에너지, 문화국가', person: 3 },//3
      { answer: '4. 저소득층, 주거복지 강화', person: 4 },//4
      { answer: '5. 4차산업 혁명 선도와 작고 효율적인 정부', person: 2 },//2

    ]
  },
  {
    q: '후보별 주요 공약 10',
    a: [
      { answer: '1. 저출산 극복과 청년복지 확대로 대한민국에 활기를', person: 2 },//2
      { answer: '2. 권력기관 부정부패 청산, 정치혁명', person: 4 },//4
      { answer: '3. 안전하고 건강한 대한민국', person: 1 },//1
      { answer: '4. 아동, 청년, 장애인, 소수자 보호', person: 5 },//5
      { answer: '5. 국민건강과 식량주권', person: 3 },//3
    ]
  },
]
// 결과 배열
const infoList = [
  {
    name: '더불어민주당 "문재인" 후보',
  },
  {
    name: '자유한국당 "홍준표" 후보',
  },
  {
    name: '국민의당 "안철수" 후보',
  },
  {
    name: '바른정당 "유승민" 후보',
  },
  {
    name: '정의당 "심상정" 후보',
  }
]
