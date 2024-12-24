import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@@pages/Error';
import Login from '@@pages/Login';
import ChangePassword from '@@pages/Login/part/ChangePassword';
import FindId from '@@pages/Login/part/FindId';
import FindPassword from '@@pages/Login/part/FindPassword';
import Main from '@@pages/Main';
import MeetingList from '@@pages/Meeting';
import MeetingCreateEdit from '@@pages/Meeting/CreateEdit';
import MeetingDetail from '@@pages/Meeting/Detail';
import MyPage from '@@pages/MyPage';
import ApplyHost from '@@pages/MyPage/ApplyHost';
import ApplyHostWrite from '@@pages/MyPage/ApplyHostWrite';
import EditMyInfo from '@@pages/MyPage/EditMyInfo';
import InfoHost from '@@pages/MyPage/InfoHost';
import InfoHostReview from '@@pages/MyPage/InfoHostReview';
import InfoUser from '@@pages/MyPage/InfoUser';
import MyMeeting from '@@pages/MyPage/MyMeeting';
import OrderList from '@@pages/MyPage/OrderList';
import Purchase from '@@pages/Purchase';
import PurchaseComplete from '@@pages/Purchase/Complete';
import Register from '@@pages/Register';
import JoinComplete from '@@pages/Register/parts/JoinComplete';
import UserInfoInput from '@@pages/Register/parts/UserInfoInput';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { fetchMeRequest } from '@@stores/auth/reducer';

function Router() {
  const dispatch = useDispatch();

  const { me, token } = useAppState((state) => state.auth);

  useEffect(() => {
    if (token && !me) {
      dispatch(fetchMeRequest());
    }
  }, [me, token, dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/find/password'} element={<FindPassword />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/find/id'} element={<FindId />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/find/password/change'} element={<ChangePassword />} />

      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(PAGES.REGISTER) + '/:id'} element={<UserInfoInput />} />
      <Route path={pathGenerator(PAGES.REGISTER) + '/complete'} element={<JoinComplete />} />

      <Route path={pathGenerator(PAGES.MAIN)} element={<Main />} />

      {/* 모임 */}
      <Route path={pathGenerator(PAGES.MEETING)} element={<MeetingList />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/:id'} element={<MeetingDetail />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/create'} element={<MeetingCreateEdit />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/edit/:id'} element={<MeetingCreateEdit />} />

      {/* 결제 */}
      <Route path={pathGenerator(PAGES.PURCHASE)} element={<Purchase />} />
      <Route path={pathGenerator(PAGES.PURCHASE) + '/complete'} element={<PurchaseComplete />} />
      {/* 마이페이지 */}
      <Route path={pathGenerator(PAGES.MYPAGE)} element={<MyPage />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/edit'} element={<EditMyInfo />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/apply-host'} element={<ApplyHost />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/apply-host/write'} element={<ApplyHostWrite />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/order'} element={<OrderList />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/info/user'} element={<InfoUser />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/info/host'} element={<InfoHost />} />
      {/* :type에 host 혹은 user가 들어감 */}
      <Route path={pathGenerator(PAGES.MYPAGE) + '/my-meeting'} element={<MyMeeting />} />
      <Route path={pathGenerator(PAGES.MYPAGE) + '/info/host-review'} element={<InfoHostReview />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
