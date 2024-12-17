import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const StyledSliderNavigation = styled.div`
  width: 78%;
  height: 2px;
  background: ${COLORS.BORDER};
  position: relative;
  margin-top: 60px;
  border-radius: 3px;
`;

const StyledActiveLine = styled.div<{ width: number }>`
  height: 100%;
  background: ${COLORS.MAIN};
  border-radius: 3px;
  transition: width 0.3s ease;
  width: ${({ width }) => width}%;
`;

function SliderNavigation({ currentIndex, length }: { currentIndex: number; length: number }) {
  const defaultProgress = 20; 

  const progress = currentIndex === 0 ? defaultProgress : (currentIndex / (length - 1)) * (100 - defaultProgress) + defaultProgress;

  return (
    <StyledSliderNavigation>
      <StyledActiveLine width={progress} />
    </StyledSliderNavigation>
  );
}

export default SliderNavigation;
