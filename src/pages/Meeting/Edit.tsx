import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import MeetingForm from '@@pages/Meeting/Form';
import { AddMeetingForm } from '@@pages/Meeting/types';
import { sanitizeEditMeetingForm } from '@@pages/Meeting/utils';
import { useMeetingDetail } from '@@stores/meeting/hooks';
import { editMeetingRequest } from '@@stores/meeting/reducer';

function MeetingEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useMeetingDetail(id ?? ''); // edit인 경우에만 요청하도록 수정

  const onSubmit = (form: AddMeetingForm) => {
    const sanitizedValues = sanitizeEditMeetingForm(form);
    dispatch(editMeetingRequest(sanitizedValues));
  };

  const initialValues: AddMeetingForm = {
    id: data?.id,
    name: data?.name ?? '',
    nameCheck: data?.name ? true : false,
    meetingCategory: data?.category ? data.category : '',
    mainAddress: data?.mainPlace ?? '',
    detailAddress: data?.detailPlace ?? '',
    cost: data?.cost ?? 0,
    limit: data?.limit ?? 0,
    processDate: data?.processDate ?? '',
    intro: data?.intro ?? '',
    description: data?.descript ?? '',
    processGuide: data?.processGuide ?? '',
    item: data?.item ?? '',
    file: data?.imageUrl ?? '',
    isImageNotChange: true,
  };
  return <MeetingForm formType='edit' initialValues={initialValues} onSubmit={onSubmit} />;
}

export default MeetingEdit;
