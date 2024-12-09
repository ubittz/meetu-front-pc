import React from 'react';

import { Link } from 'react-router-dom';

import { PAGES } from '@@router/constants'; // 페이지 상수 import
import { pathGenerator } from '@@router/utils'; // 경로 생성 유틸 import

const Header: React.FC = () => {
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
              <li className='active'>
                <Link to={pathGenerator(PAGES.MEETING) + '/create'}>모임 개설하기</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='inner_r'>
          <ul>
            <li className='logout'>
              <Link to='javascript:void(0);'>로그아웃</Link>
            </li>
            <li className='mypage'>
              <Link to='javascript:void(0);'>마이페이지</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
