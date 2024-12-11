import images from '@@assets/images';
import { UserType } from '@@types/user';

interface InfoPopupProps {
  type: UserType;
}

function InfoPopup({ type }: InfoPopupProps) {
  return (
    <div className='popup_layer'>
      {/* 기본 숨김처리, 노출 시 style="display: block" 추가 */}
      <div className='popup_bg'></div>
      <div className='popup_inner'>
        <h3 className='popup_tit'>프로필</h3>
        <button className='btn close'>팝업 닫기</button>
        <div className='host_area'>
          <div className='img_area'>
            <img src={images.meeting_img04} alt={type === 'host' ? '호스트 이미지' : '이용자 이미지'} />
          </div>
          <div className='info_area'>
            <h4>호스트명 또는 닉네임</h4>
            <div className='infoBox'>
              <div className='ib'>
                <p className='tit'>운영중인 모임</p>
                <p className='txt'>
                  <strong>N</strong>
                  <span> 개</span>
                </p>
              </div>
              {type === 'host' && (
                <div className='ib'>
                  <p className='tit'>리뷰</p>
                  <p className='txt'>
                    <strong>N</strong>
                    <span> 건</span>
                  </p>
                </div>
              )}
            </div>
            <dl>
              <dt>{type === 'host' ? '호스트 소개' : '이용자 소개'}</dt>
              <dd>
                새로운 요리 기술을 배우고, 맛있는 음식을 함께 만들고 나누는 시간. 미식가들의 만남을 통해 새로운 레시피도 얻어가세요. 최대 4줄까지
                노출됩니다. 4줄 이상은 ...으로 대체됩니다. 최대 4줄까지 노출됩니다. 4줄 이상은 ...으로 대체됩니다.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;
