import { put, takeLatest } from 'redux-saga/effects';

import {
  createHostFailure,
  createHostRequest,
  createHostSuccess,
  checkDuplicateHostNameFailure,
  checkDuplicateHostNameRequest,
  checkDuplicateHostNameSuccess,
  checkDuplicateEmailFailure,
  checkDuplicateEmailRequest,
  checkDuplicateEmailSuccess,
} from '@@stores/user/reducer';
import { authenticatedRequest } from '@@utils/request';
import { ENDPOINTS } from '@@utils/request/constants';
import { MeetuResponse } from '@@utils/request/types';

function* createHost({ payload }: ReturnType<typeof createHostRequest>) {
  try {
    const response: MeetuResponse<string> = yield authenticatedRequest.put(ENDPOINTS.HOST.ADD, {
      data: payload,
    });

    const action = response.ok ? createHostSuccess() : createHostFailure('호스트 등록에 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(createHostFailure((e as Error).message));
  }
}

function* checkDuplicateHostName({ payload }: ReturnType<typeof checkDuplicateHostNameRequest>) {
  try {
    const response: MeetuResponse<boolean> = yield authenticatedRequest.post(ENDPOINTS.HOST.CHECK_NAME, {
      data: payload,
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    const action = response.ok ? checkDuplicateHostNameSuccess() : checkDuplicateHostNameFailure('이미 존재하는 호스트명 입니다.');

    yield put(action);
  } catch (e) {
    yield put(checkDuplicateHostNameFailure((e as Error).message));
  }
}

function* checkDuplicateEmail({ payload }: ReturnType<typeof checkDuplicateEmailRequest>) {
  try {
    const response: MeetuResponse<boolean> = yield authenticatedRequest.post(ENDPOINTS.HOST.CHECK_EMAIL, {
      data: payload,
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    const action = response.ok ? checkDuplicateEmailSuccess() : checkDuplicateEmailFailure('이미 존재하는 이메일 입니다.');

    yield put(action);
  } catch (e) {
    yield put(checkDuplicateEmailFailure((e as Error).message));
  }
}

export default function* userSaga() {
  yield takeLatest(createHostRequest.type, createHost);
  yield takeLatest(checkDuplicateHostNameRequest.type, checkDuplicateHostName);
  yield takeLatest(checkDuplicateEmailRequest.type, checkDuplicateEmail);
}
