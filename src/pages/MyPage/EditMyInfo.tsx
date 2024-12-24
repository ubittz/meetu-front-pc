import { useState } from 'react';

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
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const initialValues: EditMyInfoForm = {
  id: 'sampleId',
  name: 'sampleName',
  password: '',
  passwordCheck: '',
  birth: '1990-01-01',
  phone: '',
  email: '',
  checkedEmail: true,
};

function EditMyInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleEmailCheck(email: string) {
    console.log(email);
    return true;
  }

  function handleSubmit(values: EditMyInfoForm) {
    // dispatch(editMyInfoRequest(values));
    console.log(values);
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
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
            visible={isPopupOpen}
            onConfirmLeft={() => navigate(pathGenerator(PAGES.MAIN))}
            onConfirmRight={closePopup}
            confirmTextLeft='홈으로'
            confirmTextRight='확인'
            title='내 정보 수정'
            onCancel={closePopup}
          >
            <Flex.Horizontal className='tw-justify-center'>
              <Typography.SmallTitle>내 정보 변경이 완료되었습니다.</Typography.SmallTitle>
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
