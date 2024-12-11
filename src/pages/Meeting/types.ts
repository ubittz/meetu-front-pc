type MeetingType = 'art' | 'reading' | 'cooking' | 'cycling' | 'exercise' | 'hiking' | 'music' | 'photography' | 'technology' | 'wine';

interface Meeting {
  id: number;
  image?: string;
  title: string;
  location: string;
  price: number;
  description: string;
  isHot?: boolean;
  type: MeetingType;
}

interface Review {
  rating: number;
  name: string;
  date: string;
  content: string;
  img: string;
}

interface Qna {
  answer?: string;
  date: Date;
  question: Question;
  questionerId: string; // 질문자 id
  answererId?: string; // 답변자 id
}

interface Question {
  isLocked: boolean;
  title: string;
  content?: string;
}

export type { MeetingType, Meeting, Qna, Review };
