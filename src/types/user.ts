import { Meeting } from '@@types/meeting';

type UserType = 'host' | 'user';

interface User {
  id: string;
  type: UserType;
  name: string;
  birth: string;
  email: string;
  phone: string;
  profileImage?: string;
  userIntro?: string; // 이용자 소개글
  hostInfo?: HostInfo; // 호스트인 경우에만 있음
}

interface HostInfo {
  hostName?: string;
  hostIntro?: string; // 호스트 소개글
  hostProfileImage?: string;
  bankType?: string; // 정산은행
  bankAccount?: string; // 정산은행 계좌
  meetingList?: Meeting[]; // 운영 중인 모임 리스트
  meetingCount?: number; // 운영 중인 모임 수
}

export type { UserType, User };
