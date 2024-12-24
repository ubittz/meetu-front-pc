import { useParams } from 'react-router-dom';

import InfoHost from '@@pages/Profile/InfoHost';
import InfoUser from '@@pages/Profile/InfoUser';
import { useUserProfile } from '@@stores/auth/hooks';

function Profile() {
  const { id } = useParams();

  const { data } = useUserProfile(id ?? '');

  if (!id || !data) {
    return null;
  }

  return !data.isHost ? <InfoHost user={data} /> : <InfoUser user={data} />;
}

export default Profile;
