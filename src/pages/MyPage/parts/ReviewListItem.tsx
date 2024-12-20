import { useState } from 'react';

import images from '@@assets/images';
import { Review } from '@@pages/MyPage/types';

interface ReviewListItemProps {
  review: Review;
}

function ReviewListItem({ review }: ReviewListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className='img_area'>
        <img src={images.good_img02} alt='상품 이미지1' />
      </div>
      <div className='txt_area'>
        <h4 className='tit'>{review.meetingTitle}</h4>
        <div className='star_wrap'>
          <strong>{review.rating}</strong>
          <div className='star_area'>
            <span className='star' style={{ width: '100%' }}></span>
          </div>
        </div>
        <p className={`txt ${isOpen ? '-open' : ''}`} onClick={toggleOpen}>
          {review.content}
        </p>
        <div className='txt_btn'>
          <button type='button' className='btn'>
            더보기
          </button>
        </div>
        <div className='user_info'>
          <div className='img_area'>
            <img src={images.user_img} alt='이용자 이미지' />
          </div>
          <p className='ui_txt'>
            <strong>
              {review.user.nickname.length > 5
                ? review.user.nickname.slice(0, 5) + '*'.repeat(review.user.nickname.length - 5)
                : review.user.nickname}
            </strong>
            <span>{review.createdAt}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default ReviewListItem;
