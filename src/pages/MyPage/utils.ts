import { UserEditRequestDTO } from '@@stores/auth/types';

import { EditMyInfoForm } from './types';

export const sanitizeEditForm = (form: EditMyInfoForm): UserEditRequestDTO => ({
  id: form.id,
  password: form.password,
  email: form.email,
  description: form.description,
});
