import { useState } from 'react';

import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import ButtonInputField from '@@components/InputField/ButtonInputField';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { registerSchema } from '@@constants/scheme';
import { RegisterFormType } from '@@pages/Register/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function UserInfoInput() {
  const [isIdPopupVisible, setIdPopupVisible] = useState(false);
  const [isMailPopupVisible, setMailPopupVisible] = useState(false);
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

  const handleIdCheck = async (value: RegisterFormType['member_id'], setFieldError: (field: string, message: string) => void) => {
    if (value.length < 5) {
      setIdPopupVisible(false);
      return;
    }
    if (value === 'takenId') {
      return setFieldError('member_id', '이미 가입된 아이디입니다.');
    }
    setIdPopupVisible(true);
  };

  const handleMailCheck = async (value: RegisterFormType['member_mail'], setFieldError: (field: string, message: string) => void) => {
    if (EMAIL_REGEX.test(value)) {
      setMailPopupVisible(false);
      return;
    }
    if (value === 'takenMail') {
      return setFieldError('member_mail', '이미 가입된 이메일입니다.');
    }
    setMailPopupVisible(true);
  };

  const handleSubmit = (values: RegisterFormType) => {
    console.log('회원가입 버튼 누름');
    console.log(values);
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

          <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
            <Form>
              <fieldset>
                <legend>회원가입 정보입력 영역</legend>
                <div className='join_wrap'>
                  <h3 className='join_tit'>기본정보</h3>
                  <div className='input_wrap'>
                    <ButtonInputField
                      name='member_id'
                      label='아이디'
                      placeholder='아이디를 입력해주세요.'
                      buttonText='중복체크'
                      onButtonClick={handleIdCheck}
                    />
                    <InputField name='member_pw' label='비밀번호' type='password' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />

                    <InputField name='member_pw_re' label='비밀번호 확인' type='password' placeholder='비밀번호 확인' />

                    <InputField name='member_name' label='이름' placeholder='이름을 입력해주세요.' />

                    <InputField name='member_birth' label='생년월일' placeholder='생년월일을 입력해주세요.' additionalClassName='type_date' />

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

                    <ButtonInputField
                      name='member_mail'
                      label='이메일'
                      placeholder='이메일 주소를 입력해주세요.'
                      buttonText='중복체크'
                      onButtonClick={handleMailCheck}
                    />
                  </div>

                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.LOGIN)} className='btn form02'>
                      취소
                    </Link>
                    <button type='submit' className={`btn `}>
                      회원가입
                    </button>
                  </div>
                </div>
              </fieldset>
            </Form>
          </Formik>

          {/* ID 중복 확인 팝업 */}
          <Popup visible={isIdPopupVisible} onCancel={() => setIdPopupVisible(false)} title='아이디 중복체크'>
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>사용 가능한 아이디 입니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>

          {/* 이메일 중복 확인 팝업 */}
          <Popup visible={isMailPopupVisible} onCancel={() => setMailPopupVisible(false)} title='이메일 중복체크'>
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>사용 가능한 이메일 입니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserInfoInput;
