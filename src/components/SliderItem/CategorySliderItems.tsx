import styled from 'styled-components';

import Flex from '@@components/Flex';
import { SliderItemProps } from '@@components/SliderItem/types';

const StyledCategorySliderItems = styled(Flex.Vertical)<{ $isActive: boolean }>`
  background-size: cover;
  width: 40vw;

  ${({ $isActive }) =>
    !$isActive &&
    `
    transform: scale(0.6) translateX(19vw);
    padding-right:5vw;
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
    width:740px;
    height:424px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function CategorySliderItems({ children, showContent = false, onClickButton, isActive, image }: SliderItemProps & { isActive: boolean, image:string }) {
  return (
    <StyledCategorySliderItems $isActive={isActive}>
      <Flex.Vertical className='body'>
        <Flex.Horizontal className='slider_item__image' onClick={onClickButton}>
          <img src={image}/>
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
