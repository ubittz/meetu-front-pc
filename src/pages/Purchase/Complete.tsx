import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Complete() {
  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>결제하기</h2>
          <p className='caption'>
            <strong>01. 정보입력</strong>
            <strong className='active'>02. 결제완료</strong>
          </p>
          <div className='complete_area payment'>
            <h3>결제가 완료되었습니다.</h3>
            <p className='caption01'>
              <strong>홍밋유</strong>와 함께 새로운 만남에서 소소한 행복을 찾아보세요.
            </p>
          </div>
          <div className='btn_area type_02'>
            <Link to='#' className='btn form02'>
              결제내역 보러가기
            </Link>
            <Link to={pathGenerator(PAGES.MAIN)} className='btn'>
              메인으로
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Complete;
