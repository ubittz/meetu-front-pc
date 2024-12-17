import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function MeetingCreate() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='meeting_visual'>
          <div className='mv_inner'>
            <h2 className='title'>모임 개설하기</h2>
            <p>밋유에서 모임을 직접 개설하고, 새로운 만남을 시작하세요.</p>
          </div>
          <div className='visual_bg'></div>
        </section>
        {/* <!-- 배너 영역 종료 --> */}

        {/* <!-- 모임 개설 정보 입력 영역 시작 --> */}
        <section className='member_inner meeting'>
          {/* <!-- 모임 개설 정보입력 form 영역 시작 --> */}
          <form action='#' method='post'>
            <fieldset>
              <legend>계정찾기 정보입력 영역</legend>
              <div className='join_wrap type_srch'>
                <h3 className='join_tit'>
                  기본정보
                  <span className='caption'>
                    <strong className='required'>*</strong>표기는 필수 항목입니다.
                  </span>
                </h3>
                {/* <!-- 정보입력 영역 시작 --> */}
                <div className='input_wrap'>
                  <div className='input_area input_btn'>
                    <label htmlFor='mc_name'>
                      모임명<strong className='required'>*</strong>
                    </label>
                    <input type='text' name='mc_name' id='mc_name' placeholder='모임명을 입력해주세요.' className='error' required />
                    <p className='txt_error' style={{ display: 'block' }}>
                      모임명을 입력해주세요.
                    </p>
                    <button type='button' className='btn'>
                      중복체크
                    </button>
                  </div>
                  <div className='input_area'>
                    <label htmlFor='mc_category'>
                      카테고리<strong className='required'>*</strong>
                    </label>
                    <select name='mc_category' id='mc_category' required>
                      <option value='' selected disabled hidden>
                        선택하기
                      </option>
                      <option value=''>아트</option>
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
                    <p className='txt_error'>카테고리를 선택해주세요.</p>
                  </div>
                  <div className='input_area'>
                    <label htmlFor='mc_address'>모임 장소</label>
                    <button className='btn srch'>
                      <span>선택하기</span> {/* 주소 선택 후 span에 주소가 들어갑니다. */}
                    </button>
                    <input type='text' name='mc_address' id='mc_address' placeholder='상세주소를 입력해주세요.' />
                  </div>
                  <div className='input_area type_02'>
                    <label htmlFor='mc_cost'>
                      모임 참가비<strong className='required'>*</strong>
                    </label>
                    <input type='text' name='mc_cost' id='mc_cost' placeholder='숫자만 입력해주세요.' required />
                    <span className='txt'>원</span>
                    <p className='txt_error'>모임 참가비를 입력해주세요.</p>
                  </div>
                  <div className='input_area type_02'>
                    <label htmlFor='mc_number'>모임 정원</label>
                    <input type='text' name='mc_number' id='mc_number' placeholder='숫자만 입력해주세요.' />
                    <span className='txt'>명</span>
                  </div>
                  <div className='input_area type_date'>
                    <label htmlFor='mc_date'>
                      모임 진행일<strong className='required'>*</strong>
                    </label>
                    <input type='text' name='mc_date' id='mc_date' placeholder='날짜를 선택해주세요.' required />
                    <p className='txt_error'>모임 진행일을 선택해주세요.</p>
                  </div>
                  <div className='input_area'>
                    <label htmlFor='mc_intro'>모임 소개</label>
                    <input type='text' name='mc_intro' id='mc_intro' placeholder='모임 소개글을 적어주세요. (최대 100byte)' />
                  </div>
                  <div className='input_area'>
                    <label htmlFor='mc_intro'>모임 상세</label>
                    <div className='editor'>
                      <p style={{ width: '100%', border: '1px solid #ededed', height: '300px', padding: '20px' }}>에디터 영역입니다.</p>
                    </div>
                  </div>
                  <div className='input_area'>
                    <label htmlFor='mc_notice'>진행안내</label>
                    <input type='text' name='mc_notice' id='mc_notice' placeholder='진행안내글을 작성해주세요.' />
                  </div>
                  <div className='input_area'>
                    <label htmlFor='mc_notice02'>제공 / 준비물</label>
                    <input type='text' name='mc_notice02' id='mc_notice02' placeholder='제공 / 준비물을 작성해주세요.' />
                  </div>
                </div>
                {/* <!-- //정보입력 영역 종료 --> */}

                <div className='btn_area type_02'>
                  <Link to={pathGenerator(PAGES.MAIN)} className='btn form02'>
                    취소
                  </Link>
                  <button type='submit' className='btn' onClick={openPopup}>
                    모임등록
                  </button>
                </div>
              </div>
            </fieldset>
          </form>

          <Popup
            visible={isPopupOpen}
            onConfirmLeft={closePopup}
            onConfirmRight={() => navigate(pathGenerator(PAGES.MAIN))}
            confirmTextLeft='닫기'
            confirmTextRight='홈으로'
            title='모임 개설'
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>모임 개설 등록이 완료되었습니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MeetingCreate;
