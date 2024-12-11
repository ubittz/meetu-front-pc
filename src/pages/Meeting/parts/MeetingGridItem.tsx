import { Link } from 'react-router-dom';

import images from '@@assets/images';
import { Meeting } from '@@pages/Meeting/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

interface MeetingGridItemProps {
  meeting: Meeting;
}

function MeetingGridItem({ meeting }: MeetingGridItemProps) {
  return (
    <li>
      <Link to={pathGenerator(PAGES.MEETING) + `/${meeting.id}`} className='list_link'>
        <div className='img_area'>
          <img src={meeting.image ?? images.meeting_img01} alt='상품 이미지1' />
        </div>
        <div className='txt_area'>
          <div className='sort'>
            {meeting.isHot && <span className='hot'>HOT</span>}
            <span className='location'>{meeting.location.toUpperCase()}</span>
          </div>
          <h4 className='tit'>{meeting.title}</h4>
          <p className='txt'>{meeting.description}</p>
          <p className='price'>{meeting.price.toLocaleString()}원</p>
        </div>
      </Link>
    </li>
  );
}

export default MeetingGridItem;
