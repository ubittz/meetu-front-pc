import { MeetingItem } from '@@pages/MyPage/types';

interface PaymentListItemProps {
  orderNumber: string;
  orderDate: Date;
  purchasePrice: number; // 총 결제 금액
  meeting: MeetingItem;

  handlePaymentDetailPopup: () => void;
}

const PaymentListItem: React.FC<PaymentListItemProps> = ({ orderNumber, orderDate, purchasePrice, meeting, handlePaymentDetailPopup }) => {
  return (
    <li>
      <div className='tb_info'>
        <div className='img_area'>
          <img src={meeting.imageUrl} alt='호스트 이미지' />
        </div>
        <ul className='info_list'>
          <li>
            <p className='tit'>결제 번호</p>
            <p className='txt'>{orderNumber}</p>
          </li>
          <li>
            <p className='tit'>결제 일자</p>
            <p className='txt'>{orderDate.toLocaleDateString()}</p>
          </li>
          <li>
            <p className='tit'>모임명</p>
            <p className='txt'>{meeting.title}</p>
          </li>
        </ul>
      </div>
      <p className='tb_price'>{purchasePrice}</p>
      <div className='tb_choice'>
        <button type='button' className='btn' onClick={handlePaymentDetailPopup}>
          결제 상세 보기
        </button>
      </div>
    </li>
  );
};

export default PaymentListItem;
