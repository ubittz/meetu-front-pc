import { Link, useParams } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { MEETING_FILTER_TYPE } from '@@stores/meeting/constants';
import { useMeetingMyList } from '@@stores/meeting/hooks';
import { MeetingByUserQuery } from '@@stores/meeting/types';
import { UserType } from '@@types/user';
import { useQueryParams } from '@@utils/request/hooks';

const FILTER_ITEMS = [
  {
    title: '전체',
    value: '',
  },
  {
    title: '모임확정',
    value: MEETING_FILTER_TYPE.CONFIRMED_WAITING,
  },
  {
    title: '진행완료',
    value: MEETING_FILTER_TYPE.IN_PROGRESS,
  },
];

const initialQuery: MeetingByUserQuery = {
  page: 0,
};

function MyMeeting() {
  const { type } = useParams<{ type: UserType }>();

  const { query, updateQuery } = useQueryParams(initialQuery, {
    initialSearch: ({ page }) => page === undefined,
  });

  const { content, page } = useMeetingMyList(query);

  return (
    <div id='wrap'>
      <Header />
      {type && (
        <main className='container'>
          <MyPageHeader type={type} activeTab='my-meeting' />
          <MyPageDashboard />

          {/* <!-- 호스트_내모임 시작 --> */}
          <section className='mypage_content'>
            <div className='mc_inner'>
              <h3 className='main_tit'>
                내 모임 (총 <strong>{page.total}</strong>개)
                <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                  모임 만들기
                </Link>
              </h3>

              <div className='list_sort'>
                <div className='sort_inner'>
                  {FILTER_ITEMS.map(({ title, value }) => (
                    <button
                      type='button'
                      className={`btn ${(query.filterType ?? '') === value ? 'active' : ''}`}
                      onClick={() => updateQuery('filterType', value)}
                    >
                      {title}
                    </button>
                  ))}
                </div>
              </div>

              <div className='list_wrap type_my'>
                <ul>{content?.map((meeting) => <MyMeetingListItem key={meeting.meetingId} meeting={meeting} type={type} />)}</ul>
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
