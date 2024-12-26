function PointBenefits() {
  return (
    <div className='info_contents'>
      <h4>적립혜택</h4>
      <ul className='price_list'>
        <li>
          <strong className='tit'>주문 기본 적립</strong>
          <strong className='point'>
            <span>0</span> P
          </strong>
        </li>
        <li>
          <strong className='tit'>리뷰 작성 적립(예상)</strong>
          <strong className='point'>
            <span>0</span> P
          </strong>
        </li>
        <li className='total'>
          <strong className='tit'>합계</strong>
          <strong className='point'>
            <span>50,000</span> 원
          </strong>
        </li>
      </ul>
    </div>
  );
}

export default PointBenefits;
