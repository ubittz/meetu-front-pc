import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import SliderItem from '@@components/SliderItem';
import { getDistrict } from '@@pages/Meeting/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting } from '@@stores/meeting/types';

interface MeetingSwipeListProps {
  title: React.ReactNode;
  meetings: Meeting[];
}

const StyledSliderItem = styled.div`
  .container {  
    padding-left: 10vw;
    padding-top: 80px;
  }
`;

function MeetingSwipeList({ title, meetings }: MeetingSwipeListProps) {
  const navigate = useNavigate();

  const handleItemClick = (id: string) => {
    navigate(pathGenerator(PAGES.MEETING) + `/${id}`);
  };

  const sliderItems = meetings.map((meeting) => (
    <SliderItem
      key={meeting.meetingId}
      image={meeting.imageUrl ?? images.good_img03}
      title={meeting.meetingName}
      price={`${meeting.meetingCost.toLocaleString()}원`}
      showContent={true}
      onClickButton={() => handleItemClick(meeting.meetingId.toString())}
    >
      <div className='txt_area'>
        <div className='sort tw-mb-3'>
          {meeting.meetingId && <span className='hot'>HOT</span>}
          <span className='location'>{getDistrict(meeting.meetingMainPlace)}</span>
        </div>
        <h4 className='tit'>{meeting.meetingName}</h4>
        <p className='txt'>{meeting.meetingDescript}</p>
        <p className='price'>{meeting.meetingCost.toLocaleString()}원</p>
      </div>
    </SliderItem>
  ));

  return (
    <StyledSliderItem>
      <Flex.Vertical className='container'>
        <h3 className='main_tit tw-mb-10'>{title}</h3>
        <Slider items={sliderItems} gap={10} slidesToShow={4.5} sliderProps={{ dots: false }} />
      </Flex.Vertical>
    </StyledSliderItem>
  );
}

export default MeetingSwipeList;






