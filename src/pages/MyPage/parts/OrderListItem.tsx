import { format } from 'date-fns';

import images from '@@assets/images';
import { PaymentListResponse } from '@@stores/payment/types';

interface OrderListItemProps {
  payment: PaymentListResponse;
  handleOrderDetailPopup: () => void;
}

const OrderListItem = ({ payment, handleOrderDetailPopup }: OrderListItemProps) => {
  return (
    <li>
      <div className='tb_info'>
        <div className='img_area'>
          <img src={images.ctg_img02} alt='호스트 이미지' />
        </div>
        <ul className='info_list'>
          <li>
            <p className='tit'>결제 번호</p>
            <p className='txt'>{payment.id}</p>
          </li>
          <li>
            <p className='tit'>결제 일자</p>
            <p className='txt'>{format(payment.createDatetime, 'yyyy.MM.dd')}</p>
          </li>
          <li>
            <p className='tit'>모임명</p>
            <p className='txt'>{payment.meetingName}</p>
          </li>
        </ul>
      </div>
      <p className='tb_price'>{payment.latestCost.toLocaleString() + '원'}</p>
      <div className='tb_choice'>
        <button type='button' className='btn' onClick={handleOrderDetailPopup}>
          결제 상세 보기
        </button>
      </div>
    </li>
  );
};

export default OrderListItem;
