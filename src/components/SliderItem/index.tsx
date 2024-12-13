import styled from 'styled-components';

import Flex from '@@components/Flex';
import { SliderItemProps } from '@@components/SliderItem/types';
import { COLORS } from '@@constants/colors';

interface StyledSliderItemProps {
  $imageHeight: number;
  $width?: string;
  $height?: string;
}

const StyledSliderItem = styled(Flex.Vertical)<StyledSliderItemProps>`
  overflow: hidden;
  background-size: cover;
  height: ${({ $height }) => $height || '71.2vh'}; 
  width: ${({ $width }) => $width || '17.7vw'};   
  
  .slider_item__image {
    height: ${({ $imageHeight }) => `${$imageHeight}px`};
    border-radius: 16px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    color: ${COLORS.GRAY_SCALE_200};
  }
`;

function SliderItem({
  image,
  imageHeight = 400,
  width,
  height,
  children,
  showContent = false,
  onClickButton,
}: SliderItemProps & { width?: string; height?: string }) {
  return (
    <StyledSliderItem
      $imageHeight={imageHeight}
      $width={width}
      $height={height}
    >
      <Flex.Horizontal className="slider_item__image" onClick={onClickButton}>
        <img src={image} />
      </Flex.Horizontal>

      {showContent && (
        <Flex.Vertical>
          <Flex.Horizontal className="content">{children}</Flex.Horizontal>
        </Flex.Vertical>
      )}
    </StyledSliderItem>
  );
}

export default SliderItem;
