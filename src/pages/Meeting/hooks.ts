import { useState } from 'react';

import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import { AddMeetingForm } from '@@pages/Meeting/types';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { checkDuplicateMeetingNameRequest, checkDuplicateMeetingNameSuccess, checkDuplicateMeetingNameFailure } from '@@stores/meeting/reducer';

export const useAddMeetingForm = () => {
  const dispatch = useDispatch();
  const { values, setFieldValue, errors } = useFormikContext<AddMeetingForm>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleCheckMeetingName = () => {
    if (!values.name) {
      alert('모임명을 입력해주세요.');
      return;
    }
    dispatch(checkDuplicateMeetingNameRequest(values.name));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFieldValue('file', file);
    }
  };

  useActionSubscribe({
    type: checkDuplicateMeetingNameSuccess.type,
    callback: () => {
      alert('사용 가능한 모임명 입니다.');
      setFieldValue('nameCheck', true);
    },
  });

  useActionSubscribe({
    type: checkDuplicateMeetingNameFailure.type,
    callback: () => {
      alert('이미 사용 중인 모임명 입니다.');
      setFieldValue('nameCheck', false);
    },
  });

  return {
    setFieldValue,
    values,
    errors,
    selectedFile,
    handleCheckMeetingName,
    handleFileChange,
  };
};
