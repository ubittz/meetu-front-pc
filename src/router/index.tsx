import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@@pages/Error';
import Login from '@@pages/Login';
import Main from '@@pages/Main';
import MeetingDetail from '@@pages/MeetingDetail';
import MeetingList from '@@pages/MeetingList';
import MeetingCreate from '@@pages/MettingCreate';
import Register from '@@pages/Register';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />
      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(PAGES.MAIN)} element={<Main />} />
      <Route path={pathGenerator(PAGES.MEETING)} element={<MeetingList />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/:id'} element={<MeetingDetail />} />
      <Route path={pathGenerator(PAGES.MEETING) + '/create'} element={<MeetingCreate />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
