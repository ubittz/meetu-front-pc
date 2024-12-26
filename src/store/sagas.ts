import { all, fork } from 'redux-saga/effects';

import authSaga from '@@stores/auth/saga';
import meetingSaga from '@@stores/meeting/saga';
import paymentSaga from '@@stores/payment/saga';
import userSaga from '@@stores/user/saga';

export function* rootSagas() {
  yield all([authSaga, meetingSaga, userSaga, paymentSaga].map((saga) => fork(saga)));
}
