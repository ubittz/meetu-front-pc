import { useState } from 'react';

import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { applyHostSchema } from '@@constants/scheme';
import ApplyHostWriteFormContent from '@@pages/MyPage/parts/ApplyHostWriteFormContent';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { HostAddDTO } from '@@stores/myPage/types';

const initialValues: HostAddDTO = {
  name: '',
  tel: '',
  email: '',
  category1: '',
  question: '',
  bank: '',
  accNo: '',
};

function ApplyHostWrite() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleSubmit = (values: HostAddDTO) => {
    console.log(values);
    openPopup();
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div id='wrap'>
      <Header />
      {/* <!-- container 영역 시작 --> */}
      <main className='container'>
        <div className='member_inner'>
          <h2>호스트 등록 신청</h2>
          <p className='caption'>
            <strong className='active'>호스트 등록 정보 입력</strong>
          </p>
          {/* <!-- 호스트 등록 신청 정보입력 form 영역 시작 --> */}
          <Formik initialValues={initialValues} validationSchema={applyHostSchema} onSubmit={handleSubmit}>
            <fieldset>
              <legend>내 정보 수정 정보입력 영역</legend>
              <div className='join_wrap'>
                <h3 className='join_tit'>정보 입력</h3>
                {/* <!-- 정보입력 영역 시작 --> */}
                <ApplyHostWriteFormContent />

                <h3 className='join_tit'>개인정보 수집 및 이용동의 (필수)</h3>
                {/* <!-- 개인정보 수집 및 이용동의 시작 --> */}
                <div className='terms_wrap type_host'>
                  <div className='chk_area chkAll'>
                    <input
                      type='checkbox'
                      name='termsChk'
                      id='termsChk'
                      checked={isTermsChecked}
                      onChange={() => setIsTermsChecked(!isTermsChecked)}
                    />
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
                    이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라
                    한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
                    &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」 <br /> <br />{' '}
                    <br />
                    제2조(정의) <br /> <br />
                    “몰” 이란 (주)휴테크산업 재화 또는 용역(이하 “재화”이라 함)을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화등을
                    거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                    <br />
                    “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                    <br />
                    ‘회원’이라 함은 “몰”에 개인정보를 제공하여 회원등록을 한 자로서, “몰”의 정보를 지속적으로 제공받으며, “몰”이 제공하는 서비스를
                    계속적으로 이용할 수 있는 자를 말합니다.
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
              </div>
            </fieldset>
          </Formik>
          <Popup
            visible={isPopupOpen}
            onConfirmLeft={() => navigate(pathGenerator(PAGES.MAIN))}
            onConfirmRight={closePopup}
            confirmTextLeft='홈으로'
            confirmTextRight='확인'
            title='호스트 등록 신청'
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>호스트 등록 신청이 완료되었습니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>{' '}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ApplyHostWrite;
