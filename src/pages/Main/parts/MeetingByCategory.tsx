
import Flex from '@@components/Flex';
import { Category } from '@@stores/meeting/types';
import { Meeting } from '@@stores/meeting/types';

import CategoryList from './CategoryList';
import CategoryMeetingSwiperList from './CategoryMeetingSwiperList';

function MeetingByCategory({ meetingList }: { meetingList: Meeting[]; category?: Category; setCategory: (category?: Category) => void }) {
  return (
    <Flex.Vertical gap={68} className='tw-p-[100px]'>
        <CategoryList />
      <CategoryMeetingSwiperList meeting={meetingList} />
    </Flex.Vertical>
  );
}

export default MeetingByCategory;
