import React, { useState } from 'react';

import UserPopup from '@@components/Popup/UserPopup';
import Pagination from '@@pages/Meeting/parts/Pagination';
import ReviewListItem from '@@pages/Meeting/parts/ReviewListItem';
import { Review } from '@@pages/Meeting/types';

import ReviewPopup from './ReviewPopup';

interface ReviewListProps {
  reviews: Review[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ReviewList = React.forwardRef<HTMLDivElement, ReviewListProps>(
  ({ reviews, currentPage, totalPages, onPageChange }, ref) => {
    const reviewAverage = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    };

    const closePopup = () => {
      setIsPopupOpen(false);
    };

    return (
      <div ref={ref} className="mv_detail">
        <div className="detail_top">
          <h4>
            Meet new people 리뷰 <em>({reviewAverage})</em>
          </h4>
          <div className="star_area">
            <span className="star" style={{ width: `${reviewAverage * 20}%` }}></span>
          </div>
          <button className="btn" onClick={openPopup}>
            리뷰 작성하기
          </button>
        </div>
        <div className="detail_list">
          <ul>
            {reviews.map((review, index) => (
              <ReviewListItem key={index} review={review} />
            ))}
          </ul>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>

        <UserPopup
          visible={isPopupOpen}
          title="리뷰 작성"
          onCancel={closePopup}
          width="804px"
          height="800px"
          transform="translateX(-50%) translateY(-55%)"
        >
          <ReviewPopup onCancel={closePopup} />
        </UserPopup>
      </div>
    );
  }
);

export default ReviewList;
