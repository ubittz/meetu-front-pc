import { useState, useMemo } from 'react';

import MeetingGridItem from '@@pages/Meeting/parts/MeetingGridItem';
import { Meeting } from '@@types/meeting';

type SortOption = 'recent' | 'meetuRecommend' | 'priceHighFirst' | 'priceLowFirst';

interface MeetingGridItemProps {
  meetings: Meeting[];
}

function MeetingGrid({ meetings }: MeetingGridItemProps) {
  const [sortOption, setSortOption] = useState<SortOption>('recent');

  const sortedMeetings = useMemo(() => {
    const sorted = [...meetings];
    if (sortOption === 'priceHighFirst') {
      return sorted.sort((a, b) => b.price - a.price);
    }
    if (sortOption === 'priceLowFirst') {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (sortOption === 'recent') {
      return sorted.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    return sorted;
  }, [meetings, sortOption]);

  return (
    <section className='meeting_list'>
      <div className='ml_inner'>
        <div className='list_top'>
          <div className='sel_area'>
            <select name='categorySelect' id='categorySelect' onChange={(e) => setSortOption(e.target.value as SortOption)}>
              <option value='recent'>최신순으로 보기</option>
              <option value='meetuRecommend'>밋유 추천순</option>
              <option value='priceHighFirst'>가격 높은순</option>
              <option value='priceLowFirst'>가격 낮은순</option>
            </select>
          </div>
        </div>
        <div className='list_wrap'>
          <ul>
            {sortedMeetings.map((meeting) => (
              <MeetingGridItem key={meeting.id} meeting={meeting} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MeetingGrid;
