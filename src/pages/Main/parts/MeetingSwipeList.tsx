import { Meeting } from '../types';
import MeetingListItem from './MeetingListItem';

interface MeetingSwipeListProps {
  title: React.ReactNode;
  meetings: Meeting[];
}

function MeetingSwipeList({ title, meetings }: MeetingSwipeListProps) {
  return (
    <div className='meeting_inner'>
      <h3 className='main_tit'>{title}</h3>

      <div className='list_wrap swiper-container'>
        <ul className='swiper-wrapper'>
          {meetings.map((meeting) => (
            <MeetingListItem key={meeting.id} meeting={meeting} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MeetingSwipeList;
