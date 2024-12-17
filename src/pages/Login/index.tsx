import { Form, Formik } from 'formik';
import { Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
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

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <fieldset>
                <legend>로그인 영역</legend>
                <div className='input_wrap'>
                  <div className='input_area' id='id'>
                    <Field type='text' name='id' id='id' placeholder='아이디를 입력해주세요.' />
                  </div>
                  <div className='input_area' id='password'>
                    <Field type='password' name='password' id='password' placeholder='비밀번호를 입력해주세요.' />
                  </div>
                </div>

                <div className='btn_area'>
                  <button type='submit' className='btn'>
                    로그인하기
                  </button>
                </div>
                <div className='btn_area btn_sub'>
                  <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn'>
                    아이디 찾기
                  </Link>
                  <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn'>
                    비밀번호 찾기
                  </Link>
                </div>
              </fieldset>
            </Form>
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
