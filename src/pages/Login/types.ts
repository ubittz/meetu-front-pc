import { FormikValues } from 'formik';

interface FindIdFormValues extends FormikValues {
  member_name: string;
  member_mail: string;
  certify_number: string;
}

interface FindPasswordFormValues extends FormikValues {
  member_name: string;
  member_id: string;
  member_mail: string;
  certify_number: string;
}

interface ChangePasswordFormType extends FormikValues {
  new_password: string;
  new_password_confirm: string;
}

export type { ChangePasswordFormType, FindIdFormValues, FindPasswordFormValues };
