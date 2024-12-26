import { useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';
import { PaymentForm } from '@@stores/payment/types';
function OrderInfo() {
  const { getFieldProps, errors } = useFormikContext<PaymentForm>();

  return (
    <Flex.Vertical gap={35}>
      <div className='tw-mt-[60px] info_l'>
        <div className='order_info'>
          <h3>주문자 정보</h3>
          <div className='info_contents'>
            <h4>주문자 정보 입력</h4>
            <Flex.Horizontal alignItems='center' className='tw-mt-7'>
              <Typography.LargeButton className='tw-w-[120px]'>주문자명</Typography.LargeButton>
              <InputFormGroup
                className='tw-w-full'
                inputProps={{
                  ...getFieldProps('customerName'),
                  placeholder: '이름을 입력해주세요.',
                }}
                errorMessage={errors.customerName}
              />
            </Flex.Horizontal>

            <Flex.Horizontal alignItems='center'>
              <Typography.LargeButton className='tw-w-[120px]'>연락처</Typography.LargeButton>
              <InputFormGroup
                className='tw-w-full'
                inputProps={{
                  ...getFieldProps('customerTel'),
                  placeholder: '전화번호를 입력해주세요.',
                }}
                errorMessage={errors.customerTel}
              />
            </Flex.Horizontal>
            <div className='chk_area'>
              <input type='checkbox' name='orderChk' id='orderChk' />
              <label htmlFor='orderChk'>다음에도 사용할게요!</label>
            </div>
          </div>
        </div>
      </div>
    </Flex.Vertical>
  );
}

export default OrderInfo;
