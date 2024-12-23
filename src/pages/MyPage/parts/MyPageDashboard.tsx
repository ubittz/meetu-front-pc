import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import UserPopup from '@@components/Popup/UserPopup';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { User } from '@@stores/auth/types';

import InfoPopup from './InfoPopup';

interface MyPageDashboardProps {
  user?: User;
  profileButtonAction: () => void;
}

function MyPageDashboard({ user, profileButtonAction }: MyPageDashboardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className='dashboard_wrap'>
      <div className='d_inner'>
        <div className='host_area'>
          <button type='button' className='btn' onClick={profileButtonAction}>
            <span className='img_area'>
              <img src={user?.imageUrl} alt='사용자 이미지' />
            </span>
            <span className='txt_area' onClick={openPopup}>
              {user?.isHost ? <strong>HOST</strong> : <strong className='user'>USER</strong>}
              <em>{user?.name} 님</em>
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
      <UserPopup
        visible={isPopupOpen}
        title='프로필'
        onCancel={closePopup}
        img={images.meeting_img04}
      >
        <InfoPopup user={user} />
      </UserPopup>
    </section>
  );
}

export default MyPageDashboard;
