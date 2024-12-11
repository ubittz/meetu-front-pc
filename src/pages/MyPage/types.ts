interface MeetingItem {
  imageUrl: string | undefined;
  id: number;
  image?: string;
  title: string;
  location: string;
  price: number;
  description: string;
  isHot?: boolean;
}

interface ReviewItem {
  id: number;
  title: string; // 모임으로 대체 필요 (모임명)
  rating: number;
  content: string;
  createdAt: string;
  user: {
    id: number;
    nickname: string;
  };
}

interface Discount {
  productDiscount?: string; // 상품 할인 금액
  couponDiscount?: string; // 쿠폰 적용 할인 금액
  pointsUsed?: string; // 포인트 사용
  pointsEarned?: string; // 적립 포인트
}

interface PaymentMethod {
  method: string; // 결제 방법
  details?: string; // 결제 카드 정보
}

type UserType = 'user' | 'host';

export type { MeetingItem, ReviewItem, Discount, PaymentMethod, UserType };
