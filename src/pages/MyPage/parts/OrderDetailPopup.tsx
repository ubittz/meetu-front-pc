import images from '@@assets/images';
import { Order } from '@@pages/MyPage/types';

interface OrderDetailPopupProps {
  order: Order;
}

function OrderDetailPopup({ order }: OrderDetailPopupProps) {
  const paymethodName = order.detail?.paymentMethod === 'card' ? '카드' : order.detail?.paymentMethod === 'bank' ? '은행' : '간편결제';

  return (
    <div className='popup_layer type_02'>
      {/* <!-- 기본 숨김처리, 노출 시 style="display: block" 추가 --> */}
      <div className='popup_bg'></div>
      <div className='popup_inner'>
        <h3 className='popup_tit'>결제 상세</h3>
        <button className='btn close'>팝업 닫기</button>
        <div className='payment_info'>
          <p className='tit'>제품 정보</p>
          <div className='info_top'>
            <div className='img_area'>
              <img src={order.meeting.imageUrl ?? images.meeting_img01} alt='호스트 이미지' />
            </div>
            <div className='info_area'>
              <h4>{order.meeting.title}</h4>
              <dl className='info'>
                <dt>주문 번호</dt>
                <dd>{order.orderNumber}</dd>
                <dt>주문 일자</dt>
                <dd>{order.orderDate.toLocaleDateString()}</dd>
              </dl>
            </div>
          </div>

          <p className='tit'>결제 정보</p>
          <ul className='list_table'>
            {/* <!-- 결제 정보 테이블 헤더 --> */}
            <li className='list_header'>
              <p className='tb_price'>정상가</p>
              <p className='tb_info'>부가내역</p>
              <p className='tb_info'>결제수단</p>
              <p className='tb_price02'>최종 결제 금액</p>
            </li>

            {/* <!-- 결제 정보 테이블 리스트 --> */}
            <li>
              <p className='tb_price'>{order.detail?.originalPrice.toLocaleString()}원</p>
              <div className='tb_info'>
                <ul className='info_list'>
                  <li>
                    <p className='tit'>상품 할인 금액</p>
                    <p className='txt'>{order.detail?.discountInfo.productDiscount ?? '0'}원</p>
                  </li>
                  <li>
                    <p className='tit'>쿠폰 적용 할인 금액</p>
                    <p className='txt'>{order.detail?.discountInfo.couponDiscount ?? '0'}원</p>
                  </li>
                  <li>
                    <p className='tit'>포인트 사용</p>
                    <p className='txt'>{order.detail?.discountInfo.pointsUsed ?? '0'}P</p>
                  </li>
                  <li>
                    <p className='tit'>적립 포인트</p>
                    <p className='txt'>{order.detail?.discountInfo.pointsEarned ?? '0'}P</p>
                  </li>
                </ul>
              </div>
              <div className='tb_info'>
                <p className='txt01'>{paymethodName}</p>
                <p className='txt02'>
                  {order.detail?.cardDetail.cardNumber} / {order.detail?.cardDetail.cardInstallmentPeriod}
                </p>
              </div>
              <p className='tb_price02'>{order.finalPrice.toLocaleString()}원</p>
            </li>
          </ul>

          <p className='tit'>주문자 정보</p>
          <div className='list_table'>
            <dl>
              <dt>이름</dt>
              <dd>{order.detail?.orderUserInfo.name}</dd>
              <dt>생년월일</dt>
              <dd>{order.detail?.orderUserInfo.birth}</dd>
            </dl>
            <dl>
              <dt>연락처</dt>
              <dd>{order.detail?.orderUserInfo.phone}</dd>
              <dt>이메일</dt>
              <dd>{order.detail?.orderUserInfo.email}</dd>
            </dl>
          </div>

          <p className='tit'>결제 내역</p>
          <div className='list_table'>
            <dl>
              <dt>결제 수단 </dt>
              <dd>{paymethodName}</dd>
              <dt>결제 수단 번호</dt>
              <dd>
                {order.detail?.cardDetail.cardCompany} + {order.detail?.cardDetail.cardType}
              </dd>
            </dl>
            <dl>
              <dt>승인일시</dt>
              <dd>{order.detail?.cardDetail.cardApprovalDate.toLocaleDateString()}</dd>
              <dt>결제금액</dt>
              <dd>{order.finalPrice.toLocaleString()}원</dd>
            </dl>
            <dl className='long'>
              <dt>승인번호</dt>
              <dd>{order.detail?.cardDetail.cardApprovalNumber}</dd>
            </dl>
          </div>
        </div>
        <div className='btn_area type_03'>
          <button type='button' className='btn'>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailPopup;
