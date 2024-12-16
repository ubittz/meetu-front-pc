import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { registerSchema } from '@@constants/scheme';
import InputField from '@@components/InputField';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { RegisterFormType } from '@@pages/Register/types';

function UserInfoInput() {
  const initialValues: RegisterFormType = {
    member_id: '',
    member_pw: '',
    member_pw_re: '',
    member_name: '',
    member_birth: '',
    genderChk: '',
    member_contact: '',
    member_mail: '',
  };

  const handleIdCheck = async (value: string, setFieldError: any) => {
    if (value === 'takenId') {
      setFieldError('member_id', '이미 가입된 아이디입니다.');
    }
  };

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

          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <fieldset>
                <legend>회원가입 정보입력 영역</legend>
                <div className='join_wrap'>
                  <h3 className='join_tit'>기본정보</h3>
                  <div className='input_wrap'>
                    <InputField
                      name='member_id'
                      label='아이디'
                      placeholder='아이디를 입력해주세요.'
                      buttonText='중복체크'
                      onButtonClick={handleIdCheck}
                    />

                    <InputField name='member_pw' label='비밀번호' type='password' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />

                    <InputField name='member_pw_re' label='비밀번호 확인' type='password' placeholder='비밀번호 확인' />

                    <InputField name='member_name' label='이름' placeholder='이름을 입력해주세요.' />

                    <InputField name='member_birth' label='생년월일' placeholder='생년월일을 선택해주세요.' isDate={true} />

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

                    <InputField name='member_contact' label='연락처' placeholder="'-'없이 입력해주세요." />

                    <InputField name='member_mail' label='이메일' placeholder='이메일 주소를 입력해주세요.' />
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
          </Formik>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserInfoInput;
