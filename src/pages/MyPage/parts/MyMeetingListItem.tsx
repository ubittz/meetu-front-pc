import { Link } from 'react-router-dom';

import images from '@@assets/images';
import { MeetingItem, UserType } from '@@pages/MyPage/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

interface MyMeetingListItemProps {
  type?: UserType;
  meeting: MeetingItem;
}

function MyMeetingListItem({ type, meeting }: MyMeetingListItemProps) {
  return (
    <li>
      <div className='img_area'>
        <img src={meeting.image || images.good_img01} alt={`상품 이미지${meeting.id}`} />
      </div>
      <div className='txt_area'>
        <div className='sort'>
          <span className='location'>{meeting.location.toUpperCase()}</span>
        </div>
        <h4 className='tit'>{meeting.title}</h4>
        <p className='txt'>{meeting.description}</p>
        <p className='price'>{meeting.price.toLocaleString()}원</p>
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
