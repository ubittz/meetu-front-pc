import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import FullLoading from '@@components/FullLoading/FullLoading';
import Header from '@@components/Header';
import FindClass from '@@pages/FindClass';
import MeetingSwipeList from '@@pages/Main/parts/MeetingSwipeList';
import { Mood } from '@@pages/Main/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { MEETING_ORDER_TYPE } from '@@stores/meeting/constants';
import { useMeetingListByFilter, useMeetingListByLastMonth } from '@@stores/meeting/hooks';
import { Category } from '@@stores/meeting/types';

import { getDummyMeetingList, getDummyMoodList } from './dummys';
import MeetingByCategory from './parts/MeetingByCategory';

const StyledMeetingTitle = styled(Flex.Horizontal)`
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 202px;
    width: 30px;
    height: 30px;
  }
`;

function Main() {
  const [meetings, setMeetings] =   useState<Meeting[]>([]);
  const [moods, setMoods] = useState<Mood[]>(getDummyMoodList().sort((a, b) => a.index - b.index));
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const { content: contentByCategory, isLoading: categoryLoading } = useMeetingListByFilter({
    page: 0,
    category: selectedCategory,
    orderType: 'LATEST',
  });

  const { content: contentByRequest, isLoading: requestLoading } = useMeetingListByFilter({
    page: 0,
    orderType: MEETING_ORDER_TYPE.REQUEST_COUNT,
  });

  const { content: contentByLatest, isLoading: latestLoading } = useMeetingListByFilter({
    page: 0,
    orderType: MEETING_ORDER_TYPE.LATEST,
  });

  const { content: contentByLastMonth, isLoading: lastMonthLoading } = useMeetingListByLastMonth();

  const isLoading = categoryLoading || requestLoading || latestLoading || lastMonthLoading;

  useEffect(() => {
    setMeetings(getDummyMeetingList());
  }, []);

  return (
    <div id='wrap'>
      <FullLoading visible={isLoading} />
      <Header />
      <main className='container'>
        {<section className='main_visual'>새로운 만남 소소한 행복찾기, 밋유 meetu</section>}
        {/* 메인 배너 종료 */}

        {/* 카테고리별 모임 시작 */}
        <MeetingByCategory meetingList={contentByCategory ?? []} category={selectedCategory} setCategory={setSelectedCategory} />
        {/* 메인 모임 영역 시작 */}
        <section className='main_meeting'>
          <MeetingSwipeList
            title={
              <StyledMeetingTitle>
                <div >
                  <strong>지금</strong> 핫한 모임<strong>.</strong>
                </div>
                <Link to={pathGenerator(PAGES.MEETING)} className='btn'>
                  <img src={images.arrow_right03} alt='모두보기' />
                </Link>
              </StyledMeetingTitle>
            }
            meetings={contentByRequest ?? []}
          />

          <MeetingSwipeList
            title={
              <StyledMeetingTitle>
                <div>
                  <strong>방금 만들어진</strong> 새로운 모임<strong>.</strong>
                </div>
                <Link to={pathGenerator(PAGES.MEETING)} className='btn'>
                  <img src={images.arrow_right03} alt='모두보기' />
                </Link>
              </StyledMeetingTitle>
            }
            meetings={contentByLatest ?? []}
          />

          <MeetingSwipeList
            title={
              <StyledMeetingTitle>
                <div>
                  <strong>실시간</strong> 인기 모임<strong>.</strong>
                </div>
                <Link to={pathGenerator(PAGES.MEETING)} className='btn'>
                  <img src={images.arrow_right03} alt='모두보기' />
                </Link>
              </StyledMeetingTitle>
            }
            meetings={contentByLastMonth ?? []}
          />
        </section>
        {/* <!-- 메인 모임 영역 종료 --> */}

        {/* <!-- 모임 개설 안내 시작 --> */}
        <section className='main_visual02'>
          <div className='mv_inner'>
            <h3 className='mv_txt'>
              이외에 참여하고 싶은 모임이 있다면? <br />
              모임을 직접 개설하고, 새로운 만남을 시작하세요.
            </h3>
            <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn'>
              모임 직접 개설하기
            </Link>
          </div>
        </section>
        {/* <!-- 모임 개설 안내 종료 --> */}

        {/* <!-- 메인 하단 이미지 정보 영역 시작 --> */}
        <section className='main_info_wrap'>
          <div className='mi_inner'>
            <h3 className='main_tit'>
              <strong>무드</strong>를 선택하고, <strong>경험</strong>을 즐기세요<strong>.</strong>
            </h3>
            <div className='mi_img_area'>
              <div className='mi_img mii01'>
                <div className='mi_txt'>
                  <img src={moods[0].imageUrl} alt={moods[0].title} />
                  {moods[0].description && <p>{moods[0].description}</p>}
                </div>
                <div className='mi_bg'></div>
              </div>
              <div className='mi_img mii02'>
                <div className='mi_txt'>
                  <img src={moods[1].imageUrl} alt={moods[1].title} />
                  {moods[1].description && <p>{moods[1].description}</p>}
                </div>
                <div className='mi_bg'></div>
              </div>
              <div className='mi_img mii03'>
                <div className='mi_txt'>
                  <img src={moods[2].imageUrl} alt={moods[2].title} />
                  {moods[2].description && <p>{moods[2].description}</p>}
                </div>
                <div className='mi_bg'></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- 메인 하단 이미지 정보 영역 종료 --> */}
      </main>
      <Footer />
    </div>
  );
}

export default Main;

