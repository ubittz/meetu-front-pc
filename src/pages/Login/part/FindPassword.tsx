import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, FormikProps, FormikHelpers } from 'formik';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import { useCertify } from '@@pages/Login/hooks';
import { FindPasswordFormValues } from '@@pages/Login/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { findPasswordSchema } from '@@constants/scheme';

function FindPassword() {
  const navigate = useNavigate();
  const { isCertifySend, formattedTime, startCertifyTimer } = useCertify();

  const initialValues: FindPasswordFormValues = {
    member_name: '',
    member_id: '',
    member_mail: '',
    certify_number: '',
  };

  const handleCertifyRequest = (email: string, setFieldError: (field: string, message: string) => void) => {
    if (email.trim() === '') {
      setFieldError('member_mail', '이메일을 입력해주세요.');
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFieldError('member_mail', '올바른 이메일 형식이 아닙니다.');
      return;
    }

    startCertifyTimer();
    // TODO: API 호출
  };

  const handleSubmit = async (values: FindPasswordFormValues, { setFieldError }: FormikHelpers<FindPasswordFormValues>) => {
    // TODO: API 호출
    if (values.certify_number === '123456') {
      navigate(pathGenerator(PAGES.LOGIN) + '/find/password/change');
    } else {
      setFieldError('certify_number', '인증번호가 일치하지 않습니다.');
    }
  };

  const renderForm = ({ values, isValid, setFieldError }: FormikProps<FindPasswordFormValues>) => (
    <Form>
      <fieldset>
        <legend>계정찾기 정보입력 영역</legend>
        <div className='join_wrap type_srch'>
          <div className='input_wrap'>
            <InputField name='member_name' label='이름' placeholder='이름을 입력해주세요.' />

            <InputField name='member_id' label='아이디' placeholder='아이디를 입력해주세요.' />

            <InputField
              name='member_mail'
              label='이메일'
              placeholder='이메일 주소를 입력해주세요.'
              additionalElement={
                <button type='button' className='btn' onClick={() => handleCertifyRequest(values.member_mail, setFieldError)}>
                  인증번호 발송
                </button>
              }
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
            <button type='submit' className={`btn ${!isCertifySend || !isValid ? 'disabled' : ''}`} disabled={!isCertifySend || !isValid}>
              확인
            </button>
          </div>
        </div>
      </fieldset>
    </Form>
  );

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>계정 찾기</h2>
          <p className='caption'>회원 정보에 등록된 이메일로 찾을 수 있습니다.</p>

          <div className='srch_btn_wrap'>
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn'>
              아이디 찾기
            </Link>
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn active'>
              비밀번호 찾기
            </Link>
          </div>

          <Formik initialValues={initialValues} validationSchema={findPasswordSchema} onSubmit={handleSubmit}>
            {renderForm}
          </Formik>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FindPassword;
