import { put, takeLatest } from 'redux-saga/effects';

import {
  checkDuplicateMeetingNameFailure,
  checkDuplicateMeetingNameRequest,
  checkDuplicateMeetingNameSuccess,
  createContactFailure,
  createContactRequest,
  createContactSuccess,
  createMeetingFailure,
  createMeetingRequest,
  createMeetingSuccess,
  createReviewFailure,
  createReviewRequest,
  createReviewSuccess,
  deleteMeetingFailure,
  deleteMeetingRequest,
  deleteMeetingSuccess,
  editMeetingFailure,
  editMeetingRequest,
  editMeetingSuccess,
} from '@@stores/meeting/reducer';
import { authenticatedRequest } from '@@utils/request';
import { ENDPOINTS } from '@@utils/request/constants';
import { MeetuResponse } from '@@utils/request/types';
import { createBlobJSON } from '@@utils/request/utils';

function* createMeeting({ payload }: ReturnType<typeof createMeetingRequest>) {
  try {
    const formData = new FormData();
    const newMeeting = { ...payload.meeting };
    const meeting = createBlobJSON(JSON.stringify(newMeeting));

    console.log('파일', payload);
    formData.append('file', payload.file);
    formData.append('meeting', meeting);

    console.log(payload.meeting);

    const response: MeetuResponse<string> = yield authenticatedRequest.post(ENDPOINTS.MEETING.ADD, {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const action = response.ok ? createMeetingSuccess() : createMeetingFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(createMeetingFailure((e as Error).message));
  }
}

function* editMeeting({ payload }: ReturnType<typeof editMeetingRequest>) {
  try {
    const formData = new FormData();
    const newMeeting = { ...payload.meeting };
    const meeting = createBlobJSON(JSON.stringify(newMeeting));

    formData.append('file', payload.file);
    formData.append('meeting', meeting);

    console.log(payload.meeting);

    const response: MeetuResponse<string> = yield authenticatedRequest.post(ENDPOINTS.MEETING.EDIT, {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const action = response.ok ? editMeetingSuccess() : editMeetingFailure('등록된 회원이 없습니다.');

    yield put(action);
  } catch (e) {
    yield put(editMeetingFailure((e as Error).message));
  }
}

function* checkDuplicateMeetingName({ payload }: ReturnType<typeof checkDuplicateMeetingNameRequest>) {
  try {
    const response: MeetuResponse<string> = yield authenticatedRequest.get(ENDPOINTS.MEETING.CHECK_DUPLICATE_NAME, {
      params: {
        name: payload,
      },
    });

    const action = response.ok ? checkDuplicateMeetingNameSuccess() : checkDuplicateMeetingNameFailure('중복된 모임명입니다.');

    yield put(action);
  } catch (e) {
    yield put(checkDuplicateMeetingNameFailure((e as Error).message));
  }
}

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

function* deleteMeeting({ payload }: ReturnType<typeof deleteMeetingRequest>) {
  try {
    const response: MeetuResponse<string> = yield authenticatedRequest.delete(`/api/meeting/delete/${payload}`, {
      data: payload,
    });

    const action = response.ok ? deleteMeetingSuccess() : deleteMeetingFailure('모임 삭제를 실패했습니다.');

    yield put(action);
  } catch (e) {
    yield put(deleteMeetingFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(checkDuplicateMeetingNameRequest.type, checkDuplicateMeetingName);
  yield takeLatest(createMeetingRequest.type, createMeeting);
  yield takeLatest(editMeetingRequest.type, editMeeting);
  yield takeLatest(createContactRequest.type, createContact);
  yield takeLatest(createReviewRequest.type, createReview);
  yield takeLatest(deleteMeetingRequest.type, deleteMeeting);
}
