import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function FindId() {
  return (
    <body>
      <div id='wrap'>
        <Header />

        {/* <!-- container 영역 시작 --> */}
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
            {/* <!-- 계정찾기 정보입력 form 영역 시작 --> */}
            <form action='#' method='post'>
              <fieldset>
                <legend>계정찾기 정보입력 영역</legend>
                <div className='join_wrap type_srch'>
                  <div className='input_wrap'>
                    <div className='input_area'>
                      <label htmlFor='member_name'>이름</label>
                      <input type='text' name='member_name' id='member_name' placeholder='이름을 입력해주세요.' />
                      <p className='txt_error'>이름을 입력해주세요.</p>
                    </div>
                    <div className='input_area input_btn'>
                      <label htmlFor='member_mail'>이메일</label>
                      <input type='text' name='member_mail' id='member_mail' placeholder='이메일 주소를 입력해주세요.' />
                      <p className='txt_error'>가입 이메일 주소를 입력해주세요.</p>
                      <button type='button' className='btn'>
                        인증번호 발송
                      </button>
                    </div>

                    <div className='input_area'>
                      <label htmlFor='member_num'>인증번호</label>
                      <input type='text' name='member_num' id='member_num' placeholder='6자리 인증번호를 입력해주세요.' />
                      <p className='certify'>05:59</p>
                      <p className='txt_error'>인증번호가 일치하지 않습니다.</p>
                    </div>
                  </div>

                  <div className='btn_area'>
                    <button type='submit' className='btn'>
                      확인
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>

            <div className='popup_layer'>
              <div className='popup_bg'></div>
              <div className='popup_inner'>
                <h3 className='popup_tit'>아이디 찾기</h3>
                <button className='btn close'>팝업 닫기</button>
                <div className='srch_result'>
                  <p>
                    홍길동 회원님의 아이디는 <strong>ho*******ng</strong> 입니다.
                  </p>
                </div>
                <div className='btn_area type_02'>
                  <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn form02'>
                    비밀번호 찾기
                  </Link>
                  <Link to={pathGenerator(PAGES.LOGIN)} className='btn'>
                    로그인 하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default FindId;
