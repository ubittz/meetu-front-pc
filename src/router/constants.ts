export const ROUTE_PREFIX = import.meta.env.VITE_APP_ROUTE_PREFIX;

export const PAGES = {
  LOGIN: '/login',
  REGISTER: '/register',
  MAIN: '/',
  MEETING: '/meeting',
  PURCHASE: '/purchase',
  MYPAGE: '/mypage',
  PROFILE: '/profile',
} as const;
