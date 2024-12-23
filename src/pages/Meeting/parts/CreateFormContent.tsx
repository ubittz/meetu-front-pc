import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import InputField from '@@components/InputField';
import { useAddMeetingForm } from '@@pages/Meeting/hooks';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { DISTRICT } from '@@stores/meeting/constants';

function CreateFormContent() {
  const { errors, selectedFile, setFieldValue, handleCheckMeetingName, handleFileChange } = useAddMeetingForm();

  return (
    <Form className='input_wrap'>
      <InputField
        name='name'
        label='모임명'
        type='text'
        placeholder='모임명을 입력해주세요.'
        required
        children={
          <button type='button' className='btn' onClick={handleCheckMeetingName}>
            중복체크
          </button>
        }
      />
      <div className='input_area'>
        <label htmlFor='mc_category'>
          카테고리<strong className='required'>*</strong>
        </label>
        <select name='meetingCategory' id='meetingCategory' onChange={(e) => setFieldValue('meetingCategory', e.target.value)}>
          <option value='' selected disabled hidden>
            선택하기
          </option>
          <option value='ART'>아트</option>
          <option value='READING'>독서</option>
          <option value='COOKING'>쿠킹</option>
          <option value='CYCLING'>사이클</option>
          <option value='EXERCISE'>운동</option>
          <option value='HIKING'>등산</option>
          <option value='MUSIC'>음악</option>
          <option value='PHOTOGRAPHY'>사진</option>
          <option value='TECHNOLOGY'>기술</option>
          <option value='WINE'>와인</option>
        </select>
        {errors.meetingCategory && <p className='txt_error'>카테고리를 선택해주세요.</p>}
      </div>
      {/* 썸네일 첨부 */}
      <div className='input_area input_btn'>
        <label className='title'>
          대표 이미지
          <strong className='required'>*</strong>
        </label>
        <input type='file' id='file' className='input' accept='image/*' onChange={handleFileChange} />
        <input className={errors.file ? 'error' : ''} type='text' placeholder='이미지 파일을 선택해주세요.' value={selectedFile?.name} readOnly />
        <button type='button' className='btn' onClick={() => document.getElementById('file')?.click()}>
          파일 선택
        </button>
        {errors.file && <p className='txt_error'>이미지 파일을 선택해주세요.</p>}
      </div>
      <div className='input_area'>
        <label htmlFor='mc_address'>모임 장소</label>
        <select name='mainAddress' id='mainAddress' onChange={(e) => setFieldValue('mainAddress', e.target.value)}>
          <option value='' selected disabled hidden>
            선택하기
          </option>
          {Object.entries(DISTRICT).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <Field name='detailAddress' placeholder='상세주소를 입력해주세요.' />
      </div>
      <div className='input_area type_02'>
        <label htmlFor='mc_cost'>
          모임 참가비<strong className='required'>*</strong>
        </label>
        <Field className={errors.cost ? 'error' : ''} name='cost' placeholder='숫자만 입력해주세요.' required />
        <span className='txt'>원</span>
        {errors.cost && <p className='txt_error'>모임 참가비를 입력해주세요.</p>}
      </div>
      <div className='input_area type_02'>
        <label htmlFor='mc_number'>
          모임 정원<strong className='required'>*</strong>
        </label>
        <Field className={errors.limit ? 'error' : ''} name='limit' placeholder='숫자만 입력해주세요.' />
        <span className='txt'>명</span>
        {errors.limit && <p className='txt_error'>모임 정원을 입력해주세요.</p>}
      </div>
      <InputField name='processDate' label='모임 진행일' type='text' isDate placeholder='날짜를 선택해주세요.' required />
      <div className='input_area'>
        <label htmlFor='mc_intro'>모임 소개</label>
        <Field name='intro' placeholder='모임 소개글을 적어주세요. (최대 100byte)' />
      </div>
      <div className='input_area'>
        <label htmlFor='mc_intro'>모임 상세</label>
        <div className='editor'>
          <textarea
            className='editor_textarea'
            id='description'
            name='description'
            placeholder='모임 상세 내용을 입력해주세요.'
            onChange={(e) => setFieldValue('description', e.target.value)}
          />
        </div>
      </div>
      <div className='input_area'>
        <label htmlFor='mc_notice'>진행안내</label>
        <Field name='processGuide' placeholder='진행안내글을 작성해주세요.' />
      </div>
      <div className='input_area'>
        <label htmlFor='mc_notice02'>제공 / 준비물</label>
        <Field name='item' placeholder='제공 / 준비물을 작성해주세요.' />
      </div>

      <div className='btn_area type_02'>
        <Link to={pathGenerator(PAGES.MAIN)} className='btn form02'>
          취소
        </Link>
        <button type='submit' className='btn'>
          모임등록
        </button>
      </div>
    </Form>
  );
}

export default CreateFormContent;
