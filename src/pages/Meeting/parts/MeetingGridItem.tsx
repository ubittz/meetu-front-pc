import { Link } from 'react-router-dom';
import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting } from '@@stores/meeting/types';

import { getDistrict } from '../utils';

interface MeetingGridItemProps {
  meeting: Meeting;
}

const StyledMeetingGridItem = styled(Flex.Vertical)`
  img {
    width: 348px;
    height: 400px;
    border-radius:12px;
    object-fit: cover;
  }
`;

function MeetingGridItem({ meeting }: MeetingGridItemProps) {
  return (
    <StyledMeetingGridItem>
      <Link to={pathGenerator(PAGES.MEETING) + `/${meeting.meetingId}`}>
        <Flex.Vertical className='body'>
            <img src={meeting.imageUrl ?? images.ctg_img01} alt='상품 이미지1' />
          <div className='txt_area'>
            <div className='sort'>
              {meeting.meetingCost && <span className='hot'>HOT</span>}
              <span className='location'>{getDistrict(meeting.meetingMainPlace)}</span>
              </div>
            <h4 className='tit tw-mt-3'>{meeting.meetingName}</h4>
            <p className='txt'>{meeting.meetingDescript}</p>
            <p className='price'>{meeting.meetingCost.toLocaleString()}원</p>
          </div>
        </Flex.Vertical>
      </Link>
    </StyledMeetingGridItem>
  );
}

export default MeetingGridItem;
