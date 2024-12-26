import { useParams } from 'react-router-dom';

import { useMeetingDetail } from '@@stores/meeting/hooks';

function OrderPayment() {
  const { id } = useParams();
  const { data } = useMeetingDetail(id ?? '');
  if (!data) return;

  return (
    <div className='info_contents tw-mt-10'>
      <h4>주문 금액</h4>
      <ul className='price_list'>
        <li>
          <strong className='tit'>주문금액</strong>
          <span className='price'>
            <strong>{data.cost.toLocaleString()}</strong> 원
          </span>
        </li>
        <li>
          <strong className='tit'>주문할인</strong>
          <span className='price'>
            <strong>0</strong> 원
          </span>
        </li>
        <li>
          <strong className='tit'>쿠폰</strong>
          <span className='price'>
            <strong>0</strong> 원
          </span>
        </li>
        <li>
          <strong className='tit'>포인트</strong>
          <span className='price'>
            <strong>0</strong> P
          </span>
        </li>
        <li className='total'>
          <strong className='tit'>주문금액</strong>
          <span className='price'>
            <strong>{data.cost.toLocaleString()}</strong> 원
          </span>
        </li>
      </ul>
    </div>
  );
}

export default OrderPayment;
