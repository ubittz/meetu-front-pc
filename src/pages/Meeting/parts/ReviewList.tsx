import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import UserPopup from '@@components/Popup/UserPopup';
import Pagination from '@@pages/Meeting/parts/Pagination';
import ReviewListItem from '@@pages/Meeting/parts/ReviewListItem';
import { createReviewRequest } from '@@stores/meeting/reducer';
import { ReviewAddDTO, ReviewListResponse } from '@@stores/meeting/types';

import ReviewPopup from './ReviewPopup';

interface ReviewListProps {
  meetingId: string;
  reviews: ReviewListResponse[];
  averageScore: number;
  page: {
    total: number;
    current: number;
    lastPage: number;
    limit: number;
  };
  onPageChange: (page: number) => void;
}

const ReviewList = React.forwardRef<HTMLDivElement, ReviewListProps>(({ meetingId, reviews, averageScore, page, onPageChange }, ref) => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const createReview = (content: ReviewAddDTO) => {
    dispatch(createReviewRequest(content));
    closePopup();
  };

  return (
    <div ref={ref} className='mv_detail'>
      <div className='detail_top'>
        <h4>
          Meet new people 리뷰 <em>({averageScore})</em>
        </h4>
        <div className='star_area'>
          <span className='star' style={{ width: `${averageScore * 20}%` }}></span>
        </div>
        <button className='btn' onClick={openPopup}>
          리뷰 작성하기
        </button>
      </div>
      <div className='detail_list'>
        <ul>
          {reviews.map((review) => (
            <ReviewListItem key={review.reviewNo} review={review} />
          ))}
        </ul>
        <Pagination currentPage={page.current} totalPages={page.lastPage} onPageChange={onPageChange} />
      </div>

      <UserPopup
        visible={isPopupOpen}
        title='리뷰 작성'
        onCancel={closePopup}
        width='804px'
        height='800px'
        transform='translateX(-50%) translateY(-55%)'
      >
        <ReviewPopup onSubmit={createReview} onCancel={closePopup} meetingId={meetingId} />
      </UserPopup>
    </div>
  );
});

export default ReviewList;
