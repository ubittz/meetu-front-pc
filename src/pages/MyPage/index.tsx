import { useState } from 'react';

import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import MeetingListItem from '@@pages/MyPage/parts/MeetingListItem';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { UserType } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

// TODO:- Slider 추가 및 적용 필요
function MyPage() {
  const type: UserType = 'host';
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleShowInfoPopup = () => {
    setIsShowInfoPopup(!isShowInfoPopup);
  };

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
              <Link to={pathGenerator(PAGES.MYPAGE) + '/my-meeting/' + type} className='btn'>
                더 보기
              </Link>
            </h3>

            <div className='list_wrap swiper-container'>
              <ul className='swiper-wrapper'>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 1,
                      title: '와인과 사람, 무제한 와인 파티',
                      location: 'SEOUL',
                      price: 70000,
                      description:
                        '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 2,
                      title: '리듬 속에 빠져들다, 음악 즉흥연주 모임',
                      location: 'BUSAN',
                      price: 35000,
                      description:
                        '다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 3,
                      title: '빛으로 담는 순간, 포토그래피 클래스',
                      location: 'CHUNCHEON',
                      price: 45000,
                      description: '사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 4,
                      title: '미식가들의 쿠킹 클래스',
                      location: 'SEOUL',
                      price: 50000,
                      description:
                        '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 5,
                      title: '와인과 사람, 무제한 와인 파티',
                      location: 'SEOUL',
                      price: 70000,
                      description:
                        '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
                      isHot: true,
                    }}
                  />
                </li>
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
              <Link to={pathGenerator(PAGES.MYPAGE) + '/my-meeting/host'} className='btn'>
                더 보기
              </Link>
            </h3>

            <div className='list_wrap swiper-container'>
              <ul className='swiper-wrapper'>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 1,
                      title: '와인과 사람, 무제한 와인 파티',
                      location: 'SEOUL',
                      price: 70000,
                      description:
                        '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 2,
                      title: '리듬 속에 빠져들다, 음악 즉흥연주 모임',
                      location: 'BUSAN',
                      price: 35000,
                      description:
                        '다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 3,
                      title: '빛으로 담는 순간, 포토그래피 클래스',
                      location: 'CHUNCHEON',
                      price: 45000,
                      description: '사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 4,
                      title: '미식가들의 쿠킹 클래스',
                      location: 'SEOUL',
                      price: 50000,
                      description:
                        '새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.',
                      isHot: true,
                    }}
                  />
                </li>
                <li className='swiper-slide'>
                  <MeetingListItem
                    meeting={{
                      id: 5,
                      title: '와인과 사람, 무제한 와인 파티',
                      location: 'SEOUL',
                      price: 70000,
                      description:
                        '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
                      isHot: true,
                    }}
                  />
                </li>
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
