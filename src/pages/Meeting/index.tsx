import { useState } from 'react';

import { useParams } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import MeetingGrid from '@@pages/Meeting/parts/MeetingGrid';
import { ALL_CATEGORIES, CATEGORY_STRINGS } from '@@stores/meeting/constants';
import { Category } from '@@stores/meeting/types';

function MeetingList() {
  const { category } = useParams<{ category: Category }>();

  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(category);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as Category);
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='meeting_visual'>
          <div className='mv_inner'>
            <div className='sel_area'>
              <select
                name='categorySelect'
                id='categorySelect'
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value=''>전체</option>
                {ALL_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {CATEGORY_STRINGS[category]}
                  </option>
                ))}
              </select>
            </div>
            <p>창의적인 에너지를 함께 나눠보세요.</p>
          </div>
          <div className='visual_bg'></div>
        </section>
        <MeetingGrid selectedCategory={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
}

export default MeetingList;
