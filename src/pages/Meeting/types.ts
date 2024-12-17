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

interface CreateMeetingFormValues {
  mc_name: string;
  mc_category: string;
  mc_address?: string;
  mc_cost: string;
  mc_number?: string;
  mc_date: string;
  mc_intro?: string;
  mc_notice?: string;
  mc_notice02?: string;
}

export type { Qna, Review, CreateMeetingFormValues };
