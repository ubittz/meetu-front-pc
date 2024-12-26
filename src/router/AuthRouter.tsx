import { Navigate, Route, Routes } from 'react-router-dom';

import MeetingCreateEdit from '@@pages/Meeting/CreateEdit';
import MyPage from '@@pages/MyPage';
import ApplyHost from '@@pages/MyPage/ApplyHost';
import ApplyHostWrite from '@@pages/MyPage/ApplyHostWrite';
import EditMyInfo from '@@pages/MyPage/EditMyInfo';
import MyMeeting from '@@pages/MyPage/MyMeeting';
import OrderList from '@@pages/MyPage/OrderList';
import Purchase from '@@pages/Purchase';
import PurchaseComplete from '@@pages/Purchase/Complete';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function AuthRouter() {
  return (
    <Routes>
      <Route path={pathGenerator(PAGES.MEETING) + '/create'} element={<MeetingCreateEdit />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/edit/:id'} element={<MeetingCreateEdit />} />

      {/* 결제 */}
      <Route path={pathGenerator(PAGES.PURCHASE + '/:id')} element={<Purchase />} />
      <Route path={pathGenerator(PAGES.PURCHASE) + '/complete'} element={<PurchaseComplete />} />

      {/* 마이페이지 */}
      <Route path={pathGenerator(PAGES.MYPAGE)} element={<MyPage />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/edit'} element={<EditMyInfo />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/apply-host'} element={<ApplyHost />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/apply-host/write'} element={<ApplyHostWrite />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/order'} element={<OrderList />} />

      {/* :type에 host 혹은 user가 들어감 */}
      <Route path={pathGenerator(PAGES.MYPAGE) + '/my-meeting'} element={<MyMeeting />} />
      <Route path='*' element={<Navigate to={ROUTE_PREFIX} replace />} />
    </Routes>
  );
}

export default AuthRouter;
