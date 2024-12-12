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
  title: React.ReactNode;
  meetings: Meeting[];
}

const StyledSliderItem = styled.div`
  .container{
    padding-left:200px;
    padding-top:100px;
  }

`;

function MeetingSwipeList({ title, meetings }: MeetingSwipeListProps) {
  const navigate = useNavigate();

  const handleSlider = (id: string) => {
    navigate(pathGenerator(PAGES.MEETING) + `/${id}`);
  };

  const sliderItems = meetings.map((meeting) => (
    <SliderItem
      key={meeting.id}
      image={meeting.imageUrl ?? images.good_img01}
      title={meeting.title}
      price={`${meeting.price.toLocaleString()}원`}
      showContent={true}
      onClickButton={() => handleSlider(meeting.id.toString())}
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
        <h3 className='main_tit tw-mb-10'>{title}</h3>
        <Slider items={sliderItems} gap={40} slidesToShow={4.5} sliderProps={{ dots: false }}/>
      </Flex.Vertical>
    </StyledSliderItem>
  );
}

export default MeetingSwipeList;
