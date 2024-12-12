import images from '@@assets/images';
import Slider from '@@components/Slider';
import SliderItem from '@@components/SliderItem';
import { Meeting } from '@@types/meeting';

interface MeetingSwipeListProps {
  title: React.ReactNode;
  meetings: Meeting[];
}

function MeetingSwipeList({ title, meetings }: MeetingSwipeListProps) {
  const sliderItems = meetings.map((meeting) => (
    <SliderItem
      key={meeting.id}
      image={meeting.imageUrl ?? images.good_img01}
      title={meeting.title}
      price={`${meeting.price.toLocaleString()}원`}
      showContent={true}
    >
      <span>{meeting.description}</span>
    </SliderItem>
  ));

  return (
    <div className='meeting_inner'>
      <h3 className='main_tit tw-mb-10'>{title}</h3>

      {/* Slider로 슬라이드 구성 */}
      <Slider items={sliderItems} gap={40} slidesToShow={4.3} />
    </div>
  );
}

export default MeetingSwipeList;
