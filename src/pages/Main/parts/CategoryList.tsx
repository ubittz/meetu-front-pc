import { useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import CategoryItem from '@@pages/Main/parts/CategoryItem';
import { ALL_CATEGORIES } from '@@stores/meeting/constants';
import { Category } from '@@stores/meeting/types';

const StyledCategoryList = styled(Flex.Horizontal)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function CategoryList() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(ALL_CATEGORIES[0]);

  const handleCategoryClick = (category: Category | null) => {
    setActiveCategory(category);
  };

  return (
    <Flex.Horizontal alignItems='center' gap={320}>
        <Typography.MeduimButton><span className='tw-text-[#FF641A]'>카테고리</span>별 모임<span className='tw-text-[#FF641A]'>.</span></Typography.MeduimButton>
      <StyledCategoryList gap={12}>
        {/* 각 카테고리별 아이템 */}
        {ALL_CATEGORIES.map((category) => (
          <CategoryItem key={category} category={category} isActive={activeCategory === category} onClick={() => handleCategoryClick(category)} />
        ))}
        {/* "모두보기" 카테고리 */}
        <CategoryItem isActive={activeCategory === null} onClick={() => handleCategoryClick(null)} />
      </StyledCategoryList>
    </Flex.Horizontal>
  );
}

export default CategoryList;
