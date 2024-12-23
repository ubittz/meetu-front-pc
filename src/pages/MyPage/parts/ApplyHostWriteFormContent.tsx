import { Form } from 'formik';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { pathGenerator } from '@@router/utils';
import { Link } from 'react-router-dom';
import InputField from '@@components/InputField';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { PAGES } from '@@router/constants';
import { ALL_CATEGORIES, CATEGORY_STRINGS } from '@@stores/meeting/constants';
import { BANK } from '@@stores/user/constants';
import {
  checkDuplicateHostNameRequest,
  checkDuplicateEmailRequest,
  checkDuplicateHostNameSuccess,
  checkDuplicateHostNameFailure,
  checkDuplicateEmailSuccess,
  checkDuplicateEmailFailure,
} from '@@stores/user/reducer';
import { HostAddDTO } from '@@stores/user/types';

function ApplyHostWriteFormContent() {
  const dispatch = useDispatch();
  const { values, errors, setFieldValue } = useFormikContext<HostAddDTO>();
  const [isTermsChecked, setIsTermsChecked] = useState(false);

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
    <Form>
      <>
        <div className='input_wrap'>
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
        </div>
        <h3 className='join_tit'>개인정보 수집 및 이용동의 (필수)</h3>
        {/* <!-- 개인정보 수집 및 이용동의 시작 --> */}
        <div className='terms_wrap type_host'>
          <div className='chk_area chkAll'>
            <input type='checkbox' name='termsChk' id='termsChk' checked={isTermsChecked} onChange={() => setIsTermsChecked(!isTermsChecked)} />
            <label htmlFor='termsChk'>
              동의합니다.
              <span>
                동의 대상 약관 : 이용약관(필수), 개인정보 수집 및 이용(필수), 개인정보 취급위탁(선택), <br />
                마케팅 정보 활용(선택)
              </span>
            </label>
          </div>
          <p className='txt_area' style={{ display: 'block' }}>
            제1조(목적) <br />
            이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
            이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
            &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」 <br /> <br /> <br />
            제2조(정의) <br /> <br />
            “몰” 이란 (주)휴테크산업 재화 또는 용역(이하 “재화”이라 함)을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화등을 거래할
            수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
            <br />
            “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
            <br />
            ‘회원’이라 함은 “몰”에 개인정보를 제공하여 회원등록을 한 자로서, “몰”의 정보를 지속적으로 제공받으며, “몰”이 제공하는 서비스를 계속적으로
            이용할 수 있는 자를 말합니다.
            <br />
            ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.
          </p>
        </div>
        {/* <!-- 개인정보 수집 및 이용동의 시작 --> */}

        <div className='btn_area type_02'>
          <Link to={pathGenerator(PAGES.MYPAGE)} className='btn form02'>
            취소
          </Link>
          <button type='submit' className='btn' disabled={!isTermsChecked}>
            신청
          </button>
        </div>
      </>
    </Form>
  );
}

export default ApplyHostWriteFormContent;
