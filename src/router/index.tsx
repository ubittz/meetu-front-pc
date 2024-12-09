import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@@pages/Error';
import Login from '@@pages/Login';
import IdSrch from '@@pages/Login/part/IdSrch';
import PWSrch from '@@pages/Login/part/PWSrch';
import PWSrch02 from '@@pages/Login/part/PWSrch02';
import Main from '@@pages/Main';
import MeetingCreate from '@@pages/MeetingCreate';
import MeetingDetail from '@@pages/MeetingDetail';
import MeetingList from '@@pages/MeetingList';
import MyPage from '@@pages/MyPage';
import MyMeetingUser from '@@pages/MyPage/MyMeetingUser';
import PaymentList from '@@pages/MyPage/PaymentList';
import Purchase from '@@pages/Purchase';
import PurchaseComplete from '@@pages/Purchase/Complete';
import Register from '@@pages/Register';
import Join02 from '@@pages/Register/parts/Join02';
import JoinComplete from '@@pages/Register/parts/JoinComplete';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/PWSrch'} element={<PWSrch />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/IdSrch'} element={<IdSrch />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/PWSrch02'} element={<PWSrch02 />} />

      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(PAGES.REGISTER) + '/:id'} element={<Join02 />} />
      <Route path={pathGenerator(PAGES.REGISTER) + '/complete'} element={<JoinComplete />} />

      <Route path={pathGenerator(PAGES.MAIN)} element={<Main />} />

      {/* 모임 */}
      <Route path={pathGenerator(PAGES.MEETING)} element={<MeetingList />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/:id'} element={<MeetingDetail />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/create'} element={<MeetingCreate />} />

      {/* 결제 */}
      <Route path={pathGenerator(PAGES.PURCHASE)} element={<Purchase />} />
      <Route path={pathGenerator(PAGES.PURCHASE) + '/complete'} element={<PurchaseComplete />} />
      {/* 마이페이지 */}
      <Route path={pathGenerator(PAGES.MYPAGE)} element={<MyPage />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/payment-list'} element={<PaymentList />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/my-meeting/user'} element={<MyMeetingUser />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
