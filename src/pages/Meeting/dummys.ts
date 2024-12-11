import images from '@@assets/images';

import { Review } from './types';

function getDummyReviewList(): Review[] {
  return [
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img03 },
    { rating: 4.5, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img03 },
    { rating: 3.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img01 },
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img02 },
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img03 },
  ];
}

export { getDummyReviewList };
