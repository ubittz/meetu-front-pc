import { PropsWithChildren } from 'react';

import { useAppState } from '@@store/hooks';

function CheckAuthorization({ children }: PropsWithChildren) {
  const token = useAppState((state) => state.auth.token);

  if (!token) {
    return null;
  }

  return children;
}

export default CheckAuthorization;
