import { useState, useEffect, useCallback } from 'react';
import { CERTIFICATION_TIME, formatTime } from '@@pages/Login/utils';

interface CertifyState {
  isCertifySend: boolean;
  certifyTime: number;
  formattedTime: string;
}

const useCertify = () => {
  const [state, setState] = useState<CertifyState>({
    isCertifySend: false,
    certifyTime: 0,
    formattedTime: formatTime(0),
  });

  const startCertifyTimer = useCallback(() => {
    setState({
      isCertifySend: true,
      certifyTime: CERTIFICATION_TIME,
      formattedTime: formatTime(CERTIFICATION_TIME),
    });
  }, []);

  const resetCertify = useCallback(() => {
    setState({
      isCertifySend: false,
      certifyTime: 0,
      formattedTime: formatTime(0),
    });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (state.isCertifySend && state.certifyTime > 0) {
      timer = setInterval(() => {
        const newTime = state.certifyTime - 1;
        setState((prev) => ({
          ...prev,
          certifyTime: newTime,
          formattedTime: formatTime(newTime),
          isCertifySend: newTime > 0,
        }));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [state.isCertifySend, state.certifyTime]);

  return {
    isCertifySend: state.isCertifySend,
    formattedTime: state.formattedTime,
    startCertifyTimer,
    resetCertify,
  };
};

export { useCertify };
