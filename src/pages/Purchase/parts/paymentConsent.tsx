import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const PaymentConsent = () => {
  return (
    <div className='tw-mt-2 tw-bg-gray-50 tw-rounded-lg'>
      <div className='tw-h-[300px] tw-overflow-y-auto tw-p-4 tw-leading-5'>
        <Typography.SmallButton color={COLORS.GRAY_SCALE_300}>
          제 1 장 총칙 <br />제 1 조 (목적)
          <br />본 약관은 밋유 (이하 "회사"라 합니다)가 제공하는 직불전자지급수단의 발행 및 관리 서비스, 선불전자지급수단의 발행 및 관리서비스,
          전자지급결제대행서비스, 결제대금예치서비스 및 전자고지결제서비스(이하 통칭하여 "전자금융거래서비스"라 합니다)를 "회원"이 이용함에 있어,
          "회사"와 "회원" 간 권리, 의무 및 "회원"의 서비스 이용절차 등에 관한 사항을 규정하는 것을 그 목적으로 합니다. <br />
          <br />
          제 2 조 (정의) <br />
          1. ① 본 약관에서 정한 용어의 정의는 아래와 같습니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. 1. "전자금융거래"라 함은 "회사"가 "전자적 장치"를 통하여 전자금융업무를 제공하고, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"회원"이 "회사"의 종사자와 직접 대면하거나 의사소통을 하지 아니하고 자동화된 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;방식으로 이를 이용하는 거래를 말합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. 2. "전자지급거래"라함은 자금을 주는 자가 "회사"로 하여금 전자지급수단을 이용하여 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자금을 받는 자에게 자금을 이동하게 하는 "전자금융거래"를 말합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. 3. "전자적장치"라 함은 "전자금융거래"정보를 전자적 방법으로 전송하거나 처리하는 데 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용되는 장치로서 현금자동지급기, 자동입출금기, 지급용단말기, 컴퓨터, 전화기 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그 밖에 전자적 방법으로 정보를 전송하거나 처리하는 장치를 말합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4. 4. "접근매체"라 함은 "전자금융거래"에 있어서 "거래지시"를 하거나 이용자 및 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;거래내용의 진실성과 정확성을 확보하기 위하여 사용되는 수단 또는 정보로서 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"전자금융거래서비스"를 이용하기 위하여 "회사"에 등록된 아이디 및 비밀번호, 기타 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"회사"가 지정한 수단을 말합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;5. 5. "아이디"란 "회원"의 식별과 서비스 이용을 위하여 "회원"이 설정하고 "회사"가 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;승인한 숫자와 문자의 조합을 말합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;6. 6. "비밀번호"라 함은 "회원"의 동일성 식별과 "회원" 정보의 보호를 위하여 "회원"이 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;설정하고 "회사"가 승인한 숫자와 문자의 조합을 말합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp; 7. 7. "회원"이라 함은 본 약관에 동의하고 본 약관에 따라 "회사"가 제공하는 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"전자금융거래서비스"를 이용하는 자를 말합니다.
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;8. 8. "거래지시"라 함은 "회원"이 본 약관에 따라 "회사"에게 "전자금융거래"의 처리를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;지시하는 것을 말합니다.
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;9. 9. "오류"라 함은 "회원"의 고의 또는 과실 없이 "전자금융거래"가 본 약관 또는 "회원"의
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"거래지시"에 따라 이행되지 아니한 경우를 말합니다. <br />
          2. ② 본조 및 본 약관의 다른 조항에서 정의한 것을 제외하고는 전자금융거래법 등 관련 법령에 정한 바에 따릅니다.
          <br />
          <br />제 3 조 (약관의 명시 및 변경)
          <br />
          &nbsp;&nbsp;1. ① "회사"는 "회원"이 "전자금융거래"를 하기 전에 본 약관을 서비스 페이지에 게시하고 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;본
          약관의 중요한 내용을 확인할 수 있도록 합니다. <br />
          &nbsp;&nbsp;2. ② "회사"는 "회원"의 요청이 있는 경우 전자문서의 전송(전자우편을 이용한 전송을 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포함합니다)의 방식에 의하여 본 약관의 사본을 "회원"에게 교부합니다. <br />
          &nbsp;&nbsp;3. ③"회사"가 본 약관을 변경하는 때에는 그 시행일 1 월 전에 변경되는 약관을 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;금융거래정보 입력화면 또는 서비스 홈페이지에 게시함으로써 "회사"에게 공지합니다.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다만, 법령의 개정으로 인하여 긴급하게 약관을 변경한 때에는 변경된 약관을 서비스 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용 초기화면 등에1 개월 이상 게시하고 "회사"에게 사후 통지합니다.
          <br />
          &nbsp;&nbsp;4. ④ 이용자는 변경에 동의하지 아니한 경우 제 3 항의 고지나 통지를 받은 날로부터 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30 일 이내에 계약을 해지할 수 있으며, 계약해지의 의사표시를 하지 아니한 경우에는 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;변경에동의한 것으로 봅니다. <br />
          <br />
          제 4 조 (거래내용의 확인) <br />
          &nbsp;&nbsp;1. ① "회사"는 서비스 페이지의 "내 정보" 조회 화면을 통하여 "회원"의 거래내용("회원"의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"오류정정 요구사실 및 처리결과에 관한 사항"을 포함합니다)을 확인할 수 있도록 하며, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"회원"이 거래내용에 대해 서면교부를 요청하는 경우에는 요청을 받은 날로부터 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 주 이내에 모사전송, 우편 또는 직접 교부의 방법으로 거래내용에 관한 서면을 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;교부합니다. <br />
          &nbsp;&nbsp;2. ② "회사"는 제 1 항에 따른 "회원"의 거래내용 서면교부 요청을 받은 경우 전자적 장치의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;운영장애, 그 밖의 이유로 거래내용을 제공할 수 없는 때에는 즉시 "회원"에게 전자문서 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전송(전자우편을 이용한 전송을 포함합니다)의 방법으로 그러한 사유를 알려야 하며, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전자적 장치의 운영장애 등의 사유로 거래내용을 제공할 수 없는 기간은 제 1 항의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;거래내용에 관한 서면의 교부기간에 산입하지 아니합니다. <br />
          &nbsp;&nbsp;3. ③ 제 1 항의 대상이 되는 거래내용 중 대상기간이 5 년인 것은 다음 각호와 같습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. 1. 거래계좌의 명칭 또는 번호 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. 2. 전자금융거래의 종류 및 금액 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. 3. 전자금융거래상대방을 나타내는 정보 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4. 4. 전자금융거래일시 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;5. 5. "전자적 장치"의 종류 및 "전자적 장치"를 식별할 수 있는 정보 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;6. 6. "회사"가 "전자금융거래"의 대가로 받은 수수료 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;7. 7. "회원"의 출금 동의에 관한 사항 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;8. 8. 해당 "전자금융거래"와 관련한 "전자적 장치"의 접속기록 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;9. 9. "전자금융거래"의 신청 및 조건의 변경에 관한 사항 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;10. 10. 건당 거래금액이 1 만원을 초과하는 전자금융거래에 관한 기록 <br />
          <br />
          4. ④ 제 1 항의 대상이 되는 거래내용 중 대상기간이 1 년인 것은 다음 각호와 같습니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. 1. 전자지급수단 이용과 관련된 거래승인에 관한 기록 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. 2. "회원"의 오류정정 요구사실 및 처리결과에 관한 사항 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. 3. 기타 금융위원회가 고시로 정한 사항 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4. 4. 건당 거래금액이 1 만원 이하인 소액 전자금융거래에 관한 기록 <br />
          <br />
          5. ⑤ "회원"이 제 1 항에서 정한 서면교부를 요청하고자 할 경우 다음의 주소 및 전화번호로 <br /> &nbsp;&nbsp;&nbsp;&nbsp;요청할 수 있습니다.
          <br />
          <br />
          밋유 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. ① 주소 : 경기도 이천시 애련청로 67-39, 1024호 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. ② 이메일주소 : lunastarbeauty@naver.com
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. ③ 전화번호 : 010-7569-3507
          <br />
          <br />제 5 조 ("거래지시"의 철회 등) <br />
          "회원"이 "회사"의 "전자금융거래서비스"를 이용하여 전자지급거래를 한 경우, "회원"은 지급의 효력이 발생하기 전까지 본 약관에서 정한 바에 따라
          제 4 조 제 5 항에 기재된 연락처로 전자문서의 전송(전자우편을 이용한 전송을 포함합니다) 또는 서비스 페이지 내 철회에 의한 방법으로
          "거래지시"를 철회할 수 있습니다. 단, 각 서비스 별 "거래지시" 철회의 효력 발생시기는 본 약관 제 15 조, 제 20 조, 제 25 조, 제 32 조 및 제 36
          조에서 정한 바에 따릅니다. <br />
          <br />
          제 6 조 ("오류"의 정정 등) <br />
          &nbsp;&nbsp;1. ① "회원"은 "전자금융거래서비스"를 이용함에 있어 "오류"가 있음을 안 때에는 "회사"에 <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대해
          그 정정을 요구할 수 있으며, "회사"는 "회원"의 정정 신청이 있는 경우 이를 조사하여 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"오류"가 있는 경우 정정
          절차를 진행하고 정정요구를 받은 날로부터 2 주 이내에 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그 결과를 "회원"에게 알려 드립니다. <br />
          &nbsp;&nbsp;2. ② "회사"는 스스로 "전자금융거래"에 "오류"가 있음을 안 때에도 이를 즉시 조사하여 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;처리한 후 그 결과를 2 주 이내에 문서로 "회원"에게 알려 드립니다. 다만, "회원"의 주소가 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;분명하지 아니하거나 "회원"이 요청한 경우에는 전화 또는 전자우편 등의 방법으로 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알릴 수 있습니다.
          <br />
          <br />제 7 조 ("전자금융거래" 기록의 생성 및 보존) <br />
          &nbsp;&nbsp;1. ① "회사"는 "회원" 이용한 전자금융거래의 내용을 추적, 검색하거나 그 내용에 오류가 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;발생한 경우에 이를 확인하거나 정정할 수 있는 기록을 생성하여 보존합니다. <br />
          &nbsp;&nbsp;2. ② 제 1 항의 규정에 따라 회사가 보존하여야 하는 기록의 종류 및 보존방법은 제 4 조 제 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 항 및 제 4 항에서 정한 바에 따릅니다.
          <br />
          <br />제 8 조 ("전자금융거래"정보의 제공금지)
          <br />
          &nbsp;&nbsp;1. ① "회사"는 "전자금융거래서비스"를 제공함에 있어서 취득한 "회원"의 인적 사항, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"회원"의 계좌, "접근매체" 및 "전자금융거래"의 내용과 실적에 관한 정보 또는 자료를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;법령에 의하거나 "회원"의 동의를 얻지 아니하고 제 3 자에게 제공, 누설하거나 업무 상
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목적 외에 사용하지 아니합니다.
          <br />
          &nbsp;&nbsp;2. ② "회사"는 "회원"이 안전하게 "전자금융거래서비스"를 이용할 수 있도록 "회원"의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개인정보보호를 위하여 개인정보취급방침을 운용합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"회사"의 개인정보취급방침은 "회사"의 홈페이지 또는 서비스 페이지에 링크된 화면에서 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;확인할 수 있습니다.
          <br />
          <br />제 9 조 ("회사"의 책임)
          <br />
          &nbsp;&nbsp;1. ① "회사"는 "접근매체"의 위조나 변조로 발생한 사고(단, "회사"가 "접근매체"의 발급 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주체이거나 사용, 관리 주체인 경우), 계약체결 또는 "거래지시"의 전자적 전송이나 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;처리과정에서 발생한 사고로 인하여 "회원"에게 손해가 발생한 경우에는 그 손해를 배상할 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;책임을 부담합니다.
          <br />
          &nbsp;&nbsp;2. ② "회사"는 제 1 항에도 불구하고 다음 각호의 경우에는 그 책임의 전부 또는 일부를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"회원"이 부담하게 할 수 있습니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 1. "회원"이 "접근매체"를 제 3 자에게 대여하거나 그 사용을 위임한 경우 또는 양도나 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;담보의 목적으로 제공한 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 2. 제 3 자가 권한 없이 "회원"의 "접근매체"를 이용하여 "전자금융거래"를 할 수 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;있음을 알았거나 쉽게 알 수 있었음에도 불구하고 "접근매체"를
          누설하거나 노출 또는 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;방치한 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 3. 법인("중소기업기본법" 제 2 조 제 2 항에 의한 소기업을 제외합니다)인 "회원"에게 <br />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;손해가 발생한 경우로서 "회사"가 사고를 방지하기 위하여 보안절차를 수립하고
          이를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;철저히 준수하는 등 합리적으로 요구되는 충분한 주의의무를 다한 경우 <br />
          &nbsp;&nbsp;3. ③ "회사"는 전자금융거래를 위한 전자적 장치 또는 '정보통신망 이용촉진 및 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정보보호 등에 관한 법률' 제 2 조 제 1 항 제 1 호에 따른 정보통신망에 침입하여 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;거짓이나 그 밖의 부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고로 인하여 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용자에게 그 손해가 발생한 경우에는 그 손해를 배상할 책임이 있습니다.
          <br />
          &nbsp;&nbsp; 4. ④ "회사"는 컴퓨터 등 정보통신설비의 보수점검, 교체의 사유가 발생하여 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전자금융서비스의 제공을 일시적으로 중단할 경우에는 "회사"의 홈페이지 또는 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스 페이지를 통하여 이용자에게 중단 일정 및 중단 사유를 사전에 공지합니다.
          <br />
          <br />
          제 10 조 (분쟁처리 및 분쟁조정) <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. ① "회원"은 "회사"의 서비스 페이지 하단에 게시된 분쟁처리 담당자에 대하여 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"전자금융거래"와 관련한 의견 및 불만의 제기, 손해배상의 청구 등의 분쟁처리를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;요구할 수 있습니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. ② "회원"이 "회사"에 대하여 분쟁처리를 신청한 경우에는 "회사"는 15 일 이내에 이에 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대한 조사 또는 처리 결과를 "회원"에게 안내 합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. ③ "회원"은 "회사"의 분쟁처리결과에 대하여 이의가 있을 경우 "금융위원회의 설치 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;등에 관한 법률" 제 51 조의 규정에 따른 금융감독원의 금융분쟁조정위원회나 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"소비자기본법" 제 60 조 제 1 항의 규정에 따른 한국소비자원의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소비자분쟁조정위원회에 "회사"의 "전자금융거래서비스"의 이용과 관련한 분쟁조정을
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;신청할 수 있습니다.
          <br />
          <br />제 11 조 ("회사"의 안정성 확보 의무) <br />
          "회사"는 전자금융거래가 안전하게 처리될 수 있도록 선량한 관리자로서의 주의를 다하며, "전자금융거래"의 안정성과 신뢰성을 확보할 수 있도록
          "전자금융거래"의 종류 별로 전자적 전송이나 처리를 위한 인력, 시설, "전자적 장치" 등의 정보기술부문 및 전자금융업무에 관하여 금융위원회가
          정하는 기준을 준수합니다.
          <br />
          <br />제 12 조 (약관 외 준칙) <br />
          "회사"와 "회원" 사이에 개별적으로 합의한 사항이 이 약관에 정한 사항과 다를 때에는 그 합의사항을 이 약관에 우선하여 적용합니다. 본 약관에서
          정하지 아니한 사항(용어의 정의 포함)에 대하여는 전자금융거래법, 여신전문금융업법 등 소비자보호에 관한 법령 및 개별 약관에서 정한 바에
          따릅니다.
          <br />
          <br /> 제 13 조 (관할) <br />
          "회사"와 "회원" 간에 발생한 분쟁에 관한 관할은 민사소송법에서 정한 바에 따릅니다. <br />
          <br />
          제 2 장 전자지급결제대행 서비스
          <br />
          제 14조 (정의) 본 장에서 정하는 용어의 정의는 아래와 같습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. 1. "전자지급결제대행 서비스"라 함은 전자적 방법으로 재화 또는 용역(이하 이 약관에서 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"재화 등"이라고 합니다)의 구매에 있어서 지급결제 정보를 송신하거나 수신하는 것 또는
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그 대가의 정산을 대행하거나 매개하는 서비스를 말합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. 2. "회원"이라 함은 본 약관에 동의하고 "회사"가 제공하는 "전자지급결제대행 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스"를 이용하는 자를 말합니다. <br />
          <br />제 15 조 ("거래지시"의 철회) <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. ①"회원"이 "전자지급결제대행서비스"를 이용한 경우, 이용자는 "거래지시"된 금액의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정보에 대하여 수취인의 계좌가 개설되어 있는 금융기관 또는 "회사"의 계좌의 원장에의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;입금기록 또는 "전자적 장치"에의 입력이 끝나기 전까지 "거래지시"를 철회할 수 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;있습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. ② "회사"는 "회원"의 "거래지시"의 철회에 따라 지급거래가 이루어지지 않은 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수령한 자금을 "회원"에게 반환하여야 합니다. <br />
          <br />제 16 조 ("한도" 등)
          <br />
          "회사"의 정책 및 결제업체(이동통신사, 카드사 등)의 기준에 따라 "회원"의 결제수단 별 월 누적 결제액 및 결제한도가 제한될 수 있습니다. <br />
          <br />제 17 조 ("접근매체"의 관리) <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. ① "회사"는 "전자지급결제대행 서비스" 제공 시 "접근매체"를 선정하여 "회원"의 신원, <br />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;권한 및 "거래지시"의 내용 등을 확인합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp; 2. ② "회원"은 "접근매체"를 사용함에 있어서 다른 법률에 특별한 규정이 없는 한 다음 각 <br />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;호의 행위를 하여서는 아니 됩니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;1. 1. "접근매체"를 양도하거나 양수하는 행위 <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;2. 2. "접근매체"를 대여하거나 사용을 위임하는 행위 <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;3. 3. "접근매체"를 질권 기타 담보 목적으로 하는 행위 <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;4. 4. 1 호부터 3 호까지의 행위를 알선하는 행위
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. ③ "회원"은 자신의 "접근매체"를 제 3 자에게 누설 또는 노출하거나 방치하여서는 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;안되며, "접근매체"의 도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기울여야 합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4. ④ "회사"는 "회원"으로부터 "접근매체"의 분실이나 도난 등의 통지를 받은 때에는 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그 때부터 제 3 자가 그 "접근매체"를 사용함으로 인하여 "회원"에게 발생한 손해를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;배상할 책임이 있습니다.
          <br />
          <br />
          제 3 장 결제대금예치서비스
          <br />
          제 18 조 (정의) 본 장에서 사용하는 용어의 정의는 다음과 같습니다.
          <br />
          &nbsp;&nbsp;1. 1. "결제대금예치서비스"라 함은 서비스 페이지에서 이루어지는 선불식 통신판매에 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;있어서, "회사"가 "소비자"가 지급하는 결제 대금을 예치하고 배송이 완료되는 등 구매가
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;확정된 후 "재화 등"의 대금을 "판매자"에게 지급하는 서비스를 말합니다. <br />
          &nbsp;&nbsp;2. 2. "선불식 통신판매"라 함은 "소비자"가 "재화 등"을 공급받기 전에 미리 대금의 전부 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;또는 일부를 지급하는 방식의 통신판매를 말합니다. <br />
          &nbsp;&nbsp;3. 3. "판매자"라 함은 본 약관에 동의하고 "회사"가 운영하는 서비스에 입점하여 통신판매를 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;하는 자를 말합니다. <br />
          &nbsp;&nbsp;4. 4. "소비자"라 함은 본 약관에 동의하고 "회사"의 서비스에 입점한 "판매자"로부터 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"재화 등"을 구매하는 자로서 전자상거래 등에 서의 소비자보호에 관한 법률 제 2 조 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제 5 호의 요건에 해당하는 자를 말합니다. <br />
          &nbsp;&nbsp;5. 5. "이용자"라 함은 본 조 제 3 호 및 제 4 호의 "판매자"와 "소비자"를 말합니다. <br />
          <br />
          <br />제 19 조 (예치된 결제대금의 지급방법)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. ① "소비자"(그 "소비자"의 동의를 얻은 경우에는 "재화 등"을 공급받을 자를 포함한다. <br /> &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;이하 제 2 항 및 제 3 항에서 같습니다)는 "재화 등"을 공급받은 사실을 "재화 등"을 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;공급받은 날부터 3 영업일 이내에 "회사"에 통보하여야 합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. ② "회사"는 "소비자"로부터 "재화 등"을 공급받은 사실을 통보 받을 경우 "회사"가 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정한 기일 내에 판매자에게 결제대금을 지급합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. ③ "회사"는 "소비자"가 "재화 등"을 공급받은 날부터 3 영업일이 지나도록 정당한 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사유의 제시 없이 그 공급받은 사실을 "회사"에 통보하지 아니하는 경우에 "소비자"의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;동의 없이 "판매자"에게 결제대금을 지급할 수 있습니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4. ④ "회사"가 "판매자"에게 결제대금을 지급하기 전에 "소비자"가 그 결제대금을 환급 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;받을 정당한 사유가 발생한 경우에는 그 결제대금을 "소비자"에게 환급합니다. <br />
          <br />
          제 20 조 (거래지시의 철회)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. ① "이용자"가 "결제대금예치서비스"를 이용한 경우, "이용자"는 거래 지시된 금액의 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;정보가 수취인이 지정한 전자적 장치에 도달한 때까지 거래지시를 철회할 수 있습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. ② "회사"는 "소비자"로부터 "재화 등"을 공급받은 사실을 통보 받을 경우 "회사"가 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정한 기일 내에 판매자에게 결제대금을 지급합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. ③ "회사"는 "이용자"의 거래지시의 철회에 따라 지급거래가 이루어지지 않은 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수령한 자금을 "이용자"에게 반환하여야 합니다. 제 21 조 (준용규정) 제 17 조는 본 장에 <br />{' '}
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;준용합니다. <br />
          <br />
          제 4 장 선불전자지급수단의 발행 및 관리
          <br />
          제 22 조 (정의) 본 장에서 사용하는 용어의 정의는 다음과 같습니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. 1. "선불전자지급수단"이라 함은 포인트 등 "회사"가 발행 당시 미리 "회원"에게 공지한 <br /> &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;전자금융거래법 상 선불전자지급수단을 말합니다.
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;2. 2. "회원"이라 함은 본 약관에 동의하고 판매자로부터 "재화 등"을 구매하고 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;선불전자지급 수단을 결제수단으로 하여 그 대가를 지급하는 자를 말합니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp;3. 3. "판매자"라 함은 "선불전자지급수단"에 의한 거래에 있어서 "회원"에게 "재화 등"을 <br /> &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;판매하는 자를 말합니다. <br />
          <br />
          제 23 조 ("접근매체"의 관리) <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. ① 제 17 조는 본 장에 준용합니다. <br />
          <br />제 24 조 (환급 등) <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. ① "회원"은 보유 중인 "선불전자지급수단"의 환급을 "회사"에 요구할 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;환불수수료를 공제한 미상환 잔액에 대해 전액 환급받을 수 있습니다. 다만, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원”이 다른 “회원”으로부터 선물 받은 “선불전자지급수단”은 선물 받은 금액이나 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“회원”이 “회사”로부터 추가 적립혜택을 받고 충전한 금액의 경우[60]%이상
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(선물 받은 금액이 1 만원 이하인 경우[80%]이상)을 사용한 경우에 그 잔액 전액에 대해
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;환급받을 수 있으며,상품 구매나 이벤트 등을 통하여 "회사"로부터 무상 제공받은 <br />{' '}
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;선불전자지급수단"의 경우 환급 대상에서 제외됩니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp;2. ② 제 1 항에도 불구하고, 천재지변 등의 사유로 가맹점이 재화 또는 용역을 제공하기 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;곤란하여 선불전자지급수단을 사용하지 못하게 된 경우 또는 선불전자지급수단의 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;결함으로 가맹점이 재화 또는 용역을 제공하지 못하는 경우에는 선불전자지급수단에 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;기록된 잔액의 &nbsp;&nbsp;전부를 지급합니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;3. ③ "회원"은 "회사"에서 정한 기한 및 이용방법에 따라 "선불전자지급수단"을 <br /> &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;이용할 수 있으며, "회사"는 그 구체적 사항을 서비스 페이지를 통해 공지합니다. <br />
          <br />
          제 25 조 ("거래지시"의 철회) <br />
          "회원"이 "선불전자지급수단"을 이용하여 자금을 지급하는 경우, "회원"은 거래 지시된 금액의 정보가 수취인이 지정한 "전자적 장치"에 도달하기
          전까지 "거래지시"를 철회할 수 있습니다. <br />
          <br />
          제 26 조 ("선불전자지급수단"의 한도 등) <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. ① "회사"는 "선불전자지급수단"에 대해 실지명의 당 최고 200 만원을 그 보유 한도로 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;합니다. 단 보유 한도는 "회사"의 정책에 따라 감액될 수 있습니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp;2. ② 제 16 조는 본 장에 준용합니다 제 27 조 (유효기간) "선불전자지급수단"의 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;유효기간은 &nbsp;&nbsp;마지막 충전일 또는 사용일로부터 10 년이며, "회원"은 "회사"가 정한 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;유효기간 내에서만 "선불전자지급수단"을 사용할 수 있습니다. <br />
          <br />
          제 28 조 (기타) <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. ① "회사"는 신유형 상품권 표준약관 제 4 조의 표시사항을 좋은아이 서비스페이지, <br /> &nbsp;&nbsp;
          &nbsp;&nbsp;고객센터 등에 표시합니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp;2. ② "회사"는 선불전자지급수단의 지급보증 또는 피해보상보험계약 대신 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;전자금융거래법에서 정한 준비금을 적립하였습니다.
          <br />
          <br />제 28 조의 2 (착오송금에관한 사항) <br />
          &nbsp;&nbsp; &nbsp;&nbsp;1. ① 고객이 착오로 수취금융회사, 수취계좌번호 등을 잘못 기재하거나 입력하여 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;수취인에게 선불전자지급수단 등의 자금이 이동(이하 ‘착오송금’이라 합니다.)된 경우, <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;회사에 통지하여 회사 또는 수취 금융회사 등을 통해 수취인에게 연락하여 착오 송금액 <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;반환을 요청할 수 있습니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp;2. ② 회사는 수취인에 대한 연락 사실, 수취인의 반환의사 유무, 수취인이 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;반환의사가 없는 경우 그 사유 등 고객 요청사항에 대한 처리결과 또는 관련 처리 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;진행상황을 고객이 전항의 ‘착오송금’ 발생사실을 회사에 통지한 날로부터 15 일 이내에 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;고객에게 알려야 합니다.
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;3. ③ 회사 또는 수취 금융회사를 통한 착오송금 반환 요청에도 수취인이 반환하지 않는 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;경우, 고객은 ｢예금자보호법｣ 제 5 장(착오송금 반환지원)에 따라 예금보험공사에 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;착오송금 반환지원 제도 이용을 신청할 수 있습니다. 단, 연락처를 통한 송금, <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;SNS 회원간 송금 거래 등 예금보험공사가 수취인의 실지명의를 취득할 수 없는 거래는 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;반환지원 신청이 제한됩니다.
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;4. ④ 회사는 예금보험공사가 착오송금 반환지원 업무의 원활한 수행을 위해 회사에 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;착오송금 수취인의 반환불가 사유, 실지명의, 주소 및 연락처, 착오송금 발생 현황 등의 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;자료를 요청하는 경우 정당한 사유가 없으면 이에 따라야 합니다. <br />
          &nbsp;&nbsp; &nbsp;&nbsp;5. ⑤ 고객이 예금보험공사를 통해 착오송금 반환지원을 신청한 내역이 다음 각 호에 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;해당하는 경우 관련 법령에 따라 예금보험공사의 지원 절차가 중단될 수 있습니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;1. 1. 고객이 거짓이나 부정한 방법으로 반환지원을 신청한 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;2. 2. 착오송금이 아님이 객관적인 자료로 확인되는 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 3. 신청일 이전 반환 지원을 신청한 착오송금과 관련된 소송 등이 진행 중이거나 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;완료된 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;4. 4. 그 밖에 예금보험위원회가 인정하는 경우
          <br />
          <br />제 5 장 직불전자지급수단의 발행 및 관리 <br />
          제 29 조 (정의) <br />
          &nbsp;&nbsp;1. 1. "직불전자지급수단"이라 함은 이용자와 판매자 간에 전자적 방법에 따라 금융회사의 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;계좌에서 자금을 이체하는 등의 방법으로 “재화 등”의 제공과 그 대가의 지급을 동시에 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;이행할 수 있는 “회사”가 발행한 증표 또는 그 증표에 관한 정보를 말합니다. <br />
          &nbsp;&nbsp;2. 2. "회원"이라 함은 본 약관에 동의하고 판매자로부터 "재화 등"을 구매하고 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“직불전자지급수단”을 결제수단으로 하여 그 대가를 지급하는 자를 말합니다.
          <br />
          &nbsp;&nbsp;3. 3."판매자"라 함은 “직불전자지급수단"에 의한 거래에 있어서 "회원"에게 "재화 등"을 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;판매하는 자를 말합니다. <br />
          <br />
          제 30 조 ("접근매체"의 관리) <br />
          ① 제 17 조는 본 장에 준용합니다. 제 31 조 (직불 결제) <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. ① “회사”는 “회원”이 “판매자”에게 재화 등을 구매시 직불전자지급수단으로 결제할 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;경우, 이용 대금을 “회원”의 결제계좌에서 즉시 출금하여 결제하고 출금 사실을 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;“회원”의 결제계좌에 기록합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. ② “회원”이 지정계좌를 변경하고자 하는 경우 “회사”가 정한 방법으로 변경할 수 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;있습니다.
          <br />
          <br />제 32 조 (거래지시의 철회) <br />
          &nbsp;&nbsp;1. ① “회원”이 “직불전자지급수단”을 이용하여 자금을 지급하는 경우, “회원”은 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;“거래지시”된 금액의 정보가 수취인의 계좌가 개설되어 있는 금융회사 또는 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;전자금융업자의 “전자적 장치”에 입력이 끝나기 전까지 “거래지시”를 철회할 수 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;있습니다. <br />
          &nbsp;&nbsp; 2. ② “회사”는 “회원”의 “거래지시” 철회에 따라 지급거래가 이루어지지 않은 경우 <br /> &nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;수령한 자금을 “회원”에게 반환하여야 합니다. <br />
          <br />제 33 조(직불전자지급수단의 이용한도) <br />
          &nbsp;&nbsp;1. ① “회사”는 “회원”이 “직불전자지급수단”을 이용하여 재화 등을 구매할 수 있는 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최대이용한도(1 회, 1 일 이용한도 등)를 관련 법령 및 회사 정책에 따라 정할 수 있으며, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“회원”은 “회사”가 정한 그 이용한도 내에서만 “직불전자지급수단”을 사용할 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수 있습니다. <br />
          &nbsp;&nbsp;2. ② “회사”는 홈페이지 등을 통하여 전항의 최대이용 한도를 공지합니다.
          <br />
          <br />제 6 장 전자고지결제서비스 <br />
          제 34 조 (정의) 본 장에서 사용하는 용어의 정의는 다음과 같습니다. <br />
          &nbsp;&nbsp;1. 1. "전자고지결제서비스”라 함은, 수취인을 대행하여 “회원”이 수취인에게 지급하여야 할
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자금의 내역을 "청구서"등의 전자적인 방법으로 고지하고, 자금을 직접 수수하여 그 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정산을 대행하는 업무를 제공하는 시스템 및 서비스 일체를 말합니다. <br />
          <br />
          제 35 조 ("접근매체"의 관리)
          <br />① 제 17 조는 본 장에 준용합니다.
          <br />
          <br /> 제 36 조 ("거래지시"의 철회) <br />
          &nbsp;&nbsp;1. ① "회원"이 "전자고지결제서비스"를 이용한 경우, "회원"은 "거래지시"된 금액의 정보에 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대하여
          수취인의 계좌가 개설되어 있는 금융회사 또는 "회사"의 계좌의 원장에 입금기록이 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;끝나거나 "전자적 장치"에
          입력이 끝나기 전까지 "거래지시"를 철회할 수 있습니다.
          <br />
          &nbsp;&nbsp;2. ② "회사"는 "회원"의 "거래지시"의 철회에 따라 지급거래가 이루어지지 않은 경우 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수령한 자금을 "회원"에게 반환하여야 합니다. <br />
          <br />
          제 7 장 제휴 서비스 <br />
          제 37 조 (정의) 본 장에서 사용하는 용어의 정의는 다음과 같습니다. <br />
          &nbsp;&nbsp;1. 1. “제휴 금융회사”라 함은 “회사”와 제휴 계약을 체결한 은행, 신용카드회사, 증권회사, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보험회사, 상호저축은행 등 금융회사를 의미합니다.
          <br />
          &nbsp;&nbsp;2. 2. “제휴 서비스”라 함은 “회사”가 제공하는 “전자금융거래서비스” 등 기능과 연동된 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“제휴 금융회사”의 금융상품 또는 금융서비스를 의미합니다. <br />
          <br />
          제 38 조 (제휴 서비스의 이용 등) <br />
          1. ① “회사”는 “제휴 금융회사”와 사이에 체결한 제휴 계약의 내용에 따라 아래와 같은 기능을 제공할 수 있습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. 1. 전자금융거래서비스 연동 기능: “회사”의 “전자금융거래서비스”를 통해 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“제휴 서비스”를 편리하게 이용할 수 있는 기능 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. 2. ‘간편결제’ 연동 기능
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3. 3. 혜택 제공 기능: “회원”이 “제휴 서비스”를 사용하면서 “회사”가 제시하는 조건을 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;충족하는 경우 “회사”가 “회원”에게 선불전자지급수단 적립 등 혜택을 제공하는 기능 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4. 4. 기타 “제휴 금융회사”와의 제휴에 따라 제공하는 기능 <br />
          2. ② “회원”의 개별 “제휴 서비스”의 이용에 대해서는 “회사” 및 “제휴 금융회사”가 해당 서비스에 관하여 적용될 사항을 정한 약관(이하 “개별
          약관”이라고 합니다), 운영정책, 이용정책이 본 약관에 우선하여 적용됩니다. <br />
          3. ③ “회사”는 본 약관 및 “개별 약관”에 따라 계속적, 안정적으로 “제휴 서비스”를 제공할 의무가 있습니다. 다만, “제휴 금융회사”와의 계약 종료
          등과 같은 “회사”의 제반 사정 또는 법률상의 장애 등으로 유지할 수 없는 경우, “회원”에게 사전에 이를 공지한 후 “제휴 서비스”의 전부 또는
          일부를 제한·변경하거나 중지할 수 있습니다. <br />
          <br />
          [부칙] <br />
          &nbsp;&nbsp; - 공지 일자 : 2024년 12월 04일
          <br />
          &nbsp;&nbsp; - 적용 일자 : 2024년 12월 04일 <br />
          밋유 서비스와 관련하여 궁금하신 사항이 있으시면 고객센터(대표번호: 010-7569-3507)로 문의 주시기 바랍니다.
        </Typography.SmallButton>
      </div>
    </div>
  );
};

export default PaymentConsent;
