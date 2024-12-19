import { put, takeLatest } from 'redux-saga/effects';

import { createContactFailure, createContactRequest, createContactSuccess } from '@@stores/meeting/reducer';
import { createReviewFailure, createReviewRequest, createReviewSuccess } from '@@stores/meeting/reducer';
import { authenticatedRequest } from '@@utils/request';
import { ENDPOINTS } from '@@utils/request/constants';
import { MeetuResponse } from '@@utils/request/types';

function* createContact({ payload }: ReturnType<typeof createContactRequest>) {
  try {
    const response: MeetuResponse<string> = yield authenticatedRequest.put(ENDPOINTS.CONTACT.ADD, {
      data: payload,
    });

    const action = response.ok ? createContactSuccess() : createContactFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(createContactFailure((e as Error).message));
  }
}

function* createReview({ payload }: ReturnType<typeof createReviewRequest>) {
  try {
    const response: MeetuResponse<number> = yield authenticatedRequest.put(ENDPOINTS.REVIEW.ADD, {
      data: payload,
    });

    const action = response.ok ? createReviewSuccess() : createReviewFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(createReviewFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(createContactRequest.type, createContact);
  yield takeLatest(createReviewRequest.type, createReview);
}
