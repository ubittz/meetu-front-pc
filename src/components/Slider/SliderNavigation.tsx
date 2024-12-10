import styled from 'styled-components';

const StyledSliderNavigation = styled.div`
  display: none;
  justify-content: center;
  gap: 4px;
  margin-top: 11px;

  .slider_dot {
    width: 4px;
    height: 4px;
    border-radius: 3px;

    background: #C9CBCF;

    &.slider_dot-active {
      background: #0C0C0E;
    }
  }
`;

function SliderNavigation({ currentIndex, length }: { currentIndex: number; length: number }) {
  return (
    <StyledSliderNavigation className='slider_dots__wrap'>
      {Array.from({ length }).map((_, index) => (
        <div key={index} className={`slider_dot ${currentIndex === index && 'slider_dot-active'}`} />
      ))}
    </StyledSliderNavigation>
  );
}

export default SliderNavigation;