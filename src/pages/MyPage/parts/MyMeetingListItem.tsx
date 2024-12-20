import { Link } from 'react-router-dom';

import images from '@@assets/images';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting } from '@@types/meeting';
import { UserType } from '@@types/user';

interface MyMeetingListItemProps {
  type?: UserType;
  meeting: Meeting;
}

function MyMeetingListItem({ type, meeting }: MyMeetingListItemProps) {
  return (
    <li>
      <div className='img_area'>
        <img src={meeting.imageUrl || images.good_img01} alt={`상품 이미지${meeting.id}`} />
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
