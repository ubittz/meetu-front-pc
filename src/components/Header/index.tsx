import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CheckAuthorization from '@@components/CheckAuthorization';
import { PAGES } from '@@router/constants'; // 페이지 상수 import
import { pathGenerator } from '@@router/utils'; // 경로 생성 유틸 import
import { useAppState } from '@@store/hooks';
import { logout } from '@@stores/auth/reducer';

function Header() {
  const token = useAppState((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logout());
    alert('로그아웃이 완료되었습니다.');
  };

  return (
    <header className='header'>
      <div className='inner'>
        <div className='inner_l'>
          <h1 className='logo'>
            <Link to={pathGenerator(PAGES.MAIN)}>meetu</Link>
          </h1>
          <nav id='navi'>
            <ul>
              <li>
                <Link to={pathGenerator(PAGES.MEETING)}>모임 탐색</Link>
              </li>
              <li>
                <Link to='javascript:void(0);'>호스트 소개</Link>
              </li>
              <li>
                <Link to='javascript:void(0);'>공지사항</Link>
              </li>
              <CheckAuthorization>
                <li className='active'>
                  <Link to={pathGenerator(PAGES.MEETING) + '/create'}>모임 개설하기</Link>
                </li>
              </CheckAuthorization>
            </ul>
          </nav>
        </div>
        <div className='inner_r'>
          <ul>
            <CheckAuthorization>
              <li className='logout'>
                <i onClick={handleClickLogout}>로그아웃</i>
              </li>
            </CheckAuthorization>
            <li className='mypage'>
              <Link to={pathGenerator(token ? PAGES.MYPAGE : PAGES.LOGIN)}>마이페이지</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
