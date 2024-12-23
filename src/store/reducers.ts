import { combineReducers } from 'redux';

import auth from '@@stores/auth/reducer';
import home from '@@stores/home/reducer';
import meeting from '@@stores/meeting/reducer';
import myPage from '@@stores/user/reducer';

export const rootReducers = combineReducers({ auth, home, meeting, myPage });
