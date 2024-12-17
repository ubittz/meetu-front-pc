import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import { registerSchema } from '@@constants/scheme';
import { GENDER } from '@@pages/Register/constants';
import { RegisterForm } from '@@pages/Register/types';
import { sanitizeRegisterForm } from '@@pages/Register/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { registerRequest, registerSuccess, registerFailure } from '@@stores/auth/reducer';

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
    callback: ({ payload }: ReturnType<typeof registerSuccess>) => {
      navigate(pathGenerator(PAGES.REGISTER) + '/complete', {
        state: {
          name: payload.name,
        },
      });
    },
  });

  useActionSubscribe({
    type: registerFailure.type,
    callback: ({ payload }: ReturnType<typeof registerFailure>) => {
      alert(payload);
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

          <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <Form>
                <fieldset>
                  <legend>회원가입 정보입력 영역</legend>
                  <div className='join_wrap'>
                    <h3 className='join_tit'>기본정보</h3>
                    <div className='input_wrap'>
                      <InputField
                        name='userId'
                        label='아이디'
                        placeholder='아이디를 입력해주세요.'
                        additionalElement={
                          <button
                            type='button'
                            className='btn'
                            onClick={() => {
                              // handleIdCheck(values.userId, setFieldError);
                              setFieldValue('isIdCheck', true);
                            }}
                          >
                            중복체크
                          </button>
                        }
                      />

                      <InputField name='password' label='비밀번호' type='password' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />

                      <InputField name='passwordCheck' label='비밀번호 확인' type='password' placeholder='비밀번호 확인' />

                      <InputField name='username' label='이름' placeholder='이름을 입력해주세요.' />

                      <InputField name='birth' label='생년월일' placeholder='생년월일을 선택해주세요.' isDate={true} />

                      <div className='input_area inputChk'>
                        <p className='input_tit'>성별</p>
                        <div className='chk_area radio'>
                          <input type='radio' name='genderChk' id='genderChk01' value='male' />
                          <label htmlFor='genderChk01'>남자</label>
                        </div>
                        <div className='chk_area radio'>
                          <input type='radio' name='genderChk' id='genderChk02' value='female' />
                          <label htmlFor='genderChk02'>여자</label>
                        </div>
                      </div>

                      <InputField name='tel' label='연락처' placeholder="'-'없이 입력해주세요." />

                      <InputField
                        name='email'
                        label='이메일'
                        placeholder='이메일 주소를 입력해주세요.'
                        additionalElement={
                          <button
                            type='button'
                            className='btn'
                            onClick={() => {
                              // handleMailCheck(values.email, setFieldError);
                              setFieldValue('isMailCheck', true);
                            }}
                          >
                            중복체크
                          </button>
                        }
                      />
                    </div>

                    <div className='btn_area type_02'>
                      <Link to={pathGenerator(PAGES.LOGIN)} className='btn form02'>
                        취소
                      </Link>
                      <button type='submit' className='btn'>
                        회원가입
                      </button>
                    </div>
                  </div>
                </fieldset>
              </Form>
            )}
          </Formik>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserInfoInput;
