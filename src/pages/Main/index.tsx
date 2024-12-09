import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import MeetingSwipeList from '@@pages/Main/parts/MeetingSwipeList';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting, MeetingType } from '@@types/meeting';

import getDummyMeetingList from './dummys';
import CategoryMeetingSwiperList from './parts/CategoryMeetingSwiperList';

function Main() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<MeetingType | ''>('');

  // const filteredMeetings = selectedCategory ? meetings.filter((meeting) => meeting.type === selectedCategory) : meetings;

  useEffect(() => {
    setMeetings(getDummyMeetingList());
  }, []);

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        {<section className='main_visual'>새로운 만남 소소한 행복찾기, 밋유 meetu</section>}
        {/* 메인 배너 종료 */}

        {/* 카테고리별 모임 시작 */}
        <section className='main_ctg_wrap'>
          <div className='main_ctg_top'>
            <h3 className='main_tit'>
              <strong>카테고리</strong>별 모임<strong>.</strong>
            </h3>
            <div className='ctg_tab_btn'>
              <button type='button' className={`btn ${selectedCategory === 'art' ? 'active' : ''}`} onClick={() => setSelectedCategory('art')}>
                아트
              </button>
              <button
                type='button'
                className={`btn ${selectedCategory === 'reading' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('reading')}
              >
                독서
              </button>
              <button
                type='button'
                className={`btn ${selectedCategory === 'cooking' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('cooking')}
              >
                쿠킹
              </button>
              <button
                type='button'
                className={`btn ${selectedCategory === 'cycling' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('cycling')}
              >
                사이클
              </button>
              <button
                type='button'
                className={`btn ${selectedCategory === 'exercise' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('exercise')}
              >
                운동
              </button>
              <button type='button' className={`btn ${selectedCategory === 'hiking' ? 'active' : ''}`} onClick={() => setSelectedCategory('hiking')}>
                등산
              </button>
              <button type='button' className={`btn ${selectedCategory === 'music' ? 'active' : ''}`} onClick={() => setSelectedCategory('music')}>
                음악
              </button>
              <button
                type='button'
                className={`btn ${selectedCategory === 'photography' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('photography')}
              >
                사진
              </button>
              <button
                type='button'
                className={`btn ${selectedCategory === 'technology' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('technology')}
              >
                기술
              </button>
              <button type='button' className={`btn ${selectedCategory === 'wine' ? 'active' : ''}`} onClick={() => setSelectedCategory('wine')}>
                와인
              </button>
              <Link to={pathGenerator(PAGES.MEETING)} className='btn' onClick={() => setSelectedCategory('')}>
                모두보기
              </Link>
            </div>
          </div>
        </section>
        <CategoryMeetingSwiperList
            meeting={meetings}
          />


        {/* 메인 모임 영역 시작 */}
        <section className='main_meeting'>
          <MeetingSwipeList
            title={
              <>
                <strong>지금</strong> 핫한 모임<strong>.</strong>
              </>
            }
            meetings={meetings}
          />
          <MeetingSwipeList
            title={
              <>
                <strong>방금 만들어진</strong> 새로운 모임<strong>.</strong>
              </>
            }
            meetings={meetings}
          />
          <MeetingSwipeList
            title={
              <>
                <strong>실시간</strong> 인기 모임<strong>.</strong>
              </>
            }
            meetings={meetings}
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
                  <img src={images.info_txt01} alt='RELAXED' />
                </div>
                <div className='mi_bg'></div>
              </div>
              <div className='mi_img mii02'>
                <div className='mi_txt'>
                  <img src={images.info_txt02} alt='ENERGETIC' />
                </div>
                <div className='mi_bg'></div>
              </div>
              <div className='mi_img mii03'>
                <div className='mi_txt'>
                  <img src={images.info_txt03} alt='RELAXED' />
                  <p>상상에서 현실로, 창의의 순간.</p>
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
