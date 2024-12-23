import { useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { createMeetingSchema } from '@@constants/scheme';
import CreateFormContent from '@@pages/Meeting/parts/CreateFormContent';
import { AddMeetingForm } from '@@pages/Meeting/types';
import { sanitizeAddMeetingForm } from '@@pages/Meeting/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { createMeetingRequest, createMeetingSuccess, createMeetingFailure } from '@@stores/meeting/reducer';

const initialValues: AddMeetingForm = {
  name: '',
  nameCheck: false,
  meetingCategory: '',
  mainAddress: '',
  detailAddress: '',
  cost: '',
  limit: '',
  processDate: '',
  intro: '',
  description: '',
  processGuide: '',
  item: '',
  file: '',
};

function MeetingCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (values: AddMeetingForm) => {
    const sanitizedValues = sanitizeAddMeetingForm(values);
    dispatch(createMeetingRequest(sanitizedValues));
    // console.log(sanitizedValues);
  };

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

  return (
    <div id='wrap'>
      <Header />
      <main className='container'>
        <section className='meeting_visual'>
          <div className='mv_inner'>
            <h2 className='title'>모임 개설하기</h2>
            <p>밋유에서 모임을 직접 개설하고, 새로운 만남을 시작하세요.</p>
          </div>
          <div className='visual_bg'></div>
        </section>
        {/* <!-- 배너 영역 종료 --> */}

        {/* <!-- 모임 개설 정보 입력 영역 시작 --> */}
        <section className='member_inner meeting'>
          {/* <!-- 모임 개설 정보입력 form 영역 시작 --> */}
          <Formik initialValues={initialValues} validationSchema={createMeetingSchema} onSubmit={handleSubmit}>
            <fieldset>
              <legend>모임 개설 정보입력 영역</legend>
              <div className='join_wrap type_srch'>
                <h3 className='join_tit'>
                  기본정보
                  <span className='caption'>
                    <strong className='required'>*</strong>표기는 필수 항목입니다.
                  </span>
                </h3>
                {/* <!-- 정보입력 영역 시작 --> */}

                <CreateFormContent />
              </div>
            </fieldset>
          </Formik>

          <Popup
            visible={isPopupOpen}
            onConfirmLeft={closePopup}
            onConfirmRight={() => navigate(pathGenerator(PAGES.MAIN))}
            confirmTextLeft='닫기'
            confirmTextRight='홈으로'
            title='모임 개설'
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>모임 개설 등록이 완료되었습니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MeetingCreate;
