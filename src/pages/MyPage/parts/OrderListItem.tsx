import { Order } from '../types';

interface OrderListItemProps {
  order: Order;
  handleOrderDetailPopup: () => void;
}

const OrderListItem = ({ order, handleOrderDetailPopup }: OrderListItemProps) => {
  return (
    <li>
      <div className='tb_info'>
        <div className='img_area'>
          <img src={order.meeting.imageUrl} alt='호스트 이미지' />
        </div>
        <ul className='info_list'>
          <li>
            <p className='tit'>결제 번호</p>
            <p className='txt'>{order.orderNumber}</p>
          </li>
          <li>
            <p className='tit'>결제 일자</p>
            <p className='txt'>{order.orderDate.toLocaleDateString()}</p>
          </li>
          <li>
            <p className='tit'>모임명</p>
            <p className='txt'>{order.meeting.title}</p>
          </li>
        </ul>
      </div>
      <p className='tb_price'>{order.finalPrice.toLocaleString() + '원'}</p>
      <div className='tb_choice'>
        <button type='button' className='btn' onClick={handleOrderDetailPopup}>
          결제 상세 보기
        </button>
      </div>
    </li>
  );
};

export default OrderListItem;
