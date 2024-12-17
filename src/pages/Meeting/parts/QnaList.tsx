import React from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Pagination from '@@pages/Meeting/parts/Pagination';
import QnaListItem from '@@pages/Meeting/parts/QnaListItem';
import { Qna } from '@@pages/Meeting/types';

interface QnaListProps {
  qnaList: Qna[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const StyledQna = styled.div`
  textarea {
    resize: none;
    border: 2px solid ${COLORS.BORDER};
    padding: 12px;
    border-radius: 6px;
    height: 120px;
    margin-top: 20px;
  }

  .Btn {
    width: 20%;
    margin-top: 20px;
    border: 1px solid ${COLORS.MAIN};
  }
`;

const QnaList = React.forwardRef<HTMLDivElement, QnaListProps>(({ qnaList, currentPage, totalPages, onPageChange }, ref) => {
  return (
    <StyledQna>
      <div ref={ref} className='mv_detail'>
        <div className='detail_top'>
          <h4>
            Meet new people 문의 <em>(3)</em>
          </h4>
        </div>
        <Flex.Vertical>
          <Flex.Vertical gap={10}>
            <textarea placeholder='내용을 입력하세요.' />
            <label>
              <input type='checkbox' className='tw-mr-1' />
              비밀글로 등록하겠습니다.
            </label>
          </Flex.Vertical>
          <Flex.Vertical alignItems='center'>
            <Button.Medium className='Btn'>
              <Typography.MediumBody color={COLORS.WHITE}>작성하기</Typography.MediumBody>
            </Button.Medium>
          </Flex.Vertical>
        </Flex.Vertical>
        <div className='detail_list'>
          <ul>
            {qnaList.map((qna) => (
              <QnaListItem key={qna.questionerId} qna={qna} />
            ))}
          </ul>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </div>
    </StyledQna>
  );
});

export default QnaList;
