import { useState } from 'react';

import Flex from '@@components/Flex';
import { Category } from '@@stores/meeting/types';
import { Meeting } from '@@stores/meeting/types';

import CategoryList from './CategoryList';
import CategoryMeetingSwiperList from './CategoryMeetingSwiperList';
import ClassEmpty from './ClassEmpty';

function MeetingByCategory({
  meetingList,
}: {
  meetingList: Meeting[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>('ART');

  const filteredMeetings = meetingList.filter(meeting => meeting.meetingCategory === selectedCategory);

  return (
    <Flex.Vertical gap={68} className="tw-p-[100px]">
      <CategoryList setCategory={setSelectedCategory} />
      {filteredMeetings.length > 0 ? (
        <CategoryMeetingSwiperList meeting={filteredMeetings} />
      ) : (
        <ClassEmpty />  
      )}
    </Flex.Vertical>
  );
}

export default MeetingByCategory;
