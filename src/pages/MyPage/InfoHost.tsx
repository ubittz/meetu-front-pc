import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { getDummyMeetingList } from './dummy';
import MyMeetingListItem from './parts/MyMeetingListItem';

function InfoHost() {
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleOpenHostInfoPopup = () => {
    setIsShowInfoPopup(true);
  };

  // TODO: - dummy items 교체
  const meetings = getDummyMeetingList();

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='dashboard_wrap type_info'>
          <div className='d_inner'>
            <div className='host_area'>
              <button type='button' className='btn' onClick={handleOpenHostInfoPopup}>
                <span className='img_area'>
                  <img src={images.meeting_img04} alt='호스트 이미지' />
                </span>
                <span className='txt_area'>
                  <strong>HOST</strong>
                  <em>홍길동 님</em>
                </span>
              </button>
              <p className='caption'>
                홍길동님의 소개글입니다. 소개글이 나오는 영역입니다. <br />
                소개글이나오는영역입니다. 소개글이나오는 영역입니다. 소개글이나오는영역입니다.
              </p>
            </div>
            <ul className='link_area'>
              <li className='info01'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host'} className='btn'>
                  <i className='link_ico'></i>
                  <strong>운영중인 모임</strong>
                  <strong className='number'>
                    <span>N</span>개
                  </strong>
                </Link>
              </li>
              <li className='info02'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host-review'} className='btn'>
                  <i className='link_ico'></i>
                  <strong>리뷰</strong>
                  <strong className='number'>
                    <span>N</span>건
                  </strong>
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- 호스트 정보 팝업 시작 --> */}
          {isShowInfoPopup && <InfoPopup type='host' />}
          {/* <!-- 호스트 정보 팝업 종료 --> */}
        </section>
        {/* <!-- 호스트 정보 대시보드 종료 --> */}

        {/* <!-- 호스트 정보 모임영역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <div className='meeting_btn'>
              <div className='btn_wrap'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host'} className='btn active'>
                  모임
                </Link>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host-review'} className='btn'>
                  리뷰
                </Link>
              </div>
            </div>

            <div className='list_wrap type_my'>
              <ul>
                {meetings.map((meeting) => (
                  <MyMeetingListItem key={meeting.id} meeting={meeting} />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default InfoHost;
