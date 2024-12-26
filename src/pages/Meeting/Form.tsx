import { useState } from 'react';

import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { createMeetingSchema } from '@@constants/scheme';
import CreateFormContent from '@@pages/Meeting/parts/CreateFormContent';
import { AddMeetingForm, MeetingPageType } from '@@pages/Meeting/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { createMeetingSuccess, createMeetingFailure, editMeetingSuccess, editMeetingFailure } from '@@stores/meeting/reducer';

function MeetingForm({
  formType,
  initialValues,
  onSubmit,
}: {
  formType: MeetingPageType;
  initialValues: AddMeetingForm;
  onSubmit: (form: AddMeetingForm) => void;
}) {
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isEdit = formType === 'edit';

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useActionSubscribe({
    type: createMeetingSuccess.type,
    callback: () => {
      openPopup();
    },
  });

  useActionSubscribe({
    type: createMeetingFailure.type,
    callback: () => {
      alert('모임 생성에 실패했습니다.');
    },
  });

  useActionSubscribe({
    type: editMeetingSuccess.type,
    callback: () => {
      openPopup();
    },
  });

  useActionSubscribe({
    type: editMeetingFailure.type,
    callback: () => {
      alert('모임 수정에 실패했습니다.');
    },
  });

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='meeting_visual'>
          <div className='mv_inner'>
            <h2 className='title'>{isEdit ? '모임 수정하기' : '모임 개설하기'}</h2>
            {!isEdit && <p>밋유에서 모임을 직접 개설하고, 새로운 만남을 시작하세요.</p>}
          </div>
          <div className='visual_bg'></div>
        </section>
        {/* <!-- 배너 영역 종료 --> */}

        {/* <!-- 모임 개설 정보 입력 영역 시작 --> */}
        <section className='member_inner meeting'>
          {/* <!-- 모임 개설 정보입력 form 영역 시작 --> */}
          <Formik initialValues={initialValues} validationSchema={createMeetingSchema} onSubmit={onSubmit}>
            <fieldset>
              <legend>모임 개설 정보입력 영역</legend>
              <div className='join_wrap type_srch'>
                <h3 className='join_tit'>
                  {isEdit ? '모임 수정' : '모임 정보'}
                  <span className='caption'>
                    <strong className='required'>*</strong>표기는 필수 항목입니다.
                  </span>
                </h3>
                {/* <!-- 정보입력 영역 시작 --> */}

                <CreateFormContent isEdit={isEdit} />
              </div>
            </fieldset>
          </Formik>

          <Popup
            visible={isPopupOpen}
            onConfirmLeft={closePopup}
            onConfirmRight={() => navigate(pathGenerator(PAGES.MAIN))}
            confirmTextLeft='닫기'
            confirmTextRight='홈으로'
            title={isEdit ? '모임 수정' : '모임 개설'}
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>{isEdit ? '모임 수정이 완료되었습니다.' : '모임 개설이 완료되었습니다.'}</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MeetingForm;
