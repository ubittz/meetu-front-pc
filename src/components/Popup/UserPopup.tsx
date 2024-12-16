import styled from 'styled-components';

import Flex from '@@components/Flex';
import { PopupProps } from '@@components/Popup/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { Cancel } from './icon';

const StyledPopup = styled.div<{ $visible: boolean; $width: string; $height: string }>`
  position: fixed;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  max-height: none;
  overflow-y: auto;

  .popup_box {
    position: relative;
    top: 55%;
    left: 50%;
    transform: translateX(-50%) translateY(-35%);
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    padding: 80px 100px;
    background: ${COLORS.WHITE};
    box-sizing: border-box;


    .body {
      width: 87%;
      margin-left: 56px;
      margin-top: 60px;
    }

    .popup_box__content {
      padding: 24px;
    }

    .title {
      width: 85%;
      align-items: center;
      justify-content: space-between;
      margin-left: 8%;
    }

    .popup_img {
      width: 302px;
      height: 360px;
      object-fit: cover;
      object-position: center;
    }
  }
`;

function UserPopup({ visible, title, children, img, onCancel, width = '50%', height = '620px' }: PopupProps) {
  return (
    <StyledPopup $visible={visible} $width={width} $height={height}>
      <Flex.Vertical className='popup_box'>
        <Flex.Horizontal className='title'>
          <Typography.LargeTitle className='popup_title'>{title}</Typography.LargeTitle>
          <Cancel onClick={onCancel} />
        </Flex.Horizontal>

        <Flex.Horizontal alignItems='center' className='body'>
          {img && <img src={img} className='popup_img' />}
          <Typography.SmallTitle className='popup_box__content'>{children}</Typography.SmallTitle>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledPopup>
  );
}

export default UserPopup;
