import React, { useState } from 'react';

import UserPopup from '@@components/Popup/UserPopup';
import Pagination from '@@pages/Meeting/parts/Pagination';
import ReviewListItem from '@@pages/Meeting/parts/ReviewListItem';
import { ReviewListResponse } from '@@stores/meeting/types';

import ReviewPopup from './ReviewPopup';

interface ReviewListProps {
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

const ReviewList = React.forwardRef<HTMLDivElement, ReviewListProps>(({ reviews, averageScore, page, onPageChange }, ref) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
        <ReviewPopup onCancel={closePopup} />
      </UserPopup>
    </div>
  );
});

export default ReviewList;
