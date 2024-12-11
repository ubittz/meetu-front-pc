import { useState } from 'react';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import { getDummyMeetingList } from '@@pages/Meeting/dummys';
import MeetingGrid from '@@pages/Meeting/parts/MeetingGrid';
import { Meeting, MeetingType } from '@@pages/Meeting/types';

function MeetingList() {
  const meetings: Meeting[] = getDummyMeetingList();
  const [selectedCategory, setSelectedCategory] = useState<MeetingType | ''>('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as MeetingType);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='meeting_visual'>
          <div className='mv_inner'>
            <div className='sel_area'>
              <select name='categorySelect' id='categorySelect' onChange={handleCategoryChange}>
                <option value=''>전체</option>
                <option value='art'>아트</option>
                <option value='reading'>독서</option>
                <option value='cooking'>쿠킹</option>
                <option value='cycling'>사이클</option>
                <option value='exercise'>운동</option>
                <option value='hiking'>등산</option>
                <option value='music'>음악</option>
                <option value='photography'>사진</option>
                <option value='technology'>기술</option>
                <option value='wine'>와인</option>
              </select>
            </div>
            <p>창의적인 에너지를 함께 나눠보세요.</p>
          </div>
          <div className='visual_bg'></div>
        </section>
        <MeetingGrid meetings={meetings.filter((meeting) => selectedCategory === '' || meeting.type === selectedCategory)} />
      </main>
      <Footer />
    </div>
  );
}

export default MeetingList;
