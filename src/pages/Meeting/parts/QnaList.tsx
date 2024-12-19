import React, { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Pagination from '@@pages/Meeting/parts/Pagination';
import QnaListItem from '@@pages/Meeting/parts/QnaListItem';
import { ContactAddDTO, ContactResponse } from '@@stores/meeting/types';

interface QnaListProps {
  meetingId: string;
  qnaList: ContactResponse[];
  page: {
    total: number;
    current: number;
    lastPage: number;
    limit: number;
  };
  onPageChange: (page: number) => void;
  onSubmit: (content: ContactAddDTO) => void;
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

const QnaList = React.forwardRef<HTMLDivElement, QnaListProps>(({ meetingId, qnaList, page, onPageChange, onSubmit }, ref) => {
  const [question, setQuestion] = useState<ContactAddDTO>({
    meetingId,
    description: '',
    secretStatus: false,
    contactAnswerStatus: false,
  });

  const handleSubmit = (content: ContactAddDTO) => {
    if (!content) return; // 질문이 비어있으면 요청하지 않음

    onSubmit(content);

    setQuestion({
      meetingId,
      description: '',
      secretStatus: false,
      contactAnswerStatus: false,
    }); // 요청 후 질문 초기화
  };

  return (
    <div ref={ref} className='mv_detail'>
      <div className='detail_top'>
        <h4>
          Meet new people 문의 <em>{`(${qnaList.length})`}</em>
        </h4>
      </div>
      <StyledQna>
        <Flex.Vertical gap={8}>
          <textarea
            placeholder='문의글을 입력해주세요'
            value={question.description}
            onChange={(e) => setQuestion((prev) => ({ ...prev, description: e.target.value }))}
          />
          <label>
            <Flex.Horizontal gap={8}>
              <input
                type='checkbox'
                className='tw-mb-[2px]'
                checked={question.secretStatus}
                onChange={() => setQuestion((prev) => ({ ...prev, secretStatus: !prev.secretStatus }))}
              />
              비밀글로 등록하겠습니다.
            </Flex.Horizontal>
          </label>

          <Flex.Vertical alignItems='center'>
            <Button.Medium className='btn' onClick={() => handleSubmit(question)}>
              작성완료
            </Button.Medium>
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
