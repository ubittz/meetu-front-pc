import { useState } from 'react';

import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { findIdSchema } from '@@constants/scheme';
import { useCertify } from '@@pages/Login/hooks';
import { FindIdForm } from '@@pages/Login/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  findIdRequest,
  findIdSuccess,
  findIdFailure,
  sendCertifyEmailRequest,
  sendCertifyEmailSuccess,
  sendCertifyEmailFailure,
} from '@@stores/auth/reducer';

const initialValues: FindIdForm = {
  email: '',
  authNumber: '',
};

function FindId() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [foundId, setFoundId] = useState('');
  const { isCertifySend, formattedTime, startCertifyTimer, resetCertify } = useCertify();

  const handleSubmit = async (values: FindIdForm) => {
    console.log('values', values);
    dispatch(findIdRequest(values));
  };

  const handleCertifySend = (values: FindIdForm) => {
    console.log('values', values);
    if (values.email !== '') {
      dispatch(sendCertifyEmailRequest(values.email));
    }
  };

  useActionSubscribe({
    type: sendCertifyEmailSuccess.type,
    callback: () => {
      startCertifyTimer();
      alert('인증번호가 발송되었습니다.');
    },
  });

  useActionSubscribe({
    type: sendCertifyEmailFailure.type,
    callback: () => {
      alert('해당 이메일 주소에 존재하는 유저가 없습니다.');
    },
  });

  useActionSubscribe({
    type: findIdSuccess.type,
    callback: ({ payload }: ReturnType<typeof findIdSuccess>) => {
      setFoundId(payload);
      setPopupVisible(true);
    },
  });

  useActionSubscribe({
    type: findIdFailure.type,
    callback: () => {
      setPopupVisible(false);
      resetCertify();
      alert('인증번호를 다시 확인해주세요.');
    },
  });

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>계정 찾기</h2>
          <p className='caption'>회원 정보에 등록된 이메일로 찾을 수 있습니다.</p>

          <div className='srch_btn_wrap'>
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn active'>
              아이디 찾기
            </Link>
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn'>
              비밀번호 찾기
            </Link>
          </div>

          <Formik initialValues={initialValues} validationSchema={findIdSchema} onSubmit={handleSubmit}>
            {({ values }) => (
              <Form>
                <fieldset>
                  <legend>계정찾기 정보입력 영역</legend>
                  <div className='join_wrap type_srch'>
                    <div className='input_wrap'>
                      <InputField
                        name='email'
                        label='이메일'
                        placeholder='이메일 주소를 입력해주세요.'
                        children={
                          <button
                            type='button'
                            className='btn'
                            onClick={() => {
                              handleCertifySend(values);
                            }}
                          >
                            인증번호 발송
                          </button>
                        }
                      />

                      {isCertifySend && (
                        <InputField
                          name='authNumber'
                          label='인증번호'
                          placeholder='6자리 인증번호를 입력해주세요.'
                          children={<p className='certify'>{formattedTime}</p>}
                        />
                      )}
                    </div>

                    <div className='btn_area'>
                      <button type='submit' className={`btn ${!isCertifySend ? 'disabled' : ''}`} disabled={!isCertifySend}>
                        확인
                      </button>
                    </div>
                  </div>
                </fieldset>
              </Form>
            )}
          </Formik>

          <Popup
            visible={isPopupVisible}
            onConfirmLeft={() => navigate(pathGenerator(PAGES.LOGIN) + '/find/password')}
            onConfirmRight={() => navigate(pathGenerator(PAGES.LOGIN))}
            confirmTextLeft='비밀번호 찾기'
            confirmTextRight='로그인 하기'
            title='아이디 찾기'
            onCancel={() => {
              setPopupVisible(false);
              resetCertify();
            }}
          >
            <Flex.Horizontal gap={4}>
              <Typography.SmallTitle>{foundId} 회원님의 아이디는</Typography.SmallTitle>
              <Typography.SmallTitle color={COLORS.MAIN}>{foundId}</Typography.SmallTitle>
              <Typography.SmallTitle>입니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FindId;
