import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '@@pages/Login';
import ChangePassword from '@@pages/Login/part/ChangePassword';
import FindId from '@@pages/Login/part/FindId';
import FindPassword from '@@pages/Login/part/FindPassword';
import Register from '@@pages/Register';
import JoinComplete from '@@pages/Register/parts/JoinComplete';
import UserInfoInput from '@@pages/Register/parts/UserInfoInput';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function UnAuthRouter() {
  return (
    <Routes>
      <Route path={pathGenerator(PAGES.LOGIN)} element={<Login />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/find/password'} element={<FindPassword />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/find/id'} element={<FindId />} />
      <Route path={pathGenerator(PAGES.LOGIN) + '/find/password/change'} element={<ChangePassword />} />

      <Route path={pathGenerator(PAGES.REGISTER)} element={<Register />} />
      <Route path={pathGenerator(PAGES.REGISTER) + '/:id'} element={<UserInfoInput />} />
      <Route path={pathGenerator(PAGES.REGISTER) + '/complete'} element={<JoinComplete />} />

      <Route path='*' element={<Navigate to={ROUTE_PREFIX} replace />} />
    </Routes>
  );
}

export default UnAuthRouter;
