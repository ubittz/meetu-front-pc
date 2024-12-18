import {
  ContactListQuery,
  ContactResponse,
  Meeting,
  MeetingListWithCategoryQuery,
  MeetingSingleResponse,
  ReviewListQuery,
  ReviewListResponse,
} from '@@stores/meeting/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const useMeetingDetail = (id: string) => {
  const { data, isLoading } = useSWRDetail<MeetingSingleResponse>(`/api/meeting/${id}`);

  return {
    data: data?.data,
    isLoading,
  };
};

export const useMeetingMyList = () => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/my-contents');

  return formatSWRListResponse(data);
};

export const useReviewList = (query: ReviewListQuery) => {
  const data = useSWRList<MeetuPageResponse<ReviewListResponse>>('/api/meeting/review/list', {
    query,
  });

  return formatSWRListResponse(data);
};

export const useContactList = (query: ContactListQuery) => {
  const data = useSWRList<MeetuPageResponse<ContactResponse>>('/api/meeting/contact/list', {
    query,
  });

  return formatSWRListResponse(data);
};

export const useMeetingListByFilter = (query: MeetingListWithCategoryQuery) => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/list', {
    query,
  });

  return formatSWRListResponse(data);
};

export const useMeetingListByLastMonth = () => {
  const data = useSWRList<MeetuPageResponse<Meeting>>('/api/meeting/list-last-month', {
    query: {
      page: 0,
    },
  });

  return formatSWRListResponse(data);
};
