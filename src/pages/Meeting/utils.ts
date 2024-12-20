import { format } from 'date-fns';

import { CATEGORY, CATEGORY_STRINGS, DISTRICT } from '@@stores/meeting/constants';

export const formatCost = (cost: number) => {
  return new Intl.NumberFormat('ko-KR').format(cost); // 한국 형식으로 숫자 포맷
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'yyyy년 MM월 dd일');
};

export const getDistrict = (address: string) => {
  const district = Object.entries(DISTRICT).find(([, value]) => address.includes(value))?.[0];
  return district;
};

export const getCategoryString = (category: keyof typeof CATEGORY) => {
  return CATEGORY_STRINGS[category] || category; // 해당 카테고리의 한글 문자열 반환, 없으면 원래 문자열 반환
};
