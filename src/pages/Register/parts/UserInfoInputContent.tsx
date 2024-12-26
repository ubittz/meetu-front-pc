import { Form, ErrorMessage, Field, FieldProps } from 'formik';
import { Link } from 'react-router-dom';

import InputField from '@@components/InputField';
import { GENDER } from '@@pages/Register/constants';
import { useRegisterForm } from '@@pages/Register/hooks';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

export function UserInfoInputContent() {
  const { getFieldProps, handleClickCheckId, handleClickCheckEmail } = useRegisterForm();

  return (
    <Form>
      <fieldset>
        <legend>회원가입 정보입력 영역</legend>
        <div className='join_wrap'>
          <h3 className='join_tit'>기본정보</h3>
          <div className='input_wrap'>
            {/* 아이디 입력 필드 */}
            <InputField
              name='userId'
              label='아이디'
              placeholder='아이디를 입력해주세요.'
              children={
                <button type='button' className='btn' onClick={handleClickCheckId}>
                  중복체크
                </button>
              }
            />

            {/* 비밀번호, 비밀번호 확인 입력 필드 */}
            <InputField name='password' label='비밀번호' type='password' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />

            <InputField name='passwordCheck' label='비밀번호 확인' type='password' placeholder='비밀번호 확인' />

            {/* 이름, 생년월일, 성별, 연락처 입력 필드 */}
            <InputField name='username' label='이름' placeholder='이름을 입력해주세요.' />
            <InputField name='birth' label='생년월일' placeholder='생년월일을 선택해주세요.' isDate={true} />

            {/* 성별 선택 필드 */}
            <div className='input_area inputChk'>
              <p className='input_tit'>성별</p>
              <div className='chk_area radio'>
                <Field
                  type='radio'
                  {...getFieldProps('gender')}
                  value={GENDER.MALE}
                  as={(props: FieldProps['field']) => <input {...props} id='genderChk01' />}
                />
                <label htmlFor='genderChk01'>남자</label>
              </div>
              <div className='chk_area radio'>
                <Field
                  type='radio'
                  {...getFieldProps('gender')}
                  value={GENDER.FEMALE}
                  as={(props: FieldProps['field']) => <input {...props} id='genderChk02' />}
                />
                <label htmlFor='genderChk02'>여자</label>
              </div>
              <ErrorMessage name='gender'>{(msg) => <p className='txt_error'>{msg}</p>}</ErrorMessage>
            </div>

            {/* 연락처, 이메일 입력 필드 */}
            <InputField name='tel' label='연락처' placeholder="'-'없이 입력해주세요." />
            <InputField
              name='email'
              label='이메일'
              placeholder='이메일 주소를 입력해주세요.'
              children={
                <button type='button' className='btn' onClick={handleClickCheckEmail}>
                  중복체크
                </button>
              }
            />
          </div>

          {/* 하단 버튼 */}
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
  );
}
