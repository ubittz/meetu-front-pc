import { Link } from 'react-router-dom';

import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

interface ResultPopupProps {
  title: string;
  message: string;
}

export default function ResultPopup({ title, message }: ResultPopupProps) {
  return (
    <div className='popup_layer'>
      <div className='popup_bg'></div>
      <div className='popup_inner'>
        <h3 className='popup_tit'>{title}</h3>
        <button className='btn close'>팝업 닫기</button>
        <div className='srch_result'>
          <p>{message}</p>
        </div>
        <div className='btn_area type_02'>
          <Link to={pathGenerator(PAGES.MAIN)} className='btn form02'>
            홈으로
          </Link>
          <Link to={pathGenerator(PAGES.MYPAGE)} className='btn'>
            확인
          </Link>
        </div>
      </div>
    </div>
  );
}
