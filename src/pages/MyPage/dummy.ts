import images from '@@assets/images';
import { Review } from '@@pages/MyPage/types';
import { Order } from '@@pages/MyPage/types';
import { Meeting } from '@@types/meeting';

export function getDummyMeetingList() {
  const meetings: Meeting[] = [];
  for (let i = 0; i < 7; i++) {
    meetings.push({
      id: i,
      title: `와인과 사람, 무제한 와인 파티 ${i + 1}`,
      description: '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
      price: 70000,
      imageUrl: images.good_img04,
      location: 'seoul',
      isHot: i % 2 === 0, // 짝수 인덱스에만 isHot 설정
      status: i % 2 === 0 ? 'upcoming' : 'confirmed',
      createdAt: new Date(),
      type: i % 2 === 0 ? 'wine' : 'reading',
    });
  }
  return meetings;
}

export function getDummyOrderList() {
  const payments: Order[] = [];
  for (let i = 0; i < 7; i++) {
    payments.push({
      orderNumber: `20020725P074416${i}`,
      orderDate: new Date(),
      finalPrice: 70000,
      meeting: getDummyMeetingList()[i],
      detail: {
        originalPrice: 70000,
        discountInfo: {
          productDiscount: '10000',
          couponDiscount: '2000',
          pointsUsed: '1000',
          pointsEarned: '1000',
        },
        paymentMethod: 'card',
        cardDetail: {
          cardCompany: '카카오',
          cardType: '체크카드',
          cardNumber: '1234-1234-1234-1234',
          cardPaymentType: '일시불',
          cardApprovalDate: new Date(),
          cardApprovalNumber: '1234567890',
        },
        orderUserInfo: {
          name: '김길동',
          phone: '01012341234',
          email: 'testname@gmail.com',
          birth: '1990-01-01',
        },
      },
    });
  }
  return payments;
}

export function getDummyReviewList() {
  const reviews: Review[] = [];

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
