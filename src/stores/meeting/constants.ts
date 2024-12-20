export const DISTRICT = {
  SEOUL: '서울',
  BUSAN: '부산',
  DAEGU: '대구',
  INCHEON: '인천',
  GWANGJU: '광주',
  DEAJEON: '대전',
  ULSAN: '울산',
  SEJONG: '세종',
  GYEONGGI: '경기',
  GANGWON: '강원',
  CHUNGBUK: '충청북도',
  CHUNGNAM: '충청남도',
  JEONBUK: '전라북도',
  JEONNAM: '전라남도',
  GYEONGBUK: '경상북도',
  GYEONGNAM: '경상남도',
  JEJU: '제주',
} as const;

export const CATEGORY = {
  ART: 'ART',
  READING: 'READING',
  COOK: 'COOK',
  CYCLE: 'CYCLE',
  EXERCISE: 'EXERCISE',
  HIKING: 'HIKING',
  MUSIC: 'MUSIC',
  PHOTO: 'PHOTO',
  TECH: 'TECH',
  WINE: 'WINE',
} as const;

export const ALL_CATEGORIES = Object.values(CATEGORY);

export const CATEGORY_STRINGS = {
  [CATEGORY.ART]: '아트',
  [CATEGORY.READING]: '독서',
  [CATEGORY.COOK]: '쿠킹',
  [CATEGORY.CYCLE]: '사이클',
  [CATEGORY.EXERCISE]: '운동',
  [CATEGORY.HIKING]: '등산',
  [CATEGORY.MUSIC]: '음악',
  [CATEGORY.PHOTO]: '사진',
  [CATEGORY.TECH]: '기술',
  [CATEGORY.WINE]: '와인',
} as const;

export const MEETING_ORDER_TYPE = {
  LATEST: 'LATEST',
  PRICE: 'PRICE',
  REQUEST_COUNT: 'REQUEST_COUNT',
} as const;

export const FIND_CLASS_ORDER = {
  RECENT: 'recent',
  RECOMMEND: 'recommend',
  PRICE_ASC: 'priceAsc',
  PRICE_DESC: 'priceDesc',
} as const;

export const ALL_FIND_CLASS_ORDER = Object.values(FIND_CLASS_ORDER);

export const FIND_CLASS_ORDER_STRING = {
  [FIND_CLASS_ORDER.RECENT]: '최신순으로 보기',
  [FIND_CLASS_ORDER.RECOMMEND]: '밋유 추천순',
  [FIND_CLASS_ORDER.PRICE_DESC]: '가격 높은순',
  [FIND_CLASS_ORDER.PRICE_ASC]: '가격 낮은순',
};

export const QUERY_BY_FIND_CLASS_ORDER = {
  [FIND_CLASS_ORDER.RECENT]: {
    orderType: MEETING_ORDER_TYPE.LATEST,
  },
  [FIND_CLASS_ORDER.RECOMMEND]: {
    orderType: MEETING_ORDER_TYPE.REQUEST_COUNT,
  },
  [FIND_CLASS_ORDER.PRICE_ASC]: {
    orderType: MEETING_ORDER_TYPE.PRICE,
    isAsc: true,
  },
  [FIND_CLASS_ORDER.PRICE_DESC]: {
    orderType: MEETING_ORDER_TYPE.PRICE,
    isAsc: false,
  },
} as const;