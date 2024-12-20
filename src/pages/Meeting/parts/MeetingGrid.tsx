import { ChangeEventHandler, useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';
import ClassEmpty from '@@pages/Main/parts/ClassEmpty';
import MeetingGridItem from '@@pages/Meeting/parts/MeetingGridItem';
import { ALL_FIND_CLASS_ORDER, FIND_CLASS_ORDER, QUERY_BY_FIND_CLASS_ORDER, FIND_CLASS_ORDER_STRING } from '@@stores/meeting/constants';
import { useMeetingListByFilter } from '@@stores/meeting/hooks';
import { Category } from '@@stores/meeting/types';

import { FindClassOrder } from '../types';

const StyledHomeCategory = styled.div`
  padding: 100px;
  .body {
    .class_list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 30px;
    }

    .category__filter {
      font-size: 12px;
      color: ${COLORS.GRAY_SCALE_300};
    }
  }
`;

const StyledSelect = styled.select`
  font-size: 14px;
  color: ${COLORS.GRAY_SCALE_300};
  outline: none;
`;

interface MeetingGridProps {
  selectedCategory: Category | undefined;
}

function MeetingGrid({ selectedCategory }: MeetingGridProps) {
  const [selectedOrder, setSelectedOrder] = useState<FindClassOrder>(FIND_CLASS_ORDER.RECENT);

  const { content } = useMeetingListByFilter({
    page: 0,
    category: selectedCategory,
    ...QUERY_BY_FIND_CLASS_ORDER[selectedOrder],
  });

  const handleChangeFilter: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedOrder(e.target.value as FindClassOrder);
  };

  return (
    <StyledHomeCategory>
      <Flex.Vertical className="body" gap={22}>
        <Flex.Horizontal justifyContent="flex-end">
          <StyledSelect value={selectedOrder} onChange={handleChangeFilter}>
            {ALL_FIND_CLASS_ORDER.map((order) => (
              <option key={order} value={order}>
                {FIND_CLASS_ORDER_STRING[order]}
              </option>
            ))}
          </StyledSelect>
        </Flex.Horizontal>
        <div className="class_list">
          {content && content.length ? (
            content.map((meeting) => <MeetingGridItem key={meeting.meetingId} meeting={meeting} />)
          ) : (
            <ClassEmpty />
          )}
        </div>
      </Flex.Vertical>
    </StyledHomeCategory>
  );
}

export default MeetingGrid;
