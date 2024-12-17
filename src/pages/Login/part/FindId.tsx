import { useState } from 'react';

import { Formik, Form, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import ButtonInputField from '@@components/InputField/ButtonInputField';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { findIdSchema } from '@@constants/scheme';
import { useCertify } from '@@pages/Login/hooks';
import { FindIdFormValues } from '@@pages/Login/types';
import { EMAIL_REGEX } from '@@pages/Login/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function FindId() {
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [foundId, setFoundId] = useState('');
  const { isCertifySend, formattedTime, startCertifyTimer, resetCertify } = useCertify();

  const initialValues: FindIdFormValues = {
    member_name: '',
    member_mail: '',
    certify_number: '',
  };

  const handleSubmit = async (values: FindIdFormValues, { setFieldError }: FormikHelpers<FindIdFormValues>) => {
    if (values.certify_number.length !== 6) {
      setFieldError('certify_number', '인증번호는 6자리로 입력해주세요.');
      return;
    }
    // API 호출 및 아이디 찾기 로직
    const dummyFoundId = 'ho*******ng';
    setFoundId(dummyFoundId);
    setPopupVisible(true);
  };

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
            {({ setFieldValue }) => (
              <Form>
                <fieldset>
                  <legend>계정찾기 정보입력 영역</legend>
                  <div className='join_wrap type_srch'>
                    <div className='input_wrap'>
                      <InputField name='member_name' label='이름' placeholder='이름을 입력해주세요.' />

                      <ButtonInputField
                        name='member_mail'
                        label='이메일'
                        placeholder='이메일 주소를 입력해주세요.'
                        buttonText='인증번호 발송'
                        onButtonClick={(value) => {
                          if (EMAIL_REGEX.test(value)) {
                            startCertifyTimer();
                            setFieldValue('certify_number', '');
                          }
                        }}
                      />

                      {isCertifySend && (
                        <InputField
                          name='certify_number'
                          label='인증번호'
                          placeholder='6자리 인증번호를 입력해주세요.'
                          additionalElement={<p className='certify'>{formattedTime}</p>}
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
