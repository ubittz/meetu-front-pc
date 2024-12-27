import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import CheckAuthorization from '@@components/CheckAuthorization';
import UserPopup from '@@components/Popup/UserPopup';
import Pagination from '@@pages/Meeting/parts/Pagination';
import ReviewListItem from '@@pages/Meeting/parts/ReviewListItem';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { useReviewList } from '@@stores/meeting/hooks';
import { createReviewRequest, createReviewSuccess, createReviewFailure } from '@@stores/meeting/reducer';
import { ReviewAddDTO } from '@@stores/meeting/types';

import ReviewPopup from './ReviewPopup';

interface ReviewListProps {
  averageScore: number;
  isHost: boolean;
}

const ReviewList = React.forwardRef<HTMLDivElement, ReviewListProps>(({ averageScore, isHost }, ref) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {
    content: reviewList,
    page: reviewPage,
    mutate,
  } = useReviewList({
    page: currentReviewPage,
    id: params.id ?? '',
  });

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const createReview = (content: ReviewAddDTO) => {
    if (!content) return;
    dispatch(createReviewRequest(content));
  };

  useActionSubscribe({
    type: createReviewSuccess.type,
    callback: () => {
      mutate();
      closePopup();
    },
  });

  useActionSubscribe({
    type: createReviewFailure.type,
    callback: () => {
      alert('리뷰 작성에 실패했습니다.');
    },
  });

  return (
    <div ref={ref} className='mv_detail'>
      <div className='detail_top'>
        <h4>
          Meet new people 리뷰 <em>({averageScore})</em>
        </h4>
        <div className='star_area'>
          <span className='star' style={{ width: `${averageScore * 20}%` }}></span>
        </div>
        <CheckAuthorization>
          {!isHost && (
            <button className='btn' onClick={openPopup}>
              리뷰 작성하기
            </button>
          )}
        </CheckAuthorization>
      </div>
      <div className='detail_list'>
        <ul>{reviewList?.map((review) => <ReviewListItem key={review.reviewNo} review={review} />)}</ul>
        <Pagination currentPage={reviewPage.current + 1} totalPages={reviewPage.lastPage} onPageChange={setCurrentReviewPage} />
      </div>

      <UserPopup
        visible={isPopupOpen}
        title='리뷰 작성'
        onCancel={closePopup}
        width='804px'
        height='800px'
        transform='translateX(-50%) translateY(-55%)'
      >
        <ReviewPopup onSubmit={createReview} onCancel={closePopup} meetingId={params.id ?? ''} />
      </UserPopup>
    </div>
  );
});

export default ReviewList;
