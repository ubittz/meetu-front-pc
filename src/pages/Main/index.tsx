import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Main() {
  return (
    <div id='wrap'>
      <header className='header'>
        {
          <div className='inner'>
            <div className='inner_l'>
              <h1 className='logo'>
                <Link to={pathGenerator(PAGES.MAIN)}>meetu</Link>
              </h1>
              <nav id='navi'>
                <ul>
                  <li>
                    <Link to={pathGenerator(PAGES.MEETING)}>모임 탐색</Link>
                  </li>
                  <li>
                    <Link to='javascript:alert("서비스 준비 중입니다.");'>호스트 소개</Link>
                  </li>
                  <li>
                    <Link to='javascript:alert("서비스 준비 중입니다.");'>공지사항</Link>
                  </li>
                  <li className='active'>
                    {/* TODO: 마이페이지 링크 추가 */}
                    <Link to='../mypage/MypageMain.html'>마이페이지</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='inner_r'>
              <ul>
                <li className='logout'>
                  <Link to='javascript:void(0);'>로그아웃</Link>
                </li>
                <li className='mypage'>
                  <Link to='javascript:void(0);'>마이페이지</Link>
                </li>
              </ul>
            </div>
          </div>
        }
      </header>

      <main className='container'>
        {<section className='main_visual'>새로운 만남 소소한 행복찾기, 밋유 meetu</section>}
        {/* 메인 배너 종료 */}

        {/* 카테고리별 모임 시작 */}
        <section className='main_ctg_wrap'>
          <div className='main_ctg_top'>
            <h3 className='main_tit'>
              <strong>카테고리</strong>별 모임<strong>.</strong>
            </h3>
            <div className='ctg_tab_btn'>
              <button type='button' className='btn active'>
                아트
              </button>
              <button type='button' className='btn'>
                독서
              </button>
              <button type='button' className='btn'>
                쿠킹
              </button>
              <button type='button' className='btn'>
                사이클
              </button>
              <button type='button' className='btn'>
                운동
              </button>
              <button type='button' className='btn'>
                등산
              </button>
              <button type='button' className='btn'>
                음악
              </button>
              <button type='button' className='btn'>
                사진
              </button>
              <button type='button' className='btn'>
                기술
              </button>
              <button type='button' className='btn'>
                와인
              </button>
              <Link to={pathGenerator(PAGES.MEETING)} className='btn'>
                모두보기
              </Link>
            </div>
          </div>

          <div className='main_ctg_tab'>
            {/* 카테고리별 모임_아트 */}
            <div className='ctg_tab' id='tab0'>
              <div className='swiper ctg-swiper'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <picture className='img_area'>
                      <source srcSet={images.ctg_img01} media='screen and (min-width: 981px)' />
                      <img src={images.ctg_img01} alt='창의력을 깨우는 아트 워크숍' />
                    </picture>
                    <div className='txt_area'>
                      <h4 className='tit'>창의력을 깨우는 아트 워크숍</h4>
                      <p className='txt'>
                        <span>자유롭게 그림을 그리고, 서로의 작품을 공유하며 창의적인 에너지를 나누는 아트 워크숍.</span>
                        <span>초보자도 환영입니다!</span>
                      </p>
                      <p className='price'>40,000원</p>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <picture className='img_area'>
                      <source srcSet={images.ctg_img02} media='screen and (min-width: 981px)' />
                      <img src={images.ctg_img02} alt='창의력을 깨우는 아트 워크숍' />
                    </picture>
                    <div className='txt_area'>
                      <h4 className='tit'>창의력을 깨우는 아트 워크숍</h4>
                      <p className='txt'>
                        <span>자유롭게 그림을 그리고, 서로의 작품을 공유하며 창의적인 에너지를 나누는 아트 워크숍.</span>
                        <span>초보자도 환영입니다!</span>
                      </p>
                      <p className='price'>50,000원</p>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <picture className='img_area'>
                      <source srcSet={images.ctg_img03} media='screen and (min-width: 981px)' />
                      <img src={images.ctg_img03} alt='창의력을 깨우는 아트 워크숍' />
                    </picture>
                    <div className='txt_area'>
                      <h4 className='tit'>창의력을 깨우는 아트 워크숍</h4>
                      <p className='txt'>
                        <span>자유롭게 그림을 그리고, 서로의 작품을 공유하며 창의적인 에너지를 나누는 아트 워크숍.</span>
                        <span>초보자도 환영입니다!</span>
                      </p>
                      <p className='price'>60,000원</p>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <picture className='img_area'>
                      <source srcSet={images.ctg_img04} media='screen and (min-width: 981px)' />
                      <img src={images.ctg_img04} alt='창의력을 깨우는 아트 워크숍' />
                    </picture>
                    <div className='txt_area'>
                      <h4 className='tit'>창의력을 깨우는 아트 워크숍</h4>
                      <p className='txt'>
                        <span>자유롭게 그림을 그리고, 서로의 작품을 공유하며 창의적인 에너지를 나누는 아트 워크숍.</span>
                        <span>초보자도 환영입니다!</span>
                      </p>
                      <p className='price'>70,000원</p>
                    </div>
                  </div>
                </div>
                <div className='ctg_box'>
                  <div className='progress-box'>
                    <div className='swiper-pagination'></div>
                  </div>
                  <div className='swiper-button-prev'></div>
                  <div className='swiper-button-next'></div>
                </div>
              </div>
            </div>

            {/* 카테고리별 모임_독서 */}

            {/* 카테고리별 모임_쿠킹 */}
          </div>
        </section>
        {/* 카테고리별 모임 종료 */}

        {/* 메인 모임 영역 시작 */}
        <section className='main_meeting'>
          {/* 지금 핫한 모임 */}
          <div className='meeting_inner'>
            <h3 className='main_tit'>
              지금 <strong>핫</strong>한 모임<strong>.</strong>
            </h3>

            <div className='list_wrap swiper-container'>
              <ul className='swiper-wrapper'>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img01} alt='상품 이미지1' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                      <p className='txt'>
                        와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                      </p>
                      <p className='price'>70,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img02} alt='상품 이미지2' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>BUSAN</span>
                      </div>
                      <h4 className='tit'>리듬 속에 빠져들다, 음악 즉흥연주 모임</h4>
                      <p className='txt'>
                        다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.
                      </p>
                      <p className='price'>35,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img03} alt='상품 이미지3' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>CHUNCHEON</span>
                      </div>
                      <h4 className='tit'>빛으로 담는 순간, 포토그래피 클래스</h4>
                      <p className='txt'>
                        사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.
                      </p>
                      <p className='price'>45,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img04} alt='상품 이미지4' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>미식가들의 쿠킹 클래스</h4>
                      <p className='txt'>
                        새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.
                      </p>
                      <p className='price'>50,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img01} alt='상품 이미지1' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                      <p className='txt'>
                        와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                      </p>
                      <p className='price'>70,000원</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 방금 만들어진 새로운 모임 */}
          <div className='meeting_inner'>
            <h3 className='main_tit'>
              방금 만들어진 <strong>새로운</strong> 모임<strong>.</strong>
            </h3>

            <div className='list_wrap swiper-container'>
              <ul className='swiper-wrapper'>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img02} alt='상품 이미지2' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='new'>NEW</span>
                        <span className='location'>BUSAN</span>
                      </div>
                      <h4 className='tit'>리듬 속에 빠져들다, 음악 즉흥연주 모임</h4>
                      <p className='txt'>
                        다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.
                      </p>
                      <p className='price'>35,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img03} alt='상품 이미지3' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='new'>NEW</span>
                        <span className='location'>CHUNCHEON</span>
                      </div>
                      <h4 className='tit'>빛으로 담는 순간, 포토그래피 클래스</h4>
                      <p className='txt'>
                        사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.
                      </p>
                      <p className='price'>45,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img04} alt='상품 이미지4' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='new'>NEW</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>미식가들의 쿠킹 클래스</h4>
                      <p className='txt'>
                        새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.
                      </p>
                      <p className='price'>50,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img01} alt='상품 이미지1' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='new'>NEW</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                      <p className='txt'>
                        와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                      </p>
                      <p className='price'>70,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img02} alt='상품 이미지2' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='new'>NEW</span>
                        <span className='location'>BUSAN</span>
                      </div>
                      <h4 className='tit'>리듬 속에 빠져들다, 음악 즉흥연주 모임</h4>
                      <p className='txt'>
                        다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.
                      </p>
                      <p className='price'>35,000원</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 실시간 인기 모임 */}
          <div className='meeting_inner'>
            <h3 className='main_tit'>
              <strong>실시간</strong> 인기 모임<strong>.</strong>
            </h3>

            <div className='list_wrap swiper-container'>
              <ul className='swiper-wrapper'>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img03} alt='상품 이미지3' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>CHUNCHEON</span>
                      </div>
                      <h4 className='tit'>빛으로 담는 순간, 포토그래피 클래스</h4>
                      <p className='txt'>
                        사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.
                      </p>
                      <p className='price'>45,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img04} alt='상품 이미지4' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>미식가들의 쿠킹 클래스</h4>
                      <p className='txt'>
                        새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.
                      </p>
                      <p className='price'>50,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img01} alt='상품 이미지1' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>와인과 사람, 무제한 와인 파티</h4>
                      <p className='txt'>
                        와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.
                      </p>
                      <p className='price'>70,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img02} alt='상품 이미지2' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>BUSAN</span>
                      </div>
                      <h4 className='tit'>리듬 속에 빠져들다, 음악 즉흥��주 모임</h4>
                      <p className='txt'>
                        다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.
                      </p>
                      <p className='price'>35,000원</p>
                    </div>
                  </Link>
                </li>
                <li className='swiper-slide'>
                  <Link to={pathGenerator(PAGES.MEETING)} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img03} alt='상품 이미지3' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>CHUNCHEON</span>
                      </div>
                      <h4 className='tit'>빛으로 담는 순간, 포토그래피 클래스</h4>
                      <p className='txt'>
                        사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.
                      </p>
                      <p className='price'>45,000원</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- 메인 모임 영역 종료 --> */}

        {/* <!-- 모임 개설 안내 시작 --> */}
        <section className='main_visual02'>
          <div className='mv_inner'>
            <h3 className='mv_txt'>
              이외에 참여하고 싶은 모임이 있다면? <br />
              모임을 직접 개설하고, 새로운 만남을 시작하세요.
            </h3>
            <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn'>
              모임 직접 개설하기
            </Link>
          </div>
        </section>
        {/* <!-- 모임 개설 안내 종료 --> */}

        {/* <!-- 메인 하단 이미지 정보 영역 시작 --> */}
        <section className='main_info_wrap'>
          <div className='mi_inner'>
            <h3 className='main_tit'>
              <strong>무드</strong>를 선택하고, <strong>경험</strong>을 즐기세요<strong>.</strong>
            </h3>
            <div className='mi_img_area'>
              <div className='mi_img mii01'>
                <div className='mi_txt'>
                  <img src={images.info_txt01} alt='RELAXED' />
                </div>
                <div className='mi_bg'></div>
              </div>
              <div className='mi_img mii02'>
                <div className='mi_txt'>
                  <img src={images.info_txt02} alt='ENERGETIC' />
                </div>
                <div className='mi_bg'></div>
              </div>
              <div className='mi_img mii03'>
                <div className='mi_txt'>
                  <img src={images.info_txt03} alt='RELAXED' />
                  <p>상상에서 현실로, 창의의 순간.</p>
                </div>
                <div className='mi_bg'></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- 메인 하단 이미지 정보 영역 종료 --> */}
      </main>
      <Footer />
    </div>
  );
}

export default Main;
