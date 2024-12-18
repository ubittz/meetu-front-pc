import { AuthState } from '@@stores/auth/types';
import { HomeState } from '@@stores/home/types';
import { MeetingState } from '@@stores/meeting/types';

export interface AppState {
  home: HomeState;
  meeting: MeetingState;
  auth: AuthState;
}
