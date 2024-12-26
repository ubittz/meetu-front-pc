import { Link, useParams } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Pagination from '@@pages/Meeting/parts/Pagination';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { UserProfileResponse } from '@@stores/auth/types';
import { useMeetingMyList } from '@@stores/meeting/hooks';
import { useQueryParams } from '@@utils/request/hooks';

function InfoHost({ user }: { user: UserProfileResponse }) {
  const { id } = useParams();

  const { query, updateQuery } = useQueryParams(
    {
      page: 0,
    },
    {
      initialSearch: ({ page }) => page === undefined,
    }
  );

  const { content, page } = useMeetingMyList({
    ...query,
    userId: id,
    size: 8,
  });

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='dashboard_wrap type_info'>
          <div className='d_inner'>
            <div className='host_area'>
              <button type='button' className='btn'>
                <span className='img_area'>
                  <img src={user.imageUrl} alt='호스트 이미지' />
                </span>
                <span className='txt_area'>
                  <strong>HOST</strong>
                  <em>{user.userName} 님</em>
                </span>
              </button>
              <p className='caption'>{user.description}</p>
            </div>
            <ul className='link_area'>
              <li className='info01'>
                <Link to={pathGenerator(PAGES.PROFILE) + `/${id}`} className='btn'>
                  <i className='link_ico'></i>
                  <strong>운영중인 모임</strong>
                  <strong className='number'>
                    <span>{user.processingMeetingCount}</span>개
                  </strong>
                </Link>
              </li>
              <li className='info02'>
                <Link to={pathGenerator(PAGES.PROFILE) + `/${id}/review`} className='btn'>
                  <i className='link_ico'></i>
                  <strong>리뷰</strong>
                  <strong className='number'>
                    <span>{user.writeReviewCount}</span>건
                  </strong>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- 호스트 정보 대시보드 종료 --> */}

        {/* <!-- 호스트 정보 모임영역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <div className='meeting_btn'>
              <div className='btn_wrap'>
                <Link to={pathGenerator(PAGES.PROFILE) + `/${id}`} className='btn active'>
                  모임
                </Link>
                <Link to={pathGenerator(PAGES.PROFILE) + `/${id}/review`} className='btn'>
                  리뷰
                </Link>
              </div>
            </div>

            <div className='list_wrap type_my'>
              <ul>{content?.map((meeting) => <MyMeetingListItem key={meeting.meetingId} meeting={meeting} />)}</ul>
            </div>
            <Pagination currentPage={page.current + 1} totalPages={page.total} onPageChange={(page) => updateQuery('page', page)} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default InfoHost;
