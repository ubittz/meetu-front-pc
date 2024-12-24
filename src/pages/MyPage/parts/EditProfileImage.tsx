import { ChangeEventHandler, useState } from 'react';

import { useFormikContext } from 'formik';
import styled from 'styled-components';

import Popup from '@@components/Popup';
import { COLORS } from '@@constants/colors';
import { DefaultUserIcon, PlusIcon } from '@@constants/icons';
import { EditMyInfoForm } from '@@pages/MyPage/types';
import { getImageURL } from '@@utils/file';

const StyledEditProfileImage = styled.div`
  display: flex;
  justify-content: center;

  .image__box {
    position: relative;
    width: 100px;
    height: 100px;

    .image__profile_plus {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: ${COLORS.GRAY_SCALE_300};
      border-radius: 50%;
    }

    .image__profile {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      & > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

function EditProfileImage() {
  const { values, setFieldValue } = useFormikContext<EditMyInfoForm>();

  const [visible, setVisible] = useState<boolean>(false);

  const imageURL = getImageURL(values.image);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file && file.size > 1024 * 1024) {
      setVisible(true);
    } else {
      setFieldValue('image', file);
    }
  };

  return (
    <StyledEditProfileImage>
      <Popup visible={visible} onConfirmRight={() => setVisible(false)} confirmTextRight='확인' onCancel={() => setVisible(false)}>
        1MB 이하의 이미지만 업로드해주세요.
      </Popup>
      <label className='image__box'>
        <input type='file' hidden onChange={handleChange} accept='image/*' size={1024 * 1024} />
        <div className='image__profile'>{imageURL ? <img src={imageURL} /> : <DefaultUserIcon />}</div>
        <div className='image__profile_plus'>
          <PlusIcon width='17' height='17' />
        </div>
      </label>
    </StyledEditProfileImage>
  );
}

export default EditProfileImage;
