import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { loginSchema } from '@@constants/scheme';
import LoginFormContent from '@@pages/Login/part/LoginFormContent';
import { LoginForm } from '@@pages/Login/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { loginRequest, loginSuccess, loginFailure } from '@@stores/auth/reducer';

const initialValues: LoginForm = {
  id: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (form: LoginForm) => {
    dispatch(loginRequest(form));
  };

  useActionSubscribe({
    type: loginSuccess.type,
    callback: () => {
      navigate(pathGenerator(PAGES.MAIN));
    },
  });

  useActionSubscribe({
    type: loginFailure.type,
    callback: ({ payload }: ReturnType<typeof loginFailure>) => {
      alert(payload);
    },
  });

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>로그인</h2>
          <p className='caption'>밋 유에 오신 것을 환영합니다.</p>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
            <LoginFormContent />
          </Formik>
          <div className='btn_join'>
            <p className='or_txt'>
              <span>or</span>
            </p>
            <div className='btn_area'>
              <Link to={pathGenerator(PAGES.REGISTER)} className='btn'>
                회원가입 후 이용하기
              </Link>
              <a href='#' className='btn kakao'>
                <span>카카오톡 로그인하기</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
