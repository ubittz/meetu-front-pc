import images from '@@assets/images';

import { Qna, Review } from './types';

function getDummyReviewList(): Review[] {
  return [
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img03 },
    { rating: 4.5, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img03 },
    { rating: 3.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img01 },
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img02 },
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', img: images.meeting_img03 },
  ];
}

function getDummyQnaList(): Qna[] {
  return [
    {
      answer: '답변 완료 내용입니다.1',
      date: new Date(),
      question: {
        isLocked: true,
        title: '문의사항 입니다 1',
        content: '질문 내용입니다.1',
      },
      questionerId: 'kimj1234',
    },
    {
      date: new Date(),
      question: {
        isLocked: false,
        title: '문의사항 입니다 2',
        content: '질문 내용입니다.2',
      },
      questionerId: 'kimj1234',
    },
    {
      answer: '답변 완료 내용입니다.3',
      date: new Date(),
      question: {
        isLocked: false,
        title: '문의사항 입니다 3',
        content: '질문 내용입니다.3',
      },
      questionerId: 'kimj1234',
    },
  ];
}

export { getDummyReviewList, getDummyQnaList };
