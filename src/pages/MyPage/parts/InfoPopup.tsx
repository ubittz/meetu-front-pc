import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { User } from '@@stores/auth/types';

import { Line } from '../icons';

interface InfoPopupProps {
  user?: User;
}

const StyledInfo = styled.div`
  .wrap {
    border: 1px solid ${COLORS.BORDER};
    padding: 10%;
  }
`;

function InfoPopup({ user }: InfoPopupProps) {
  return (
    <StyledInfo>
      <Flex.Vertical gap={20} className='wrap'>
        <Typography.LargeBody>{user?.name}</Typography.LargeBody>

        {/* 운영 중인 모임 및 리뷰 */}
        <Flex.Horizontal className='tw-p-5 tw-rounded-xl tw-bg-[#FFEEE6]' gap={54} alignItems='center' justifyContent='center'>
          <Flex.Vertical gap={8}>
            <Typography.SmallBody>운영중인 모임</Typography.SmallBody>
            <Flex.Horizontal justifyContent='center' alignItems='center' gap={4}>
              <Typography.MediumSubtitle color={COLORS.MAIN}>{user?.meetingCount ?? 0}</Typography.MediumSubtitle>
              <Typography.Caption>개</Typography.Caption>
            </Flex.Horizontal>
          </Flex.Vertical>
          <Line />
          <Flex.Vertical gap={8}>
            <Typography.SmallBody>리뷰</Typography.SmallBody>
            <Flex.Horizontal justifyContent='center' alignItems='center' gap={4}>
              <Typography.MediumSubtitle color={COLORS.MAIN}>{user?.writeReviewCount}</Typography.MediumSubtitle>
              <Typography.Caption>건</Typography.Caption>
            </Flex.Horizontal>
          </Flex.Vertical>
        </Flex.Horizontal>

        {/* 호스트/이용자 소개 */}
        <Flex.Vertical gap={10} className='tw-mt-3'>
          <Typography.MediumBody color={COLORS.MAIN_050}>{user?.isHost ? '호스트 소개' : '이용자 소개'}</Typography.MediumBody>
          <Typography.SmallBody>{user?.userDescription}</Typography.SmallBody>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledInfo>
  );
}

export default InfoPopup;
