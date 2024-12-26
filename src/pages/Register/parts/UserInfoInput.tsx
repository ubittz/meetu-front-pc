import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { registerSchema } from '@@constants/scheme';
import { GENDER } from '@@pages/Register/constants';
import { UserInfoInputContent } from '@@pages/Register/parts/UserInfoInputContent';
import { RegisterForm } from '@@pages/Register/types';
import { sanitizeRegisterForm } from '@@pages/Register/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { registerRequest } from '@@stores/auth/reducer';
import { registerSuccess, registerFailure } from '@@stores/auth/reducer';

const initialValues: RegisterForm = {
  userId: '',
  username: '',
  password: '',
  passwordCheck: '',
  email: '',
  birth: '',
  gender: GENDER.MALE,
  tel: '',
  checkedId: false,
  checkedEmail: false,
};

function UserInfoInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: RegisterForm) => {
    dispatch(registerRequest(sanitizeRegisterForm(values)));
  };

  useActionSubscribe({
    type: registerSuccess.type,
    callback: () => {
      alert('회원가입이 완료되었습니다.');
      navigate(pathGenerator(PAGES.REGISTER) + '/complete');
    },
  });

  useActionSubscribe({
    type: registerFailure.type,
    callback: () => {
      alert('회원가입에 실패하였습니다.');
    },
  });

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>회원가입</h2>
          <p className='caption'>
            <strong>01. 약관동의</strong>
            <strong className='active'>02. 정보입력</strong>
            <strong>03. 가입완료</strong>
          </p>

          {/* Formik setup */}
          <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
            <UserInfoInputContent />
          </Formik>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserInfoInput;
