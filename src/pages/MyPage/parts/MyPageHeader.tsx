import { Link } from 'react-router-dom';

import { UserType } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

interface MyPageHeaderProps {
  type: UserType;
  activeTab: 'info' | 'payment' | 'host-app' | 'my-meeting';
}

export default function MyPageHeader({ type, activeTab }: MyPageHeaderProps) {
  return (
    <section className='mypage_top'>
      <h2>마이페이지</h2>
      <p className='caption'>
        <Link to={pathGenerator(PAGES.MYPAGE)} className={`btn ${activeTab === 'info' ? 'active' : ''}`}>
          내 정보
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/payment-list'} className={`btn ${activeTab === 'payment' ? 'active' : ''}`}>
          결제 내역
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/host-app'} className={`btn ${activeTab === 'host-app' ? 'active' : ''}`}>
          호스트 등록 신청
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/my-meeting/' + type} className={`btn ${activeTab === 'my-meeting' ? 'active' : ''}`}>
          내 모임
        </Link>
      </p>
    </section>
  );
}