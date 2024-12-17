import { useState } from 'react';

import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import Footer from '@@components/Footer';
import Header from '@@components/Header';
import InputField from '@@components/InputField';
import ButtonInputField from '@@components/InputField/ButtonInputField';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { createMeetingSchema } from '@@constants/scheme';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { CreateMeetingFormValues } from './types';

function MeetingCreate() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const initialValues: CreateMeetingFormValues = {
    mc_name: '',
    mc_category: '',
    mc_address: '',
    mc_cost: '',
    mc_number: '',
    mc_date: '',
    mc_intro: '',
    mc_notice: '',
    mc_notice02: '',
  };

  const handleSubmit = (values: CreateMeetingFormValues) => {
    console.log('모임 등록:', values);
    openPopup(); // 폼 제출 시 팝업 열기
  };

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

        <section className='member_inner meeting'>
          <Formik initialValues={initialValues} validationSchema={createMeetingSchema} onSubmit={handleSubmit}>
            {({ setFieldValue, values }) => (
              <Form>
                <fieldset>
                  <legend>모임 개설 정보 입력</legend>
                  <div className='join_wrap type_srch'>
                    <h3 className='join_tit'>
                      기본정보
                      <span className='caption'>
                        <strong className='required'>*</strong>표기는 필수 항목입니다.
                      </span>
                    </h3>
                    <div className='input_wrap'>
                      <ButtonInputField
                        name='mc_name'
                        label='모임명'
                        placeholder='모임명을 입력해주세요.'
                        required
                        buttonText='중복체크'
                        onButtonClick={() => {}}
                      />
                      <InputField
                        name='mc_category'
                        label='카테고리'
                        placeholder='카테고리를 선택해주세요.'
                        required
                        textfieldHidden
                        additionalClassName='type_02'
                        additionalElement={
                          <select
                            name='mc_category'
                            id='mc_category'
                            required
                            onChange={(e) => {
                              setFieldValue('mc_category', e.target.value);
                            }}
                          >
                            <option value=''>선택하기</option>
                            <option value='art'>아트</option>
                            <option value='reading'>독서</option>
                            <option value='cooking'>쿠킹</option>
                            <option value='cycling'>사이클</option>
                            <option value='exercise'>운동</option>
                            <option value='hiking'>등산</option>
                            <option value='music'>음악</option>
                            <option value='photography'>사진</option>
                            <option value='technology'>기술</option>
                            <option value='wine'>와인</option>
                          </select>
                        }
                      />
                      <ButtonInputField
                        name='mc_address'
                        label='모임 장소'
                        placeholder='상세주소를 입력해주세요.'
                        buttonText='선택하기'
                        onButtonClick={() => {}}
                      />
                      <InputField
                        name='mc_cost'
                        label='모임 참가비'
                        placeholder='숫자만 입력해주세요.'
                        required
                        additionalClassName='type_02'
                        additionalElement={<span className='txt'>원</span>}
                      />
                      <InputField
                        name='mc_number'
                        label='모임 정원'
                        placeholder='숫자만 입력해주세요.'
                        additionalClassName='type_02'
                        additionalElement={<span className='txt'>명</span>}
                      />
                      <InputField name='mc_date' label='모임 진행일' placeholder='날짜를 선택해주세요.' required additionalClassName='type_date' />
                      <div className='input_area'>
                        <label htmlFor='mc_intro'>모임 소개</label>
                        <input type='text' name='mc_intro' id='mc_intro' placeholder='모임 소개글을 적어주세요. (최대 100byte)' />
                      </div>
                      <InputField name='mc_notice' label='진행안내' placeholder='진행안내글을 작성해주세요.' />
                      <InputField name='mc_notice02' label='제공 / 준비물' placeholder='제공 / 준비물을 작성해주세요.' />
                    </div>

                    <div className='btn_area type_02'>
                      <Link to={pathGenerator(PAGES.MAIN)} className='btn form02'>
                        취소
                      </Link>
                      <button
                        type='button'
                        className='btn'
                        onClick={() => {
                          handleSubmit(values);
                        }}
                      >
                        모임등록
                      </button>
                    </div>
                  </div>
                </fieldset>
              </Form>
            )}
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
