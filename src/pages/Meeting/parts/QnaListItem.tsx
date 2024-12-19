import { ContactResponse } from '@@stores/meeting/types';

interface QnaListItemProps {
  qna: ContactResponse;
}

function QnaListItem({ qna }: QnaListItemProps) {
  return (
    <li>
      <div className='list_top'>
        <p className={`answer${qna.answerStatus ? ' complete' : ''}`}>{qna.answerStatus ? '답변 완료' : '답변 대기'}</p>
        <p className='date'>{qna.createDatetime.toLocaleDateString()}</p>
      </div>
      <div className='list_content'>
        {qna.secretStatus && <p className='answer lock'>비밀글 입니다.</p>}
        {!qna.secretStatus && <p className='answer'>{qna.descript}</p>}
        <p className='name'>{qna.userId.length > 4 ? qna.userId.slice(0, 4) + '*'.repeat(qna.userId.length - 4) : qna.userId}</p>
      </div>
    </li>
  );
}

export default QnaListItem;
