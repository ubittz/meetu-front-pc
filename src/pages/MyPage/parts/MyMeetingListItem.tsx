import { Link } from 'react-router-dom';

import images from '@@assets/images';
import { getDistrict } from '@@pages/Meeting/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting } from '@@stores/meeting/types';
import { UserType } from '@@types/user';

interface MyMeetingListItemProps {
  type?: UserType;
  meeting: Meeting;
}

function MyMeetingListItem({ type, meeting }: MyMeetingListItemProps) {
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
      {type === 'host' && (
        <div className='btn_area type_02'>
          <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
            수정하기
          </Link>
          <button type='button' className='btn'>
            삭제
          </button>
        </div>
      )}
    </li>
  );
}

export default MyMeetingListItem;
