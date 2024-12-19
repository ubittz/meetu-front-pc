export const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;

export const ENDPOINTS = {
  // 유저 & Auth
  USER: {
    BASE: `/api/user`,
    CHECK_ID: `/api/user/check-id`, // post
    CHECK_EMAIL: `/api/user/check-email`, // post
    REGISTER: `/api/user/register`, // put
    FIND_ID: `/api/user/find-id`, // post
    VERIFY_IDENTITY: `/api/user/verify-identity`, // post - 비밀번호 찾기 검증
    CHANGE_PASSWORD: `/api/user/change-password`, // patch
    PROFILE: (userId: string) => `/api/user/${userId}/profile`, // get
    EDIT: `/api/user/edit`, // patch
    GET_MY_INFO: `/api/user/get-my-info`, // post
  },

  // 호스트
  HOST: {
    BASE: `/api/host`,
    CHECK_NAME: `/api/host/check-name`, // post
    CHECK_EMAIL: `/api/host/check-email`, // post
    ADD: `/api/host/add`, // put
  },

  // 모임
  MEETING: {
    BASE: `/api/meeting`,
    LIST: `/api/meeting/list`, // get
    LIST_MY: `/api/meeting/list/user`, // get - 내 모임 조회
    LIST_LAST_MONTH: `/api/meeting/list-last-month`, // get
    DETAIL: (id: string) => `/api/meeting/detail/${id}`, // get
    ADD: `/api/meeting/add`, // put
    EDIT: `/api/meeting/edit`, // patch
    DELETE: (id: string) => `/api/meeting/delete/${id}`, // delete
  },

  // 리뷰
  REVIEW: {
    BASE: `/api/meeting/review`,
    LIST: `/api/meeting/review/list`, // get
    ADD: `/api/meeting/review/add`, // put
  },

  // 문의
  CONTACT: {
    BASE: `/api/meeting/contact`,
    LIST: `/api/meeting/contact/list`, // get
    ADD: `/api/meeting/contact/add`, // put
  },

  // 결제
  PAYMENT: {
    BASE: `/api/payment`,
    LIST: `/api/payment/list`, // get
    GET_REST_ID: `/api/payment/get-rest-id`, // get - bootpay 호출 시 던져줄 ID
    DETAIL: (id: string) => `/api/payment/detail/${id}`, // get
    ADD: `/api/payment/add`, // put - bootpay 요청 시 사용할 config
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
