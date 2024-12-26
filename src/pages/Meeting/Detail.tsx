import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import images from '@@assets/images';
import Footer from '@@components/Footer';
import FullLoading from '@@components/FullLoading/FullLoading';
import Header from '@@components/Header';
import { DefaultUserIcon } from '@@constants/icons';
import QnaList from '@@pages/Meeting/parts/QnaList';
import ReviewList from '@@pages/Meeting/parts/ReviewList';
import { formatCost, formatDate, getCategoryString, getDistrict } from '@@pages/Meeting/utils';
import UserInfoPopup from '@@pages/MyPage/parts/UserInfoPopup';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useUserProfile } from '@@stores/auth/hooks';
import { useMeetingDetail } from '@@stores/meeting/hooks';

const StyledDefaultUserIcon = styled(DefaultUserIcon)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function MeetingDetail() {
  const navigate = useNavigate();
  const authStore = useAppState((state) => state.auth);

  const [top, setTop] = useState(100);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { id } = useParams();
  const { data, isLoading } = useMeetingDetail(id ?? '');

  const { data: user, isLoading: isUserLoading } = useUserProfile(data?.hostId ?? '');

  const detailRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCheck = () =>{
    navigate(pathGenerator(PAGES.PURCHASE , `/${id}`))
  }
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    console.log('ID: ', authStore.me?.id);
    const handleScroll = () => {
      const newTop = scrollY > 100 ? window.scrollY : 100;
      setTop(Math.min(newTop, reviewRef.current?.offsetTop ?? 0));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [authStore.me?.id]);

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        {isLoading || isUserLoading ? (
          <FullLoading />
        ) : (
          <section className='meeting_view'>
            <div className='mv_inner'>
              {/* <!-- 모임 정보 영역 --> */}
              <div className='mv_content'>
                <div className='img_area'>
                  <img src={data?.intro} alt='모임 대표 이미지' />
                </div>

                <div className='mv_tab_area'>
                  <Link
                    to='#'
                    className='btn active'
                    onClick={(e) => {
                      e.preventDefault();
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
                    <p>{data?.descript}</p>
                  </div>
                  <div className='detail_txt'>
                    <h4>제공 / 준비물</h4>
                    <p>{data?.item}</p>
                  </div>
                </div>

                {/* <!-- 리뷰 --> */}
                <ReviewList ref={reviewRef} averageScore={data?.avgScore ?? 0} />
                {/* <!-- 문의 --> */}
                <QnaList ref={inquiryRef} />
              </div>

              {/* <!-- 모임 신청 영역 --> */}
              <div className='mv_app' style={{ top }}>
                <h3 className='title'>{data?.name}</h3>
                <div className='host_area'>
                  <div className='img_area'>{user?.imageUrl ? <img src={user?.imageUrl} /> : <StyledDefaultUserIcon />}</div>
                  <div className='info_area'>
                    <span className='name'>호스트</span>
                    <h4>{data?.hostName}</h4>
                    <div className='sort'>
                      <span className='hot'>HOT</span>
                      <span className='location'>{getDistrict(data?.mainPlace ?? '')}</span>
                    </div>
                  </div>
                </div>

                <ul className='info_list'>
                  <li>
                    <p className='tit'>주소</p>
                    <p className='txt'>{data?.address}</p>
                  </li>
                  <li>
                    <p className='tit'>진행일 </p>
                    <p className='txt'>{formatDate(data?.processDate ?? '')}</p>
                  </li>
                  <li>
                    <p className='tit'>모임설명</p>
                    <p className='txt'>{data?.descript}</p>
                  </li>
                  <li>
                    <p className='tit'>카테고리</p>
                    <p className='txt'>{data?.category ? `#${getCategoryString(data.category)}` : ''}</p>
                  </li>
                  <li className='price'>
                    <p className='tit'>판매가격</p>
                    <p className='txt'>{formatCost(data?.cost ?? 0)}원</p>
                  </li>
                </ul>
                {/* <!-- 2단 버튼 영역 --> */}
                {user?.userId !== authStore.me?.id && (
                  <div className='btn_area type_02'>
                    <button type='button' className='btn form02' onClick={openPopup}>
                      호스트 정보
                    </button>
                    <button type='button' className='btn' onClick={handleCheck}>
                      신청하기
                    </button>
                  </div>
                )}
                {/* <!-- 1단 버튼 영역 --> */}
                {user?.userId === authStore.me?.id && (
                  <div className='btn_area'>
                    <button type='button' className='btn' onClick={() => navigate(pathGenerator(`${PAGES.MEETING}/edit/${id}`))}>
                      수정하기
                    </button>
                  </div>
                )}
              </div>

              {/* <!-- 호스트 정보 팝업 시작 --> */}
              <UserInfoPopup user={user} visible={isPopupOpen} onCancel={closePopup} />
              {/* <!-- 호스트 정보 팝업 종료 --> */}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default MeetingDetail;
