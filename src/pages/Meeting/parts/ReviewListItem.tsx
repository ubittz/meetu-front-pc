import { Review } from '@@pages/Meeting/types';

interface ReviewListItemProps {
  key: number;
  review: Review;
}

const ReviewListItem = ({ key, review }: ReviewListItemProps) => {
  return (
    <li key={key}>
      <div className='list_top'>
        <div className='star_wrap'>
          <strong>{review.rating}</strong>
          <div className='star_area'>
            <span className='star' style={{ width: `${review.rating * 20}%` }}></span>
          </div>
        </div>
        <p className='name'>{review.name}</p>
        <p className='date'>{review.date}</p>
      </div>
      <div className='list_content'>
        <p>
          {review.content}
          <br />
          {review.content}
        </p>
        <div className='img_area'>
          <img src={review.img} alt='리뷰 이미지' />
        </div>
      </div>
    </li>
  );
};

export default ReviewListItem;
