import { Form } from 'formik';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import InputField from '@@components/InputField';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { ALL_CATEGORIES, CATEGORY_STRINGS } from '@@stores/meeting/constants';
import { BANK } from '@@stores/myPage/constants';
import {
  checkDuplicateHostNameRequest,
  checkDuplicateEmailRequest,
  checkDuplicateHostNameSuccess,
  checkDuplicateHostNameFailure,
  checkDuplicateEmailSuccess,
  checkDuplicateEmailFailure,
} from '@@stores/myPage/reducer';
import { HostAddDTO } from '@@stores/myPage/types';

function ApplyHostWriteFormContent() {
  const dispatch = useDispatch();
  const { values, errors, setFieldValue } = useFormikContext<HostAddDTO>();

  const handleCheckNickname = () => {
    if (!values.name) {
      alert('닉네임을 입력해주세요.');
      return;
    }
    dispatch(checkDuplicateHostNameRequest(values.name));
  };

  const handleCheckEmail = () => {
    if (!values.email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    dispatch(checkDuplicateEmailRequest(values.email));
  };

  useActionSubscribe({
    type: checkDuplicateHostNameSuccess.type,
    callback: () => {
      setFieldValue('nameCheck', true);
      alert('사용 가능한 닉네임입니다.');
    },
  });

  useActionSubscribe({
    type: checkDuplicateHostNameFailure.type,
    callback: () => {
      setFieldValue('nameCheck', false);
      alert('이미 사용중인 닉네임입니다.');
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailSuccess.type,
    callback: () => {
      setFieldValue('emailCheck', true);
      alert('사용 가능한 이메일입니다.');
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailFailure.type,
    callback: () => {
      setFieldValue('emailCheck', false);
      alert('이미 사용중인 이메일입니다.');
    },
  });

  return (
    <Form className='input_wrap'>
      <InputField
        name='name'
        label='호스트명'
        required
        placeholder='호스트 닉네임을 적어주세요.'
        children={
          <button type='button' className='btn' onClick={handleCheckNickname}>
            중복체크
          </button>
        }
      />
      <InputField name='tel' label='연락처' required placeholder='‘-’없이 입력해주세요.' />
      <InputField
        name='email'
        label='이메일'
        required
        placeholder='이메일 주소를 입력해주세요.'
        children={
          <button type='button' className='btn' onClick={handleCheckEmail}>
            중복체크
          </button>
        }
      />

      <div className='input_area'>
        <label htmlFor='host_ctg'>
          모임 카테고리<strong className='required'>*</strong>
          <span>(최대 2개)</span>
        </label>
        <select name='category1' id='category1' required onChange={(e) => setFieldValue('category1', e.target.value)}>
          <option value='' selected disabled hidden>
            선택하기
          </option>
          {ALL_CATEGORIES.map((category) => (
            <option value={category}>{CATEGORY_STRINGS[category]}</option>
          ))}
        </select>
        {errors.category1 && <p className='txt_error'>카테고리를 선택해주세요.</p>}
        <select name='category2' id='category2' onChange={(e) => setFieldValue('category2', e.target.value)}>
          <option value='' selected disabled hidden>
            선택하기
          </option>
          {ALL_CATEGORIES.map((category) => (
            <option value={category}>{CATEGORY_STRINGS[category]}</option>
          ))}
        </select>
      </div>

      <InputField name='question' label='기타 문의 사항' placeholder='기타 문의 사항을 적어주세요. (최대 100byte)' />
      <div className='input_area'>
        <label htmlFor='host_bank'>
          정산은행<strong className='required'>*</strong>
        </label>
        <select name='bank' id='bank' required onChange={(e) => setFieldValue('bank', e.target.value)}>
          <option value='' selected disabled hidden>
            선택하기
          </option>
          {Object.entries(BANK).map(([key, value]) => (
            <option value={key}>{value}</option>
          ))}
        </select>
        {errors.bank && <p className='txt_error'>정산은행을 선택해주세요.</p>}
      </div>
      <InputField name='accNo' label='정산 계좌번호' required placeholder='‘-’없이 입력해주세요.' />
    </Form>
  );
}

export default ApplyHostWriteFormContent;
