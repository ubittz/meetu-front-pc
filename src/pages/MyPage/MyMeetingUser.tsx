import { useState } from 'react';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { UserType } from '@@pages/MyPage/types';

function MyMeetingUser() {
  const type: UserType = 'user';
  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleShowInfoPopup = () => {
    setIsShowInfoPopup(!isShowInfoPopup);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <MyPageHeader type={type} activeTab='my-meeting' />

        <MyPageDashboard type={type} profileButtonAction={handleShowInfoPopup} />
        {isShowInfoPopup && <InfoPopup type={type} />}

        {/* <!-- 이용자_내모임 시작 --> */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              내 모임 (총 <strong>N</strong>개)
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
                <MyMeetingListItem
                  type={type}
                  meeting={{
                    id: 1,
                    title: '와인과 사람, 무제한 와인 파티',
                    location: 'SEOUL',
                    price: 70000,
                    description:
                      '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
                  }}
                />
                <MyMeetingListItem
                  type={type}
                  meeting={{
                    id: 2,
                    title: '리듬 속에 빠져들다, 음악 즉흥연주 모임',
                    location: 'BUSAN',
                    price: 35000,
                    description:
                      '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
                  }}
                />
                <MyMeetingListItem
                  type={type}
                  meeting={{
                    id: 3,
                    title: '빛으로 담는 순간, 포토그래피 클래스',
                    location: 'CHUNCHEON',
                    price: 45000,
                    description: '사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.',
                  }}
                />
                <MyMeetingListItem
                  type={type}
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
                  type={type}
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
                  type={type}
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
                  type={type}
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
                  type={type}
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
        {/* <!-- 이용자_내모임 종료 --> */}
      </main>
      <Footer />
    </div>
  );
}

export default MyMeetingUser;
