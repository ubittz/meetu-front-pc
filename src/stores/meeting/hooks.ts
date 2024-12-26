import {
  ContactListQuery,
  ContactResponse,
  Meeting,
  MeetingByUserQuery,
  MeetingListWithCategoryQuery,
  MeetingSingleResponse,
  ReviewByUserIdQuery,
  ReviewListQuery,
  ReviewListResponse,
} from '@@stores/meeting/types';
import { ENDPOINTS } from '@@utils/request/constants';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useMeetingDetail = (id: string) => {
  const { data, isLoading } = useSWRDetail<MeetingSingleResponse>(ENDPOINTS.MEETING.DETAIL(id));

  return {
    data: data?.data,
    isLoading,
  };
};

export const useMeetingMyList = (query: MeetingByUserQuery) => {
  const data = useSWRList<MeetuPageResponse<Meeting>>(ENDPOINTS.MEETING.LIST_MY,{
    query,
  });

  return formatSWRListResponse(data);
};

export const useReviewList = (query: ReviewListQuery) => {
  const data = useSWRList<MeetuPageResponse<ReviewListResponse>>(ENDPOINTS.REVIEW.LIST, {
    query,
  });
  return formatSWRListResponse(data);
};

export const useContactList = (query: ContactListQuery) => {
  const data = useSWRList<MeetuPageResponse<ContactResponse>>(ENDPOINTS.CONTACT.LIST, {
    query,
  });

  return formatSWRListResponse(data);
};

export const useMeetingListByFilter = (query: MeetingListWithCategoryQuery) => {
  const data = useSWRList<MeetuPageResponse<Meeting>>(ENDPOINTS.MEETING.LIST, {
    query,
  });

  return formatSWRListResponse(data);
};

export const useMeetingListByLastMonth = () => {
  const data = useSWRList<MeetuPageResponse<Meeting>>(ENDPOINTS.MEETING.LIST_LAST_MONTH, {
    query: {
      page: 0,
    },
  });

  return formatSWRListResponse(data);
};

export const useReviewByUserId = (id: string, query: ReviewByUserIdQuery) => {
  const data = useSWRList<MeetuPageResponse<ReviewListResponse>>(`/api/meeting/review/list/${id}`, {
    query
  });
  
  return formatSWRListResponse(data);
}