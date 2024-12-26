import { FIND_CLASS_ORDER } from '@@stores/meeting/constants';
import { asType } from '@@types/common';

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

export interface AddMeetingForm {
  id?: string;
  name: string;
  nameCheck: boolean;
  meetingCategory: string;
  mainAddress?: string;
  detailAddress?: string;
  cost: number;
  limit: number;
  processDate: string;
  intro?: string;
  description?: string;
  processGuide?: string;
  item?: string;
  file: string;
  isImageNotChange?: boolean;
}

export type { Qna, Review };

export type FindClassOrder = asType<typeof FIND_CLASS_ORDER>;

export type MeetingPageType = 'create' | 'edit';
