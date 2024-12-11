import { OrderItem } from '../types';

interface OrderListItemProps {
  orderItem: OrderItem;
  handleOrderDetailPopup: () => void;
}

const OrderListItem = ({ orderItem, handleOrderDetailPopup }: OrderListItemProps) => {
  return (
    <li>
      <div className='tb_info'>
        <div className='img_area'>
          <img src={orderItem.meeting.imageUrl} alt='호스트 이미지' />
        </div>
        <ul className='info_list'>
          <li>
            <p className='tit'>결제 번호</p>
            <p className='txt'>{orderItem.orderNumber}</p>
          </li>
          <li>
            <p className='tit'>결제 일자</p>
            <p className='txt'>{orderItem.orderDate.toLocaleDateString()}</p>
          </li>
          <li>
            <p className='tit'>모임명</p>
            <p className='txt'>{orderItem.meeting.title}</p>
          </li>
        </ul>
      </div>
      <p className='tb_price'>{orderItem.finalPrice.toLocaleString() + '원'}</p>
      <div className='tb_choice'>
        <button type='button' className='btn' onClick={handleOrderDetailPopup}>
          결제 상세 보기
        </button>
      </div>
    </li>
  );
};

export default OrderListItem;
