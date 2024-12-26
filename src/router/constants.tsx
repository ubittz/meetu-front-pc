import { RouteProps } from 'react-router-dom';

import Login from '@@pages/Login';
import ChangePassword from '@@pages/Login/part/ChangePassword';
import FindId from '@@pages/Login/part/FindId';
import FindPassword from '@@pages/Login/part/FindPassword';
import MeetingCreate from '@@pages/Meeting/Create';
import MeetingEdit from '@@pages/Meeting/Edit';
import MyPage from '@@pages/MyPage';
import ApplyHost from '@@pages/MyPage/ApplyHost';
import ApplyHostWrite from '@@pages/MyPage/ApplyHostWrite';
import EditMyInfo from '@@pages/MyPage/EditMyInfo';
import MyMeeting from '@@pages/MyPage/MyMeeting';
import OrderList from '@@pages/MyPage/OrderList';
import Purchase from '@@pages/Purchase';
import PurchaseComplete from '@@pages/Purchase/Complete';
import Register from '@@pages/Register';
import JoinComplete from '@@pages/Register/parts/JoinComplete';
import UserInfoInput from '@@pages/Register/parts/UserInfoInput';
import { pathGenerator } from '@@router/utils';

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

export const AUTH_ROUTES: RouteProps[] = [
  {
    path: pathGenerator(PAGES.MEETING) + '/create',
    element: <MeetingCreate />,
  },
  {
    path: pathGenerator(PAGES.MEETING) + '/edit/:id',
    element: <MeetingEdit />,
  },
  {
    path: pathGenerator(PAGES.PURCHASE + '/:id'),
    element: <Purchase />,
  },
  {
    path: pathGenerator(PAGES.PURCHASE) + '/complete',
    element: <PurchaseComplete />,
  },
  {
    path: pathGenerator(PAGES.MYPAGE),
    element: <MyPage />,
  },
  {
    path: pathGenerator(PAGES.MYPAGE) + '/edit',
    element: <EditMyInfo />,
  },
  {
    path: pathGenerator(PAGES.MYPAGE) + '/apply-host',
    element: <ApplyHost />,
  },
  {
    path: pathGenerator(PAGES.MYPAGE) + '/apply-host/write',
    element: <ApplyHostWrite />,
  },
  {
    path: pathGenerator(PAGES.MYPAGE) + '/order',
    element: <OrderList />,
  },
  {
    path: pathGenerator(PAGES.MYPAGE) + '/my-meeting',
    element: <MyMeeting />,
  },
];

export const UNAUTH_ROUTES: RouteProps[] = [
  {
    path: pathGenerator(PAGES.LOGIN),
    element: <Login />,
  },
  {
    path: pathGenerator(PAGES.LOGIN) + '/find/password',
    element: <FindPassword />,
  },
  {
    path: pathGenerator(PAGES.LOGIN) + '/find/id',
    element: <FindId />,
  },
  {
    path: pathGenerator(PAGES.LOGIN) + '/find/password/change',
    element: <ChangePassword />,
  },
  {
    path: pathGenerator(PAGES.REGISTER),
    element: <Register />,
  },
  {
    path: pathGenerator(PAGES.REGISTER) + '/:id',
    element: <UserInfoInput />,
  },
  {
    path: pathGenerator(PAGES.REGISTER) + '/complete',
    element: <JoinComplete />,
  },
];
