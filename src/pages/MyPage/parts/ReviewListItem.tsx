import { useState } from 'react';

import images from '@@assets/images';

interface ReviewItem {
  id: number;
  title: string; // 모임으로 대체 필요 (모임명)
  rating: number;
  content: string;
  createdAt: string;
  user: {
    id: number;
    nickname: string;
  };
}

interface ReviewListItemProps {
  review: ReviewItem;
}

export default function ReviewListItem({ review }: ReviewListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log('toggleOpen');
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className='img_area'>
        <img src={images.good_img02} alt='상품 이미지1' />
      </div>
      <div className='txt_area'>
        <h4 className='tit'>{review.title}</h4>
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
