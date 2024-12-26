import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const TextField = styled.input`
  height: 48px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${COLORS.MAIN_700};

  font-size: 14px;
  font-weight: 400;
  line-height: 1.3em;

  color: ${COLORS.GRAY_SCALE_900};

  &::placeholder {
    color: ${COLORS.MAIN_700};
  }

  &:not(:placeholder-shown) {
    border-color: ${COLORS.MAIN_700};
  }

  &:read-only {
    background: #f8f8f8;
  }
`;

export default TextField;
