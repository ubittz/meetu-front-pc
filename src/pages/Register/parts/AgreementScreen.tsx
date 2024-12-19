import { useState } from 'react';

import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function AgreementScreen() {
  const [showTerms, setShowTerms] = useState<{
    [key: string]: boolean;
  }>({
    terms02: false,
    terms03: false,
    terms04: false,
    terms05: false,
  });

  const handleLinkClick = (term: string) => {
    setShowTerms((prevState) => ({
      ...prevState,
      [term]: !prevState[term],
    }));
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>회원가입</h2>
          <p className='caption'>
            <strong className='active'>01. 약관동의</strong>
            <strong>02. 정보입력</strong>
            <strong>03. 가입완료</strong>
          </p>
          {/* <!-- 회원가입 약관 form 영역 시작 --> */}
          <form action='#' method='post'>
            <fieldset>
              <legend>회원가입 약관 영역</legend>
              <div className='join_wrap'>
                <h3 className='join_tit'>약관 동의</h3>
                {/* <!-- 약관 영역 시작 --> */}
                <div className='terms_wrap'>
                  <div className='chk_area chkAll'>
                    <input type='checkbox' name='termsChkAll' id='termsChkAll' />
                    <label htmlFor='termsChkAll'>
                      모두 동의합니다.
                      <span>
                        동의 대상 약관 : 이용약관(필수), 개인정보 수집 및 이용(필수), 개인정보 취급위탁(선택), <br />
                        마케팅 정보 활용(선택)
                      </span>
                    </label>
                  </div>
                  <div className='chk_area'>
                    <input type='checkbox' name='termsChk' id='termsChk01' />
                    <label htmlFor='termsChk01'>만 14세 이상입니다. (필수)</label>
                  </div>
                  <div className='terms_sub_wrap'>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk02' />
                      <label htmlFor='termsChk02'>이용약관 동의(필수)</label>
                      <Link to='javascript:void(0)' className='btn'>
                        보기
                      </Link>
                      <p className='txt_area' style={{ display: 'block' }}>
                        제1조(목적) <br />
                        이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
                        “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br /> <br />
                        &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」 <br /> <br />{' '}
                        <br />
                        제2조(정의) <br /> <br />
                        “몰” 이란 (주)휴테크산업 재화 또는 용역(이하 “재화”이라 함)을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여
                        재화등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
                        <br />
                        “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                        <br />
                        ‘회원’이라 함은 “몰”에 개인정보를 제공하여 회원등록을 한 자로서, “몰”의 정보를 지속적으로 제공받으며, “몰”이 제공하는 서비스를
                        계속적으로 이용할 수 있는 자를 말합니다.
                        <br />
                        ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.
                      </p>
                    </div>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk03' />
                      <label htmlFor='termsChk03'>개인정보 수집 및 이용 (필수)</label>
                      <Link to='javascript:void(0)' className='btn' onClick={() => handleLinkClick('terms03')}>
                        보기
                      </Link>
                      {showTerms.terms03 && (
                        <p className='txt_area' style={{ display: 'block' }}>
                          (주)루나스타 (이하 ‘회사’라 함)은 이용자의 개인정보를 ‘개인정보보호법’ 등 관계 법령에 의거하여 안전하게 관리 및 보호하고
                          있습니다. <br /> <br /> 회사의 스토어 서비스(이하 ‘서비스’라 함)에서는 개인정보의 수집 및 이용 등 처리에 있어서 아래의
                          사항을 정보주체에게 안내하고 동의를 받습니다. 정보주체에게는 개인정보의 수집 및 이용을 거부할 권리가 있으나, 아래 개인정보
                          수집 관련 사항은 서비스 제공을 위한 최소한의 개인정보 수집으로서 본 동의를 거부하실 경우, 서비스 이용이 불가능합니다. <br />
                          <br />
                          1. 수집하는 개인정보 항목 <br />
                          밋유 스토어 회원 가입 방식에 따라 이용자로부터 아래와 같은 개인정보를 수집 및 이용하며, 서비스 제공을 위해 필요한 필수
                          개인정보만 수집하고 있습니다. <br />
                          &nbsp;&nbsp;- 밋유 아이디로 가입하기: 밋유 아이디, 밋유 회원정보의 이름, 이메일주소, 휴대전화번호 <br />
                          &nbsp;&nbsp;- 이메일 주소로 가입하기: 이메일주소(아이디), 비밀번호, 이름, 휴대전화번호 계정 생성 후, 밋유 <br />{' '}
                          &nbsp;&nbsp; &nbsp;스토어 판매회원 가입 시점에서 이용자가 선택하는 판매회원 종류에 따라 아래와 같은 개인정보를 &nbsp;&nbsp;
                          &nbsp;수집합니다.
                          <br />
                          <br />
                          계정 생성 후, 밋유 스토어 판매회원 가입 시점에서 이용자가 선택하는 판매회원 종류에 따라 아래와 같은 개인정보를 수집합니다.
                          <br />
                          <br />
                          [개인 판매회원] <br />
                          &nbsp;&nbsp;o 필수항목: 이름, DI(중복가입확인정보), CI(암호화된 동일인 식별정보), 성별, 국적, 생년월일, <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이메일주소, 휴대전화번호, 주소, 대표전화번호, 정산대금 입금 계좌정보(은행명, 예금주명, <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;계좌번호), 배송정보(출고지 및 반품/교환지의 주소 및 연락처), 미성년자의 경우 법정대리인 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정보 및 관련 증빙서류(법정대리인 동의서 사본(회원의 이름, 로그인 ID, 생년월일, 주소, 연락처,
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이메일/법정대리인의 이름, 생년월일, 주소, 연락처, 이메일), 가족관계증명서(또는 법정대리인{' '}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;증명서류) 사본, 법정대리인 인감증명서 사본, 특정상품 판매 시 관련업 신고증) <br />
                          <br />
                          [사업자 판매회원]
                          <br />
                          &nbsp;&nbsp;o 필수항목: 대표자 정보(이름, 성별, 국적, 생년월일, CI), 사업장 주소, 대표전화번호, 담당자 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정보(이메일 주소 또는 휴대전화번호), 배송정보(출고지 및 반품/교환지의 주소 및 연락처), <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정산대금 입금 계좌정보(은행명, 예금주명, 계좌번호), 증빙서류(사업자등록증, 통신판매업 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;신고증, 인감증명서, 통장 사본), 특정상품판매 시 관련업 신고증) <br />
                          <br />
                          [해외 사업자 판매회원]
                          <br />
                          &nbsp;&nbsp;o 필수항목: 대표자 정보(이름, 성별, 국적, 생년월일), 해외 사업장 주소, 대표전화번호, 담당자 <br />{' '}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정보(이메일 주소 또는 휴대전화번호), 배송정보(출고지 및 반품/교환지의 주소 및 연락처), <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정산대금 입금계좌정보(은행명, 예금주명, 계좌번호), 증빙서류(해외 사업자 등록증, 신분증 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사본, 통장(또는 해외계좌 인증 서류) 사본, 특정상품 판매 시 관련업 신고증)
                          <br />
                          &nbsp;&nbsp;o 선택항목: 국내 사업장 주소
                          <br />
                          <br />
                          [개인 창작자회원] <br />
                          &nbsp;&nbsp;o 필수항목: 이름, 이메일주소, 휴대전화번호, 주소, 대표전화번호, DI(중복가입확인정보), <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CI(암호화된 동일인 식별정보), 프로필 사진, 별명, SNS ID, 담당자 정보(휴대전화번호, 이메일
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주소), 정산대금 입금 계좌정보(은행명, 예금주명, 계좌번호) <br />
                          <br />
                          밋유 스토어는 특정 금융거래정보의 보고 및 이용 등에 관한 법률 5 조 2 항에 따른 자금세탁 방지 의무를 준수하기 위해 각
                          사업장의 신원확인 대상자에 대해 아래와 같은 개인정보를 수집합니다. <br />
                          <br />
                          [고객 확인제도 등록정보]
                          <br />
                          &nbsp;&nbsp;o 내국인 : 이름, 생년월일, 성별, CI, 계좌번호, 주소, (휴대)전화번호 <br />
                          &nbsp;&nbsp;o 외국인 : 이름, 생년월일, 성별, 여권번호, 국적,주소, (휴대)전화번호 <br />
                          &nbsp;&nbsp;o 법인 사업자 : 대표자 및 실소유자의 이름, 생년월일, 성별, 주소, 국적, (휴대)전화번호 <br />
                          <br />
                          [강화된 고객확인제도 등록정보]
                          <br />
                          &nbsp;&nbsp;o 주민등록번호 <br />
                          <br />
                          또한 서비스 이용 과정에서 서비스 이용기록, 접속로그, 쿠키, IP 주소, 기기정보 등이 생 성되어 저장될 수 있습니다.
                          <br />
                          <br />
                          2.개인정보 수집 및 이용목적 <br />
                          가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 <br />
                          &nbsp;&nbsp;o 컨텐츠 제공, 특정 맞춤 서비스 제공, 물품배송 또는 청구서 등 발송, 본인인증, 구매 및 요금 결제,
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;요금추심 <br />
                          나. 회원관리 <br />
                          &nbsp;&nbsp;o 회원제 서비스 제공, 개인식별, 밋유 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재, 가입의사 확인, 밋유 전자상거래/광고
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;등 비즈니스 플랫폼 서비스의 가입 및 가입횟수 제한, 만 14 세 미만 아동 개인정보 수집 시 법정
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대리인 동의여부 확인, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;민원처리, 고지사항 전달, 회원탈퇴 의사의 확인 다. 신규 서비스 개발 및 마케팅·광고에의 활용{' '}
                          <br />
                          &nbsp;&nbsp;o 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스의 유효성 확인, 이벤트 정보 및 참여기회 제공, 광고성 정보 제공, 접속빈도 파악, 회원의
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스이용에 대한 통계 <br />
                          <br />
                          3. 개인정보의 보유 및 이용기간
                          <br />
                          원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의
                          이유로 명시한 기간 동안 보존합니다. 관련 법령에 의해 일정기간 보관이 필요한 개인정보의 경우, 해당 법령의 규정에 따라
                          보관합니다.
                          <br />
                          <br />
                          [내부정책에 의한 정보보유 사유]
                          <br />
                          1. - 보유 정보: 아이디, CI(암호화된 동일인 식별정보), 여권번호/해외 거주 증명 <br/> &nbsp;&nbsp;&nbsp;&nbsp;ID 카드 번호 <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 보유 이유: 재가입 신청 방지 <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 보존 기간: 탈퇴 후 30 일간 보관 <br/>
                          2. - 보유정보 : 고객신원확인 대상자의 성명, 성별, 국적, 생년월일, CI, 주민등록번호,
                          여권번호, 거주지 주소, 연락처 <br/>
                          &nbsp;&nbsp;- 보존이유 : 특정금융거래정보의 보고 및 이용등에 관한 법률 제 5 조의 2 및 동법 시행령 <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제 10
                          조의 4 에 따라 수집 및 보유 <br/>
                          &nbsp;&nbsp;- 보유 기간 : 탈퇴 후 5 년간 보관 3. - 보유 정보: 개인 판매회원의 CI(암호화된 동일인 식별정보) <br/>
                          &nbsp;&nbsp;-보유 이유: 밋유 스토어 부정 이용 및 가입방지 
                          - 보존 기간: 3 년 그 밖의 사항은 (주)루나스타 &nbsp;&nbsp;&nbsp;&nbsp;Business Partner 개인정보
                          처리방침에 따릅니다.
                        </p>
                      )}
                    </div>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk04' />
                      <label htmlFor='termsChk04'>개인정보 취급위탁 (선택)</label>
                      <Link to='javascript:void(0)' className='btn' onClick={() => handleLinkClick('terms04')}>
                        보기
                      </Link>
                      {showTerms.terms04 && (
                        <p className='txt_area' style={{ display: 'block' }}>
                          제1조(목적) <br />
                          이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
                          “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br />{' '}
                          <br />
                          &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
                        </p>
                      )}
                    </div>
                    <div className='chk_area'>
                      <input type='checkbox' name='termsChk' id='termsChk05' />
                      <label htmlFor='termsChk05'>마케팅 정보 활용 (선택)</label>
                      <Link to='javascript:void(0)' className='btn' onClick={() => handleLinkClick('terms05')}>
                        보기
                      </Link>
                      {showTerms.terms05 && (
                        <p className='txt_area' style={{ display: 'block' }}>
                          제1조(목적) <br />
                          이 약관은 (주)휴테크산업(전자상거래 사업자)이 운영하는 휴테크(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
                          “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /> <br />{' '}
                          <br />
                          &nbsp;&nbsp;※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* <!-- //약관 영역 종료 -->  */}
                <div className='btn_area type_02'>
                  <Link to={pathGenerator(PAGES.LOGIN)} className='btn form02'>
                    이전
                  </Link>
                  <Link to={pathGenerator(PAGES.REGISTER) + '/1'} className='btn'>
                    다음
                  </Link>
                  {/* </button> */}
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AgreementScreen;
