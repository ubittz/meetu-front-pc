import { User } from '@@stores/auth/types';
import { ENDPOINTS } from '@@utils/request/constants';
import { useSWRDetail } from '@@utils/request/hooks';

export const useUserProfile = (userId: string) => {
  const { data, isLoading } = useSWRDetail<User>(ENDPOINTS.USER.PROFILE(userId));
  return {
    data: data?.data,
    isLoading,
  };
};
