import { User } from '@@stores/auth/types';
import { UserProfileResponse } from '@@stores/auth/types';
import { SIMPLE_TYPE_STRING } from '@@stores/payment/constants';
import { PaymentDetailResponse } from '@@stores/payment/types';
export const getPaymentType = (payment: PaymentDetailResponse) => {
  if (payment.card) {
    return `신용카드 (${payment.card.companyName}) 결제`;
  }
  if (payment.transfer) {
    return `계좌이체 (${payment.transfer.bankName}) 결제`;
  }
  if (payment.simple) {
    return '간편결제';
  }

  return '';
};

export const getPaymentMethod = (payment: PaymentDetailResponse) => {
  if (payment.card) {
    return (
      <>
        {payment.card.no?.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, '$1-****-****-$4')} /{' '}
        {payment.card.plan === 0 ? '일시불' : `${payment.card.plan}개월`}
      </>
    );
  }

  if (payment.simple) {
    return <>{SIMPLE_TYPE_STRING[payment.simple.type]} 결제</>;
  }

  if (payment.transfer) {
    return (
      <>
        {payment.transfer.accountNo} - {payment.transfer.depositNmae}
      </>
    );
  }

  return '';
};

export const getPaymentNo = (payment: PaymentDetailResponse) => {
  if (payment.card) {
    return payment.card.no?.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, '$1-****-****-$4');
  }

  if (payment.transfer) {
    return payment.transfer.accountNo;
  }

  return null;
};

export function getUserResponseType(user: User | undefined): UserProfileResponse {
  return {
    userId: user?.id ?? '',
    userName: user?.name ?? '',
    processingMeetingCount: user?.meetingCount ?? 0,
    writeReviewCount: user?.writeReviewCount ?? 0,
    description: user?.userDescription ?? '',
    isHost: user?.isHost ?? false,
    imageUrl: user?.imageUrl ?? '',
  };
}
