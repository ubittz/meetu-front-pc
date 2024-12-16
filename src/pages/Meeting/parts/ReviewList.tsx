import React from 'react';

import Pagination from '@@pages/Meeting/parts/Pagination';
import ReviewListItem from '@@pages/Meeting/parts/ReviewListItem';
import { Review } from '@@pages/Meeting/types';

interface ReviewListProps {
  reviews: Review[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ReviewList = React.forwardRef<HTMLDivElement, ReviewListProps>(({ reviews, currentPage, totalPages, onPageChange }, ref) => {
  const reviewAverage = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div ref={ref} className='mv_detail'>
      <div className='detail_top'>
        <h4>
          Meet new people 리뷰 <em>({reviewAverage})</em>
        </h4>
        <div className='star_area'>
          <span className='star' style={{ width: `${reviewAverage * 20}%` }}></span>
        </div>
      </div>
      <div className='detail_list'>
        <ul>
          {reviews.map((review, index) => (
            <ReviewListItem key={index} review={review} />
          ))}
        </ul>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
});

export default ReviewList;
