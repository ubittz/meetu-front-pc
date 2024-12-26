import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { Cancel } from '@@components/Popup/icon';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { UserProfileResponse } from '@@stores/auth/types';

import { Line } from '../icons';

const StyledUserInfoPopup = styled.div<{ $visible: boolean; $width: string; $height: string; $transform: string }>`
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
    transform: ${({ $transform }) => $transform};
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    padding: 60px;
    background: ${COLORS.WHITE};
    box-sizing: border-box;
    align-items: center;

    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0px;
      height: 47px;
      padding: 0 4%;

      .title {
        align-items: left;
        justify-content: space-between;
        font-weight: 400;
      }
    }
    .body {
      margin-top: 60px;
      padding: 0 4%;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;

      .popup_img {
        object-fit: fill;
        object-position: center;
        min-width: 20vw;
        height: 100%;
      }

      .wrap {
        flex-direction: column;
        min-width: 20vw;
        height: 100%;
        border: 1px solid ${COLORS.BORDER};
        padding: 30px 24px;

        .user_description {
          padding-top: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

interface UserInfoPopupProps {
  user?: UserProfileResponse;
  visible: boolean;
  onCancel: () => void;
}

function UserInfoPopup({ user, visible, onCancel }: UserInfoPopupProps) {
  const navigate = useNavigate();

  const handleClickMeeting = () => {
    navigate(pathGenerator(PAGES.PROFILE) + `/${user?.userId}`);
  };

  const handleClickReview = () => {
    navigate(pathGenerator(PAGES.PROFILE) + `/${user?.userId}/review`);
  };

  return (
    <StyledUserInfoPopup $visible={visible} $width='50%' $height='620px' $transform='translateX(-50%) translateY(-50%)'>
      <Flex.Vertical className='popup_box'>
        <Flex.Horizontal className='header'>
          <Typography.LargeTitle className='title'>프로필</Typography.LargeTitle>
          <Cancel onClick={onCancel} />
        </Flex.Horizontal>
        <Flex.Horizontal className='body'>
          <img src={user?.imageUrl} className='popup_img' alt='호스트 이미지' />
          <Flex.Vertical gap={20} className='wrap'>
            <Typography.LargeBody>{user?.userName}</Typography.LargeBody>

            {/* 운영 중인 모임 및 리뷰 */}
            <Flex.Horizontal className='tw-p-5 tw-rounded-xl tw-bg-[#FFEEE6]' gap={54} alignItems='center' justifyContent='center'>
              <Flex.Vertical className='tw-cursor-pointer' gap={8} onClick={handleClickMeeting}>
                <Typography.SmallBody>운영중인 모임</Typography.SmallBody>
                <Flex.Horizontal justifyContent='center' alignItems='center' gap={4}>
                  <Typography.MediumSubtitle color={COLORS.MAIN}>{user?.processingMeetingCount ?? 0}</Typography.MediumSubtitle>
                  <Typography.Caption>개</Typography.Caption>
                </Flex.Horizontal>
              </Flex.Vertical>
              {user?.isHost && (
                <>
                  <Line />
                  <Flex.Vertical className='tw-cursor-pointer' gap={8} onClick={handleClickReview}>
                    <Typography.SmallBody>리뷰</Typography.SmallBody>
                    <Flex.Horizontal justifyContent='center' alignItems='center' gap={4}>
                      <Typography.MediumSubtitle color={COLORS.MAIN}>{user?.writeReviewCount ?? 0}</Typography.MediumSubtitle>
                      <Typography.Caption>건</Typography.Caption>
                    </Flex.Horizontal>
                  </Flex.Vertical>
                </>
              )}
            </Flex.Horizontal>

            {/* 호스트/이용자 소개 */}
            <Flex.Vertical gap={10} className='tw-mt-3'>
              <Typography.MediumBody color={COLORS.MAIN_050}>{user?.isHost ? '호스트 소개' : '이용자 소개'}</Typography.MediumBody>
              <Typography.SmallBody className='user_description'>{user?.description}</Typography.SmallBody>
            </Flex.Vertical>
          </Flex.Vertical>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledUserInfoPopup>
  );
}

export default UserInfoPopup;
