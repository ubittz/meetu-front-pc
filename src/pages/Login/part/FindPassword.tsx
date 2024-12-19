import { Formik, Form, FormikProps } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import { verifyIdentitySchema } from '@@constants/scheme';
import { useCertify } from '@@pages/Login/hooks';
import { VerifyIdentityForm } from '@@pages/Login/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { verifyIdentityRequest, verifyIdentitySuccess, verifyIdentityFailure } from '@@stores/auth/reducer';

const initialValues: VerifyIdentityForm = {
  id: '',
  email: '',
};

function FindPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCertifySend, formattedTime, startCertifyTimer } = useCertify();

  const handleSubmit = (form: VerifyIdentityForm) => {
    dispatch(verifyIdentityRequest(form));
  };

  useActionSubscribe({
    type: verifyIdentitySuccess.type,
    callback: () => {
      navigate(pathGenerator(PAGES.LOGIN) + '/find/password/change');
    },
  });

  useActionSubscribe({
    type: verifyIdentityFailure.type,
    callback: () => {
      console.log('인증 실패');
    },
  });

  const renderForm = ({ isValid }: FormikProps<VerifyIdentityForm>) => (
    <Form>
      <fieldset>
        <legend>계정찾기 정보입력 영역</legend>
        <div className='join_wrap type_srch'>
          <div className='input_wrap'>
            <InputField name='id' label='아이디' placeholder='아이디를 입력해주세요.' />

            <InputField
              name='email'
              label='이메일'
              placeholder='이메일 주소를 입력해주세요.'
              children={
                <button
                  type='button'
                  className='btn'
                  onClick={() => {
                    startCertifyTimer();
                    // setFieldValue('certify_number', ''); // 이메일 인증번호 발송 로직 추가
                  }}
                >
                  인증번호 발송
                </button>
              }
            />

            {isCertifySend && (
              <InputField
                name='certify_number'
                label='인증번호'
                placeholder='6자리 인증번호를 입력해주세요.'
                children={<p className='certify'>{formattedTime}</p>}
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

          <Formik initialValues={initialValues} validationSchema={verifyIdentitySchema} onSubmit={handleSubmit}>
            {renderForm}
          </Formik>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FindPassword;
