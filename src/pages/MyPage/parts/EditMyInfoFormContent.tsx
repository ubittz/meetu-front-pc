import { Form, useFormikContext } from 'formik';
import { Link } from 'react-router-dom';

import InputField from '@@components/InputField';
import { EditMyInfoForm } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

interface EditMyInfoFormContentProps {
  handleEmailCheck: (email: string) => void;
}

export function EditMyInfoFormContent({ handleEmailCheck }: EditMyInfoFormContentProps) {
  const { handleSubmit, values, isValid } = useFormikContext<EditMyInfoForm>();

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <legend>내 정보 수정 정보입력 영역</legend>
        <div className='join_wrap'>
          <h3 className='join_tit'>내 정보</h3>
          {/* <!-- 정보입력 영역 시작 --> */}
          <div className='input_wrap'>
            <div className='input_area'>
              <label htmlFor='id'>아이디</label>
              <input type='text' name='id' id='id' value={values.id} disabled />
            </div>
            <div className='input_area'>
              <label htmlFor='name'>이름</label>
              <input type='text' name='name' id='name' value={values.name} disabled />
            </div>

            <InputField type='password' name='password' label='비밀번호' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />
            <InputField type='password' name='passwordCheck' label='비밀번호 확인' placeholder='비밀번호 확인' />

            <div className='input_area type_date'>
              <label htmlFor='birth'>생년월일</label>
              <input type='text' name='birth' id='birth' value={values.birth} disabled />
            </div>

            <InputField name='phone' label='연락처' placeholder='‘-’없이 입력해주세요.' />
            <InputField name='email' label='이메일' placeholder='이메일 주소를 입력해주세요.'>
              <button type='button' className='btn' onClick={() => handleEmailCheck(values.email)}>
                중복체크
              </button>
            </InputField>
          </div>
          {/* <!-- //정보입력 영역 종료 --> */}
        </div>
        <div className='btn_area type_02'>
          <Link to={pathGenerator(PAGES.MYPAGE)} className='btn form02'>
            취소
          </Link>
          <button type='submit' className='btn' disabled={!isValid}>
            저장
          </button>
        </div>
      </fieldset>
    </Form>
  );
}

export default EditMyInfoFormContent;
