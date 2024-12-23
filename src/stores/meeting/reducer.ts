import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ContactAddDTO, Meeting, MeetingAddDTO, MeetingState, ReviewAddDTO } from '@@stores/meeting/types';
import { getRecentMeeting, saveRecentMeeting } from '@@utils/localStorage';

const PREFIX = 'meeting';

const recentList = getRecentMeeting();

const initialState: MeetingState = {
  recentList: recentList,
};

export const createMeetingRequest = createAction<MeetingAddDTO>(`${PREFIX}/createMeetingRequest`);
export const createMeetingSuccess = createAction(`${PREFIX}/createMeetingSuccess`);
export const createMeetingFailure = createAction<string>(`${PREFIX}/createMeetingFailure`);

export const checkDuplicateMeetingNameRequest = createAction<string>(`${PREFIX}/checkDuplicateMeetingNameRequest`);
export const checkDuplicateMeetingNameSuccess = createAction(`${PREFIX}/checkDuplicateMeetingNameSuccess`);
export const checkDuplicateMeetingNameFailure = createAction<string>(`${PREFIX}/checkDuplicateMeetingNameFailure`);

export const createContactRequest = createAction<ContactAddDTO>(`${PREFIX}/createContactRequest`);
export const createContactSuccess = createAction(`${PREFIX}/createContactSuccess`);
export const createContactFailure = createAction<string>(`${PREFIX}/createContactFailure`);

export const createReviewRequest = createAction<ReviewAddDTO>(`${PREFIX}/createReviewRequest`);
export const createReviewSuccess = createAction(`${PREFIX}/createReviewSuccess`);
export const createReviewFailure = createAction<string>(`${PREFIX}/createReviewFailure`);

const meetingSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    appendRecentMeeting(state, { payload }: PayloadAction<Meeting>) {
      const filteredList = state.recentList.filter((recent) => recent.meetingId !== payload.meetingId);
      const newList = [payload].concat(filteredList).splice(0, 10);
      state.recentList = newList;
      saveRecentMeeting(JSON.stringify(newList));
    },
  },
});

export const { appendRecentMeeting } = meetingSlice.actions;

export default meetingSlice.reducer;
