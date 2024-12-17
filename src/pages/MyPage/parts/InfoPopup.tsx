import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { UserType } from '@@types/user';

import { Line } from '../icons';

interface InfoPopupProps {
  type: UserType;
}

const StyledInfo = styled.div`
  .wrap {
    border: 1px solid ${COLORS.BORDER};
    padding: 10%;
  }
`;

function InfoPopup({ type }: InfoPopupProps) {
  return (
    <StyledInfo>
      <Flex.Vertical gap={20} className='wrap'>
        <Typography.LargeBody>호스트명 또는 닉네임</Typography.LargeBody>

        {/* 운영 중인 모임 및 리뷰 */}
        <Flex.Horizontal className='tw-p-5 tw-rounded-xl tw-bg-[#FFEEE6]' gap={54} alignItems='center' justifyContent='center'>
          <Flex.Vertical gap={8}>
            <Typography.SmallBody>운영중인 모임</Typography.SmallBody>
            <Flex.Horizontal justifyContent='center' alignItems='center' gap={4}>
              <Typography.MediumSubtitle color={COLORS.MAIN}>N</Typography.MediumSubtitle>
              <Typography.Caption>개</Typography.Caption>
            </Flex.Horizontal>
          </Flex.Vertical>
          <Line />
          <Flex.Vertical gap={8}>
            <Typography.SmallBody>리뷰</Typography.SmallBody>
            <Flex.Horizontal justifyContent='center' alignItems='center' gap={4}>
              <Typography.MediumSubtitle color={COLORS.MAIN}>N</Typography.MediumSubtitle>
              <Typography.Caption>건</Typography.Caption>
            </Flex.Horizontal>
          </Flex.Vertical>
        </Flex.Horizontal>

        {/* 호스트/이용자 소개 */}
        <Flex.Vertical gap={10} className='tw-mt-3'>
          <Typography.MediumBody color={COLORS.MAIN_050}>{type === 'host' ? '호스트 소개' : '이용자 소개'}</Typography.MediumBody>
          <Typography.SmallBody>
            새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요. 최대 4줄까지
            노출됩니다. 4줄 이상은 ...으로 대체됩니다.
          </Typography.SmallBody>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledInfo>
  );
}

export default InfoPopup;
