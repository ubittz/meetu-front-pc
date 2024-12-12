import images from '@@assets/images';
import { Mood } from '@@pages/Main/types';
import { Meeting } from '@@types/meeting';

function getDummyMeetingList() {
  const meetings: Meeting[] = [];

  for (let i = 0; i < 7; i++) {
    meetings.push({
      id: i,
      title: `와인과 사람, 무제한 와인 파티 ${i + 1}`,
      description: '와인의 매력을 탐험하며 다양한 사람들과 교류할 수 있는 무제한 와인 파티. 편안한 분위기에서 와인과 이야기를 즐겨보세요.',
      price: 70000,
      imageUrl: images.ctg_img01,
      location: 'seoul',
      isHot: i % 2 === 0, // 짝수 인덱스에만 isHot 설정
      type: i % 2 === 0 ? 'wine' : 'art',
      status: 'upcoming',
      createdAt: new Date(),
    });
  }
  return meetings;
}

function getDummyMoodList(): Mood[] {
  return [
    {
      index: 0,
      title: 'RELAXED',
      imageUrl: images.info_txt01,
    },
    {
      index: 1,
      title: 'ENERGETIC',
      imageUrl: images.info_txt02,
    },
    {
      index: 2,
      title: 'RELAXED',
      description: '상상에서 현실로, 창의의 순간.',
      imageUrl: images.info_txt03,
    },
  ];
}

export { getDummyMeetingList, getDummyMoodList };
