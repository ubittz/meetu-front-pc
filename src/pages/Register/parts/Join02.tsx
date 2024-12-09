import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Join02() {
  return (
    <div id='wrap'>
      {/* <!-- header 영역 시작 --> */}
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
      {/* <!-- //header 영역 종료 --> */}

      {/* <!-- container 영역 시작 --> */}
      <main className='container'>
        <div className='member_inner'>
          <h2>회원가입</h2>
          <p className='caption'>
            <strong>01. 약관동의</strong>
            <strong className='active'>02. 정보입력</strong>
            <strong>03. 가입완료</strong>
          </p>
          {/* <!-- 회원가입 정보입력 form 영역 시작 --> */}
          <form action='#' method='post'>
            <fieldset>
              <legend>회원가입 정보입력 영역</legend>
              <div className='join_wrap'>
                <h3 className='join_tit'>기본정보</h3>
                {/* <!-- 정보입력 영역 시작 --> */}
                <div className='input_wrap'>
                  <div className='input_area input_btn'>
                    <label htmlFor='member_id'>아이디</label>
                    <input type='text' name='member_id' id='member_id' placeholder='아이디를 입력해주세요.' className='error' />
                    <p className='txt_error' style={{ display: 'block' }}>
                      이미 가입된 아이디입니다.
                    </p>
                    <button type='button' className='btn'>
                      중복체크
                    </button>
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

                  <div className='input_area'>
                    <label htmlFor='member_name'>이름</label>
                    <input type='text' name='member_name' id='member_name' placeholder='이름을 입력세주세요.' />
                    <p className='txt_error'>이름을 입력해주세요.</p>
                  </div>

                  <div className='input_area type_date'>
                    <label htmlFor='member_birth'>생년월일</label>
                    <input type='text' name='member_birth' id='member_birth' placeholder='생년월일을 선택해주세요.' />
                    <p className='txt_error'>생년월일을 입력해주세요.</p>
                  </div>

                  <div className='input_area inputChk'>
                    <p className='input_tit'>성별</p>
                    <div className='chk_area radio'>
                      <input type='radio' name='genderChk' id='genderChk01' />
                      <label htmlFor='genderChk01'>남자</label>
                    </div>
                    <div className='chk_area radio'>
                      <input type='radio' name='genderChk' id='genderChk02' />
                      <label htmlFor='genderChk02'>여자</label>
                    </div>
                  </div>

                  <div className='input_area'>
                    <label htmlFor='member_contact'>연락처</label>
                    <input type='text' name='member_contact' id='member_contact' placeholder='‘-’없이 입력해주세요.' />
                    <p className='txt_error'>연락처를 입력해주세요.</p>
                  </div>

                  <div className='input_area input_btn'>
                    <label htmlFor='member_mail'>이메일</label>
                    <input type='text' name='member_mail' id='member_mail' placeholder='이메일 주소를 입력해주세요.' />
                    <p className='txt_error'>이메일 주소를 입력해주세요.</p>
                    <button type='button' className='btn'>
                      중복체크
                    </button>
                  </div>
                </div>
                {/* <!-- //정보입력 영역 종료 --> */}
                <div className='btn_area type_02'>
                  <Link to={pathGenerator(PAGES.LOGIN)} className='btn form02'>
                    취소
                  </Link>
                  <button type='submit' className='btn'>
                    회원가입
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Join02;
