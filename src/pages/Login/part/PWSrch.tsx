
import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function PWSrch() {
  return (
      <div id='wrap'>
        <Header />
        <main className='container'>
          <div className='member_inner'>
            <h2>계정 찾기</h2>
            <p className='caption'>회원 정보에 등록된 이메일로 찾을 수 있습니다.</p>

            <div className='srch_btn_wrap'>
            <Link to={pathGenerator(PAGES.LOGIN) +'/IdSrch'} className="btn">아이디 찾기</Link>
            <Link to={pathGenerator(PAGES.LOGIN) +'/PWSrch'} className="btn active">비밀번호 찾기</Link>
            </div>
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
                    <div className='input_area'>
                      <label htmlFor='member_id'>아이디</label>
                      <input type='text' name='member_id' id='member_id' placeholder='아이디를 입력해주세요.' />
                      <p className='txt_error'>아이디를 입력해주세요.</p>
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
                    <Link to={pathGenerator(PAGES.LOGIN) + '/PWSrch02'} className='btn'>확인</Link>
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

export default PWSrch;
