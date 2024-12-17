import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import SliderItem from '@@components/SliderItem';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { Meeting } from '@@types/meeting';

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
      key={meeting.id}
      image={meeting.imageUrl ?? images.good_img02}
      title={meeting.title}
      price={`${meeting.price.toLocaleString()}원`}
      showContent={true}
      onClickButton={() => handleSlider(meeting.id.toString())}
      width='350px'
      height='446px'
    >
      <div className='txt_area'>
        <div className='sort tw-mb-3'>
          {meeting.isHot && <span className='hot'>HOT</span>}
          <span className='location'>{meeting.location.toUpperCase()}</span>
        </div>
        <h4 className='tit'>{meeting.title}</h4>
        <p className='txt'>{meeting.description}</p>
        <p className='price'>{meeting.price.toLocaleString()}원</p>
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
