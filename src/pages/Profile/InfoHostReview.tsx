import { Link, useParams } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import ReviewListItem from '@@pages/MyPage/parts/ReviewListItem';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useUserProfile } from '@@stores/auth/hooks';

function InfoHostReview() {
  const { id } = useParams();

  const { data: user } = useUserProfile(id ?? '');

  if (!user) {
    return null;
  }

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        {/* <!-- 호스트 정보 대시보드 시작 --> */}
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

        {/* <!-- 호스트 정보 리뷰영역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <div className='meeting_btn'>
              <div className='btn_wrap'>
                <Link to={pathGenerator(PAGES.PROFILE) + `/${id}`} className='btn'>
                  모임
                </Link>
                <Link to={pathGenerator(PAGES.PROFILE) + `/${id}/review`} className='btn active'>
                  리뷰
                </Link>
              </div>
            </div>

            <div className='list_wrap type_my02'>
              <ul>
                {/* {reviews.map((review) => (
                  <ReviewListItem key={review.id} review={review} />
                ))} */}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default InfoHostReview;
