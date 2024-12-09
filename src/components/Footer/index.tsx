function Footer() {
  return (
    <footer className='footer'>
      <div className='inner'>
        <div className='inner_l'>
          <h4>
            새로운 만남 소소한 행복찾기, <br />
            밋유
          </h4>
          <ul className='co_info_list'>
            <li>
              <p className='info_l'>(주)루나스타</p>
              <p className='info_r'>
                <strong>문의전화</strong>
                <span>1588-1688</span>
              </p>
            </li>
            <li>
              <p className='info_l'>대표이사 송정원</p>
              <p className='info_r'>
                <strong>사업자 등록번호</strong>
                <span>
                  698-30-01098
                  <a href='javascript:void(0)' className='btn'>
                    사업자 정보 확인
                  </a>
                </span>
              </p>
            </li>
            <li>
              <p className='info_l'>경기도 이천시 애련청로 67-39, 1024호</p>
              <p className='info_r'>
                <strong>개인정보보호 책임자</strong>
                <span>송정원</span>
              </p>
            </li>
          </ul>
          <p className='copy'>Copyrightⓒ 2024 LUNASTAR. ALL RIGHTS REServed.</p>
        </div>
        <dl className='inner_r'>
          <dt>고객센터</dt>
          <dd className='active'>
            <a href='javascript:void(0)'>개인정보처리방침</a>
          </dd>
          <dd>
            <a href='javascript:void(0)'>FAQ</a>
          </dd>
          <dd>
            <a href='javascript:void(0)'>공지사항</a>
          </dd>
        </dl>
      </div>
    </footer>
  );
}

export default Footer;
