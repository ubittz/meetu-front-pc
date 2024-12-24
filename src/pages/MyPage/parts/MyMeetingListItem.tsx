import { Link } from 'react-router-dom';

import images from '@@assets/images';
import { getDistrict } from '@@pages/Meeting/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { Meeting } from '@@stores/meeting/types';

interface MyMeetingListItemProps {
  meeting: Meeting;
  isShowButton?: boolean;
  onDelete?: (id: string) => void;
}

function MyMeetingListItem({ meeting, isShowButton = false, onDelete }: MyMeetingListItemProps) {
  const me = useAppState((state) => state.auth.me);

  return (
    <li>
      <div className='img_area'>
        <img src={meeting.imageUrl || images.good_img01} alt={`상품 이미지${meeting.meetingId}`} />
      </div>
      <div className='txt_area'>
        <div className='sort'>
          {getDistrict(meeting.meetingMainPlace) && <span className='location'>{getDistrict(meeting.meetingMainPlace)}</span>}
        </div>
        <h4 className='tit'>{meeting.meetingName}</h4>
        <p className='txt'>{meeting.meetingDescript}</p>
        <p className='price'>{meeting.meetingCost.toLocaleString()}원</p>
      </div>
      {me?.isHost && isShowButton && (
        <div className='btn_area type_02'>
          <Link to={pathGenerator(PAGES.MEETING) + `/edit/${meeting.meetingId}`} className='btn form02'>
            수정하기
          </Link>
          <button type='button' className='btn' onClick={() => onDelete?.(meeting.meetingId)}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
}

export default MyMeetingListItem;
