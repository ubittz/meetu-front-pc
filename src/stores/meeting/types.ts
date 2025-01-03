import { CATEGORY, MEETING_FILTER_TYPE, MEETING_ORDER_TYPE } from '@@stores/meeting/constants';
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
  imageUrl?: string;
}

export interface MeetingAddEditDTO {
  meeting: {
    id?: string;
    name: string;
    category: Category;
    mainAddress: string;
    detailAddress: string;
    cost: number;
    limit?: number;
    processDate: string;
    intro?: string;
    descript?: string;
    processGuide?: string;
    item?: string;
  };
  file?: string;
}

export interface MeetingSingleResponse {
  id: string;
  hostId: string;
  name: string;
  hostName: string;
  address: string;
  mainPlace: string;
  detailPlace: string;
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
  imageUrl: string;
}

export interface ReviewListResponse {
  reviewNo: number;
  userId: string;
  reviewScore: number;
  reviewDescript: string;
  createDatetime: string;
  imageUrls: string[];
  userImageUrl?: string;
  meetingName: string;
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

export type MeetingFilterType = asType<typeof MEETING_FILTER_TYPE>;

export interface MeetingListWithCategoryQuery extends PageQuery {
  category?: Category;
  orderType?: MeetingOrderType;
  isAsc?: boolean;
}

export interface MeetingByUserQuery {
  page: number;
  size?: number;
  userId?: string;
  filterType?: MeetingFilterType;
}

export interface ReviewByUserIdQuery {
  page: number;
}
