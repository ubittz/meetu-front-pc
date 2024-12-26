import { useFormikContext } from 'formik';
import { Form } from 'formik';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PaymentForm } from '@@stores/payment/types';

import OrdererInfo from './OrderInfo';
import OrderPayment from './OrderPayment';
import PaymentInfo from './PaymentInfo';
import PaymentProductInfo from './PaymentProductInfo';
import PointBenefits from './PointBenefits';

function PaymentFormContent() {
  const { handleSubmit, isValid, values, setFieldValue } = useFormikContext<PaymentForm>();
  
  const agreeFinancial = values.agreeFinancial;

  const handleAgreeFinancialChange = (newAgreeFinancial: boolean) => {
    setFieldValue('agreeFinancial', newAgreeFinancial);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div id='wrap'>
        <Header />
        <main className='container'>
          <section className='mypage_top'>
            <h2>결제하기</h2>
            <p className='caption'>
              <strong className='active'>01. 정보입력</strong>
              <strong>02. 결제완료</strong>
            </p>
          </section>
          <section className='payment_wrap'>
            <fieldset>
              <legend>결제하기</legend>
              <div className='payment_info'>
                <div className='pi_inner'>
                  <Flex.Horizontal gap={60}>
                    <Flex.Vertical>
                      <PaymentProductInfo />
                      <OrdererInfo />
                    </Flex.Vertical>
                    <Flex.Vertical>
                      <PaymentInfo onAgreeFinancialChange={handleAgreeFinancialChange} />
                      <OrderPayment />
                      <PointBenefits />
                    </Flex.Vertical>
                  </Flex.Horizontal>
                </div>
              </div>
              <div className='payment_btn'>
                <div className='pb_inner'>
                  <p>약관 및 주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
                  <button type='submit' className='btn' disabled={!isValid || !agreeFinancial}>
                    <span>50,000</span>원 결제하기
                  </button>
                </div>
              </div>
            </fieldset>
          </section>
        </main>
        <Footer />
      </div>
    </Form>
  );
}

export default PaymentFormContent;
