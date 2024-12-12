import { Link } from 'react-router-dom';

import images from '@@assets/images';
import { UserType } from '@@types/user';

interface MyPageDashboardProps {
  // TODO: - 유저 정보 받아야함
  type: UserType;
  profileButtonAction: () => void;
}

function MyPageDashboard({ type, profileButtonAction }: MyPageDashboardProps) {
  return (
    <section className='dashboard_wrap'>
      <div className='d_inner'>
        <div className='host_area'>
          <button type='button' className='btn' onClick={profileButtonAction}>
            <span className='img_area'>
              <img src={images.meeting_img04} alt='호스트 이미지' />
            </span>
            <span className='txt_area'>
              {type === 'host' ? <strong>HOST</strong> : <strong className='user'>USER</strong>}
              <em>홍길동 님</em>
            </span>
          </button>
          <p className='caption'>밋유에서 다양한 모임들을 만들어보세요!</p>
        </div>
        <ul className='link_area'>
          <li className='edit'>
            <Link to='javascript:alert("서비스 준비 중입니다.");' className='btn'>
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
    </section>
  );
}

export default MyPageDashboard;
