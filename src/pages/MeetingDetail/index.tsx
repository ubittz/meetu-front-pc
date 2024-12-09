import { useState } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function MeetingDetail() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    console.log('openPopup');
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    console.log('closePopup');
    setIsPopupOpen(false);
  };

  return (
    <div id='wrap'>
      <header className='header'>
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
                  <Link to='javascript:void(0);'>호스트 소개</Link>
                </li>
                <li>
                  <Link to='javascript:void(0);'>공지사항</Link>
                </li>
                <li className='active'>
                  <Link to={pathGenerator(PAGES.MEETING) + '/create'}>모임 개설하기</Link>
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
      </header>
      <main className='container'>
        <section className='meeting_view'>
          <div className='mv_inner'>
            {/* <!-- 모임 정보 영역 --> */}
            <div className='mv_content'>
              <div className='img_area'>
                <img src={images.meeting_img01} alt='모임 대표 이미지' />
              </div>

              <div className='mv_tab_area'>
                <Link to='#' className='btn active'>
                  상세정보
                </Link>
                <Link to='#' className='btn'>
                  리뷰
                </Link>
                <Link to='#' className='btn'>
                  문의
                </Link>
              </div>
              {/* <!-- 상세정보 --> */}
              <div className='mv_detail'>
                <img src={images.meeting_img02} alt='상세정보 이미지' />
                <div className='detail_txt'>
                  <h4>상세정보</h4>
                  <p>
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다.
                  </p>
                </div>
                <div className='detail_txt'>
                  <h4>제공 / 준비물</h4>
                  <p>
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다. <br />
                    텍스트로 작성된 데이터가 노출됩니다.
                  </p>
                </div>
              </div>

              {/* <!-- 리뷰 --> */}
              <div className='mv_detail'>
                <div className='detail_top'>
                  <h4>
                    Meet new people 리뷰 <em>(9)</em>
                  </h4>
                  <div className='star_area'>
                    <span className='star' style={{ width: '100%' }}></span>
                  </div>
                </div>
                <div className='detail_list'>
                  <ul>
                    <li>
                      <div className='list_top'>
                        <div className='star_wrap'>
                          <strong>5.0</strong>
                          <div className='star_area'>
                            <span className='star' style={{ width: '100%' }}></span>
                          </div>
                        </div>
                        <p className='name'>kimj****</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p>
                          # 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#{' '}
                          <br />
                          리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#
                        </p>
                        <div className='img_area'>
                          <img src={images.meeting_img03} alt='리뷰 이미지' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <div className='star_wrap'>
                          <strong>4.5</strong>
                          <div className='star_area'>
                            <span className='star' style={{ width: '90%' }}></span>
                          </div>
                        </div>
                        <p className='name'>kimj****</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p>
                          # 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#{' '}
                          <br />
                          리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#
                        </p>
                        <div className='img_area'>
                          <img src={images.meeting_img03} alt='리뷰 이미지' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <div className='star_wrap'>
                          <strong>3.0</strong>
                          <div className='star_area'>
                            <span className='star' style={{ width: '60%' }}></span>
                          </div>
                        </div>
                        <p className='name'>kimj****</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p>
                          # 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#{' '}
                          <br />
                          리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#
                        </p>
                        <div className='img_area'>
                          <img src={images.meeting_img01} alt='리뷰 이미지' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <div className='star_wrap'>
                          <strong>5.0</strong>
                          <div className='star_area'>
                            <span className='star' style={{ width: '100%' }}></span>
                          </div>
                        </div>
                        <p className='name'>kimj****</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p>
                          # 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#{' '}
                          <br />
                          리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#
                        </p>
                        <div className='img_area'>
                          <img src={images.meeting_img02} alt='리뷰 이미지' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <div className='star_wrap'>
                          <strong>5.0</strong>
                          <div className='star_area'>
                            <span className='star' style={{ width: '100%' }}></span>
                          </div>
                        </div>
                        <p className='name'>kimj****</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p>
                          # 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#{' '}
                          <br />
                          리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용# 리뷰내용#
                        </p>
                        <div className='img_area'>
                          <img src={images.meeting_img03} alt='리뷰 이미지' />
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className='paging'>
                    <Link to='jascript: void(0);' className='btn on'>
                      1
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      2
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      3
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      4
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      5
                    </Link>
                    <span>...</span>
                    <Link to='jascript: void(0);' className='btn'>
                      7
                    </Link>
                  </div>
                </div>
              </div>

              {/* <!-- 문의 --> */}
              <div className='mv_detail'>
                <div className='detail_top'>
                  <h4>
                    Meet new people 문의 <em>(3)</em>
                  </h4>
                  <button className='btn'>문의글 작성하기</button>
                </div>
                <div className='detail_list'>
                  <ul>
                    <li>
                      <div className='list_top'>
                        <p className='answer complete'>답변 완료</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p className='answer lock'>비밀글 입니다.</p>
                        <p className='name'>kimj****</p>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <p className='answer'>답변 대기</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p className='answer'>문의사항 입니다.</p>
                        <p className='name'>kimj****</p>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <p className='answer complete'>답변 완료</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p className='answer lock'>비밀글 입니다.</p>
                        <p className='name'>kimj****</p>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <p className='answer complete'>답변 완료</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p className='answer lock'>비밀글 입니다.</p>
                        <p className='name'>kimj****</p>
                      </div>
                    </li>
                    <li>
                      <div className='list_top'>
                        <p className='answer complete'>답변 완료</p>
                        <p className='date'>2024. 09. 20</p>
                      </div>
                      <div className='list_content'>
                        <p className='answer lock'>비밀글 입니다.</p>
                        <p className='name'>kimj****</p>
                      </div>
                    </li>
                  </ul>
                  <div className='paging'>
                    <Link to='jascript: void(0);' className='btn'>
                      1
                    </Link>
                    <span>...</span>
                    <Link to='jascript: void(0);' className='btn on'>
                      4
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      5
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      6
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      7
                    </Link>
                    <Link to='jascript: void(0);' className='btn'>
                      8
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- 모임 신청 영역 --> */}
            <div className='mv_app'>
              <h3 className='title'>미식가들의 쿠킹 클래스</h3>
              <div className='host_area'>
                <div className='img_area'>
                  <img src={images.meeting_img04} alt='호스트 이미지' />
                </div>
                <div className='info_area'>
                  <span className='name'>호스트</span>
                  <h4>호스트명 또는 닉네임</h4>
                  <div className='sort'>
                    <span className='hot'>HOT</span>
                    <span className='location'>SEOUL</span>
                  </div>
                </div>
              </div>

              <ul className='info_list'>
                <li>
                  <p className='tit'>주소</p>
                  <p className='txt'>서울특별시 강남구 도산대로 17-8</p>
                </li>
                <li>
                  <p className='tit'>진행일 </p>
                  <p className='txt'>2024년 12월 26일</p>
                </li>
                <li>
                  <p className='tit'>모임설명</p>
                  <p className='txt'>
                    새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요.
                  </p>
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
              {/* <!-- 2단 버튼 영역 --> */}
              <div className='btn_area type_02'>
                <button type='button' className='btn form02' onClick={openPopup}>
                  호스트 정보
                </button>
                <button type='button' className='btn'>
                  신청하기
                </button>
              </div>
              {/* <!-- 1단 버튼 영역 --> */}
              <div className='btn_area'>
                <button type='button' className='btn'>
                  수정하기
                </button>
              </div>
            </div>

            {/* <!-- 호스트 정보 팝업 시작 --> */}
            {isPopupOpen && (
              <div className='popup_layer'>
                {/* <!-- 기본 숨김처리, 노출 시 style="display: block" 추가 --> */}
                <div className='popup_bg' onClick={closePopup}></div>
                <div className='popup_inner'>
                  <h3 className='popup_tit'>호스트 정보</h3>
                  <button className='btn close' onClick={closePopup}>
                    팝업 닫기
                  </button>
                  <div className='host_area'>
                    <div className='img_area'>
                      <img src={images.meeting_img04} alt='호스트 이미지' />
                    </div>
                    <div className='info_area'>
                      <h4>호스트명 또는 닉네임</h4>
                      <div className='infoBox'>
                        {/* TODO: 마이페이지 - info host 링크 추가 */}
                        <Link to='../mypage/InfoHost.html' className='ib'>
                          <p className='tit'>운영중인 모임</p>
                          <p className='txt'>
                            <strong>N</strong>
                            <span> 개</span>
                          </p>
                        </Link>
                        {/* TODO: 마이페이지 - info user 링크 추가 */}
                        <Link to='../mypage/InfoUser.html' className='ib'>
                          <p className='tit'>리뷰</p>
                          <p className='txt'>
                            <strong>N</strong>
                            <span> 건</span>
                          </p>
                        </Link>
                      </div>
                      <dl>
                        <dt>호스트 소개</dt>
                        <dd>
                          새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요. 최대
                          4줄까지 노출됩니다. 4줄 이상은 ...으로 대체됩니다.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <!-- 호스트 정보 팝업 종료 --> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MeetingDetail;
