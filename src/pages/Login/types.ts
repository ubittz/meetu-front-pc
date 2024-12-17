interface LoginForm {
  id: string;
  password: string;
}

interface FindIdFormValues {
  member_name: string;
  member_mail: string;
  certify_number: string;
}

interface FindPasswordFormValues {
  member_name: string;
  member_id: string;
  member_mail: string;
  certify_number: string;
}

interface ChangePasswordFormType {
  new_password: string;
  new_password_confirm: string;
}

export type { ChangePasswordFormType, FindIdFormValues, FindPasswordFormValues, LoginForm };
