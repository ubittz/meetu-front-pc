import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import Slick from 'react-slick';
import styled from 'styled-components';

import SliderNavigation from '@@components/Slider/SliderNavigation';
import { SliderProps } from '@@components/Slider/types';

import { Left, Right } from './icons';

const StyledSlider = styled.div<{ $currentIndex: number; $size?: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .slick-dots {
    display: none !important;
  }
`;

const StyledSlick = styled(Slick)<{ gap: number }>`
  .slick-list {
    margin: 0 -${({ gap }) => gap / 2}px;
    .slick-slide > div {
      padding: 0 ${({ gap }) => gap / 2}px;
    }
  }

`;

function Slider({
  items,
  gap = 0,
  itemSize,
  sliderProps,
  slidesToShow = 1,
  showArrows = false,
  arrowStyles,
  ...props
}: SliderProps & {
  slidesToShow?: number;
  showArrows?: boolean;
  arrowStyles?: { left?: React.CSSProperties; right?: React.CSSProperties };
}) {
  const [index, setIndex] = useState<number>(0);

  const LeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        ...arrowStyles?.left,
      }}
    >
      <Left />
    </div>
  );

  const RightArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        ...arrowStyles?.right,
      }}
    >
      <Right />
    </div>
  );

  return (
    <StyledSlider $currentIndex={index} $size={itemSize} {...props}>
      <div className='slider__slick_wrap'>
        <StyledSlick
          gap={gap}
          dots={false}
          infinite={false}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          prevArrow={showArrows ? <LeftArrow /> : undefined}
          nextArrow={showArrows ? <RightArrow /> : undefined}
          {...sliderProps}
          beforeChange={(currentIndex, nextIndex) => {
            setIndex(nextIndex);
            sliderProps?.beforeChange?.(currentIndex, nextIndex);
          }}
        >
          {items.map((item, itemIndex) => (
            <div key={itemIndex} className={itemIndex === index ? 'active-slide' : ''}>
              {item}
            </div>
          ))}
        </StyledSlick>
        {sliderProps?.dots && <SliderNavigation currentIndex={index} length={items.length} />}
      </div>
    </StyledSlider>
  );
}

export default Slider;
