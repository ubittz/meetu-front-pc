export const formatCost = (cost: number) => {
  return new Intl.NumberFormat('ko-KR').format(cost); // 한국 형식으로 숫자 포맷
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
