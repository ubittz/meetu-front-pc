import { useState } from 'react';

import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { UserType } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { getDummyMeetingList } from './dummy';

function MyMeetingHost() {
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
        <MyPageHeader type={type} activeTab='my-meeting' />
        <MyPageDashboard type={type} profileButtonAction={handleShowInfoPopup} />
        {isShowInfoPopup && <InfoPopup type={type} />}

        {/* <!-- 호스트_내모임 시작 --> */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              내 모임 (총 <strong>N</strong>개)
              <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                모임 만들기
              </Link>
            </h3>

            <div className='list_sort'>
              <div className='sort_inner'>
                <button type='button' className='btn active'>
                  전체
                </button>
                <button type='button' className='btn'>
                  진행 예정
                </button>
                <button type='button' className='btn'>
                  모임 확정
                </button>
                <button type='button' className='btn'>
                  진행 완료
                </button>
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

export default MyMeetingHost;
