import * as Yup from 'yup';

const registerSchema = Yup.object({
  member_id: Yup.string()
    .required('아이디를 입력해주세요.')
    .matches(/^[a-zA-Z0-9]+$/, '영문과 숫자만 입력 가능합니다.')
    .min(5, '아이디는 최소 5자 이상 입력해주세요.'),
  member_pw: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 최대 20자까지 가능합니다.')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, '영문(대/소문자)과 숫자를 조합하여 입력해주세요.'),
  member_pw_re: Yup.string()
    .oneOf([Yup.ref('member_pw')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 확인해주세요.'),
  member_name: Yup.string().required('이름을 입력해주세요.'),
  member_birth: Yup.string().required('생년월일을 선택해주세요.'),
  genderChk: Yup.string().required('성별을 선택해주세요.'),
  member_contact: Yup.string()
    .required('전화번호를 입력해주세요.')
    .matches(/^[0-9]+$/, '숫자만 입력 가능합니다.')
    .min(10, '최소 10자리 이상 입력해주세요.')
    .max(11, '최대 11자리까지 입력 가능합니다.'),
  member_mail: Yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
});

const findIdSchema = Yup.object({
  member_name: Yup.string().required('이름을 입력해주세요.'),
  member_mail: Yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
  certify_number: Yup.string().when(['isCertifySend'], {
    is: (isCertifySend: boolean) => isCertifySend === true,
    then: (schema) => schema.required('인증번호를 입력해주세요.').matches(/^[0-9]{6}$/, '6자리 숫자를 입력해주세요.'),
  }),
});

const findPasswordSchema = Yup.object({
  member_name: Yup.string().required('이름을 입력해주세요.'),
  member_id: Yup.string().required('아이디를 입력해주세요.'),
  member_mail: Yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
  certify_number: Yup.string().when(['isCertifySend'], {
    is: (isCertifySend: boolean) => isCertifySend === true,
    then: (schema) => schema.required('인증번호를 입력해주세요.').matches(/^[0-9]{6}$/, '6자리 숫자를 입력해주세요.'),
  }),
});

const changePasswordSchema = Yup.object({
  new_password: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 최대 20자까지 가능합니다.')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, '영문(대/소문자)과 숫자를 조합하여 입력해주세요.'),
  new_password_confirm: Yup.string()
    .oneOf([Yup.ref('new_password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 확인해주세요.'),
});

export { registerSchema, findIdSchema, findPasswordSchema, changePasswordSchema };
