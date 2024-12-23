import { createSlice, createAction } from '@reduxjs/toolkit';

import { UserState, HostAddDTO } from '@@stores/user/types';

const initialState: UserState = {};

const HOST_PREFIX = 'host';

export const createHostRequest = createAction<HostAddDTO>(`${HOST_PREFIX}/createHostRequest`);
export const createHostSuccess = createAction(`${HOST_PREFIX}/createHostSuccess`);
export const createHostFailure = createAction<string>(`${HOST_PREFIX}/createHostFailure`);

export const checkDuplicateHostNameRequest = createAction<string>(`${HOST_PREFIX}/checkDuplicateHostNameRequest`);
export const checkDuplicateHostNameSuccess = createAction(`${HOST_PREFIX}/checkDuplicateHostNameSuccess`);
export const checkDuplicateHostNameFailure = createAction<string>(`${HOST_PREFIX}/checkDuplicateHostNameFailure`);

export const checkDuplicateEmailRequest = createAction<string>(`${HOST_PREFIX}/checkDuplicateEmailRequest`);
export const checkDuplicateEmailSuccess = createAction(`${HOST_PREFIX}/checkDuplicateEmailSuccess`);
export const checkDuplicateEmailFailure = createAction<string>(`${HOST_PREFIX}/checkDuplicateEmailFailure`);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
