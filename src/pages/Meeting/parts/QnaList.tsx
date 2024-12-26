import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Pagination from '@@pages/Meeting/parts/Pagination';
import QnaListItem from '@@pages/Meeting/parts/QnaListItem';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { useContactList } from '@@stores/meeting/hooks';
import { createContactRequest, createContactSuccess, createContactFailure } from '@@stores/meeting/reducer';
import { ContactAddDTO } from '@@stores/meeting/types';

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

const QnaList = React.forwardRef<HTMLDivElement, { isHost: boolean }>(({ isHost }, ref) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentQnaPage, setCurrentQnaPage] = useState(0);
  const [question, setQuestion] = useState<ContactAddDTO>({
    meetingId: params.id ?? '',
    description: '',
    secretStatus: false,
    contactAnswerStatus: false,
  });

  const {
    content: contactList,
    page: contactPage,
    mutate,
  } = useContactList({
    page: currentQnaPage,
    id: params.id ?? '',
  });

  const handleSubmit = (content: ContactAddDTO) => {
    if (!content) return; // 질문이 비어있으면 요청하지 않음
    dispatch(createContactRequest(content));
  };

  useActionSubscribe({
    type: createContactSuccess.type,
    callback: () => {
      mutate();
      setQuestion({
        meetingId: params.id ?? '',
        description: '',
        secretStatus: false,
        contactAnswerStatus: false,
      }); // 요청 후 질문 초기화
    },
  });

  useActionSubscribe({
    type: createContactFailure.type,
    callback: () => {
      alert('문의 작성에 실패했습니다.');
    },
  });

  return (
    <div ref={ref} className='mv_detail'>
      <div className='detail_top'>
        <h4>
          Meet new people 문의 <em>{`(${contactList?.length ?? 0})`}</em>
        </h4>
      </div>
      {!isHost && (
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
      )}
      <div className='detail_list'>
        <ul>{contactList?.map((contact) => <QnaListItem key={contact.no} qna={contact} />)}</ul>
        <Pagination currentPage={contactPage.current + 1} totalPages={contactPage.lastPage} onPageChange={setCurrentQnaPage} />
      </div>
    </div>
  );
});

export default QnaList;
