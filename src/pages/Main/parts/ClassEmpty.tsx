import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';

const StyledClassEmpty = styled(Flex.Horizontal)`
  padding: 20px 0;
`;

function ClassEmpty({ children }: PropsWithChildren) {
  return (
    <StyledClassEmpty>
      <Typography.Caption>{children ?? '모임을 준비중입니다.'}</Typography.Caption>
    </StyledClassEmpty>
  );
}

export default ClassEmpty;