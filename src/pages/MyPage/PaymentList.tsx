import { useState } from 'react';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import PaymentDetailPopup from '@@pages/MyPage/parts/PaymentDetailPopup';
import { UserType } from '@@pages/MyPage/types';

export default function PaymentList() {
  const type: UserType = 'user';
  const [isShowInfoPopup, setIsShowInfoOpen] = useState(false);
  const [isPaymentDetailOpen, setIsPaymentDetailOpen] = useState(false);

  const handleShowInfoPopup = () => {
    setIsShowInfoOpen(!isShowInfoPopup);
  };

  const handlePaymentDetailPopup = () => {
    setIsPaymentDetailOpen(!isPaymentDetailOpen);
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
              <li>
                <div className='tb_info'>
                  <div className='img_area'>
                    <img src={images.meeting_img01} alt='호스트 이미지' />
                  </div>
                  <ul className='info_list'>
                    <li>
                      <p className='tit'>결제 번호</p>
                      <p className='txt'>20020725P074416</p>
                    </li>
                    <li>
                      <p className='tit'>결제 일자</p>
                      <p className='txt'>2024. 07. 26</p>
                    </li>
                    <li>
                      <p className='tit'>모임명</p>
                      <p className='txt'>미식가들의 쿠킹 클래스</p>
                    </li>
                  </ul>
                </div>
                <p className='tb_price'>50,000원</p>
                <div className='tb_choice'>
                  <button type='button' className='btn' onClick={handlePaymentDetailPopup}>
                    결제 상세 보기
                  </button>
                </div>
              </li>
              <li>
                <div className='tb_info'>
                  <div className='img_area'>
                    <img src={images.meeting_img01} alt='호스트 이미지' />
                  </div>
                  <ul className='info_list'>
                    <li>
                      <p className='tit'>결제 번호</p>
                      <p className='txt'>20020725P074416</p>
                    </li>
                    <li>
                      <p className='tit'>결제 일자</p>
                      <p className='txt'>2024. 07. 25</p>
                    </li>
                    <li>
                      <p className='tit'>모임명</p>
                      <p className='txt'>미식가들의 쿠킹 클래스</p>
                    </li>
                  </ul>
                </div>
                <p className='tb_price'>60,000원</p>
                <div className='tb_choice'>
                  <button type='button' className='btn' onClick={handlePaymentDetailPopup}>
                    결제 상세 보기
                  </button>
                </div>
              </li>
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

        {isPaymentDetailOpen && <PaymentDetailPopup />}
      </main>
      <Footer />
    </div>
  );
}
