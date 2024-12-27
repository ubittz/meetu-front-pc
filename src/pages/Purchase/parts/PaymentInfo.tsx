import { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { useMeetingDetail } from '@@stores/meeting/hooks';

import PaymentConsent from './paymentConsent';

interface Agreement {
  all: boolean;
  chk01: boolean;
}

interface PaymentInfoProps {
  onAgreeFinancialChange: (agreeFinancial: boolean) => void;
}

function PaymentInfo({ onAgreeFinancialChange }: PaymentInfoProps) {
  const [showTerms, setShowTerms] = useState(false);
  const { id } = useParams();
  const { data } = useMeetingDetail(id ?? '');
  const [agreement, setAgreement] = useState<Agreement>({
    all: false,
    chk01: false,
  });

  const handleLinkClick = () => {
    setShowTerms((prevState) => !prevState);
  };

  const handleCheckboxChange = (name: string, value: boolean) => {
    if (name === 'all') {
      setAgreement({
        all: value,
        chk01: value,
      });
      onAgreeFinancialChange(value); 
    } else {
      const updatedAgreement = {
        ...agreement,
        [name]: value,
      };
      updatedAgreement.all = updatedAgreement.chk01;
      setAgreement(updatedAgreement);
      onAgreeFinancialChange(updatedAgreement.all); 
    }
  };

  if (!data) return null;

  return (
    <div className='info_r'>
      <h3>결제 상세</h3>
      <div className='info_contents'>
        <div className='agree_area'>
          <div className='chk_area chkAll'>
            <input
              type='checkbox'
              name='agreeChkAll'
              id='agreeChkAll'
              checked={agreement.all}
              onChange={(e) => handleCheckboxChange('all', e.target.checked)}
            />
            <label htmlFor='agreeChkAll'>아래의 내용에 모두 동의합니다.</label>
          </div>
          <div className='chk_area'>
            <input
              type='checkbox'
              name='agreeChk01'
              id='agreeChk01'
              checked={agreement.chk01}
              onChange={(e) => handleCheckboxChange('chk01', e.target.checked)}
            />
            <label htmlFor='agreeChk01'>개인정보 수집 및 이용동의 (필수)</label>
            <Link to='javascript:void(0)' className='btn' onClick={handleLinkClick}>
              보기
            </Link>
            {showTerms && <PaymentConsent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
