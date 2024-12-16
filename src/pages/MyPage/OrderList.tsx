import { useState } from 'react';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { getDummyOrderList } from '@@pages/MyPage/dummy';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import OrderDetailPopup from '@@pages/MyPage/parts/OrderDetailPopup';
import OrderListItem from '@@pages/MyPage/parts/OrderListItem';
import { UserType } from '@@types/user';

function OrderList() {
  const type: UserType = 'user';
  // TODO: - dummy items 교체
  const dummyOrderList = getDummyOrderList();

  const [isShowInfoPopup, setIsShowInfoOpen] = useState(false);
  const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false);

  const handleShowInfoPopup = () => {
    setIsShowInfoOpen(!isShowInfoPopup);
  };

  const handleOrderDetailPopup = () => {
    setIsOrderDetailOpen(!isOrderDetailOpen);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <MyPageHeader type={type} activeTab='payment' />

        <MyPageDashboard type={type} profileButtonAction={handleShowInfoPopup} />

        {/* <!-- 마이페이지 결제내역 시작 --> */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              결제내역
              <span className='txt'>1년 이후 내역은 고객센터 (0000 - 0000)으로 문의해 주시기 바랍니다.</span>
            </h3>
            <ul className='list_table'>
              {/* <!-- 결제내역 테이블 헤더 --> */}
              <li className='list_header'>
                <p className='tb_info'>상품정보</p>
                <p className='tb_price'>주문 결제 금액</p>
                <p className='tb_choice'>선택</p>
              </li>
              {/* <!-- 결제내역 테이블 리스트 --> */}
              {dummyOrderList.map((order) => (
                <OrderListItem key={order.orderNumber} order={order} handleOrderDetailPopup={handleOrderDetailPopup} />
              ))}
            </ul>
            <div className='notice_wrap'>
              <div className='notice'>
                <h4>결제 유의 사항</h4>
                <p>
                  1) 유의사항 1번의 텍스트가 노출됩니다. <br />
                  2) 유의사항 2번의 텍스트가 노출됩니다. <br />
                  3) 유의사항 3번의 텍스트가 노출됩니다.
                </p>
              </div>
              <div className='notice'>
                <h4>환불 안내</h4>
                <p>
                  1) 환불안내 1번의 텍스트가 노출됩니다. <br />
                  2) 환불안내 2번의 텍스트가 노출됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        {isOrderDetailOpen && <OrderDetailPopup order={dummyOrderList[0]} />}
      </main>
      <Footer />
    </div>
  );
}

export default OrderList;
