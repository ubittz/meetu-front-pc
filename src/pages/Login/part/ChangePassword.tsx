import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { useChangePassword } from '@@pages/Login/hooks';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function ChangePassword() {
  const {
    newPassword,
    newPasswordConfirm,
    isPopupVisible,
    isPasswordValid,
    isPasswordMatch,
    handleNewPasswordChange,
    handleNewPasswordConfirmChange,
    handleChangePassword,
    handlePopupClose,
  } = useChangePassword();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(pathGenerator(PAGES.MAIN));
  };

  const handleGoLogin = () => {
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
                      <label htmlFor='new_password'>비밀번호</label>
                      <input
                        type='password'
                        name='new_password'
                        id='new_password'
                        placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하'
                        value={newPassword}
                        onChange={(e) => handleNewPasswordChange(e.target.value)}
                      />
                      {!isPasswordValid && <p className='txt_error'>비밀번호 규칙에 맞게 입력해주세요.</p>}
                    </div>
                    <div className='input_area'>
                      <label htmlFor='new_password_confirm'>비밀번호 확인</label>
                      <input
                        type='password'
                        name='new_password_confirm'
                        id='new_password_confirm'
                        placeholder='새 비밀번호 확인'
                        value={newPasswordConfirm}
                        onChange={(e) => handleNewPasswordConfirmChange(e.target.value)}
                      />
                      {!isPasswordMatch && <p className='txt_error'>비밀번호가 일치하지 않습니다.</p>}
                    </div>
                  </div>

                  <div className='btn_area'>
                    <button className={`btn ${isPasswordMatch && isPasswordValid ? '' : 'disabled'}`} onClick={handleChangePassword}>
                      확인
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>

            <Popup
              visible={isPopupVisible}
              onConfirmLeft={handleGoHome}
              onConfirmRight={handleGoLogin}
              confirmTextLeft='홈으로'
              confirmTextRight='로그인 하기'
              title='비밀번호 찾기'
              onCancel={handlePopupClose}
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
