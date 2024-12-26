import { useState } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { applyHostSchema } from '@@constants/scheme';
import ApplyHostWriteFormContent from '@@pages/MyPage/parts/ApplyHostWriteFormContent';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { createHostRequest, createHostSuccess, createHostFailure } from '@@stores/user/reducer';
import { HostAddDTO } from '@@stores/user/types';

const initialValues: HostAddDTO = {
  name: '',
  tel: '',
  email: '',
  category1: '',
  question: '',
  bank: '',
  accNo: '',
};

function ApplyHostWrite() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (values: HostAddDTO) => {
    dispatch(createHostRequest(values));
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useActionSubscribe({
    type: createHostSuccess.type,
    callback: () => {
      openPopup();
    },
  });

  useActionSubscribe({
    type: createHostFailure.type,
    callback: (error: any) => {
      console.log('에러', error);
      alert(error);
    },
  });

  return (
    <div id='wrap'>
      <Header />
      {/* <!-- container 영역 시작 --> */}
      <main className='container'>
        <div className='member_inner'>
          <h2>호스트 등록 신청</h2>
          <p className='caption'>
            <strong className='active'>호스트 등록 정보 입력</strong>
          </p>
          {/* <!-- 호스트 등록 신청 정보입력 form 영역 시작 --> */}
          <fieldset>
            <legend>내 정보 수정 정보입력 영역</legend>
            <div className='join_wrap'>
              <h3 className='join_tit'>정보 입력</h3>
              <Formik initialValues={initialValues} validationSchema={applyHostSchema} onSubmit={handleSubmit}>
                {/* <!-- 정보입력 영역 시작 --> */}
                <ApplyHostWriteFormContent />
              </Formik>
            </div>
          </fieldset>
          <Popup
            visible={isPopupOpen}
            onConfirmLeft={() => navigate(pathGenerator(PAGES.MAIN))}
            onConfirmRight={closePopup}
            confirmTextLeft='홈으로'
            confirmTextRight='확인'
            title='호스트 등록 신청'
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>호스트 등록 신청이 완료되었습니다.</Typography.SmallTitle>
            </Flex.Horizontal>
          </Popup>{' '}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ApplyHostWrite;