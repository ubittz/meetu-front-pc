import { useState, useEffect, useCallback } from 'react';

import { EMAIL_REGEX, CERTIFICATION_TIME, CERTIFICATION_NUMBER_LENGTH } from '@@pages/Login/utils';

const useCertify = () => {
  const [state, setState] = useState({
    isCertifySend: false,
    certifyTime: 0,
    isCertifyFill: false,
    isCertifyError: false,
    certifyNumber: '',
  });

  const updateState = useCallback((newState: Partial<typeof state>) => {
    setState((prev) => ({ ...prev, ...newState }));
  }, []);

  const handleCertifySend = useCallback(
    (email: string) => {
      if (!EMAIL_REGEX.test(email)) {
        updateState({ isCertifyError: true });
        return false;
      }
      updateState({
        isCertifySend: true,
        certifyTime: CERTIFICATION_TIME,
        isCertifyError: false,
      });
      return true;
    },
    [updateState]
  );

  const handleCertifyNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, '');
      updateState({
        certifyNumber: value,
        isCertifyError: false,
      });
    },
    [updateState]
  );

  const validateCertifyNumber = useCallback(
    (expectedNumber: string) => {
      const isValid = state.certifyNumber === expectedNumber;
      updateState({ isCertifyError: !isValid });
      return isValid;
    },
    [state.certifyNumber, updateState]
  );

  const resetCertify = useCallback(() => {
    setState({
      isCertifySend: false,
      certifyTime: 0,
      isCertifyFill: false,
      isCertifyError: false,
      certifyNumber: '',
    });
  }, []);

  useEffect(() => {
    updateState({ isCertifyFill: state.certifyNumber.length === CERTIFICATION_NUMBER_LENGTH });
  }, [state.certifyNumber, updateState]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state.isCertifySend && state.certifyTime > 0) {
      timer = setInterval(() => {
        updateState({ certifyTime: state.certifyTime - 1 });
      }, 1000);
    } else if (state.certifyTime === 0) {
      updateState({ isCertifySend: false });
    }
    return () => clearInterval(timer);
  }, [state.isCertifySend, state.certifyTime, updateState]);

  return {
    ...state,
    handleCertifySend,
    handleCertifyNumberChange,
    validateCertifyNumber,
    resetCertify,
  };
};

const useChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const validatePassword = useCallback((password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    return passwordRegex.test(password);
  }, []);

  const handleNewPasswordChange = (password: string) => {
    setNewPassword(password);
    setIsPasswordValid(validatePassword(password));
    setIsPasswordMatch(password === newPasswordConfirm);
  };

  const handleNewPasswordConfirmChange = (confirmPassword: string) => {
    setNewPasswordConfirm(confirmPassword);
    setIsPasswordMatch(confirmPassword === newPassword);
  };

  const handleChangePassword = () => {
    if (isPasswordValid && isPasswordMatch) {
      // TODO: 비밀번호 변경 로직 구현
      setIsPopupVisible(true);
    } else {
      // TODO: 에러 처리 로직 구현
      alert('비밀번호가 유효하지 않거나 일치하지 않습니다.');
    }
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  return {
    newPassword,
    newPasswordConfirm,
    isPopupVisible,
    isPasswordValid,
    isPasswordMatch,
    handleNewPasswordChange,
    handleNewPasswordConfirmChange,
    handleChangePassword,
    handlePopupClose,
  };
};

export { useCertify, useChangePassword };
