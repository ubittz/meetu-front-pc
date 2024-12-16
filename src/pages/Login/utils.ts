const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CERTIFICATION_TIME = 300;
const CERTIFICATION_NUMBER_LENGTH = 6;

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export { EMAIL_REGEX, CERTIFICATION_TIME, CERTIFICATION_NUMBER_LENGTH, formatTime };
