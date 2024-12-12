import { useState, useEffect, useCallback } from 'react';

import { EMAIL_REGEX, CERTIFICATION_TIME, CERTIFICATION_NUMBER_LENGTH } from '@@pages/Login/utils';

export const useCertify = () => {
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
