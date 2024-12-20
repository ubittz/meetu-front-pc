import { ResetPasswordForm } from '@@pages/Login/types';
import { ResetPasswordDTO } from '@@stores/auth/types';

const CERTIFICATION_TIME = 300;

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export { CERTIFICATION_TIME, formatTime };

export const sanitizeResetPasswordForm = (form: ResetPasswordForm): ResetPasswordDTO => ({
  userId: form.userId,
  password: form.password,
  changeKey: form.changeKey,
});
