import React, { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { ReviewAddDTO } from '@@stores/meeting/types';

import { StarIcon } from '../icons';

const StyledReviewPopup = styled(Flex.Vertical)`
  .CloseBtn {
    width: 290px;
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.BORDER};
  }

  .HomeBtn {
    width: 290px;
  }

  textarea {
    resize: none;
    padding: 10px;
  }

  textarea::placeholder {
    text-align: center;
    padding-top: 9vh;
  }

  .FileBtn {
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.MAIN};
    width: 20%;
    position: relative;
  }

  .FileInput {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .ImagePreview {
    margin-top: 10px;
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 10px;
  }

  .StarContainer {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .StarButton {
    padding: 8px;
    background-color: ${COLORS.WHITE};
    border: 2px solid ${COLORS.BORDER};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    color: ${COLORS.BORDER};

    &.selected {
      border-color: ${COLORS.MAIN};
      color: ${COLORS.WHITE};
    }
  }
`;

interface ReviewPopupProps {
  onSubmit: (content: ReviewAddDTO) => void;
  onCancel: () => void;
  meetingId: string;
}

const ReviewPopup = ({ onSubmit, onCancel, meetingId }: ReviewPopupProps) => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const [content, setContent] = useState<ReviewAddDTO>({
    meetingId: meetingId,
    score: 5,
    description: '',
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      const newImagePreviews: string[] = [];

      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            newImagePreviews.push(reader.result as string);
            if (newImagePreviews.length === newFiles.length) {
              setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleStarClick = (value: number) => {
    setContent({ ...content, score: value });
  };

  return (
    <StyledReviewPopup>
      <Flex.Vertical gap={30}>
        <Flex.Horizontal gap={20}>
          {[5, 4, 3, 2, 1].map((value) => (
            <div key={value} className={`StarButton ${content.score === value ? 'selected' : ''}`} onClick={() => handleStarClick(value)}>
              {[...Array(value)].map((_, index) => (
                <StarIcon key={index} style={{ fill: content.score >= value ? '#FDCB1A' : '#E0E0E0' }} />
              ))}
            </div>
          ))}
        </Flex.Horizontal>

        <textarea
          placeholder='리뷰 내용을 작성해주세요.'
          className='tw-h-52'
          onChange={(e) => setContent({ ...content, description: e.target.value })}
        />
        <Flex.Vertical>
          <Button.Medium className='FileBtn'>
            <Typography.MediumBody color={COLORS.MAIN}>파일 업로드</Typography.MediumBody>
            <input type='file' accept='image/*,video/*,.pdf' className='FileInput' onChange={handleFileChange} multiple />
          </Button.Medium>
        </Flex.Vertical>
        <Flex.Horizontal>
          {imagePreviews.map((preview, index) => (
            <img key={index} src={preview} alt={`파일 미리보기 ${index}`} className='ImagePreview' />
          ))}
        </Flex.Horizontal>

        <Flex.Horizontal gap={8}>
          <Button.Large onClick={onCancel} className='CloseBtn'>
            <Typography.MediumBody>닫기</Typography.MediumBody>
          </Button.Large>
          <Button.Large className='HomeBtn' onClick={() => onSubmit(content)}>
            <Typography.MediumBody color={COLORS.WHITE}>확인</Typography.MediumBody>
          </Button.Large>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledReviewPopup>
  );
};

export default ReviewPopup;
