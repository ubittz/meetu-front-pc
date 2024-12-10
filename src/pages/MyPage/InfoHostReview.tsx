import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import ReviewListItem from '@@pages/MyPage/parts/ReviewListItem';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function InfoHostReview() {
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleOpenInfoPopup = () => {
    setIsShowInfoPopup(true);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        {/* <!-- 호스트 정보 대시보드 시작 --> */}
        <section className='dashboard_wrap type_info'>
          <div className='d_inner'>
            <div className='host_area'>
              <button type='button' className='btn' onClick={handleOpenInfoPopup}>
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
          {isShowInfoPopup && <InfoPopup type={'host'} />}
          {/* <!-- 호스트 정보 팝업 종료 --> */}
        </section>
        {/* <!-- 호스트 정보 대시보드 종료 --> */}

        {/* <!-- 호스트 정보 리뷰영역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <div className='meeting_btn'>
              <div className='btn_wrap'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host'} className='btn'>
                  모임
                </Link>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host-review'} className='btn active'>
                  리뷰
                </Link>
              </div>
            </div>

            <div className='list_wrap type_my02'>
              <ul>
                <ReviewListItem
                  review={{
                    id: 1,
                    title: '모임명입니다.',
                    rating: 5,
                    content: '리뷰 내용입니다.',
                    createdAt: '2024. 09. 20',
                    user: {
                      id: 1,
                      nickname: 'kimj12345',
                    },
                  }}
                />
                <ReviewListItem
                  review={{
                    id: 2,
                    title: '모임명입니다.',
                    rating: 5,
                    content: '리뷰 내용입니다.',
                    createdAt: '2024. 09. 20',
                    user: {
                      id: 1,
                      nickname: 'kimj12345',
                    },
                  }}
                />
                <ReviewListItem
                  review={{
                    id: 3,
                    title: '모임명입니다.',
                    rating: 5,
                    content: '리뷰 내용입니다.',
                    createdAt: '2024. 09. 20',
                    user: {
                      id: 1,
                      nickname: 'kimj12345',
                    },
                  }}
                />
                <ReviewListItem
                  review={{
                    id: 4,
                    title: '모임명입니다.',
                    rating: 5,
                    content: '리뷰 내용입니다.',
                    createdAt: '2024. 09. 20',
                    user: {
                      id: 1,
                      nickname: 'kimj12345',
                    },
                  }}
                />
                <ReviewListItem
                  review={{
                    id: 5,
                    title: '모임명입니다.',
                    rating: 5,
                    content:
                      '리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.',
                    createdAt: '2024. 09. 20',
                    user: {
                      id: 1,
                      nickname: 'kimj12345',
                    },
                  }}
                />
                <ReviewListItem
                  review={{
                    id: 6,
                    title: '모임명입니다.',
                    rating: 5,
                    content:
                      '리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.',
                    createdAt: '2024. 09. 20',
                    user: {
                      id: 1,
                      nickname: 'kimj12345',
                    },
                  }}
                />
                <ReviewListItem
                  review={{
                    id: 7,
                    title: '모임명입니다.',
                    rating: 5,
                    content:
                      '리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.리뷰 내용입니다.',
                    createdAt: '2024. 09. 20',
                    user: {
                      id: 1,
                      nickname: 'kimj12345',
                    },
                  }}
                />
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
