import { useState } from 'react';

import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import InputField from '@@components/InputField';
import { useAddMeetingForm } from '@@pages/Meeting/hooks';
import { getCategoryString } from '@@pages/Meeting/utils';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { CATEGORY } from '@@stores/meeting/constants';
import { Category } from '@@stores/meeting/types';

const StyledImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function CreateFormContent({ isEdit }: { isEdit: boolean }) {
  const { errors, values, setFieldValue, handleCheckMeetingName } = useAddMeetingForm();
  const [previewUrl, setPreviewUrl] = useState<string | null>(values.file);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      setFieldValue('file', file);
      setFieldValue('isImageNotChange', false);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <Form className='input_wrap'>
      <>
        <InputField
          name='name'
          label='모임명'
          type='text'
          placeholder='모임명을 입력해주세요.'
          required
          disabled={isEdit}
          children={
            !isEdit && (
              <button type='button' className='btn' onClick={handleCheckMeetingName}>
                중복체크
              </button>
            )
          }
        />
      </>
      {isEdit ? (
        <InputField
          name='meetingCategory'
          label='카테고리'
          type='text'
          placeholder='카테고리를 입력해주세요.'
          value={getCategoryString(values.meetingCategory as Category)}
          required
          disabled
        />
      ) : (
        <>
          <div className='input_area'>
            <label htmlFor='mc_category'>
              카테고리<strong className='required'>*</strong>
            </label>
            <select name='meetingCategory' id='meetingCategory' onChange={(e) => setFieldValue('meetingCategory', e.target.value)}>
              <option value='' selected disabled hidden>
                선택하기
              </option>
              {Object.values(CATEGORY).map((category) => (
                <option value={category}>{getCategoryString(category)}</option>
              ))}
            </select>
            {errors.meetingCategory && <p className='txt_error'>카테고리를 선택해주세요.</p>}
          </div>
        </>
      )}

      <div className='input_area input_btn' style={{ paddingBottom: '30px' }}>
        <label className='title'>
          대표 이미지
          <strong className='required'>*</strong>
        </label>
        <input
          type='file'
          id='file'
          className='input'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleFileChange} // 파일 변경 핸들러 연결
        />
        <button type='button' className='btn' onClick={handleButtonClick}>
          파일 선택
        </button>
        {previewUrl && <StyledImagePreview alt='이미지 미리보기' src={previewUrl} />}
        {errors.file && <p className='txt_error'>이미지 파일을 선택해주세요.</p>}
      </div>

      <InputField name='mainAddress' label='모임 장소' type='text' placeholder='모임 장소를 입력해주세요.' required disabled={isEdit} />
      <div className='input_area' style={{ paddingTop: '10px' }}>
        <Field name='detailAddress' placeholder='상세주소를 입력해주세요.' disabled={isEdit} />
      </div>
      <div className='input_area type_02'>
        <label htmlFor='mc_cost'>
          모임 참가비<strong className='required'>*</strong>
        </label>
        <Field className={errors.cost ? 'error' : ''} name='cost' placeholder='숫자만 입력해주세요.' required disabled={isEdit} />
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
          {isEdit ? '모임수정' : '모임등록'}
        </button>
      </div>
    </Form>
  );
}

export default CreateFormContent;
