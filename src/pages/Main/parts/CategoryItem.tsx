// CategoryItem.tsx
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { CATEGORY_STRINGS } from '@@stores/meeting/constants';
import { Category } from '@@stores/meeting/types';

const StyledIcon = styled(Flex.Vertical)<{ $isActive: boolean }>`
  width: 70px;
  height: 38px;
  background-color: ${({ $isActive }) => ($isActive ? '#FF641A' : 'transparent')};
  border-radius: ${({ $isActive }) => ($isActive ? '6px' : '6px')};
  color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  cursor: pointer;
`;

function CategoryItem({ category, isActive, onClick }: { category?: Category; isActive: boolean; onClick: () => void }) {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    if (!category) {
      navigate(pathGenerator(PAGES.MEETING));
    } else {
      navigate(pathGenerator(PAGES.MAIN));
    }
  };

  return (
    <Flex.Vertical alignItems='center'>
      <StyledIcon justifyContent='center' alignItems='center' $isActive={isActive} onClick={handleClick}>
        {category ? CATEGORY_STRINGS[category] : '모두보기'}
      </StyledIcon>
    </Flex.Vertical>
  );
}

export default CategoryItem;
