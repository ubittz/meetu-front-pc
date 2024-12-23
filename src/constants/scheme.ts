import { boolean, object, ref, string } from 'yup';

export const loginSchema = object({
  id: string().required('아이디를 입력해주세요.'),
  password: string().required('비밀번호를 입력해주세요.'),
});

export const registerSchema = object({
  userId: string().required('아이디를 입력해주세요.'),
  username: string().required('이름을 입력해주세요'),
  password: string()
    .required('비밀번호를 입력해주세요.')
    .matches(new RegExp(/^[a-zA-Z0-9]{8,20}$/), { message: '비밀번호는 영문 대소문자 + 숫자 조합 8~20글자 입니다.' }),
  passwordCheck: string()
    .required('비밀번호를 확인해주세요.')
    .oneOf([ref('password')], '비밀번호가 일치하지 않습니다.'),
  birth: string()
    .required('생일을 입력해주세요.')
    .matches(new RegExp(/^\d{4}-\d{2}-\d{2}$/), { message: '생일을 정확히 입력해주세요.' }),
  gender: string().required('성별을 선택해주세요.').matches(new RegExp(/(T|F)/), { message: '성별을 선택해주세요.' }),
  tel: string()
    .required('전화번호를 입력해주세요.')
    .matches(/^0\d{9,10}$/, { message: '전화번호를 정확히 입력해주세요.' }),
  email: string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
  checkedId: boolean().isTrue('아이디 중복체크를 해주세요.'),
  checkedEmail: boolean().isTrue('이메일 중복체크를 해주세요.'),
});

export const editMyInfoSchema = object({
  name: string().required('이름을 입력해주세요.'),
  password: string().matches(new RegExp(/^[a-zA-Z0-9]{8,20}$/), { message: '비밀번호는 영문 대소문자 + 숫자 조합 8~20글자 입니다.' }),
  passwordCheck: string().oneOf([ref('password')], '비밀번호가 일치하지 않습니다.'),
  birth: string().matches(new RegExp(/^\d{4}-\d{2}-\d{2}$/), { message: '생일을 정확히 입력해주세요.' }),
  phone: string().matches(/^0\d{9,10}$/, { message: '전화번호를 정확히 입력해주세요.' }),
  email: string().matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
  checkedEmail: boolean().isTrue('이메일 중복체크를 해주세요.'),
});

export const paymentSchema = object({
  agree: boolean().isTrue(),
});

export const modifySchema = object({
  password: string().matches(new RegExp(/^[a-zA-Z0-9]{8,20}$/), { message: '비밀번호는 영문 대소문자 + 숫자 조합 8~20글자 입니다.' }),
  passwordCheck: string().oneOf([ref('password')], '비밀번호가 일치하지 않습니다.'),
  email: string().matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
  checkedEmail: boolean().when('email', ([email], schema) => {
    if (email) {
      return schema.isTrue('이메일 중복체크를 해주세요.');
    }
    return schema;
  }),
});

export const findIdSchema = object({
  email: string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
});

export const verifyIdentitySchema = object({
  id: string().required('아이디를 입력해주세요'),
  email: string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
});

export const resetPasswordSchema = object({
  userId: string().required('아이디를 입력해주세요.'),
  password: string()
    .required('비밀번호를 입력해주세요.')
    .matches(new RegExp(/^[a-zA-Z0-9]{8,20}$/), { message: '비밀번호는 영문 대소문자 + 숫자 조합 8~20글자 입니다.' }),
  passwordCheck: string()
    .oneOf([ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 확인해주세요.'),
});

export const verifyOTPSchema = object({
  otp: string().required('인증번호를 입력해주세요.'),
});

export const createContactSchema = object({
  meetingId: string().required(),
  description: string().required(),
});

export const createMeetingSchema = object({
  name: string().required('모임명을 입력해주세요.'),
  nameCheck: boolean().when('name', ([name], schema) => {
    if (name) {
      return schema.isTrue('모임명 중복체크를 해주세요.');
    }
    return schema;
  }),
  meetingCategory: string().required('카테고리를 선택해주세요.'),
  mainAddress: string(),
  detailAddress: string(),
  cost: string().required().matches(/^\d+$/, { message: '숫자만 입력해주세요.' }),
  limit: string().required('모임 정원을 입력해주세요.').matches(/^\d+$/, { message: '숫자만 입력해주세요.' }).min(1, '모임 정원을 입력해주세요.'),
  processDate: string()
    .required('모임 진행일을 입력해주세요.')
    .matches(new RegExp(/^\d{4}-\d{2}-\d{2}$/), { message: '날짜를 정확히 입력해주세요.' }),
  intro: string(),
  description: string(),
  processGuide: string(),
  item: string(),
  file: string().required('이미지 파일을 선택해주세요.'),
});

export const applyHostSchema = object({
  name: string().required('이름을 입력해주세요.'),
  nameCheck: boolean().when('name', ([name], schema) => {
    if (name) {
      return schema.isTrue('이름 중복체크를 해주세요.');
    }
    return schema;
  }),
  tel: string()
    .required('전화번호를 입력해주세요.')
    .matches(/^0\d{9,10}$/, { message: '전화번호를 정확히 입력해주세요.' }),
  email: string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, { message: '이메일을 정확히 입력해주세요.' }),
  emailCheck: boolean().when('email', ([email], schema) => {
    if (email) {
      return schema.isTrue('이메일 중복체크를 해주세요.');
    }
    return schema;
  }),
  category1: string().required('카테고리를 선택해주세요.'),
  category2: string(),
  question: string().max(3000, '3000자 이하로 입력해주세요.'),
  bank: string().required('은행을 선택해주세요.'),
  accNo: string().required('계좌번호를 입력해주세요.'),
});
