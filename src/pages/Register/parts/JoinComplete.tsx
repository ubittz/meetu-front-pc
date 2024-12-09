
import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';


function JoinComplete() {
  return (
  <body>
    <div id="wrap">
        <Header/>
      <main className="container">
        <div className="member_inner">
          <h2>회원가입</h2>
          <p className="caption">
            <strong>01. 약관동의</strong>
            <strong>02. 정보입력</strong>
            <strong className="active"> 03. 가입완료</strong>
          </p>
          <div className="complete_area">
            <h3>환영합니다!</h3>
            <p className="caption01">
              <strong>홍길동</strong>님의 회원가입을 축하합니다. <br/>
              알차고 실속있는 서비스로 찾아뵙겠습니다.
            </p>
            <p className="caption02">로그인 후 서비스를 이용해주세요.</p>
          </div>
          <div className="btn_area type_02">
            <Link to={pathGenerator(PAGES.LOGIN)} className='btn form02'>로그인하기</Link>
            <Link to={pathGenerator(PAGES.MAIN)} className='btn'>메인으로</Link>
          </div>
        </div>
      </main>
    <Footer/>
    </div>
  </body>
  );
}

export default JoinComplete;
