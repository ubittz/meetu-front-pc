import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import { UserType } from '@@types/user';

function InfoUser() {
  const type: UserType = 'user';

  const [isShowInfoPopup, setIsShowInfoPopup] = useState(false);

  const handleOpenInfoPopup = () => {
    setIsShowInfoPopup(true);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        {/* <!-- 이용자 정보 대시보드 시작 --> */}
        <section className='dashboard_wrap type_info'>
          <div className='d_inner'>
            <div className='host_area'>
              <button type='button' className='btn' onClick={handleOpenInfoPopup}>
                <span className='img_area'>
                  <img src={images.user_img} alt='이용자 이미지' />
                </span>
                <span className='txt_area'>
                  <strong className='user'>GUEST</strong>
                  <em>김준수 님</em>
                </span>
              </button>
              <p className='caption'>
                김준수님의 소개글입니다. 소개글이 나오는 영역입니다. <br />
                소개글이나오는영역입니다. 소개글이나오는 영역입니다. 소개글이나오는영역입니다.
              </p>
            </div>
            <ul className='link_area'>
              <li className='info01'>
                <Link to='javascript:void(0);' className='btn'>
                  <i className='link_ico'></i>
                  <strong>신청한 모임</strong>
                  <strong className='number'>
                    <span>N</span>개
                  </strong>
                </Link>
              </li>
            </ul>
          </div>

          {isShowInfoPopup && <InfoPopup type={type} />}
        </section>
        {/* <!-- 이용자 정보 대시보드 종료 --> */}

        {/* <!-- 이용자 정보 모임영역 시작 -->  */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <div className='meeting_btn'>
              <div className='btn_wrap'>
                <Link to='javascript:void(0);' className='btn active'>
                  모임
                </Link>
              </div>
            </div>

            <div className='list_wrap type_my'>
              <ul>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img01} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>SEOUL</span>
                    </div>
                    <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                    <p className='txt'>
                      와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                    </p>
                    <p className='price'>70,000원</p>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img02} alt='상품 이미지2' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>BUSAN</span>
                    </div>
                    <h4 className='tit'>리듬 속에 빠져들다, 음악 즉흥연주 모임</h4>
                    <p className='txt'>
                      다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.
                    </p>
                    <p className='price'>35,000원</p>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img03} alt='상품 이미지3' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>CHUNCHEON</span>
                    </div>
                    <h4 className='tit'>빛으로 담는 순간, 포토그래피 클래스</h4>
                    <p className='txt'>
                      사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.
                    </p>
                    <p className='price'>45,000원</p>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img04} alt='상품 이미지4' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>SEOUL</span>
                    </div>
                    <h4 className='tit'>미식가들의 쿠킹 클래스</h4>
                    <p className='txt'>
                      새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.
                    </p>
                    <p className='price'>50,000원</p>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img01} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>SEOUL</span>
                    </div>
                    <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                    <p className='txt'>
                      와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                    </p>
                    <p className='price'>70,000원</p>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img01} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>SEOUL</span>
                    </div>
                    <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                    <p className='txt'>
                      와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                    </p>
                    <p className='price'>70,000원</p>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img01} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>SEOUL</span>
                    </div>
                    <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                    <p className='txt'>
                      와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                    </p>
                    <p className='price'>70,000원</p>
                  </div>
                </li>
                <li>
                  <div className='img_area'>
                    <img src={images.good_img01} alt='상품 이미지1' />
                  </div>
                  <div className='txt_area'>
                    <div className='sort'>
                      <span className='location'>SEOUL</span>
                    </div>
                    <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                    <p className='txt'>
                      와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                    </p>
                    <p className='price'>70,000원</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- 이용자 정보 모임영역 종료 -->  */}
      </main>
      <Footer />
    </div>
  );
}

export default InfoUser;
