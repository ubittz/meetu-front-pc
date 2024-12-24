import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { PopupProps } from '@@components/Popup/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { Cancel } from './icon';

const StyledPopup = styled.div<{ $visible: boolean }>`
  position: fixed;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;

  z-index: 1000;

  .popup_box {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 50%;
    height: 620px;
    padding: 80px 100px;
    background: ${COLORS.WHITE};
    box-sizing: border-box;

    .popup_box__content {
      border: 1px solid ${COLORS.BORDER};
      border-radius: 1px;
      width: 85%;
      padding: 67px 106px;
      margin-top: 76px;
      box-sizing: border-box;
    }

    .popup_box__button1,
    .popup_box__button2 {
      flex: 1;
      height: 56px;
      border-radius: 4px;
      margin-top: 80px;
    }

    .popup_box__button1 {
      background-color: ${COLORS.WHITE};
      border: 1px solid ${COLORS.BORDER};
      color: black;
    }

    .popup_box__button2 {
      background-color: ${COLORS.MAIN};
    }

    .popup_box__buttons {
      display: flex;
      gap: 16px;
      width: 85%;
      gap: 16px;
    }
  }
  .title {
    width: 85%;
    align-items: center;
    justify-content: space-between;
    margin-left: 8%;
  }
`;

function Popup({ visible, title, confirmTextLeft, confirmTextRight, children, onConfirmLeft, onConfirmRight, onCancel }: PopupProps) {
  return (
    <StyledPopup $visible={visible}>
      <Flex.Vertical className='popup_box'>
        <Flex.Horizontal className='title'>
          <Typography.LargeTitle className='popup_title'>{title}</Typography.LargeTitle>
          <Cancel onClick={onCancel} />
        </Flex.Horizontal>
        <Flex.Vertical alignItems='center'>
          <Typography.SmallTitle className='popup_box__content'>{children}</Typography.SmallTitle>
          <Flex.Horizontal className='popup_box__buttons'>
            {onConfirmLeft && (
              <Button.Small className='popup_box__button1' type='button' onClick={onConfirmLeft}>
                {confirmTextLeft}
              </Button.Small>
            )}
            {onConfirmRight && (
              <Button.Small className='popup_box__button2' type='button' onClick={onConfirmRight}>
                {confirmTextRight}
              </Button.Small>
            )}
          </Flex.Horizontal>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledPopup>
  );
}

export default Popup;
