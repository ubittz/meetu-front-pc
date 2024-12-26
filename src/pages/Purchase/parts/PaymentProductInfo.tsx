import { useParams } from 'react-router-dom';

import images from '@@assets/images';
import { useMeetingDetail } from '@@stores/meeting/hooks';

function PaymentProductInfo() {
  const { id } = useParams();

  const { data } = useMeetingDetail(id ?? '');

  if (!data) return;

  return (
    <div>
      <h3>호스트 정보</h3>
      <div className='info_contents'>
        <h4>{data.name}</h4>
        <div className='host_info'>
          <div className='img_area'>
            <img src={images.meeting_img01} alt='호스트 이미지' />
          </div>
          <ul className='info_list'>
            <li>
              <p className='tit'>호스트명</p>
              <p className='txt'>{data.hostName}</p>
            </li>
            <li>
              <p className='tit'>진행일 </p>
              <p className='txt'>{data.processDate}</p>
            </li>
            <li>
              <p className='tit'>주소</p>
              <p className='txt'>{data.address}</p>
            </li>
            <li>
              <p className='tit'>카테고리</p>
              <p className='txt'>{data.category}</p>
            </li>
            <li className='price'>
              <p className='tit'>판매가격</p>
              <p className='txt'>{data.cost.toLocaleString()}원</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaymentProductInfo;
