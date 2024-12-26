import { PaymentDetailResponse, PaymentListResponse } from '@@stores/payment/types';
import { useSWRDetail, useSWRList } from '@@utils/request/hooks';
import { MeetuPageResponse, PageQuery } from '@@utils/request/types';
import { formatSWRListResponse } from '@@utils/request/utils';

export const usePaymentList = (query: PageQuery) => {
  const data = useSWRList<MeetuPageResponse<PaymentListResponse>>('/api/payment/list', {
    query,
    skip: query.page === undefined,
  });

  return formatSWRListResponse(data);
};

export const usePaymentDetail = (id: string) => {
  const { data, mutate, isLoading } = useSWRDetail<PaymentDetailResponse>(`/api/payment/detail/${id}`, {
    skip: !id,
  });

  return {
    data: data?.data,
    mutate,
    isLoading,
  };
};
