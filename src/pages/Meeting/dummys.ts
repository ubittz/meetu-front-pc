import images from '@@assets/images';
import { Meeting } from '@@types/meeting';

import { Qna, Review } from './types';

function getDummyMeetingList(): Meeting[] {
  return [
    {
      id: 1,
      title: '모임 제목 1',
      location: 'SEOUL',
      price: 10000,
      description: '모임 내용 1',
      isHot: true,
      type: 'art',
      createdAt: new Date(),
      imageUrl: images.meeting_img01,
      status: 'upcoming',
    },
    {
      id: 2,
      title: '모임 제목 2',
      location: 'BUSAN',
      price: 20000,
      description: '모임 내용 2',
      isHot: false,
      type: 'reading',
      createdAt: new Date(),
      imageUrl: images.meeting_img02,
      status: 'upcoming',
    },
    {
      id: 3,
      title: '모임 제목 3',
      location: 'DAEGU',
      price: 30000,
      description: '모임 내용 3',
      isHot: true,
      type: 'cooking',
      createdAt: new Date(),
      imageUrl: images.meeting_img03,
      status: 'upcoming',
    },
    {
      id: 4,
      title: '모임 제목 4',
      location: 'DAEGU',
      price: 30000,
      description: '모임 내용 4',
      isHot: false,
      type: 'cycling',
      createdAt: new Date(),
      imageUrl: images.meeting_img04,
      status: 'upcoming',
    },
    {
      id: 5,
      title: '모임 제목 5',
      location: 'SEOUL',
      price: 30000,
      description: '모임 내용 5',
      isHot: true,
      type: 'exercise',
      createdAt: new Date(),
      imageUrl: images.meeting_img01,
      status: 'upcoming',
    },
    {
      id: 6,
      title: '모임 제목 6',
      location: 'DAEGU',
      price: 30000,
      description: '모임 내용 6',
      isHot: false,
      type: 'hiking',
      createdAt: new Date(),
      imageUrl: images.meeting_img02,
      status: 'upcoming',
    },
    {
      id: 7,
      title: '모임 제목 7',
      location: 'SEOUL',
      price: 30000,
      description: '모임 내용 7',
      isHot: true,
      type: 'music',
      createdAt: new Date(),
      imageUrl: images.meeting_img03,
      status: 'upcoming',
    },
    {
      id: 8,
      title: '모임 제목 8',
      location: 'DAEGU',
      price: 30000,
      description: '모임 내용 8',
      isHot: false,
      type: 'photography',
      createdAt: new Date(),
      imageUrl: images.meeting_img04,
      status: 'upcoming',
    },
  ];
}

function getDummyReviewList(): Review[] {
  return [
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', image: images.meeting_img03 },
    { rating: 4.5, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', image: images.meeting_img03 },
    { rating: 3.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', image: images.meeting_img01 },
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', image: images.meeting_img02 },
    { rating: 5.0, name: 'kimj****', date: '2024. 09. 20', content: '리뷰내용', image: images.meeting_img03 },
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

export { getDummyReviewList, getDummyQnaList, getDummyMeetingList };
