import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import ResultPopup from '@@pages/MyPage/parts/ResultPopup';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

export default function HostAppApply() {
  return (
    <div id='wrap'>
      <Header />
      {/* <!-- container 영역 시작 --> */}
      <main className='container'>
        <div className='member_inner'>
          <h2>호스트 등록 신청</h2>
          <p className='caption'>
            <strong className='active'>호스트 등록 정보 입력</strong>
          </p>
          {/* <!-- 호스트 등록 신청 정보입력 form 영역 시작 --> */}
          <form action='#' method='post'>
            <fieldset>
              <legend>내 정보 수정 정보입력 영역</legend>
              <div className='join_wrap'>
                <h3 className='join_tit'>정보 입력</h3>
                {/* <!-- 정보입력 영역 시작 --> */}
                <div className='input_wrap'>
                  <div className='input_area input_btn'>
                    <label htmlFor='host_name'>
                      호스트명<strong className='required'>*</strong>
                    </label>
                    <input type='text' name='host_name' id='host_name' placeholder='호스트 닉네임을 적어주세요.' required />
                    <p className='txt_error'>호스트명을 입력해주세요.</p>
                    <button type='button' className='btn'>
                      중복체크
                    </button>
                  </div>
                  <div className='input_area'>
                    <label htmlFor='host_contact'>
                      연락처<strong className='required'>*</strong>
                    </label>
                    <input type='text' name='host_contact' id='host_contact' placeholder='‘-’없이 입력해주세요.' required />
                    <p className='txt_error'>연락처를 입력해주세요.</p>
                  </div>
                  <div className='input_area input_btn'>
                    <label htmlFor='host_mail'>
                      이메일<strong className='required'>*</strong>
                    </label>
                    <input type='text' name='host_mail' id='host_mail' placeholder='이메일 주소를 입력해주세요.' required />
                    <p className='txt_error'>이메일 주소를 입력해주세요.</p>
                    <button type='button' className='btn'>
                      중복체크
                    </button>
                  </div>

                  <div className='input_area'>
                    <label htmlFor='host_ctg'>
                      모임 카테고리<strong className='required'>*</strong>
                      <span>(최대 2개)</span>
                    </label>
                    <select name='host_ctg' id='host_ctg' required>
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
                    <select name='host_ctg02' id='host_ctg02'>
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
                  </div>

                  <div className='input_area'>
                    <label htmlFor='host_etc'>기타 문의 사항</label>
                    <input type='text' name='host_etc' id='host_etc' placeholder='기타 문의 사항을 적어주세요. (최대 100byte)' />
                  </div>
                  <div className='input_area'>
                    <label htmlFor='host_bank'>
                      정산은행<strong className='required'>*</strong>
                    </label>
                    <select name='host_bank' id='host_bank' required>
                      <option value='' selected disabled hidden>
                        선택하기
                      </option>
                      <option value=''>국민은행</option>
                      <option value=''>신한은행</option>
                      <option value=''>하나은행</option>
                      <option value=''>우리은행</option>
                      <option value=''>기업은행</option>
                      <option value=''>농협은행</option>
                      <option value=''>수협은행</option>
                      <option value=''>시티뱅크</option>
                      <option value=''>산업은행</option>
                      <option value=''>제주은행</option>
                      <option value=''>광주은행</option>
                      <option value=''>전북은행</option>
                      <option value=''>부산은행</option>
                    </select>
                    <p className='txt_error'>정산은행을 선택해주세요.</p>
                  </div>
                  <div className='input_area'>
                    <label htmlFor='host_number'>
                      정산 계좌번호<strong className='required'>*</strong>
                    </label>
                    <input type='text' name='host_number' id='host_number' placeholder='‘-’없이 입력해주세요.' required />
                  </div>
                </div>
                {/* <!-- //정보입력 영역 종료 --> */}

                <h3 className='join_tit'>개인정보 수집 및 이용동의 (필수)</h3>
                {/* <!-- 개인정보 수집 및 이용동의 시작 --> */}
                <div className='terms_wrap type_host'>
                  <div className='chk_area chkAll'>
                    <input type='checkbox' name='termsChk' id='termsChk' />
                    <label htmlFor='termsChk'>
                      동의합니다.
                      <span>
                        동의 대상 약관 : 이용약관(필수), 개인정보 수집 및 이용(필수), 개인정보 취급위탁(선택), <br />
                        마케팅 정보 활용(선택)
                      </span>
                    </label>
                  </div>
                  <p className='txt_area' style={{ display: 'block' }}>
                    제1조(목적) <br />
                    이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라
                    한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
                    &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」 <br /> <br />{' '}
                    <br />
                    제2조(정의) <br /> <br />
                    “몰” 이란 (주)휴테크산업 재화 또는 용역(이하 “재화”이라 함)을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화등을
                    거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                    <br />
                    “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                    <br />
                    ‘회원’이라 함은 “몰”에 개인정보를 제공하여 회원등록을 한 자로서, “몰”의 정보를 지속적으로 제공받으며, “몰”이 제공하는 서비스를
                    계속적으로 이용할 수 있는 자를 말합니다.
                    <br />
                    ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.
                  </p>
                </div>
                {/* <!-- 개인정보 수집 및 이용동의 시작 --> */}

                <div className='btn_area type_02'>
                  <Link to={pathGenerator(PAGES.MYPAGE)} className='btn form02'>
                    취소
                  </Link>
                  <button type='submit' className='btn'>
                    신청
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
          {/* <!-- 호스트 등록 신청 정보입력 form 영역 종료 --> */}
          {/* <!-- 호스트 등록 신청 결과 팝업 시작 --> */}
          <ResultPopup title='호스트 등록 신청' message='호스트 등록 신청이 완료되었습니다.' />
          {/* <!-- 호스트 등록 신청 결과 팝업 종료 --> */}
        </div>
      </main>
      {/* <!-- //container 영역 종료 --> */}
      <Footer />
    </div>
  );
}
