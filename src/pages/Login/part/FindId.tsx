import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { useCertify } from '../hooks';

function FindId() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { formattedCertifyTime, isCertifySend, isCertifyError, isIdFindable, handleCertifySend, handleCertifyNumberChange, validateCertifyNumber } =
    useCertify();

  const handleFindId = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isIdFindable(name, email)) {
      return;
    }
    // 인증번호 검증 결과에 따라 팝업 또는 에러 처리
    const isValid = validateCertifyNumber('123456');
    if (isValid) {
      setPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleFindPasswordPage = () => {
    navigate(pathGenerator(PAGES.LOGIN) + '/find/password');
  };

  const handleLoginPage = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  return (
    <body>
      <div id='wrap'>
        <Header />

        <main className='container'>
          <div className='member_inner'>
            <h2>계정 찾기</h2>
            <p className='caption'>회원 정보에 등록된 이메일로 찾을 수 있습니다.</p>

            <div className='srch_btn_wrap'>
              <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn active'>
                아이디 찾기
              </Link>
              <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn'>
                비밀번호 찾기
              </Link>
            </div>

            <form method='post'>
              <fieldset>
                <legend>계정찾기 정보입력 영역</legend>
                <div className='join_wrap type_srch'>
                  <div className='input_wrap'>
                    <div className='input_area'>
                      <label htmlFor='member_name'>이름</label>
                      <input
                        type='text'
                        name='member_name'
                        id='member_name'
                        placeholder='이름을 입력해주세요.'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='input_area input_btn'>
                      <label htmlFor='member_mail'>이메일</label>
                      <input
                        type='text'
                        name='member_mail'
                        id='member_mail'
                        placeholder='이메일 주소를 입력해주세요.'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button type='button' className='btn' onClick={() => handleCertifySend(email)}>
                        인증번호 발송
                      </button>
                    </div>
                    {isCertifySend && (
                      <div className='input_area'>
                        <label htmlFor='member_num'>인증번호</label>
                        <input
                          type='text'
                          name='member_num'
                          id='member_num'
                          maxLength={6}
                          placeholder='6자리 인증번호를 입력해주세요.'
                          onChange={handleCertifyNumberChange}
                        />
                        {isCertifySend && !isCertifyError && <p className='certify'>{formattedCertifyTime}</p>}
                        {isCertifyError && <p className='txt_error'>인증번호가 일치하지 않습니다.</p>}
                      </div>
                    )}
                  </div>
                  <div className='btn_area'>
                    <button type='submit' className={`btn ${isIdFindable(name, email) ? '' : 'disabled'}`} onClick={handleFindId}>
                      확인
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>

            <Popup
              visible={isPopupVisible}
              onConfirm1={handleFindPasswordPage}
              onConfirm2={handleLoginPage}
              confirmText1='비밀번호 찾기'
              confirmText2='로그인 하기'
              title='아이디 찾기'
              onCancel={handleClosePopup}
            >
              <Flex.Horizontal gap={4}>
                <Typography.SmallTitle>홍길동 회원님의 아이디는</Typography.SmallTitle>
                <Typography.SmallTitle color={COLORS.MAIN}>ho*******ng</Typography.SmallTitle>
                <Typography.SmallTitle>입니다.</Typography.SmallTitle>
              </Flex.Horizontal>
            </Popup>
          </div>
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default FindId;
