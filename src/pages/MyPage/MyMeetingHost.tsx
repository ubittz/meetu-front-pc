import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function MyMeetingHost() {
  const [isHostInfoPopupOpen, setIsHostInfoPopupOpen] = useState(false);

  const handleOpenHostInfoPopup = () => {
    setIsHostInfoPopupOpen(true);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='mypage_top'>
          <p className='caption'>
            <Link to={pathGenerator(PAGES.MYPAGE)} className='btn'>
              내 정보
            </Link>
            <Link to={pathGenerator(PAGES.MYPAGE) + '/payment-list'} className='btn'>
              결제 내역
            </Link>
            {/* TODO: 호스트 등록 신청 페이지 path 교체하기 */}
            <Link to={pathGenerator(PAGES.MYPAGE) + '/host-application'} className='btn'>
              호스트 등록 신청
            </Link>
            <Link to={pathGenerator(PAGES.MYPAGE) + '/my-meeting/host'} className='btn active'>
              내 모임
            </Link>
          </p>
        </section>
        <section className='dashboard_wrap'>
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
              <p className='caption'>밋유에서 다양한 모임들을 만들어보세요!</p>
            </div>
            <ul className='link_area'>
              <li className='edit'>
                <Link to={pathGenerator(PAGES.MYPAGE) + '/info-edit'} className='btn'>
                  <i className='link_ico'></i>
                  <strong>내 정보 수정</strong>
                </Link>
              </li>
              <li className='guide'>
                <a href='javascript:alert("서비스 준비 중입니다.");' className='btn'>
                  <i className='link_ico'></i>
                  <strong>
                    모임만들기 <br />
                    가이드
                  </strong>
                </a>
              </li>
              <li className='intro'>
                <Link to='javascript:alert("서비스 준비 중입니다.");' className='btn'>
                  <i className='link_ico'></i>
                  <strong>밋유 소개</strong>
                </Link>
              </li>
              <li className='center'>
                <Link to='javascript:alert("서비스 준비 중입니다.");' className='btn'>
                  <i className='link_ico'></i>
                  <strong>고객센터</strong>
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- 호스트 정보 팝업 시작 --> */}
          {/* {isHostInfoPopupOpen && <HostInfoPopup />} */}
          {/* <!-- 호스트 정보 팝업 종료 --> */}
        </section>
        {/* <!-- 마이페이지 대시보드 종료 --> */}

        {/* <!-- 호스트_내모임 시작 --> */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              내 모임 (총 <strong>N</strong>개)
              <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                모임 만들기
              </Link>
            </h3>

            <div className='list_sort'>
              <div className='sort_inner'>
                <button type='button' className='btn active'>
                  전체
                </button>
                <button type='button' className='btn'>
                  진행 예정
                </button>
                <button type='button' className='btn'>
                  모임 확정
                </button>
                <button type='button' className='btn'>
                  진행 완료
                </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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
                  <div className='btn_area type_02'>
                    <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                      수정하기
                    </Link>
                    <button type='button' className='btn'>
                      삭제
                    </button>
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

export default MyMeetingHost;
