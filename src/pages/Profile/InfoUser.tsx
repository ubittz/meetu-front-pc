import { Link, useParams } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Pagination from '@@pages/Meeting/parts/Pagination';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import { UserProfileResponse } from '@@stores/auth/types';
import { useMeetingMyList } from '@@stores/meeting/hooks';
import { useQueryParams } from '@@utils/request/hooks';

function InfoUser({ user }: { user: UserProfileResponse }) {
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
        {/* <!-- 이용자 정보 대시보드 시작 --> */}
        <section className='dashboard_wrap type_info'>
          <div className='d_inner'>
            <div className='host_area'>
              <button type='button' className='btn'>
                <span className='img_area'>
                  <img src={user.imageUrl} alt='이용자 이미지' />
                </span>
                <span className='txt_area'>
                  <strong className='user'>GUEST</strong>
                  <em>{user.userName} 님</em>
                </span>
              </button>
              <p className='caption'>{user.description}</p>
            </div>
            <ul className='link_area'>
              <li className='info01'>
                <Link to='javascript:void(0);' className='btn'>
                  <i className='link_ico'></i>
                  <strong>신청한 모임</strong>
                  <strong className='number'>
                    <span>{user.processingMeetingCount}</span>개
                  </strong>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- 이용자 정보 대시보드 종료 --> */}

        {/* <!-- 이용자 정보 모임영역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <div className='meeting_btn'>
              <div className='btn_wrap'>
                <Link to='javascript:void(0);' className='btn active'>
                  모임
                </Link>
              </div>
            </div>

            <div className='list_wrap type_my'>
              <ul>{content?.map((meeting) => <MyMeetingListItem key={meeting.meetingId} meeting={meeting} />)}</ul>
            </div>
            <Pagination currentPage={page.current + 1} totalPages={page.total} onPageChange={(page) => updateQuery('page', page)} />
          </div>
        </section>
        {/* <!-- 이용자 정보 모임영역 종료 -->  */}
      </main>
      <Footer />
    </div>
  );
}

export default InfoUser;
