import images from '@@assets/images';

export function getDummyMeetingList() {
  const meetings = [];
  for (let i = 0; i < 7; i++) {
    meetings.push({
      id: i,
      title: `와인과 사람, 무제한 와인 파티 ${i + 1}`,
      description: '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
      price: 70000,
      imageUrl: images.good_img01,
      location: 'seoul',
      isHot: i % 2 === 0, // 짝수 인덱스에만 isHot 설정
    });
  }
  return meetings;
}

export function getDummyPaymentList() {
  const payments = [];
  for (let i = 0; i < 7; i++) {
    payments.push({
      orderNumber: `20020725P074416${i}`,
      orderDate: new Date(),
      purchasePrice: 70000,
      meeting: getDummyMeetingList()[i],
    });
  }
  return payments;
}
