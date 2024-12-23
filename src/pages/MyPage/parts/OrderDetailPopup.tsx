import { format } from 'date-fns';
import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import FullLoading from '@@components/FullLoading/FullLoading';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { getPaymentMethod, getPaymentNo, getPaymentType } from '@@pages/MyPage/utils';
import { usePaymentDetail } from '@@stores/payment/hooks';

const StyledOrder = styled.div`
  .table {
    border: 1px solid ${COLORS.GRAY_SCALE_050};
  }
`;

const StyledLine = styled.hr`
  border: 1px solid #212121;
  margin-top: 12px;
`;

const LightLine = styled.hr`
  border: 1px solid #ededed;
  margin-top: 12px;
`;

interface OrderDetailPopupProps {
  id: string;
}

function OrderDetailPopup({ id }: OrderDetailPopupProps) {
  const { data, isLoading } = usePaymentDetail(id ?? '');

  if (isLoading) {
    return <FullLoading visible />;
  }

  if (!data) return null;

  const { amount } = data;
  const { customer } = data;

  const paymentNo = getPaymentNo(data);

  return (
    <StyledOrder>
      <Flex.Vertical>
        {/* 제품 정보 */}
        <Typography.Caption>제품 정보</Typography.Caption>
        <Flex.Vertical className='tw-bg-[#F8F8F8] tw-p-8 tw-w-[1000px] tw-mt-5'>
          <Flex.Horizontal gap={20}>
            <img src={images.ctg_img03} className='tw-w-44 tw-h-[100px] tw-rounded-xl' alt='제품 이미지' />
            <Flex.Vertical gap={43}>
              <Typography.Caption>{data.meetingName}</Typography.Caption>
              <Flex.Horizontal gap={24}>
                <Typography.MediumBody color={COLORS.BACKGROUND}>주문번호</Typography.MediumBody>
                <Typography.SmallBody>{data?.id}</Typography.SmallBody>
                <Typography.MediumBody color={COLORS.BACKGROUND} className='tw-ml-5'>
                  주문 일자
                </Typography.MediumBody>
                <Typography.SmallBody>{data?.createDatetime && format(data.createDatetime, 'yyyy. MM. dd')}</Typography.SmallBody>
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
          <Typography.LargeButton>{amount.orderAmount.toLocaleString()}원</Typography.LargeButton>

          <Flex.Vertical className='tw-w-[262px]' gap={12}>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>상품 할인 금액</Typography.MediumBody>
              <Typography.MediumBody>{amount.orderSale ?? '0'}원</Typography.MediumBody>
            </Flex.Horizontal>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>쿠폰 적용 할인 금액</Typography.MediumBody>
              <Typography.MediumBody>{amount.orderCoupon ?? '0'}원</Typography.MediumBody>
            </Flex.Horizontal>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>포인트 사용</Typography.MediumBody>
              <Typography.MediumBody>{amount.orderPoint ?? '0'}P</Typography.MediumBody>
            </Flex.Horizontal>
            <Flex.Horizontal className='tw-justify-between'>
              <Typography.MediumBody color={COLORS.BACKGROUND}>적립 포인트</Typography.MediumBody>
              <Typography.MediumBody>{amount.orderLatestAmount ?? '0'}P</Typography.MediumBody>
            </Flex.Horizontal>
          </Flex.Vertical>

          <Flex.Vertical gap={8}>
            <Typography.MediumBody>{getPaymentType(data)}</Typography.MediumBody>
            <Typography.SmallBody color={COLORS.MAIN_400}>{getPaymentMethod(data)}</Typography.SmallBody>
          </Flex.Vertical>
          <Typography.MediumBody color={COLORS.MAIN}>{amount.orderLatestAmount.toLocaleString()}원</Typography.MediumBody>
        </Flex.Horizontal>
        <LightLine />

        {/* 주문자 정보 */}
        <Typography.Caption className='tw-mt-16'>주문자 정보</Typography.Caption>
        <StyledLine />
        <Flex.Horizontal className='table' alignItems='center' gap={12}>
          <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
            이름
          </Typography.MediumBody>
          <Typography.MediumBody className='tw-w-[280px]'>{customer.name}</Typography.MediumBody>
          {customer.birth && (
            <Flex.Vertical>
              <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
                생년월일
              </Typography.MediumBody>
              <Typography.MediumBody>{format(customer.birth, 'yyyy-MM-dd')}</Typography.MediumBody>
            </Flex.Vertical>
          )}
        </Flex.Horizontal>

        <Flex.Horizontal className='table' alignItems='center' gap={12}>
          <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
            연락처
          </Typography.MediumBody>
          <Typography.MediumBody className='tw-w-[280px]'>{customer.tel}</Typography.MediumBody>
          {customer.email && (
            <div>
              <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
                이메일
              </Typography.MediumBody>
              <Typography.MediumBody>{customer.email}</Typography.MediumBody>
            </div>
          )}
        </Flex.Horizontal>
      </Flex.Vertical>

      {/* 결제 내역 */}
      <Typography.Caption className='tw-mt-16'>결제 내역</Typography.Caption>
      <StyledLine />
      <Flex.Horizontal className='table' alignItems='center' gap={12}>
        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
          결제 수단
        </Typography.MediumBody>
        <Typography.MediumBody className='tw-w-[280px]'>{getPaymentType(data)}</Typography.MediumBody>
        {paymentNo && (
          <Flex.Horizontal alignItems='center'>
            <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
              결제 수단 번호
            </Typography.MediumBody>
            <Typography.MediumBody className='tw-ml-4'>{paymentNo}</Typography.MediumBody>
          </Flex.Horizontal>
        )}
      </Flex.Horizontal>

      <Flex.Horizontal className='table' alignItems='center' gap={12}>
        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
          승인일시
        </Typography.MediumBody>
        <Typography.MediumBody className='tw-w-[280px]'>
          {data.pgData?.purchasedAt && format(data.pgData?.purchasedAt, 'yyyy. MM. dd HH:mm')}
        </Typography.MediumBody>

        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48'>
          결제 금액
        </Typography.MediumBody>
        <Typography.MediumBody>{amount.orderLatestAmount.toLocaleString()}원</Typography.MediumBody>
      </Flex.Horizontal>

      <Flex.Horizontal className='table' alignItems='center' gap={12}>
        <Typography.MediumBody color={COLORS.MAIN_400} className='tw-bg-[#F8F8F8] tw-p-4 tw-w-48 '>
          승인번호
        </Typography.MediumBody>
        <Typography.MediumBody className='tw-w-[280px]'>{data.pgData?.approveNo}</Typography.MediumBody>
      </Flex.Horizontal>
    </StyledOrder>
  );
}

export default OrderDetailPopup;
