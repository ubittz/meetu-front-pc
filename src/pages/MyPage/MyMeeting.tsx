import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { UserType } from '@@pages/MyPage/types';
import { Meeting } from '@@pages/MyPage/types';
import { MeetingStatus } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { getDummyMeetingList } from './dummy';

function MyMeeting() {
  const { type } = useParams<{ type: UserType }>();

  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<MeetingStatus | ''>('');
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleShowInfoPopup = () => {
    setIsShowInfoPopup(!isShowInfoPopup);
  };

  useEffect(() => {
    // TODO: - dummy items 교체
    setMeetings(getDummyMeetingList());
  }, []);

  const filteredMeetings = selectedFilter ? meetings.filter((meeting) => meeting.status === selectedFilter) : meetings;
  return (
    <div id='wrap'>
      <Header />
      {type && (
        <main className='container'>
          <MyPageHeader type={type} activeTab='my-meeting' />
          <MyPageDashboard type={type} profileButtonAction={handleShowInfoPopup} />
          {isShowInfoPopup && <InfoPopup type={type} />}

          {/* <!-- 호스트_내모임 시작 --> */}
          <section className='mypage_content'>
            <div className='mc_inner'>
              <h3 className='main_tit'>
                내 모임 (총 <strong>{filteredMeetings.length}</strong>개)
                <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                  모임 만들기
                </Link>
              </h3>

              <div className='list_sort'>
                <div className='sort_inner'>
                  <button type='button' className={`btn ${selectedFilter === '' ? 'active' : ''}`} onClick={() => setSelectedFilter('')}>
                    전체
                  </button>
                  <button
                    type='button'
                    className={`btn ${selectedFilter === 'upcoming' ? 'active' : ''}`}
                    onClick={() => setSelectedFilter('upcoming')}
                  >
                    진행 예정
                  </button>
                  <button
                    type='button'
                    className={`btn ${selectedFilter === 'confirmed' ? 'active' : ''}`}
                    onClick={() => setSelectedFilter('confirmed')}
                  >
                    모임 확정
                  </button>
                  <button
                    type='button'
                    className={`btn ${selectedFilter === 'completed' ? 'active' : ''}`}
                    onClick={() => setSelectedFilter('completed')}
                  >
                    진행 완료
                  </button>
                </div>
              </div>

              <div className='list_wrap type_my'>
                <ul>
                  {filteredMeetings.map((meeting) => (
                    <MyMeetingListItem key={meeting.id} meeting={meeting} type={type} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      )}
      {!type && <div>잘못된 접근 입니다.</div>}
      <Footer />
    </div>
  );
}

export default MyMeeting;
