

import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';


function PWSrch02() {
  return (
      <body>
        <div id="wrap">
            <Header/>
          <main className="container">
            <div className="member_inner">
              <h2>계정 찾기</h2>
              <p className="caption">회원 정보에 등록된 이메일로 찾을 수 있습니다.</p>
    
              <div className="srch_btn_wrap">
                <a href="../member/IdSrch.html" className="btn">아이디 찾기</a>
                <a href="javascript:void(0)" className="btn active">비밀번호 찾기</a>
              </div>
              {/* <!-- 계정찾기 정보입력 form 영역 시작 --> */}
              <form action="#" method="post">
                <fieldset>
                  <legend>계정찾기 정보입력 영역</legend>
                  <div className="join_wrap type_srch">
                    <div className="input_wrap">
                      <p className="pw_srch_txt">
                        <strong>비밀번호 변경</strong>
                        <span>새로운 비밀번호를 등록해주세요.</span>
                      </p>
                      <div className="input_area">
                        <label htmlFor="member_pw">비밀번호</label>
                        <input type="password" name="member_pw" id="member_pw" placeholder="영문(대/소문자) + 숫자 조합 8글자 이상 20글자 이하" />
                        <p className="txt_error">비밀번호 규칙에 맞게 입력해주세요.</p>
                      </div>
                      <div className="input_area">
                        <label htmlFor="member_pw_re">비밀번호 확인</label>
                        <input type="password" name="member_pw_re" id="member_pw_re" placeholder="새 비밀번호 확인" />
                        <p className="txt_error">비밀번호가 일치하지 않습니다.</p>
                      </div>
                    </div>
    
                    <div className="btn_area">
                        <Link to={pathGenerator(PAGES.MAIN)} className='btn'>확인</Link>
                    </div>
                  </div>
                </fieldset>
              </form>

              <div className="popup_layer"> 
                <div className="popup_bg"></div>
                <div className="popup_inner">
                  <h3 className="popup_tit">비밀번호 찾기</h3>
                  <button className="btn close">팝업 닫기</button>
                  <div className="srch_result">
                    <p>비밀번호 변경이 완료되었습니다.</p>
                  </div>
                  <div className="btn_area type_02">
                    <Link to={pathGenerator(PAGES.MAIN)} className="btn form02">홈으로</Link>
                    <Link to={pathGenerator(PAGES.LOGIN)} className='btn'>로그인 하기</Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer/>

        </div>
      </body>
  );
}

export default PWSrch02;
