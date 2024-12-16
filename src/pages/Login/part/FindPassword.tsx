import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { useCertify } from '@@pages/Login/hooks';
import { formatTime } from '@@pages/Login/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function FindPassword() {
  const navigate = useNavigate();
  const { isCertifySend, isCertifyError, certifyTime, isCertifyFill, handleCertifySend, handleCertifyNumberChange, validateCertifyNumber } =
    useCertify();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  const handleFindPassword = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    if (validateCertifyNumber('123456')) {
      // 비밀번호 찾기 화면으로 이동
      navigate(pathGenerator(PAGES.LOGIN) + '/find/password/change');
    }
  };

  const isFormValid = () => name.trim() !== '' && id.trim() !== '' && email.trim() !== '' && isCertifySend && isCertifyFill && !isCertifyError;

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>계정 찾기</h2>
          <p className='caption'>회원 정보에 등록된 이메일로 찾을 수 있습니다.</p>

          <div className='srch_btn_wrap'>
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn'>
              아이디 찾기
            </Link>
            <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn active'>
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
                  <div className='input_area'>
                    <label htmlFor='member_id'>아이디</label>
                    <input type='text' id='member_id' placeholder='아이디를 입력해주세요.' value={id} onChange={(e) => setId(e.target.value)} />
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
                  <button type='submit' className={`btn ${isFormValid() ? '' : 'disabled'}`} onClick={handleFindPassword}>
                    확인
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FindPassword;
