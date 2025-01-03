import { useState } from 'react';

import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { resetPasswordSchema } from '@@constants/scheme';
import { ResetPasswordForm } from '@@pages/Login/types';
import { sanitizeResetPasswordForm } from '@@pages/Login/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { resetPasswordRequest, resetPasswordSuccess, resetPasswordFailure } from '@@stores/auth/reducer';
import { UserVerifyIdentityResponse } from '@@stores/auth/types';

function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const verify: UserVerifyIdentityResponse | undefined = state.verify;

  const initialValues: ResetPasswordForm = {
    userId: verify?.userId || '',
    password: '',
    passwordCheck: '',
    changeKey: verify?.changeKey || '',
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmit = async (values: ResetPasswordForm) => {
    console.log('values', sanitizeResetPasswordForm(values));
    dispatch(resetPasswordRequest(sanitizeResetPasswordForm(values)));
  };

  useActionSubscribe({
    type: resetPasswordSuccess.type,
    callback: () => {
      console.log('비밀번호 변경 성공');
      setIsPopupVisible(true);
    },
  });

  useActionSubscribe({
    type: resetPasswordFailure.type,
    callback: () => {
      alert('비밀번호 변경에 실패했습니다.');
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
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn'>
              아이디 찾기
            </Link>
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn active'>
              비밀번호 찾기
            </Link>
          </div>

          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={resetPasswordSchema}>
            {({ isValid }) => (
              <Form>
                <fieldset>
                  <legend>계정찾기 정보입력 영역</legend>
                  <div className='join_wrap type_srch'>
                    <div className='input_wrap'>
                      <p className='pw_srch_txt'>
                        <strong>비밀번호 변경</strong>
                        <span>새로운 비밀번호를 등록해주세요.</span>
                      </p>
                      <InputField name='password' label='비밀번호' type='password' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />
                      <InputField name='passwordCheck' label='비밀번호 확인' type='password' placeholder='새 비밀번호 확인' />
                    </div>

                    <div className='btn_area'>
                      <button type='submit' className={`btn ${!isValid ? 'disabled' : ''}`} disabled={!isValid}>
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
            onConfirmLeft={() => navigate(pathGenerator(PAGES.MAIN))}
            onConfirmRight={() => navigate(pathGenerator(PAGES.LOGIN))}
            confirmTextLeft='홈으로'
            confirmTextRight='로그인 하기'
            title='비밀번호 찾기'
            onCancel={() => setIsPopupVisible(false)}
          >
            <Flex.Horizontal gap={4} className='tw-justify-center'>
              <Typography.SmallTitle>비밀번호 변경이 완료되었습니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ChangePassword;
