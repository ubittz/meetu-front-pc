import { useState, useEffect, useCallback } from 'react';

import { formatTime } from '@@pages/Login/utils';

const useCertify = () => {
  const [isCertifySend, setIsCertifySend] = useState(false);
  const [certifyTime, setCertifyTime] = useState(300);
  const [isCertifyFill, setIsCertifyFill] = useState(false);
  const [isCertifyError, setIsCertifyError] = useState(false);
  const [certifyNumber, setCertifyNumber] = useState('');

  // 이메일 유효성 검사 함수
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 인증 번호 전송 핸들러
  const handleCertifySend = useCallback((email: string) => {
    if (!isValidEmail(email)) {
      setIsCertifyError(true);
      return false;
    }
    setIsCertifySend(true);
    setCertifyTime(300); // 인증번호 유효 시간 300초
    setIsCertifyError(false);
  }, []);

  // 인증 번호 입력 핸들러
  const handleCertifyNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCertifyNumber(value);
    setIsCertifyError(false);
  }, []);

  // 인증 번호 검증 핸들러
  const validateCertifyNumber = useCallback(
    (expectedNumber: string) => {
      if (certifyNumber !== expectedNumber) {
        setIsCertifyError(true);
        return false;
      }
      setIsCertifyError(false);
      return true;
    },
    [certifyNumber]
  );

  // 인증 번호 길이 체크
  useEffect(() => {
    setIsCertifyFill(certifyNumber.length === 6);
  }, [certifyNumber]);

  // 타이머 설정
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCertifySend && certifyTime > 0) {
      timer = setInterval(() => {
        setCertifyTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (certifyTime === 0) {
      setIsCertifySend(false); // 인증 시간이 만료되면 인증 전송 상태를 false로 설정
    }
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [isCertifySend, certifyTime]);

  const isIdFindable = useCallback(
    (name: string, email: string) => {
      return name.trim() !== '' && email.trim() !== '' && isCertifySend && isCertifyFill && !isCertifyError;
    },
    [isCertifySend, isCertifyFill, isCertifyError]
  );

  return {
    isCertifySend,
    formattedCertifyTime: formatTime(certifyTime),
    isCertifyFill,
    isCertifyError,
    handleCertifySend,
    handleCertifyNumberChange,
    validateCertifyNumber,
    isIdFindable,
  };
};

export { useCertify };
