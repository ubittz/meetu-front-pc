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

export type { Qna, Review };
