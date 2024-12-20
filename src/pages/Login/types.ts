interface LoginForm {
  id: string;
  password: string;
}

interface FindIdForm {
  email: string;
  authNumber: string;
}

interface VerifyIdentityForm {
  id: string;
  email: string;
  authNumber: string;
}

interface ResetPasswordForm {
  userId: string;
  password: string;
  passwordCheck: string;
  changeKey: string;
}

interface VerifyOTPForm {
  otp: string;
}

export type { FindIdForm, VerifyIdentityForm, ResetPasswordForm, LoginForm, VerifyOTPForm };
