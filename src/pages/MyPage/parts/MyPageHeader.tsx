import { Link } from 'react-router-dom';

import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

export default function MyPageHeader() {
  return (
    <section className='mypage_top'>
      <h2>마이페이지</h2>
      <p className='caption'>
        <Link to={pathGenerator(PAGES.MYPAGE)} className='btn'>
          내 정보
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/payment-list'} className='btn'>
          결제 내역
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/host-app'} className='btn active'>
          호스트 등록 신청
        </Link>
        <Link to={pathGenerator(PAGES.MYPAGE) + '/my-meeting/user'} className='btn'>
          내 모임
        </Link>
      </p>
    </section>
  );
}
