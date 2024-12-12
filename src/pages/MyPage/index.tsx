import { useState } from 'react';

import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import MeetingListItem from '@@pages/MyPage/parts/MeetingListItem';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { UserType } from '@@types/user';

import { getDummyMeetingList } from './dummy';

// TODO:- Slider 추가 및 적용 필요
function MyPage() {
  const type: UserType = 'host';
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleShowInfoPopup = () => {
    setIsShowInfoPopup(!isShowInfoPopup);
  };

  // TODO: - dummy items 교체
  const meetings = getDummyMeetingList();

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <MyPageHeader type={type} activeTab='info' />
        <MyPageDashboard type={type} profileButtonAction={handleShowInfoPopup} />
        {isShowInfoPopup && <InfoPopup type={type} />}

        <section className='mypage_content'>
          <div className='mc_inner'>
            {/* <!-- 최근 본 모임 --> */}
            <h3 className='main_tit'>
              최근 본 모임
              <Link to={`${pathGenerator(PAGES.MYPAGE)}/my-meeting/${type}`} className='btn'>
                더 보기
              </Link>
            </h3>

            <div className='list_wrap swiper-container'>
              <ul className='swiper-wrapper'>
                {meetings.map((meeting) => (
                  <MeetingListItem key={meeting.id} meeting={meeting} />
                ))}
              </ul>
              <div className='ctrl_box'>
                <div className='progress-box'>
                  <div className='swiper-pagination'></div>
                </div>
                <div className='swiper-button-prev'></div>
                <div className='swiper-button-next'></div>
              </div>
            </div>

            {/* <!-- 내 모임 --> */}
            <h3 className='main_tit'>
              내 모임
              <Link to={`${pathGenerator(PAGES.MYPAGE)}/my-meeting/`} className='btn'>
                더 보기
              </Link>
            </h3>

            <div className='list_wrap swiper-container'>
              <ul className='swiper-wrapper'>
                {meetings.map((meeting) => (
                  <MeetingListItem key={meeting.id} meeting={meeting} />
                ))}
              </ul>
              <div className='ctrl_box'>
                <div className='progress-box'>
                  <div className='swiper-pagination'></div>
                </div>
                <div className='swiper-button-prev'></div>
                <div className='swiper-button-next'></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default MyPage;
