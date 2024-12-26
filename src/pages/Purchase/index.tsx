import { Bootpay } from '@bootpay/client-js';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { paymentSchemaCustomer } from '@@constants/scheme';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { BOOTPAY_FAIL_CODE } from '@@stores/payment/constants';
import { fetchPaymentConfigFailure, fetchPaymentConfigRequest, fetchPaymentConfigSuccess } from '@@stores/payment/reducer';
import { BootpayFailCode, BootpaySuccessCode, PaymentForm } from '@@stores/payment/types';

import PaymentFormContent from './parts/PaymentFormContent';
import { sanitizePaymentAddForm } from './utils';

function Purchase() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const initialValues: PaymentForm = {
    meetingId: id ?? '',
    customerName: '',
    customerTel: '',
    agreeFinancial: false, 
  };

  const handleSubmit = async (form: PaymentForm) => {
    dispatch(fetchPaymentConfigRequest(sanitizePaymentAddForm(form)));
  };

  useActionSubscribe({
    type: fetchPaymentConfigSuccess.type,
    callback: async ({ payload: { applicationId, config } }: ReturnType<typeof fetchPaymentConfigSuccess>) => {
      try {
        const response = await Bootpay.requestPayment({
          application_id: applicationId,
          price: 100,
          order_name: config.meetingName,
          order_id: config.payId,
          extra: {
            open_type: 'popup',
            escrow: false,
          },
          user: {
            username: config.orderName,
            phone: config.orderTel,
          },
        });
        const code: BootpaySuccessCode = response.data;
        navigate(pathGenerator(PAGES.PURCHASE + '/complete'), {
          state: { code },
        });
      } catch (error) {
        const newError = error as unknown as { message: string; event: BootpayFailCode };
        if (newError.event === BOOTPAY_FAIL_CODE.ERROR) {
          alert(newError.message as string);  
        }
      }
    },
  });

  useActionSubscribe({
    type: fetchPaymentConfigFailure.type,
    callback: () => {
      alert('결제 정보를 가져오는데에 실패했습니다.');
    },
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={paymentSchemaCustomer}>
      <>
        <PaymentFormContent />
      </>
    </Formik>
  );
}

export default Purchase;
