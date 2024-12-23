import { all, fork } from 'redux-saga/effects';

import authSaga from '@@stores/auth/saga';
import meetingSaga from '@@stores/meeting/saga';
import userSaga from '@@stores/user/saga';
// import paymentSaga from '@@stores/payment/saga';

export function* rootSagas() {
  yield all([authSaga, meetingSaga, userSaga].map((saga) => fork(saga)));
}
