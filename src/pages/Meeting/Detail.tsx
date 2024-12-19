import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import UserPopup from '@@components/Popup/UserPopup';
import QnaList from '@@pages/Meeting/parts/QnaList';
import ReviewList from '@@pages/Meeting/parts/ReviewList';
import InfoPopup from '@@pages/MyPage/parts/InfoPopup';
import { UserType } from '@@types/user';

import { getDummyQnaList, getDummyReviewList } from './dummys';

function MeetingDetail() {
  // TODO: - dummy data 교체
  const reviews = getDummyReviewList();
  const qnaList = getDummyQnaList();
  const type: UserType = 'host';

  const [currentReviewPage, setCurrentReviewPage] = useState(1); // 현재 페이지 상태 추가
  const [currentQnaPage, setCurrentQnaPage] = useState(1); // 현재 페이지 상태 추가
  const [top, setTop] = useState(100); // 초기 top 값 설정
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const totalReviewPages = 7; // 총 review 페이지 수 (예시로 설정)
  const totalQnaPages = 7; // 총 qna 페이지 수 (예시로 설정)

  const detailRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);

  const handleReviewPageChange = (page: number) => {
    setCurrentReviewPage(page); // 페이지 변경 핸들러
  };

  const handleQnaPageChange = (page: number) => {
    setCurrentQnaPage(page); // 페이지 변경 핸들러
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const newTop = scrollY > 100 ? window.scrollY : 100;
      setTop(Math.min(newTop, 4200));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='meeting_view'>
          <div className='mv_inner'>
            {/* <!-- 모임 정보 영역 --> */}
            <div className='mv_content'>
              <div className='img_area'>
                <img src={images.meeting_img01} alt='모임 대표 이미지' />
              </div>

              <div className='mv_tab_area'>
                <Link
                  to='#'
                  className='btn active'
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('상세정보 버튼 클릭됨'); // 로그 추가
                    scrollToSection(detailRef);
                  }}
                >
                  상세정보
                </Link>
                <Link
                  to='#'
                  className='btn'
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('리뷰 버튼 클릭됨'); // 로그 추가
                    scrollToSection(reviewRef);
                  }}
                >
                  리뷰
                </Link>
                <Link
                  to='#'
                  className='btn'
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('문의 버튼 클릭됨'); // 로그 추가
                    scrollToSection(inquiryRef);
                  }}
                >
                  문의
                </Link>
              </div>
              {/* <!-- 상세정보 --> */}
              <div ref={detailRef} className='mv_detail'>
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
              <ReviewList
                ref={reviewRef}
                reviews={reviews}
                currentPage={currentReviewPage}
                totalPages={totalReviewPages}
                onPageChange={handleReviewPageChange}
              />
              {/* <!-- 문의 --> */}
              <QnaList
                ref={inquiryRef}
                qnaList={qnaList}
                currentPage={currentQnaPage}
                totalPages={totalQnaPages}
                onPageChange={handleQnaPageChange}
              />
            </div>

            {/* <!-- 모임 신청 영역 --> */}
            <div className='mv_app' style={{ top }}>
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
              <UserPopup visible={isPopupOpen} title='프로필' onCancel={closePopup} img={images.meeting_img04}>
                <InfoPopup type={type} />
              </UserPopup>
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
