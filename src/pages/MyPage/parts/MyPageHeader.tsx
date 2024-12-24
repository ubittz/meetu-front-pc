import { Link } from 'react-router-dom';

import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

interface MyPageHeaderProps {
  activeTab: 'info' | 'payment' | 'host-app' | 'my-meeting';
}

function MyPageHeader({ activeTab }: MyPageHeaderProps) {
  return (
    <section className='mypage_top'>
      <h2>마이페이지</h2>
      <p className='caption'>
        <Link to={pathGenerator(PAGES.MYPAGE)} className={`btn ${activeTab === 'info' ? 'active' : ''}`}>
          내 정보
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/order'} className={`btn ${activeTab === 'payment' ? 'active' : ''}`}>
          결제 내역
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/apply-host'} className={`btn ${activeTab === 'host-app' ? 'active' : ''}`}>
          호스트 등록 신청
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/my-meeting/'} className={`btn ${activeTab === 'my-meeting' ? 'active' : ''}`}>
          내 모임
        </Link>
      </p>
    </section>
  );
}

export default MyPageHeader;
