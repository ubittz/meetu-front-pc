import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Join01() {
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
            <strong className='active'>01. 약관동의</strong>
            <strong>02. 정보입력</strong>
            <strong>03. 가입완료</strong>
          </p>
          {/* <!-- 회원가입 약관 form 영역 시작 --> */}
          <form action='#' method='post'>
            <fieldset>
              <legend>회원가입 약관 영역</legend>
              <div className='join_wrap'>
                <h3 className='join_tit'>약관 동의</h3>
                {/* <!-- 약관 영역 시작 --> */}
                <div className='terms_wrap'>
                  <div className='chk_area chkAll'>
                    <input type='checkbox' name='termsChkAll' id='termsChkAll' />
                    <label htmlFor='termsChkAll'>
                      모두 동의합니다.
                      <span>
                        동의 대상 약관 : 이용약관(필수), 개인정보 수집 및 이용(필수), 개인정보 취급위탁(선택), <br />
                        마케팅 정보 활용(선택)
                      </span>
                    </label>
                  </div>
                  <div className='chk_area'>
                    <input type='checkbox' name='termsChk' id='termsChk01' />
                    <label htmlFor='termsChk01'>만 14세 이상입니다. (필수)</label>
                  </div>
                  <div className='terms_sub_wrap'>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk02' />
                      <label htmlFor='termsChk02'>이용약관 동의(필수)</label>
                      <a href='javascript:void(0)' className='btn active'>
                        보기
                      </a>
                      <p className='txt_area'style={{ display: 'block' }}>
                        제1조(목적) <br />
                        이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
                        “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
                        &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」 <br /> <br />{' '}
                        <br />
                        제2조(정의) <br /> <br />
                        “몰” 이란 (주)휴테크산업 재화 또는 용역(이하 “재화”이라 함)을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여
                        재화등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                        <br />
                        “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                        <br />
                        ‘회원’이라 함은 “몰”에 개인정보를 제공하여 회원등록을 한 자로서, “몰”의 정보를 지속적으로 제공받으며, “몰”이 제공하는 서비스를
                        계속적으로 이용할 수 있는 자를 말합니다.
                        <br />
                        ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.
                      </p>
                    </div>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk03' />
                      <label htmlFor='termsChk03'>개인정보 수집 및 이용 (필수)</label>
                      <a href='javascript:void(0)' className='btn'>
                        보기
                      </a>
                      <p className='txt_area'>
                        제1조(목적) <br />
                        이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
                        “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
                        &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
                      </p>
                    </div>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk04' />
                      <label htmlFor='termsChk04'>개인정보 취급위탁 (선택)</label>
                      <a href='javascript:void(0)' className='btn'>
                        보기
                      </a>
                      <p className='txt_area'>
                        제1조(목적) <br />
                        이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
                        “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
                        &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
                      </p>
                    </div>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk05' />
                      <label htmlFor='termsChk05'>마케팅 정보 활용 (선택)</label>
                      <a href='javascript:void(0)' className='btn'>
                        보기
                      </a>
                      <p className='txt_area'>
                        제1조(목적) <br />
                        이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
                        “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
                        &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- //약관 영역 종료 -->  */}
                <div className='btn_area type_02'>
                  <Link to={pathGenerator(PAGES.LOGIN)} className='btn form02'>
                    이전
                    </Link> 
                  <Link to={pathGenerator(PAGES.REGISTER) + '/1'} className='btn'>
                    다음
                    </Link>
                  {/* </button> */}
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

export default Join01;
