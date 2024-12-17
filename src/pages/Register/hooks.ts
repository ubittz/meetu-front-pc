import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import { RegisterForm } from '@@pages/Register/types';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  checkDuplicateEmailFailure,
  checkDuplicateEmailRequest,
  checkDuplicateEmailSuccess,
  checkDuplicateIdFailure,
  checkDuplicateIdRequest,
  checkDuplicateIdSuccess,
} from '@@stores/auth/reducer';

export const useRegisterForm = () => {
  const dispatch = useDispatch();
  const { values, setFieldValue } = useFormikContext<RegisterForm>();

  const handleClickCheckId = () => {
    dispatch(checkDuplicateIdRequest(values.userId));
  };

  const handleClickCheckEmail = () => {
    dispatch(checkDuplicateEmailRequest(values.email));
  };

  const handleConfirm = () => {
    console.log(values);
  };

  useActionSubscribe({
    type: checkDuplicateIdSuccess.type,
    callback: () => {
      alert('사용 가능한 아이디입니다.');
      setFieldValue('checkedId', true);
    },
  });

  useActionSubscribe({
    type: checkDuplicateIdFailure.type,
    callback: () => {
      alert('이미 사용중인 아이디입니다.');
      setFieldValue('checkedId', false);
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailSuccess.type,
    callback: () => {
      alert('사용 가능한 이메일입니다.');
      setFieldValue('checkedEmail', true);
    },
  });

  useActionSubscribe({
    type: checkDuplicateEmailFailure.type,
    callback: () => {
      alert('이미 사용중인 이메일입니다.');
      setFieldValue('checkedEmail', false);
    },
  });

  return {
    handleConfirm,
    handleClickCheckId,
    handleClickCheckEmail,
  };
};
