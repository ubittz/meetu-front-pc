import { useState } from 'react';

import styled from 'styled-components';

import images from '@@assets/images';
import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import CategorySliderItems from '@@components/SliderItem/CategorySliderItems';
import Typography from '@@components/Typography';
import { Meeting } from '@@stores/meeting/types';

interface CategoryMeetingListItemProps {
  meeting: Meeting[];
}

const StyledSliderItem = styled.div`
  .container {
    position: relative;
    width: 100%;
    height: 700px;
  }
`;

function CategoryMeetingSwiperList({ meeting }: CategoryMeetingListItemProps) {
  const [index, setIndex] = useState<number>(0);

  const sliderItems = meeting.map((meeting, idx) => (
    <CategorySliderItems
      key={meeting.meetingId}
      image={meeting.imageUrl ?? images.ctg_img02}
      title={meeting.meetingName}
      price={`${meeting.meetingCost.toLocaleString()}원`}
      showContent={true}
      isActive={idx === index}
    >
      {idx === index && (
        <div className='txt_area'>
          <Typography.MediumTitle>{meeting.meetingName}</Typography.MediumTitle>
          <p className='txt'>{meeting.meetingDescript}</p>
          <Typography.LargeSubtitle>{meeting.meetingCost.toLocaleString()}원</Typography.LargeSubtitle>
        </div>
      )}
    </CategorySliderItems>
  ));

  return (
    <StyledSliderItem>
      <Flex.Vertical className='container'>
        <Slider
          items={sliderItems}
          slidesToShow={4}
          showArrows={true}
          arrowStyles={{
            left: { top: '109%', left: '80%' },
            right: { top: '109%', right: '14%' },
          }}
          sliderProps={{
            beforeChange: (_, next) => {
              setIndex(next);
            },
            dots: true,
          }}
        />
      </Flex.Vertical>
    </StyledSliderItem>
  );
}

export default CategoryMeetingSwiperList;
