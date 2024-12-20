import { formatDate } from '@@pages/Meeting/utils';
import { ReviewListResponse } from '@@stores/meeting/types';

interface ReviewListItemProps {
  key: number;
  review: ReviewListResponse;
}

const ReviewListItem = ({ key, review }: ReviewListItemProps) => {
  return (
    <li key={key}>
      <div className='list_top'>
        <div className='star_wrap'>
          <strong>{review.reviewScore}</strong>
          <div className='star_area'>
            <span className='star' style={{ width: `${review.reviewScore * 20}%` }}></span>
          </div>
        </div>
        <p className='name'>{review.userId}</p>
        <p className='date'>{formatDate(review.createDatetime)}</p>
      </div>
      <div className='list_content'>
        <p>
          {review.reviewDescript}
          <br />
          {review.reviewDescript}
        </p>
        <div className='img_area'>
          <img src={review.reviewDescript} alt='리뷰 이미지' />
        </div>
      </div>
    </li>
  );
};

export default ReviewListItem;
