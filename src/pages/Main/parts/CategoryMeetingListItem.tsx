import images from '@@assets/images';
import { Meeting } from '@@types/meeting';

interface CategoryMeetingListItemProps {
  meeting: Meeting;
}

function CategoryMeetingListItem({ meeting }: CategoryMeetingListItemProps) {
  return (
    <div className='swiper-slide'>
      <picture className='img_area'>
        <source srcSet={meeting.imageUrl ?? images.ctg_img03} media='screen and (min-width: 981px)' />
        <img src={meeting.imageUrl ?? images.ctg_img03} alt={meeting.title} />
      </picture>
      <div className='txt_area'>
        <h4 className='tit'>{meeting.title}</h4>
        <p className='txt'>
          <span>{meeting.description}</span>
          <span>초보자도 환영입니다!</span>
        </p>
        <p className='price'>{meeting.price.toLocaleString()}원</p>
      </div>
    </div>
  );
}

export default CategoryMeetingListItem;
