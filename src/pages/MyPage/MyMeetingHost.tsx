import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { UserType } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function MyMeetingHost() {
  const type: UserType = 'host';

  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleOpenInfoPopup = () => {
    setIsShowInfoPopup(true);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <MyPageHeader type={type} activeTab='my-meeting' />
        <section className='dashboard_wrap'>
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
              <p className='caption'>밋유에서 다양한 모임들을 만들어보세요!</p>
            </div>
            <ul className='link_area'>
              <li className='edit'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/edit'} className='btn'>
                  <i className='link_ico'></i>
                  <strong>내 정보 수정</strong>
                </Link>
              </li>
              <li className='guide'>
                <Link to='javascript:alert("서비스 준비 중입니다.");' className='btn'>
                  <i className='link_ico'></i>
                  <strong>
                    모임만들기 <br />
                    가이드
                  </strong>
                </Link>
              </li>
              <li className='intro'>
                <Link to='javascript:alert("서비스 준비 중입니다.");' className='btn'>
                  <i className='link_ico'></i>
                  <strong>밋유 소개</strong>
                </Link>
              </li>
              <li className='center'>
                <Link to='javascript:alert("서비스 준비 중입니다.");' className='btn'>
                  <i className='link_ico'></i>
                  <strong>고객센터</strong>
                </Link>
              </li>
            </ul>
          </div>

          {isShowInfoPopup && <InfoPopup type={type} />}
        </section>
        {/* <!-- 마이페이지 대시보드 종료 --> */}

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
                      '다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.',
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
                    id: 6,
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
                    id: 7,
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
                    id: 8,
                    title: '와인과 사람, 무제한 와인 파티',
                    location: 'SEOUL',
                    price: 70000,
                    description:
                      '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
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

export default MyMeetingHost;
