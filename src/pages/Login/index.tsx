import { Link } from "react-router-dom";

import Footer from "@@components/Footer";
import { PAGES } from "@@router/constants";
import { pathGenerator } from "@@router/utils";

function Register() {
  console.log('수정 했어요');
  return (
    <div id='wrap'>
      <header className='header'>
        <div className='inner'>
          <div className='inner_l'>
            <h1 className='logo'>
              <a href='../main/Main.html'>meetu</a>
            </h1>
            <nav id='navi'>
              <ul>
                <li>
                  <a href='../main/MeetingList.html'>모임 탐색</a>
                </li>
                <li>
                  <a href='javascript:void(0);'>호스트 소개</a>
                </li>
                <li>
                  <a href='javascript:void(0);'>공지사항</a>
                </li>
                <li className='active'>
                  <a href='../main/MeetingCreate.html'>모임 개설하기</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='inner_r'>
            <ul>
              <li className='logout'>
                <a href='javascript:void(0);'>로그아웃</a>
              </li>
              <li className='mypage'>
                <a href='javascript:void(0);'>마이페이지</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className='container'>
        <div className='member_inner'>
          <h2>로그인</h2>
          <p className='caption'>밋 유에 오신 것을 환영합니다.</p>

          <form action='#' method='post'>
            <fieldset>
              <legend>로그인 영역</legend>
              <div className='input_wrap'>
                <div className='input_area'>
                  <input type='text' name='mb_id' id='mb_id' placeholder='아이디를 입력해주세요.' />
                  <label htmlFor='mb_id' className='blind'>
                    아이디
                  </label>
                </div>
                <div className='input_area'>
                  <input type='password' name='mb_pw' id='mb_pw' placeholder='비밀번호를 입력해주세요.' />
                  <label htmlFor='mb_pw' className='blind'>
                    비밀번호
                  </label>
                </div>
              </div>

              <div className='btn_area'>
                <button type='submit' className='btn'>
                  로그인하기
                </button>
              </div>
              <div className='btn_area btn_sub'>
                <a href='../member/IdSrch.html' className='btn'>
                  아이디 찾기
                </a>
                <a href='../member/PwSrch.html' className='btn'>
                  비밀번호 찾기
                </a>
              </div>
            </fieldset>
          </form>

          <div className='btn_join'>
            <p className='or_txt'>
              <span>or</span>
            </p>
            <div className='btn_area'>
              <Link to={pathGenerator(PAGES.REGISTER)} className="btn">
              {/* <a href='../member/Join01.html' className='btn'> */}
                회원가입 후 이용하기
              </Link>
              <a href='#' className='btn kakao'>
                <span>카카오톡 로그인하기</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Register;
