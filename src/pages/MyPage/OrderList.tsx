import { useState } from 'react';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import UserPopup from '@@components/Popup/UserPopup';
import { getDummyOrderList } from '@@pages/MyPage/dummy';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import OrderDetailPopup from '@@pages/MyPage/parts/OrderDetailPopup';
import OrderListItem from '@@pages/MyPage/parts/OrderListItem';
import { UserType } from '@@types/user';

import { Order } from './types';

function OrderList() {
  const type: UserType = 'user';
  const dummyOrderList = getDummyOrderList();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  const [isShowInfoPopup, setIsShowInfoOpen] = useState(false);
  const handleShowInfoPopup = () => {
    setIsShowInfoOpen(!isShowInfoPopup);
  };

  
  const openPopup = (order: Order) => {
    setSelectedOrder(order);  
    setIsPopupOpen(true);      
  };

  const closePopup = () => {
    setIsPopupOpen(false);    
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <MyPageHeader type={type} activeTab='payment' />

        <MyPageDashboard type={type} profileButtonAction={handleShowInfoPopup} />

        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              결제내역
              <span className='txt'>1년 이후 내역은 고객센터 (0000 - 0000)으로 문의해 주시기 바랍니다.</span>
            </h3>
            <ul className='list_table'>
              <li className='list_header'>
                <p className='tb_info'>상품정보</p>
                <p className='tb_price'>주문 결제 금액</p>
                <p className='tb_choice'>선택</p>
              </li>
              {dummyOrderList.map((order) => (
                <OrderListItem 
                  key={order.orderNumber} 
                  order={order} 
                  handleOrderDetailPopup={() => openPopup(order)} 
                />
              ))}
            </ul>
            <div className='notice_wrap'>
              <div className='notice'>
                <h4>결제 유의 사항</h4>
                <p>유의사항 내용</p>
              </div>
            </div>
          </div>
        </section>

        {isPopupOpen && selectedOrder && (
          <UserPopup visible={isPopupOpen} title='결제 상세' onCancel={closePopup} width='70%' height='1500px' transform="translateX(-50%) translateY(-30%)">
            <OrderDetailPopup order={selectedOrder} /> {/* 선택된 주문 정보를 OrderDetailPopup에 전달 */}
          </UserPopup>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default OrderList;
