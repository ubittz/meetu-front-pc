import Flex from '@@components/Flex';
import { Category } from '@@stores/meeting/types';
import { Meeting } from '@@stores/meeting/types';

import CategoryList from './CategoryList';
import CategoryMeetingSwiperList from './CategoryMeetingSwiperList';
import ClassEmpty from './ClassEmpty';

interface MeetingByCategoryProps {
    meetingList: Meeting[];
    category?: Category; 
    setCategory: (category?: Category) => void;
  }
  
  function MeetingByCategory({
    meetingList,
    category = 'ART',
    setCategory,
  }: MeetingByCategoryProps) {
    const filteredMeetings = meetingList.filter((meeting) => meeting.meetingCategory === category);
  
    return (
      <Flex.Vertical gap={68} className='tw-p-[100px]'>
        <CategoryList setCategory={setCategory} />
        {filteredMeetings.length > 0 ? (
          <CategoryMeetingSwiperList meeting={filteredMeetings} />
        ) : (
          <ClassEmpty />
        )}
      </Flex.Vertical>
    );
  }
  
  export default MeetingByCategory;
  