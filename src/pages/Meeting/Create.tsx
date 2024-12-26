import { useDispatch } from 'react-redux';

import { AddMeetingForm } from '@@pages/Meeting/types';
import { sanitizeAddMeetingForm } from '@@pages/Meeting/utils';
import { createMeetingRequest } from '@@stores/meeting/reducer';

import MeetingForm from './Form';

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
  const dispatch = useDispatch();

  const handleSubmit = (form: AddMeetingForm) => {
    const sanitizedValues = sanitizeAddMeetingForm(form);
    dispatch(createMeetingRequest(sanitizedValues));
  };

  return <MeetingForm formType='create' initialValues={initialValues} onSubmit={handleSubmit} />;
}

export default MeetingCreate;
