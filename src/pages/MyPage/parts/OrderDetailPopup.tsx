import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { Order } from '@@pages/MyPage/types';

interface InfoPopupProps {
  order: Order;
}

const StyledLine = styled.hr`
  border: 1px solid #212121;
  margin-top: 12px;
`;

const LightLine = styled.hr`
  border: 1px solid #ededed;
  margin-top: 12px;
`;

const StyledOrder = styled.div`
  .table {
    border: 1px solid ${COLORS.GRAY_SCALE_050};
  }
`;

function OrderDetailPopup({ order }: InfoPopupProps) {
  const paymethodName = order.detail?.paymentMethod === 'card' ? '카드' : order.detail?.paymentMethod === 'bank' ? '은행' : '간편결제';

  return (
    <StyledOrder>
      <Flex.Vertical>
        {/* 제품 정보 */}
        <Typography.Caption>제품 정보</Typography.Caption>

        <Flex.Vertical className='tw-bg-[#F8F8F8] tw-p-8 tw-w-[1000px] tw-mt-5'>
          <Flex.Horizontal gap={20}>
            <img src={order.meeting.imageUrl ?? images.meeting_img01} className='tw-w-44 tw-h-[100px] tw-rounded-xl' alt='제품 이미지' />
            <Flex.Vertical gap={43}>
              <Typography.Caption>{order.meeting.title}</Typography.Caption>
              <Flex.Horizontal gap={24}>
                <Typography.MediumBody color={COLORS.BACKGROUND}>주문번호</Typography.MediumBody>
                <Typography.SmallBody>{order.orderNumber}</Typography.SmallBody>
                <Typography.MediumBody color={COLORS.BACKGROUND} className='tw-ml-5'>
                  주문 일자
                </Typography.MediumBody>
                <Typography.SmallBody>{order.orderDate.toLocaleDateString()}</Typography.SmallBody>
              </Flex.Horizontal>
            </Flex.Vertical>
          </Flex.Horizontal>
        </Flex.Vertical>

        {/* 결제 정보 */}
        <Typography.Caption className='tw-mt-16'>결제 정보</Typography.Caption>
        <StyledLine />
        <Flex.Horizontal className='tw-justify-between tw-p-1 tw-pt-5 tw-pl-10 tw-pr-10'>
          <Typography.MediumBody>정상가</Typography.MediumBody>
          <Typography.MediumBody>부가내역</Typography.MediumBody>
          <Typography.MediumBody>결제수단</Typography.MediumBody>
          <Typography.MediumBody>최종 결제 금액</Typography.MediumBody>
        </Flex.Horizontal>
        <LightLine />

        <Flex.Horizontal gap={100} className='tw-p-8' justifyContent='center' alignItems='center'>
          <Typography.LargeButton>{order.detail?.originalPrice.toLocaleString()}원</Typography.LargeButton>

          <Flex.Vertical className='tw-w-[262px]' gap={12}>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>상품 할인 금액</Typography.MediumBody>
              <Typography.MediumBody>{order.detail?.discountInfo.productDiscount ?? '0'}원</Typography.MediumBody>
            </Flex.Horizontal>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>쿠폰 적용 할인 금액</Typography.MediumBody>
              <Typography.MediumBody>{order.detail?.discountInfo.couponDiscount ?? '0'}원</Typography.MediumBody>
            </Flex.Horizontal>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>포인트 사용</Typography.MediumBody>
              <Typography.MediumBody>{order.detail?.discountInfo.pointsUsed ?? '0'}P</Typography.MediumBody>
            </Flex.Horizontal>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>적립 포인트</Typography.MediumBody>
              <Typography.MediumBody>{order.detail?.discountInfo.pointsEarned ?? '0'}P</Typography.MediumBody>
            </Flex.Horizontal>
          </Flex.Vertical>

          <Flex.Vertical gap={8}>
            <Typography.MediumBody>{paymethodName}</Typography.MediumBody>
            <Typography.SmallBody>
              {order.detail?.cardDetail.cardNumber} / {order.detail?.cardDetail.cardInstallmentPeriod}
            </Typography.SmallBody>
          </Flex.Vertical>
          <Typography.MediumBody color={COLORS.MAIN}>{order.finalPrice.toLocaleString()}원</Typography.MediumBody>
        </Flex.Horizontal>
        <LightLine />

        {/* 주문자 정보 */}
        <Typography.Caption className='tw-mt-16'>주문자 정보</Typography.Caption>
        <StyledLine />
        <Flex.Horizontal className='table' alignItems='center' gap={12}>
          <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
            이름
          </Typography.MediumBody>
          <Typography.MediumBody className='tw-w-[280px]'>{order.detail?.orderUserInfo.name}</Typography.MediumBody>
          <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
            생년월일
          </Typography.MediumBody>
          <Typography.MediumBody>{order.detail?.orderUserInfo.birth}</Typography.MediumBody>
        </Flex.Horizontal>

        <Flex.Horizontal className='table' alignItems='center' gap={12}>
          <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
            연락처
          </Typography.MediumBody>
          <Typography.MediumBody className='tw-w-[280px]'>{order.detail?.orderUserInfo.phone}</Typography.MediumBody>
          <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
            이메일
          </Typography.MediumBody>
          <Typography.MediumBody>{order.detail?.orderUserInfo.email}</Typography.MediumBody>
        </Flex.Horizontal>
      </Flex.Vertical>

      {/* 결제 내역 */}
      <Typography.Caption className='tw-mt-16'>결제 내역</Typography.Caption>
      <StyledLine />
      <Flex.Horizontal className='table' alignItems='center' gap={12}>
        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
          결제 수단
        </Typography.MediumBody>
        <Typography.MediumBody className='tw-w-[280px]'>{paymethodName}</Typography.MediumBody>
        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
          결제 수단 번호
        </Typography.MediumBody>
        <Typography.MediumBody className='tw-ml-4'>
          {order.detail?.cardDetail.cardCompany} {order.detail?.cardDetail.cardType}
        </Typography.MediumBody>
      </Flex.Horizontal>

      <Flex.Horizontal className='table' alignItems='center' gap={12}>
        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
          승인일시
        </Typography.MediumBody>
        <Typography.MediumBody className='tw-w-[280px]'>{order.detail?.cardDetail.cardApprovalDate.toLocaleDateString()}</Typography.MediumBody>

        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
          결제 금액
        </Typography.MediumBody>
        <Typography.MediumBody>{order.detail?.originalPrice.toLocaleString()}원</Typography.MediumBody>
      </Flex.Horizontal>

      <Flex.Horizontal className='table' alignItems='center' gap={12}>
        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
          승인번호
        </Typography.MediumBody>
        <Typography.MediumBody className='tw-w-[280px]'>{order.detail?.cardDetail.cardApprovalNumber}</Typography.MediumBody>
      </Flex.Horizontal>
    </StyledOrder>
  );
}

export default OrderDetailPopup;
