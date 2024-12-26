import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '@@pages/Main';
import MeetingList from '@@pages/Meeting';
import MeetingDetail from '@@pages/Meeting/Detail';
import Profile from '@@pages/Profile';
import InfoHostReview from '@@pages/Profile/InfoHostReview';
import { AUTH_ROUTES, PAGES, ROUTE_PREFIX, UNAUTH_ROUTES } from '@@router/constants';
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

      {(token ? AUTH_ROUTES : UNAUTH_ROUTES).map((props) => (
        <Route {...props} key={props.path} />
      ))}
    </Routes>
  );
}

export default Router;
