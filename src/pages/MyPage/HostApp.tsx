import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

export default function HostApp() {
  return (
    <div id='wrap'>
      <Header />
      {/* <!-- container 영역 시작 --> */}
      <main className='container'>
        <MyPageHeader />

        {/* <!-- 마이페이지 대시보드 시작 --> */}
        <section className='dashboard_wrap'>
          <div className='d_inner'>
            <div className='host_area'>
              <button type='button' className='btn'>
                {/* <span className="img_area"> */}
                {/* <img src="../images/sub/meeting_img04.jpg" alt="호스트 이미지"></span> */}
                <span className='txt_area'>
                  <strong>HOST</strong>
                  <em>홍길동 님</em>
                </span>
              </button>
              <p className='caption'>밋유에서 다양한 모임들을 만들어보세요!</p>
            </div>
            <ul className='link_area'>
              <li className='edit'>
                <a href='../mypage/InfoEdit.html' className='btn'>
                  <i className='link_ico'></i>
                  <strong>내 정보 수정</strong>
                </a>
              </li>
              <li className='guide'>
                <a href="javascript:alert('서비스 준비 중입니다.');" className='btn'>
                  <i className='link_ico'></i>
                  <strong>
                    모임만들기 <br />
                    가이드
                  </strong>
                </a>
              </li>
              <li className='intro'>
                <a href="javascript:alert('서비스 준비 중입니다.');" className='btn'>
                  <i className='link_ico'></i>
                  <strong>밋유 소개</strong>
                </a>
              </li>
              <li className='center'>
                <a href="javascript:alert('서비스 준비 중입니다.');" className='btn'>
                  <i className='link_ico'></i>
                  <strong>고객센터</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- 호스트 정보 팝업 시작 --> */}

          {/* <!-- 호스트 정보 팝업 종료 --> */}

          {/* <!-- 이용자 정보 팝업 시작 --> */}

          {/* <!-- 이용자 정보 팝업 종료 --> */}
        </section>
        {/* <!-- 마이페이지 대시보드 종료 --> */}

        {/* <!-- 마이페이지 결제내역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>호스트 등록 신청</h3>

            <div className='app_info'>
              <h4>호스트 신청 안내</h4>
              <div className='app_txt'>
                <p>1. 호스트 신청에 대한 안내 문구</p>
                <span>
                  - 안내사항 1번입니다. <br />
                  - 안내사항 2번입니다. <br />- 안내사항 3번입니다.
                </span>
              </div>
              <div className='app_txt'>
                <p>2. 조건사항</p>
                <span>
                  - 조건사항 1번입니다. <br />- 조건사항 2번입니다.
                </span>
              </div>
              <div className='app_txt'>
                <p>3. 심사조건</p>
                <span>
                  - 심사조건 1번입니다. <br />
                  - 심사조건 2번입니다. <br />- 심사조건 3번입니다.
                </span>
              </div>
              <div className='app_txt'>
                <p>4. 승인 불가한 호스트</p>
                <span>
                  - 승인 불가한 호스트 1번입니다. <br />
                  - 승인 불가한 호스트 2번입니다. <br />- 승인 불가한 호스트 3번입니다.
                </span>
              </div>
            </div>
            <div className='btn_area type_03'>
              <Link to={pathGenerator(PAGES.MYPAGE) + '/host-app-write'} className='btn'>
                호스트 신청하기
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- 마이페이지 결재내역 종료 -->  */}
      </main>
      {/* <!-- //container 영역 종료 --> */}
      <Footer />
    </div>
  );
}
