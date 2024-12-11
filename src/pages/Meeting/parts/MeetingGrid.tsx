import MeetingGridItem from '@@pages/Meeting/parts/MeetingGridItem';
import { Meeting } from '@@pages/Meeting/types';

interface MeetingGridItemProps {
  meetings: Meeting[];
}

function MeetingGrid({ meetings }: MeetingGridItemProps) {
  return (
    <section className='meeting_list'>
      <div className='ml_inner'>
        <div className='list_top'>
          <div className='sel_area'>
            <select name='categorySelect' id='categorySelect'>
              <option value='' selected>
                최신순으로 보기
              </option>
              <option value=''>밋유 추천순</option>
              <option value=''>가격 높은순</option>
              <option value=''>가격 낮은순</option>
            </select>
          </div>
        </div>
        <div className='list_wrap'>
          <ul>
            {meetings.map((meeting) => (
              <MeetingGridItem key={meeting.id} meeting={meeting} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MeetingGrid;
