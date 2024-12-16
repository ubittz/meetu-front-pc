import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function EditMyInfo() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div id='wrap'>
      <Header />

      <main className='container'>
        <div className='member_inner'>
          <h2>내 정보 수정</h2>
          <p className='caption'>
            <strong className='active'>내 정보 수정</strong>
          </p>
          {/* <!-- 내 정보 수정 정보입력 form 영역 시작 --> */}
          <form action='#' method='post'>
            <fieldset>
              <legend>내 정보 수정 정보입력 영역</legend>
              <div className='join_wrap'>
                <h3 className='join_tit'>내 정보</h3>
                {/* <!-- 정보입력 영역 시작 --> */}
                <div className='input_wrap'>
                  <div className='input_area'>
                    <label htmlFor='member_id'>아이디</label>
                    <input type='text' name='member_id' id='member_id' value='memberid123' disabled />
                  </div>
                  <div className='input_area'>
                    <label htmlFor='member_name'>이름</label>
                    <input type='text' name='member_name' id='member_name' value='memberid123' disabled />
                  </div>

                  <div className='input_area'>
                    <label htmlFor='member_pw'>비밀번호</label>
                    <input type='password' name='member_pw' id='member_pw' placeholder='영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하' />
                    <p className='txt_error'>비밀번호 규칙에 맞게 입력해주세요.</p>
                  </div>

                  <div className='input_area'>
                    <label htmlFor='member_pw_re'>비밀번호 확인</label>
                    <input type='password' name='member_pw_re' id='member_pw_re' placeholder='비밀번호 확인' />
                    <p className='txt_error'>비밀번호가 일치하지 않습니다.</p>
                  </div>

                  <div className='input_area type_date'>
                    <label htmlFor='member_birth'>생년월일</label>
                    <input type='text' name='member_birth' id='member_birth' value='1993-11-22' disabled />
                  </div>

                  <div className='input_area'>
                    <label htmlFor='member_contact'>연락처</label>
                    <input type='text' name='member_contact' id='member_contact' placeholder='‘-’없이 입력해주세요.' value='01012345678' />
                    <p className='txt_error'>연락처를 입력해주세요.</p>
                  </div>

                  <div className='input_area input_btn'>
                    <label htmlFor='member_mail'>이메일</label>
                    <input type='text' name='member_mail' id='member_mail' placeholder='이메일 주소를 입력해주세요.' value='meetu@naver.com' />
                    <p className='txt_error'>이메일 주소를 입력해주세요.</p>
                    <button type='button' className='btn'>
                      중복체크
                    </button>
                  </div>
                </div>
                {/* <!-- //정보입력 영역 종료 --> */}

                <div className='btn_area type_02'>
                  <Link to={pathGenerator(PAGES.MYPAGE)} className='btn form02'>
                    취소
                  </Link>
                  <button type='submit' className='btn' onClick={openPopup}>
                    저장
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
          {/* <!-- 회원가입 정보입력 form 영역 종료 --> */}
          {/* <!-- 내정보 수정 결과 팝업 시작 --> */}
          <Popup
            visible={isPopupOpen}
            onConfirmLeft={() => navigate(pathGenerator(PAGES.MAIN))}
            onConfirmRight={closePopup}
            confirmTextLeft='홈으로'
            confirmTextRight='확인'
            title='내 정보 수정'
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>내 정보 변경이 완료되었습니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
          {/* <!-- 내정보 수정 결과 팝업 종료 --> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EditMyInfo;
