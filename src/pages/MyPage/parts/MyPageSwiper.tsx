import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import SliderItem from '@@components/SliderItem';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting } from '@@stores/meeting/types';

interface MeetingSwipeListProps {
  meetings: Meeting[];
}

const StyledSliderItem = styled.div`
  margin-top: 40px;
`;

function MyPageSwiper({ meetings }: MeetingSwipeListProps) {
  const navigate = useNavigate();

  const handleSlider = (id: string) => {
    navigate(pathGenerator(PAGES.MEETING) + `/${id}`);
  };

  const sliderItems = meetings.map((meeting) => (
    <SliderItem
      key={meeting.meetingId}
      image={meeting.imgUrl ?? images.ctg_img02}
      title={meeting.meetingName}
      price={`${meeting.meetingCost.toLocaleString()}원`}
      showContent={true}
      onClickButton={() => handleSlider(meeting.meetingId.toString())}
      width='350px'
      height='446px'
    >
      <div className='txt_area'>
        <div className='sort tw-mb-3'>
          {meeting.meetingId && <span className='hot'>HOT</span>}
          <span className='location'>{meeting.meetingMainPlace.toUpperCase()}</span>
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
        <Slider
          items={sliderItems}
          slidesToShow={5}
          sliderProps={{ dots: true }}
          showArrows={true}
          className='tw-w-screen tw-h-[58vh]'
          arrowStyles={{
            left: { top: '113%', left: '80%' },
            right: { top: '113%', right: '15%' },
          }}
        />
      </Flex.Vertical>
    </StyledSliderItem>
  );
}

export default MyPageSwiper;
