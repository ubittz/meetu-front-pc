import { CATEGORY, MEETING_ORDER_TYPE } from '@@stores/meeting/constants';
import { asType } from '@@types/common';
import { PageQuery } from '@@utils/request/types';

export type Category = asType<typeof CATEGORY>;

export interface MeetingState {
  recentList: Meeting[];
}

export interface Meeting {
  meetingId: string;
  meetingName: string;
  meetingCategory: Category;
  meetingMainPlace: string;
  meetingDetailPlace: string;
  meetingCost: number;
  meetingLimit: number;
  meetingProcessDate: string;
  meetingIntro: string;
  meetingDescript: string;
  meetingProcessGuide: string;
  meetingItem: string;
}

export interface MeetingSingleResponse {
  id: string;
  hostId: string;
  name: string;
  hostName: string;
  address: string;
  processDate: string;
  cost: number;
  limit: number;
  intro: string;
  descript: string;
  category: Category;
  processGuide: string;
  item: string;
  guestCount: number;
  avgScore: number;
}

export interface ReviewListResponse {
  reviewNo: number;
  userId: string;
  reviewScore: number;
  reviewDescript: string;
  createDatetime: string;
  imageUrls: string[];
}

export interface ContactResponse {
  no: number;
  userId: string;
  descript: string;
  secretStatus: boolean;
  answerStatus: boolean;
  createDatetime: string;
}

export interface ReviewListQuery {
  page: number;
  id: string;
}

export interface ReviewAddDTO {
  meetingId: string;
  score: number;
  description: string;
  imageUrls: string[];
}

export interface ContactListQuery {
  page: number;
  id: string;
}

export interface ContactAddDTO {
  meetingId: string;
  description: string;
  secretStatus: boolean;
  contactAnswerStatus: boolean;
}

export type MeetingOrderType = asType<typeof MEETING_ORDER_TYPE>;

export interface MeetingListWithCategoryQuery extends PageQuery {
  category?: Category;
  orderType?: MeetingOrderType;
  isAsc?: boolean;
}
