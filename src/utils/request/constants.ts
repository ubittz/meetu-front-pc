export const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;

export const ENDPOINTS = {
  // 유저 & Auth
  USER: {
    BASE: `/user`,
    CHECK_ID: `/user/check-id`,
    CHECK_EMAIL: `/user/check-email`,
    REGISTER: `/user/register`,
    EDIT: `/user/edit`,
    GET_MY_INFO: `/user/get-my-info`,
    FIND_ID: `/user/find-id`,
  },
  // 모임
  MEETING: {
    BASE: `/meeting`,
    DETAILS: (id: string) => `/meeting/${id}`, // get
    MY_CONTENTS: `/meeting/my-contents`, // get
    LIST: `/meeting/list`, // get
    LIST_LAST_MONTH: `/meeting/list-last-month`, // get
    EDIT: `/meeting/edit`, // patch
    ADD: `/meeting/add`, // put
  },
  // 문의
  CONTACT: {
    BASE: `/meeting/contact`,
    LIST: `/meeting/contact/list`, // get
    ADD: `/meeting/contact/add`, // put
  },
  // 결제
  PAYMENT: {
    BASE: `/payment`,
    LIST: `/payment/list`, // get
    GET_REST_ID: `/payment/get-rest-id`, // get - bootpay 호출 시 던져줄 ID
    DETAIL: (id: string) => `/payment/detail/${id}`, // get
    ADD: `/payment/add`, // put - bootpay 요청 시 사용할 config
  },
};

export const ERROR_CODE = {
  USER_NOTFOUND: 'User_NotFound',
  PASSWORD_MISMATCH: 'Password_Mismatch',
  LOGIN_PARAM_EMPTY: 'Login_Param_Empty',
} as const;

export const ERROR_CODE_STRING = {
  [ERROR_CODE.USER_NOTFOUND]: '아이디가 존재하지 않습니다.',
  [ERROR_CODE.PASSWORD_MISMATCH]: '비밀번호가 틀렸습니다.',
  [ERROR_CODE.LOGIN_PARAM_EMPTY]: '아이디와 비밀번호를 확인해주세요.',
} as const;
