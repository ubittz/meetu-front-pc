import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '@@pages/Main';
import MeetingList from '@@pages/Meeting';
import MeetingDetail from '@@pages/Meeting/Detail';
import Profile from '@@pages/Profile';
import InfoHostReview from '@@pages/Profile/InfoHostReview';
import AuthRouter from '@@router/AuthRouter';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import UnAuthRouter from '@@router/UnAuthRouter';
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

      <Route path={pathGenerator(PAGES.MAIN)} element={<Main />} />

      {/* 모임 */}
      <Route path={pathGenerator(PAGES.MEETING)} element={<MeetingList />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/:id'} element={<MeetingDetail />} />

      {/* Profile */}
      <Route path={pathGenerator(PAGES.PROFILE) + '/:id'} element={<Profile />} />
      <Route path={pathGenerator(PAGES.PROFILE) + '/:id/review'} element={<InfoHostReview />} />

      <Route path='*' element={token ? <AuthRouter /> : <UnAuthRouter />} />
    </Routes>
  );
}

export default Router;
