import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import HostInfoPopup from '@@pages/MyPage/parts/HostInfoPopup';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function InfoHostReview() {
  const [isHostInfoPopupOpen, setIsHostInfoPopupOpen] = useState(false);

  const handleOpenHostInfoPopup = () => {
    setIsHostInfoPopupOpen(true);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        {/* <!-- 호스트 정보 대시보드 시작 --> */}
        <section className='dashboard_wrap type_info'>
          <div className='d_inner'>
            <div className='host_area'>
              <button type='button' className='btn' onClick={handleOpenHostInfoPopup}>
                <span className='img_area'>
                  <img src={images.meeting_img04} alt='호스트 이미지' />
                </span>
                <span className='txt_area'>
                  <strong>HOST</strong>
                  <em>홍길동 님</em>
                </span>
              </button>
              <p className='caption'>
                홍길동님의 소개글입니다. 소개글이 나오는 영역입니다. <br />
                소개글이나오는영역입니다. 소개글이나오는 영역입니다. 소개글이나오는영역입니다.
              </p>
            </div>
            <ul className='link_area'>
              <li className='info01'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host'} className='btn'>
                  <i className='link_ico'></i>
                  <strong>운영중인 모임</strong>
                  <strong className='number'>
                    <span>N</span>개
                  </strong>
                </Link>
              </li>
              <li className='info02'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host-review'} className='btn'>
                  <i className='link_ico'></i>
                  <strong>리뷰</strong>
                  <strong className='number'>
                    <span>N</span>건
                  </strong>
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- 호스트 정보 팝업 시작 --> */}
          {isHostInfoPopupOpen && <HostInfoPopup />}
          {/* <!-- 호스트 정보 팝업 종료 --> */}
        </section>
        {/* <!-- 호스트 정보 대시보드 종료 --> */}

        {/* <!-- 호스트 정보 리뷰영역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <div className='meeting_btn'>
              <div className='btn_wrap'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host'} className='btn'>
                  모임
                </Link>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info/host-review'} className='btn active'>
                  리뷰
                </Link>
              </div>
            </div>

            <div className='list_wrap type_my02'>
              <ul>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다. 최대 한 줄까지 노출됩니다.</h4>
                    <div className='star_wrap'>
                      <strong>5.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '100%' }}></span>
                      </div>
                    </div>
                    <p className='txt open'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다.</h4>
                    <div className='star_wrap'>
                      <strong>4.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '80%' }}></span>
                      </div>
                    </div>
                    <p className='txt'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다.리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다.</h4>
                    <div className='star_wrap'>
                      <strong>5.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '100%' }}></span>
                      </div>
                    </div>
                    <p className='txt'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다.리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다.</h4>
                    <div className='star_wrap'>
                      <strong>5.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '100%' }}></span>
                      </div>
                    </div>
                    <p className='txt'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다.리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다.</h4>
                    <div className='star_wrap'>
                      <strong>5.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '100%' }}></span>
                      </div>
                    </div>
                    <p className='txt'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다.리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다.</h4>
                    <div className='star_wrap'>
                      <strong>5.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '100%' }}></span>
                      </div>
                    </div>
                    <p className='txt'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다.리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다.</h4>
                    <div className='star_wrap'>
                      <strong>5.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '100%' }}></span>
                      </div>
                    </div>
                    <p className='txt'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다.리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <h4 className='tit'>모임명입니다.</h4>
                    <div className='star_wrap'>
                      <strong>5.0</strong>
                      <div className='star_area'>
                        <span className='star' style={{ width: '100%' }}></span>
                      </div>
                    </div>
                    <p className='txt'>
                      리뷰 내용입니다. 최대 세줄까지 노출됩니다.리뷰 내용입니다. 최대 세줄까지 노출됩니다. 리뷰 내용입니다. 최대 세줄까지 노출됩니다.
                      리뷰 내용입니다.
                    </p>
                    <div className='txt_btn'>
                      <button type='button' className='btn'>
                        더보기
                      </button>
                      {/* <!-- 클릭 시 <p className="txt">에 클래스 추가 > <p className="txt open"> --> */}
                    </div>
                    <div className='user_info'>
                      <div className='img_area'>
                        <img src={images.user_img} alt='이용자 이미지' />
                      </div>
                      <p className='ui_txt'>
                        <strong>kimj****</strong>
                        <span>2024. 09. 20</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default InfoHostReview;
