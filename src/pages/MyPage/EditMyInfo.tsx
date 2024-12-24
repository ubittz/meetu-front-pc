import { useEffect, useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { editMyInfoSchema } from '@@constants/scheme';
import EditMyInfoFormContent from '@@pages/MyPage/parts/EditMyInfoFormContent';
import { EditMyInfoForm } from '@@pages/MyPage/types';
import { sanitizeEditForm } from '@@pages/MyPage/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  changeProfileFailure,
  changeProfileRequest,
  changeProfileSuccess,
  fetchMeRequest,
  userEditFailure,
  userEditRequest,
  userEditSuccess,
} from '@@stores/auth/reducer';

type RequestStatus = 'idle' | 'failure' | 'success';

function EditMyInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const me = useAppState((state) => state.auth.me);

  const [visible, setVisible] = useState<boolean>(false);
  const [content, setContent] = useState<string>();
  const [requestStatus, setRequestStatus] = useState<{ image: RequestStatus; profile: RequestStatus }>({
    image: 'idle',
    profile: 'idle',
  });
  const [editType, setEditType] = useState<'success' | 'failure'>('success');

  const handleSubmit = (form: EditMyInfoForm) => {
    if (form.image && typeof form.image !== 'string') {
      dispatch(changeProfileRequest(form.image));
    } else {
      setRequestStatus({ ...requestStatus, image: 'success' });
    }
    dispatch(userEditRequest(sanitizeEditForm(form)));
  };

  const closePopup = () => {
    if (editType === 'success') {
      dispatch(fetchMeRequest());
      navigate(pathGenerator(PAGES.MYPAGE));
    } else {
      setVisible(false);
    }
  };

  useActionSubscribe({
    type: userEditSuccess.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, profile: 'success' });
    },
  });

  useActionSubscribe({
    type: userEditFailure.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, profile: 'failure' });
      setVisible(true);
      setEditType('failure');
    },
  });

  useActionSubscribe({
    type: changeProfileSuccess.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, image: 'success' });
    },
  });

  useActionSubscribe({
    type: changeProfileFailure.type,
    callback: () => {
      setRequestStatus({ ...requestStatus, image: 'failure' });
    },
  });

  useEffect(() => {
    const values = Object.values(requestStatus);

    if (values.includes('idle')) {
      return;
    } else if (values.includes('failure')) {
      setEditType('failure');
      setContent('회원정보 수정을 실패했습니다.');
    } else {
      setEditType('success');
      setContent('회원정보 수정을 완료했습니다.');
    }

    setVisible(true);
  }, [requestStatus, setContent, setVisible]);

  if (!me) {
    return null;
  }

  const initialValues: EditMyInfoForm = {
    id: me.id ?? '',
    checkedEmail: false,
    image: me.imageUrl,
    description: me.userDescription,
  };

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <div className='member_inner'>
          <h2>내 정보 수정</h2>
          <p className='caption'>
            <strong className='active'>내 정보 수정</strong>
          </p>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={editMyInfoSchema}>
            <EditMyInfoFormContent />
          </Formik>
          {/* <!-- 내정보 수정 결과 팝업 시작 --> */}
          <Popup
            visible={visible}
            onConfirmLeft={() => navigate(pathGenerator(PAGES.MAIN))}
            onConfirmRight={closePopup}
            confirmTextLeft='홈으로'
            confirmTextRight='확인'
            title='내 정보 수정'
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>{content}</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
          {/* <!-- 내정보 수정 결과 팝업 종료 --> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EditMyInfo;
