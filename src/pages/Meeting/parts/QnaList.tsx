import React from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Pagination from '@@pages/Meeting/parts/Pagination';
import QnaListItem from '@@pages/Meeting/parts/QnaListItem';
import { ContactResponse } from '@@stores/meeting/types';

interface QnaListProps {
  qnaList: ContactResponse[];
  page: {
    total: number;
    current: number;
    lastPage: number;
    limit: number;
  };
  onPageChange: (page: number) => void;
}

const StyledQna = styled.div`
  textarea {
    height: 120px;
    border-radius: 6px;
    padding: 12px;
    resize: none;
    margin-top: 20px;
  }

  .btn {
    width: 20%;
  }
`;

const QnaList = React.forwardRef<HTMLDivElement, QnaListProps>(({ qnaList, page, onPageChange }, ref) => {
  return (
    <div ref={ref} className='mv_detail'>
      <div className='detail_top'>
        <h4>
          Meet new people 문의 <em>(3)</em>
        </h4>
      </div>
      <StyledQna>
        <Flex.Vertical gap={8}>
          <textarea placeholder='문의글을 입력해주세요' />
          <label>
            <Flex.Horizontal gap={8}>
              <input type='checkbox' className='tw-mb-[2px]' />
              비밀글로 등록하겠습니다.
            </Flex.Horizontal>
          </label>

          <Flex.Vertical alignItems='center'>
            <Button.Medium className='btn'>작성완료</Button.Medium>
          </Flex.Vertical>
        </Flex.Vertical>
      </StyledQna>
      <div className='detail_list'>
        <ul>
          {qnaList.map((qna) => (
            <QnaListItem key={qna.no} qna={qna} />
          ))}
        </ul>
        <Pagination currentPage={page.current} totalPages={page.lastPage} onPageChange={onPageChange} />
      </div>
    </div>
  );
});

export default QnaList;
