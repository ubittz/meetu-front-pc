import styled from 'styled-components';

import Flex from '@@components/Flex';
import { SliderItemProps } from '@@components/SliderItem/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledSliderItem = styled(Flex.Vertical)<{ $imageHeight: number }>`
  overflow: hidden;
    background-size: cover;
    width: 100%;

    .slider_item__image {
      height: 430px;
      border-radius: 16px;
      border: 1px solid gray;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .price {
      margin-top: 30px;
    }
    .content {
      color: ${COLORS.GRAY_SCALE_200};
    }
`;

function SliderItem({ image, price, imageHeight = 400, title, children, showContent = false, onClickButton }: SliderItemProps) {
  return (
    <StyledSliderItem $imageHeight={imageHeight}>
      <Flex.Horizontal className='slider_item__image' onClick={onClickButton}>
        <img src={image} alt={title} />
      </Flex.Horizontal>

      {showContent && (
        <Flex.Vertical className='meeting_inner'>
          <Flex.Vertical gap={24}>
            <Typography.MediumTitle>{title}</Typography.MediumTitle>
            <Flex.Horizontal className='content'>{children}</Flex.Horizontal>
          </Flex.Vertical>
          <Typography.LargeSubtitle className='price'>{price}</Typography.LargeSubtitle>
        </Flex.Vertical>
      )}
    </StyledSliderItem>
  );
}

export default SliderItem;
