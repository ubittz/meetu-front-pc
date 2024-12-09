import Header from '@@components/Header';
import Footer from '@@components/Footer';
import images from '@@assets/images';

function Purchase() {
  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='mypage_top'>
          <h2>결제하기</h2>
          <p className='caption'>
            <strong className='active'>01. 정보입력</strong>
            <strong>02. 결제완료</strong>
          </p>
        </section>

        {/* <!-- 결제하기 영역 시작 --> */}
        <section className='payment_wrap'>
          <form action='' method='post'>
            <fieldset>
              <legend>결제하기</legend>
              {/* <!-- 결제 정보 영역 시작 --> */}
              <div className='payment_info'>
                <div className='pi_inner'>
                  {/* <!-- 결제 정보 좌측 영역 시작 --> */}
                  <div className='info_l'>
                    <h3>호스트 정보</h3>
                    <div className='info_contents'>
                      <h4>미식가들의 쿠킹 클래스</h4>
                      <div className='host_info'>
                        <div className='img_area'>
                          <img src={images.meeting_img01} alt='호스트 이미지' />
                        </div>
                        <ul className='info_list'>
                          <li>
                            <p className='tit'>호스트명</p>
                            <p className='txt'>호스트명 혹은 닉네임</p>
                          </li>
                          <li>
                            <p className='tit'>진행일 </p>
                            <p className='txt'>2024년 12월 26일</p>
                          </li>
                          <li>
                            <p className='tit'>주소</p>
                            <p className='txt'>서울특별시 강남구 도산대로 17-8</p>
                          </li>
                          <li>
                            <p className='tit'>카테고리</p>
                            <p className='txt'>#쿠킹</p>
                          </li>
                          <li className='price'>
                            <p className='tit'>판매가격</p>
                            <p className='txt'>50,000원</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h3>주문자 정보</h3>
                    <div className='info_contents'>
                      <h4>주문자 정보 입력</h4>
                      <div className='order_info'>
                        <div className='input_area'>
                          <label htmlFor='order_name'>주문자명</label>
                          <input type='text' name='order_name' id='order_name' placeholder='주문자명을 입력해주세요.' />
                        </div>
                        <div className='input_area'>
                          <label htmlFor='order_contact'>연락처</label>
                          <input type='text' name='order_contact' id='order_contact' placeholder='연락처를 입력해주세요.' />
                        </div>
                        <div className='chk_area'>
                          <input type='checkbox' name='orderChk' id='orderChk' />
                          <label htmlFor='orderChk'>다음에도 사용할게요!</label>
                        </div>
                      </div>
                    </div>

                    <h3>결제수단</h3>
                    <div className='info_contents'>
                      <h4>결제 수단 입력</h4>
                      <div className='payment_method'>
                        <div className='pm_box'>
                          <div className='chk_area radio'>
                            <input type='radio' name='methodChk' id='methodChk01' />
                            <label htmlFor='methodChk01'>카드결제</label>
                          </div>
                          {/* <!-- 라디오 버튼 체크시 노출되는 영역입니다. --> */}
                          <div className='box_contents'>
                            <div className='input_area'>
                              <label htmlFor='card_name'>카드사</label>
                              <select name='card_name' id='card_name' required>
                                <option value='' selected disabled hidden>
                                  선택하기
                                </option>
                                <option value=''>신한</option>
                              </select>
                            </div>
                            <div className='input_area'>
                              <label htmlFor='pay_period'>할부</label>
                              <select name='pay_period' id='pay_period' required>
                                <option value='' selected disabled hidden>
                                  선택하기
                                </option>
                                <option value=''>일시불</option>
                                <option value=''>2개월</option>
                                <option value=''>3개월</option>
                                <option value=''>4개월</option>
                                <option value=''>5개월</option>
                                <option value=''>6개월</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className='pm_box'>
                          <div className='chk_area radio'>
                            <input type='radio' name='methodChk' id='methodChk02' />
                            <label htmlFor='methodChk02'>계좌이체</label>
                          </div>
                          {/* <!-- 라디오 버튼 체크시 노출되는 영역입니다. --> */}
                          <div className='box_contents'>
                            <div className='input_area'>
                              <label htmlFor='bank_name'>은행명</label>
                              <select name='bank_name' id='bank_name' required>
                                <option value='' selected disabled hidden>
                                  선택하기
                                </option>
                                <option value=''>국민은행</option>
                              </select>
                            </div>
                            <div className='input_area'>
                              <label htmlFor='account_name'>예금주</label>
                              <input type='text' name='account_name' id='account_name' placeholder='예금주명을 입력하세요.' />
                            </div>
                          </div>
                        </div>
                        <div className='pm_box'>
                          <div className='chk_area radio'>
                            <input type='radio' name='methodChk' id='methodChk03' />
                            <label htmlFor='methodChk03'>간편결제</label>
                          </div>
                          {/* <!-- 라디오 버튼 체크시 노출되는 영역입니다. --> */}
                          <div className='box_contents'>
                            <div className='radio_wrap'>
                              <div className='pay_radio'>
                                <input type='radio' name='paychk' id='payN' />
                                <label htmlFor='payN' className='btn naver'>
                                  <i></i>
                                  <p className='txt'>네이버페이로 결제하기</p>
                                </label>
                              </div>
                              <div className='pay_radio'>
                                <input type='radio' name='paychk' id='payK' />
                                <label htmlFor='payK' className='btn kakao'>
                                  <i></i>
                                  <p className='txt'>카카오페이로 결제하기</p>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- 결제 정보 좌측 영역 종료 --> */}

                  {/* <!-- 결제 정보 우측 영역 시작 --> */}
                  <div className='info_r'>
                    <h3>결제 상세</h3>
                    <div className='info_contents'>
                      <h4>결제 동의</h4>
                      <div className='agree_area'>
                        <div className='chk_area chkAll'>
                          <input type='checkbox' name='agreeChkAll' id='agreeChkAll' />
                          <label htmlFor='agreeChkAll'>아래의 내용에 모두 동의합니다.</label>
                        </div>
                        <div className='chk_area'>
                          <input type='checkbox' name='agreeChk01' id='agreeChk01' />
                          <label htmlFor='agreeChk01'>개인정보 수집 및 이용동의 (필수)</label>
                        </div>
                        <div className='chk_area'>
                          <input type='checkbox' name='agreeChk02' id='agreeChk02' />
                          <label htmlFor='agreeChk02'>개인정보 제3자 동의 (필수)</label>
                        </div>
                        <div className='chk_area'>
                          <input type='checkbox' name='agreeChk03' id='agreeChk03' />
                          <label htmlFor='agreeChk03'>이용약관동의 (필수)</label>
                        </div>
                      </div>
                    </div>
                    <div className='info_contents'>
                      <h4>주문 금액</h4>
                      <ul className='price_list'>
                        <li>
                          <strong className='tit'>주문금액</strong>
                          <span className='price'>
                            <strong>50,000</strong> 원
                          </span>
                        </li>
                        <li>
                          <strong className='tit'>주문할인</strong>
                          <span className='price'>
                            <strong>-</strong> 원
                          </span>
                        </li>
                        <li>
                          <strong className='tit'>쿠폰</strong>
                          <span className='price'>
                            <strong>-</strong> 원
                          </span>
                        </li>
                        <li>
                          <strong className='tit'>포인트</strong>
                          <span className='price'>
                            <strong>-</strong> 원
                          </span>
                        </li>
                        <li className='total'>
                          <strong className='tit'>주문금액</strong>
                          <span className='price'>
                            <strong>50,000</strong> 원
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className='info_contents'>
                      <h4>적립혜택</h4>
                      <ul className='price_list'>
                        <li>
                          <strong className='tit'>주문 기본 적립</strong>
                          <strong className='point'>
                            <span>+100</span> P
                          </strong>
                        </li>
                        <li>
                          <strong className='tit'>리뷰 작성 적립(예상)</strong>
                          <strong className='point'>
                            <span>+500</span> P
                          </strong>
                        </li>
                        <li className='total'>
                          <strong className='tit'>합계</strong>
                          <strong className='point'>
                            <span>50,000</span> 원
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- 결제 정보 우측 영역 종료 --> */}
                </div>
              </div>
              {/* <!-- 결제 정보 영역 종료 --> */}

              {/* <!-- 결제 버튼 영역 시작 --> */}
              <div className='payment_btn'>
                <div className='pb_inner'>
                  <p>약관 및 주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
                  <button type='button' className='btn'>
                    <span>50,000</span>원 결제하기
                  </button>
                </div>
              </div>
              {/* <!-- 결제 버튼 영역 종료 --> */}
            </fieldset>
          </form>
        </section>
        {/* <!-- 결제하기 영역 종료 --> */}
      </main>
      <Footer />
    </div>
  );
}

export default Purchase;
