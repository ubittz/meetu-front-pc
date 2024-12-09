import images from '@@assets/images';
import Footer from '@@components/Footer';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function MeetingList() {
  return (
    <div id='wrap'>
      <header className='header'>
        {
          <div className='inner'>
            <div className='inner_l'>
              <h1 className='logo'>
                <a href={pathGenerator(PAGES.MAIN)}>meetu</a>
              </h1>
              <nav id='navi'>
                <ul>
                  <li>
                    <a href={pathGenerator(PAGES.MEETING)}>모임 탐색</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>호스트 소개</a>
                  </li>
                  <li>
                    <a href='javascript:void(0);'>공지사항</a>
                  </li>
                  <li className='active'>
                    <a href={pathGenerator(PAGES.MEETING) + '/create'}>모임 개설하기</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='inner_r'>
              <ul>
                <li className='logout'>
                  <a href='javascript:void(0);'>로그아웃</a>
                </li>
                <li className='mypage'>
                  <a href='javascript:void(0);'>마이페이지</a>
                </li>
              </ul>
            </div>
          </div>
        }
      </header>

      <main className='container'>
        <section className='meeting_visual'>
          <div className='mv_inner'>
            <div className='sel_area'>
              <select name='categorySelect' id='categorySelect'>
                <option value=''>전체</option>
                <option value='' selected>
                  아트
                </option>
                <option value=''>독서</option>
                <option value=''>쿠킹</option>
                <option value=''>사이클</option>
                <option value=''>운동</option>
                <option value=''>등산</option>
                <option value=''>음악</option>
                <option value=''>사진</option>
                <option value=''>기술</option>
                <option value=''>와인</option>
              </select>
            </div>
            <p>창의적인 에너지를 함께 나눠보세요.</p>
          </div>
          <div className='visual_bg'></div>
        </section>
        <section className='meeting_list'>
          <div className='ml_inner'>
            <div className='list_top'>
              <div className='sel_area'>
                <select name='categorySelect' id='categorySelect'>
                  <option value='' selected>
                    최신순으로 보기
                  </option>
                  <option value=''>밋유 추천순</option>
                  <option value=''>가격 높은순</option>
                  <option value=''>가격 낮은순</option>
                </select>
              </div>
            </div>
            <div className='list_wrap'>
              <ul>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img02} alt='상품 이미지2' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>리듬 속에 빠져들다, 음악 즉흥연주 모임</h4>
                      <p className='txt'>
                        다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.
                      </p>
                      <p className='price'>30,000원</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img03} alt='상품 이미지3' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>빛으로 담는 순간, 포토그래피 클래스</h4>
                      <p className='txt'>
                        사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.
                      </p>
                      <p className='price'>40,000원</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                      <p className='price'>55,000원</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                      <p className='price'>60,000원</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img02} alt='상품 이미지2' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>리듬 속에 빠져들다, 음악 즉흥연주 모임</h4>
                      <p className='txt'>
                        다양한 악기와 함께 즉흥적으로 연주하며 음악을 나누는 즐거움. 초보자부터 전문가까지 모두 함께 연주를 즐길 수 있습니다.
                      </p>
                      <p className='price'>40,000원</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
                    <div className='img_area'>
                      <img src={images.good_img03} alt='상품 이미지3' />
                    </div>
                    <div className='txt_area'>
                      <div className='sort'>
                        <span className='hot'>HOT</span>
                        <span className='location'>SEOUL</span>
                      </div>
                      <h4 className='tit'>빛으로 담는 순간, 포토그래피 클래스</h4>
                      <p className='txt'>
                        사진 찍는 법을 배우고, 함께 촬영하면서 포토그래피에 대한 이해도를 높여보세요. 이론과 실습이 함께 진행됩니다.
                      </p>
                      <p className='price'>50,000원</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={pathGenerator(PAGES.MEETING) + '/1'} className='list_link'>
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
                  </a>
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

export default MeetingList;
