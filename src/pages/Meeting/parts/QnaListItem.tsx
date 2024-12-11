import { Qna } from '../types';

interface QnaListItemProps {
  qna: Qna;
}

function QnaListItem({ qna }: QnaListItemProps) {
  return (
    <li>
      <div className='list_top'>
        <p className={`answer${qna.answer ? ' complete' : ''}`}>{qna.answer ? '답변 완료' : '답변 대기'}</p>
        <p className='date'>{qna.date.toLocaleDateString()}</p>
      </div>
      <div className='list_content'>
        {qna.question.isLocked && <p className='answer lock'>비밀글 입니다.</p>}
        {!qna.question.isLocked && <p className='answer'>{qna.question.title}</p>}
        <p className='name'>
          {qna.questionerId.length > 4 ? qna.questionerId.slice(0, 4) + '*'.repeat(qna.questionerId.length - 4) : qna.questionerId}
        </p>
      </div>
    </li>
  );
}

export default QnaListItem;
