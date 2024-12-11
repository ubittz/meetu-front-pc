import images from '@@assets/images';
import { ReviewItem } from '@@pages/MyPage/types';
import { Meeting } from '@@types/meeting';

export function getDummyMeetingList() {
  const meetings: Meeting[] = [];
  for (let i = 0; i < 7; i++) {
    meetings.push({
      id: i,
      title: `와인과 사람, 무제한 와인 파티 ${i + 1}`,
      description: '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
      price: 70000,
      imageUrl: images.good_img01,
      location: 'seoul',
      isHot: i % 2 === 0, // 짝수 인덱스에만 isHot 설정
      status: i % 2 === 0 ? 'upcoming' : 'confirmed',
      createdAt: new Date(),
      type: i % 2 === 0 ? 'wine' : 'reading',
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

export function getDummyReviewList() {
  const reviews: ReviewItem[] = [];

  for (let i = 0; i < 7; i++) {
    reviews.push({
      id: i,
      meetingTitle: '모임명입니다.',
      rating: 5,
      content: '리뷰 내용입니다.',
      createdAt: '2024. 09. 20',
      user: {
        id: i,
        nickname: 'kimj12345',
      },
    });
  }
  return reviews;
}
