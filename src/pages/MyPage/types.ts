interface EditMyInfoForm {
  id: string;
  password?: string;
  passwordCheck?: string;
  email?: string;
  description?: string;
  checkedEmail: boolean;
  image?: File | string;
}

// 결제 상세 팝업
interface OrderDetail {
  originalPrice: number; // 정상가
  discountInfo: DiscountInfo;
  paymentMethod: PaymentMethod;
  cardDetail: CardDetail;
  orderUserInfo: OrderUserInfo;
}

interface DiscountInfo {
  productDiscount?: string; // 상품 할인 금액
  couponDiscount?: string; // 쿠폰 적용 할인 금액
  pointsUsed?: string; // 포인트 사용
  pointsEarned?: string; // 적립 포인트
}

type PaymentMethod = 'card' | 'bank' | QuickPaymentType;

type QuickPaymentType = 'naver' | 'kakaoPay';

interface CardDetail {
  cardNumber: string;
  cardType: '신용카드' | '체크카드' | string;
  cardApprovalDate: Date;
  cardApprovalNumber: string;
  cardCompany: string;
  cardPaymentType: '일시불' | '할부' | string;
  cardInstallmentPeriod?: '1개월' | '3개월' | '6개월' | '12개월' | string; // 일시불일 경우 없음
}

interface OrderUserInfo {
  name: string;
  birth: string;
  phone: string;
  email: string;
}

export type { PaymentMethod, OrderDetail, EditMyInfoForm };
