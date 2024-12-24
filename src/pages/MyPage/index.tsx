import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import ClassEmpty from '@@pages/Main/parts/ClassEmpty';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useMeetingMyList } from '@@stores/meeting/hooks';

import MyPageSwiper from './parts/MyPageSwiper';

function MyPage() {
  const { recentList } = useAppState((state) => state.meeting);

  const { content: mypage_content } = useMeetingMyList({ page: 0, size: 3 });

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <MyPageHeader activeTab='info' />
        <MyPageDashboard />

        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              최근 본 모임
              <Link to={`${pathGenerator(PAGES.MYPAGE)}/my-meeting`} className='btn'>
                더 보기
              </Link>
            </h3>

            <ul className='swiper-wrapper'>{recentList && recentList.length > 0 ? <MyPageSwiper meetings={recentList} /> : <ClassEmpty />}</ul>
            <h3 className='main_tit tw-mt-5'>
              내 모임
              <Link to={`${pathGenerator(PAGES.MYPAGE)}/my-meeting`} className='btn'>
                더 보기
              </Link>
            </h3>
            <ul className='swiper-wrapper'>
              {mypage_content && mypage_content.length > 0 ? <MyPageSwiper meetings={mypage_content} /> : <ClassEmpty />}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default MyPage;
