import MeetingForm from './Form';
import { AddMeetingForm } from './types';

const initialValues: AddMeetingForm = {
  name: '',
  nameCheck: false,
  meetingCategory: '',
  mainAddress: '',
  detailAddress: '',
  cost: 0,
  limit: 0,
  processDate: '',
  intro: '',
  description: '',
  processGuide: '',
  item: '',
  file: '',
  isImageNotChange: true,
};

function MeetingCreate() {
  const handleSubmit = (form: AddMeetingForm) => {};

  return <MeetingForm formType='create' initialValues={initialValues} onSumbit={handleSubmit} />;
}

export default MeetingCreate;
