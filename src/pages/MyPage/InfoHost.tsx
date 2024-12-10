import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import MyMeetingListItem from './parts/MyMeetingListItem';

function InfoHost() {
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleOpenHostInfoPopup = () => {
    setIsShowInfoPopup(true);
  };

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
                <MyMeetingListItem
                  meeting={{
                    id: 1,
                    title: '리듬 속에 빠져들다, 음악 즉흥연주 모임',
                    location: 'BUSAN',
                    price: 35000,
                    description:
                      '다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.',
                  }}
                />
                <MyMeetingListItem
                  meeting={{
                    id: 2,
                    title: '빛으로 담는 순간, 포토그래피 클래스',
                    location: 'CHUNCHEON',
                    price: 45000,
                    description: '사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.',
                  }}
                />
                <MyMeetingListItem
                  meeting={{
                    id: 3,
                    title: '미식가들의 쿠킹 클래스',
                    location: 'SEOUL',
                    price: 50000,
                    description:
                      '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
                  }}
                />
                <MyMeetingListItem
                  meeting={{
                    id: 4,
                    title: '미식가들의 쿠킹 클래스',
                    location: 'SEOUL',
                    price: 50000,
                    description:
                      '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
                  }}
                />
                <MyMeetingListItem
                  meeting={{
                    id: 5,
                    title: '미식가들의 쿠킹 클래스',
                    location: 'SEOUL',
                    price: 50000,
                    description:
                      '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
                  }}
                />
                <MyMeetingListItem
                  meeting={{
                    id: 6,
                    title: '미식가들의 쿠킹 클래스',
                    location: 'SEOUL',
                    price: 50000,
                    description:
                      '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
                  }}
                />
                <MyMeetingListItem
                  meeting={{
                    id: 7,
                    title: '미식가들의 쿠킹 클래스',
                    location: 'SEOUL',
                    price: 50000,
                    description:
                      '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
                  }}
                />
                <MyMeetingListItem
                  meeting={{
                    id: 8,
                    title: '미식가들의 쿠킹 클래스',
                    location: 'SEOUL',
                    price: 50000,
                    description:
                      '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
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

export default InfoHost;
