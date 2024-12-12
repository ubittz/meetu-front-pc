import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { formatTime } from '@@pages/Login/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { useCertify } from '../hooks';

function FindId() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [foundId, setFoundId] = useState('');

  const {
    isCertifySend,
    isCertifyError,
    certifyTime,
    isCertifyFill,
    handleCertifySend,
    handleCertifyNumberChange,
    validateCertifyNumber,
    resetCertify,
  } = useCertify();

  const isFormValid = () => name.trim() !== '' && email.trim() !== '' && isCertifySend && isCertifyFill && !isCertifyError;

  const handleFindId = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    const dummyFoundId = 'ho*******ng';

    if (validateCertifyNumber('123456')) {
      setFoundId(dummyFoundId);
      setPopupVisible(true);
    }
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    resetCertify();
  };

  const navigateTo = (path: string) => () => navigate(path);

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
                      <input type='text' id='member_name' placeholder='이름을 입력해주세요.' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='input_area input_btn'>
                      <label htmlFor='member_mail'>이메일</label>
                      <input
                        type='text'
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
                          id='member_num'
                          maxLength={6}
                          placeholder='6자리 인증번호를 입력해주세요.'
                          onChange={handleCertifyNumberChange}
                        />
                        {!isCertifyError && <p className='certify'>{formatTime(certifyTime)}</p>}
                        {isCertifyError && <p className='txt_error'>인증번호가 일치하지 않습니다.</p>}
                      </div>
                    )}
                  </div>
                  <div className='btn_area'>
                    <button type='submit' className={`btn ${isFormValid() ? '' : 'disabled'}`} onClick={handleFindId}>
                      확인
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>

            <Popup
              visible={isPopupVisible}
              onConfirm1={navigateTo(pathGenerator(PAGES.LOGIN) + '/find/password')}
              onConfirm2={navigateTo(pathGenerator(PAGES.LOGIN))}
              confirmText1='비밀번호 찾기'
              confirmText2='로그인 하기'
              title='아이디 찾기'
              onCancel={handlePopupClose}
            >
              <Flex.Horizontal gap={4}>
                <Typography.SmallTitle>{name} 회원님의 아이디는</Typography.SmallTitle>
                <Typography.SmallTitle color={COLORS.MAIN}>{foundId}</Typography.SmallTitle>
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
