import { ReactNode, useState } from 'react';

import { Form, useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Flex from '@@components/Flex';
import InputField from '@@components/InputField';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import EditProfileImage from '@@pages/MyPage/parts/EditProfileImage';
import { EditMyInfoForm } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { checkDuplicateEmailFailure, checkDuplicateEmailRequest, checkDuplicateEmailSuccess } from '@@stores/auth/reducer';

export function EditMyInfoFormContent() {
  const dispatch = useDispatch();
  const me = useAppState((state) => state.auth.me);

  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<ReactNode>();

  const { setFieldValue, handleSubmit, values, isValid, errors } = useFormikContext<EditMyInfoForm>();

  const handleClickCheckEmail = () => {
    if (values.email) {
      dispatch(checkDuplicateEmailRequest(values.email));
    }
  };

  const handleConfirm = () => {
    setVisible(false);
  };

  useActionSubscribe({
    type: checkDuplicateEmailSuccess.type,
    callback: () => {
      setContent('사용 가능한 이메일입니다.');
      setVisible(true);
      setFieldValue('checkedEmail', true);
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailFailure.type,
    callback: () => {
      setContent('이미 사용중인 이메일입니다.');
      setVisible(true);
      setFieldValue('checkedEmail', false);
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Popup visible={visible} onConfirmRight={handleConfirm} confirmTextRight='확인' onCancel={() => setVisible(false)}>
        <Flex.Horizontal gap={4} className='tw-justify-center'>
          <Typography.SmallTitle>{content}</Typography.SmallTitle>
        </Flex.Horizontal>
      </Popup>
      <fieldset>
        <legend>내 정보 수정 정보입력 영역</legend>
        <div className='join_wrap'>
          <h3 className='join_tit'>내 정보</h3>
          {/* <!-- 정보입력 영역 시작 --> */}
          <div className='input_wrap'>
            <EditProfileImage />
            <div className='input_area'>
              <label htmlFor='id'>아이디</label>
              <input type='text' name='id' id='id' value={values.id} disabled />
            </div>
            <div className='input_area'>
              <label htmlFor='name'>이름</label>
              <input type='text' name='name' id='name' value={me?.name} disabled />
            </div>

            <InputField type='password' name='password' label='비밀번호' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />
            <InputField type='password' name='passwordCheck' label='비밀번호 확인' placeholder='비밀번호 확인' />

            <div className='input_area type_date'>
              <label htmlFor='birth'>생년월일</label>
              <input type='text' name='birth' id='birth' value={me?.birth} disabled />
            </div>

            <InputField name='phone' label='연락처' placeholder='‘-’없이 입력해주세요.' />
            <InputField
              errorMessage={errors.email || errors.checkedEmail}
              name='email'
              label='이메일'
              placeholder='이메일 주소를 입력해주세요.'
              disabled={values.checkedEmail}
            >
              <button type='button' className='btn' onClick={handleClickCheckEmail} disabled={!values.email || values.checkedEmail || !!errors.email}>
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
