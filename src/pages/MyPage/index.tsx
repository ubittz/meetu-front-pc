import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { getDummyMeetingList } from '@@pages/MyPage/dummy';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting } from '@@types/meeting';
import { UserType } from '@@types/user';

import MyPageSwiper from './parts/MyPageSwiper';

function MyPage() {
  const type: UserType = 'host';
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  const handleShowInfoPopup = () => {
    setIsShowInfoPopup(!isShowInfoPopup);
  };

  useEffect(() => {
    setMeetings(getDummyMeetingList());
  }, []);

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <MyPageHeader type={type} activeTab='info' />
        <MyPageDashboard type={type} profileButtonAction={handleShowInfoPopup} />
        {isShowInfoPopup && <InfoPopup type={type} />}

        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              최근 본 모임
              <Link to={`${pathGenerator(PAGES.MYPAGE)}/my-meeting/${type}`} className='btn'>
                더 보기
              </Link>
            </h3>

            <ul className='swiper-wrapper'>
              <MyPageSwiper meetings={meetings} />
            </ul>
            <h3 className='main_tit tw-mt-5'>
              내 모임
              <Link to={`${pathGenerator(PAGES.MYPAGE)}/my-meeting/`} className='btn'>
                더 보기
              </Link>
            </h3>
            <ul className='swiper-wrapper'>
              <MyPageSwiper meetings={meetings} />
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default MyPage;
