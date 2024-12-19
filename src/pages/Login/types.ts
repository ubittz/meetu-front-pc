interface LoginForm {
  id: string;
  password: string;
}

interface FindIdForm {
  email: string;
}

interface VerifyIdentityForm {
  id: string;
  email: string;
}

interface ResetPasswordForm {
  userId: string;
  password: string;
  passwordCheck: string;
}

interface VerifyOTPForm {
  otp: string;
}

export type { FindIdForm, VerifyIdentityForm, ResetPasswordForm, LoginForm, VerifyOTPForm };
