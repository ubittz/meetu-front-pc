import { useState } from 'react';

import { format } from 'date-fns';
import styled from 'styled-components';

import Typography from '@@components/Typography';
import { ReviewListResponse } from '@@stores/meeting/types';

interface ReviewListItemProps {
  review: ReviewListResponse;
}

const StyledEmptyReviewImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;

  & > p {
    font-size: 14px;
    text-align: center;
  }
`;

function ReviewListItem({ review }: ReviewListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className='img_area'>
        {review.imageUrls?.[0] ? (
          <img src={review.imageUrls?.[0]} alt='상품 이미지1' />
        ) : (
          <StyledEmptyReviewImage>
            <Typography.Caption>이미지가 존재하지 않습니다.</Typography.Caption>
          </StyledEmptyReviewImage>
        )}
      </div>
      <div className='txt_area'>
        <h4 className='tit'>{review.meetingName}</h4>
        <div className='star_wrap'>
          <strong>{review.reviewScore}</strong>
          <div className='star_area'>
            <span className='star' style={{ width: `${review.reviewScore * 20}%` }}></span>
          </div>
        </div>
        <p className={`txt ${isOpen ? '-open' : ''}`} onClick={toggleOpen}>
          {review.reviewDescript}
        </p>
        <div className='txt_btn'>
          <button type='button' className='btn'>
            더보기
          </button>
        </div>
        <div className='user_info'>
          <div className='img_area'>
            <img src={review.userImageUrl} alt='이용자 이미지' />
          </div>
          <p className='ui_txt'>
            <strong>{review.userId}</strong>
            <span>{format(review.createDatetime, 'yyyy. MM. dd')}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default ReviewListItem;
