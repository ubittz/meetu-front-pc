interface Review {
  rating: number; // 별점(평점)
  name: string;
  date: string;
  content: string; // 리뷰 내용
  image: string;
}

interface Qna {
  answer?: string;
  date: Date;
  question: Question;
  questionerId: string; // 질문자 id
  answererId?: string; // 답변자 id
}

interface Question {
  isLocked: boolean; // 비밀글 여부
  title: string;
  content?: string; // 질문 내용
}

export type { Qna, Review };

import { FIND_CLASS_ORDER } from '@@stores/meeting/constants';
import { asType } from '@@types/common';

export type FindClassOrder = asType<typeof FIND_CLASS_ORDER>;