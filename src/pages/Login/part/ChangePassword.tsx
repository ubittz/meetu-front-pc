import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
function ChangePassword() {
  const navigate = useNavigate()
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };


  const handleConfirm1 = () => {
    navigate(pathGenerator(PAGES.MAIN))
  };

  const handleConfirm2  = () => {
    navigate(pathGenerator(PAGES.LOGIN))
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
              <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn'>
                아이디 찾기
              </Link>
              <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn active'>
                비밀번호 찾기
              </Link>
            </div>
            {/* <!-- 계정찾기 정보입력 form 영역 시작 --> */}
            <form action='#' method='post'>
              <fieldset>
                <legend>계정찾기 정보입력 영역</legend>
                <div className='join_wrap type_srch'>
                  <div className='input_wrap'>
                    <p className='pw_srch_txt'>
                      <strong>비밀번호 변경</strong>
                      <span>새로운 비밀번호를 등록해주세요.</span>
                    </p>
                    <div className='input_area'>
                      <label htmlFor='member_pw'>비밀번호</label>
                      <input type='password' name='member_pw' id='member_pw' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />
                      <p className='txt_error'>비밀번호 규칙에 맞게 입력해주세요.</p>
                    </div>
                    <div className='input_area'>
                      <label htmlFor='member_pw_re'>비밀번호 확인</label>
                      <input type='password' name='member_pw_re' id='member_pw_re' placeholder='새 비밀번호 확인' />
                      <p className='txt_error'>비밀번호가 일치하지 않습니다.</p>
                    </div>
                  </div>

                  <div className='btn_area'>
                    <button className='btn' onClick={handleOpenPopup}>
                      확인
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>

            <Popup
              visible={isPopupVisible}
              onConfirm1={handleConfirm1}
              onConfirm2={handleConfirm2}
              confirmText1='홈으로'
              confirmText2='로그인 하기'
              title='비밀번호 찾기'
              onCancel={handleClosePopup}
            >
              <Flex.Horizontal gap={4} className='tw-justify-center'>
                <Typography.SmallTitle>비밀번호 변경이 완료되었습니다.</Typography.SmallTitle>
              </Flex.Horizontal>
            </Popup>
          </div>
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default ChangePassword;
