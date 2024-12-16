import React from 'react';

import Pagination from '@@pages/Meeting/parts/Pagination';
import QnaListItem from '@@pages/Meeting/parts/QnaListItem';
import { Qna } from '@@pages/Meeting/types';

interface QnaListProps {
  qnaList: Qna[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const QnaList = React.forwardRef<HTMLDivElement, QnaListProps>(({ qnaList, currentPage, totalPages, onPageChange }, ref) => {
  return (
    <div ref={ref} className='mv_detail'>
      <div className='detail_top'>
        <h4>
          Meet new people 문의 <em>(3)</em>
        </h4>
        <button className='btn'>문의글 작성하기</button>
      </div>
      <div className='detail_list'>
        <ul>
          {qnaList.map((qna) => (
            <QnaListItem key={qna.questionerId} qna={qna} />
          ))}
        </ul>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
});

export default QnaList;
