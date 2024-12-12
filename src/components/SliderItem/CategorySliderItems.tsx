import styled from 'styled-components';

import Flex from '@@components/Flex';
import { SliderItemProps } from '@@components/SliderItem/types';

const StyledCategorySliderItems = styled(Flex.Vertical)<{ $isActive: boolean }>`
  background-size: cover;
  width: 740px;

  ${({ $isActive }) =>
    !$isActive &&
    `
    transform: scale(0.6) translateX(320px);
    padding-right:70px;
  `}

  ${({ $isActive }) =>
    $isActive &&
    `
    transform: scale(1);
    z-index: 2; 
  `}

  transition: transform 0.5s ease-in-out;

  .slider_item__image {
    border-radius: 16px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function CategorySliderItems({ image, children, showContent = false, onClickButton, isActive }: SliderItemProps & { isActive: boolean }) {
  return (
    <StyledCategorySliderItems $isActive={isActive}>
      <Flex.Vertical className='body'>
        <Flex.Horizontal className='slider_item__image' onClick={onClickButton}>
          <img src={image} />
        </Flex.Horizontal>

        {showContent && (
          <Flex.Vertical>
            <Flex.Horizontal>{children}</Flex.Horizontal>
          </Flex.Vertical>
        )}
      </Flex.Vertical>
    </StyledCategorySliderItems>
  );
}

export default CategorySliderItems;
