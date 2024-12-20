import { Link } from 'react-router-dom';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page - 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 6; // 최대 표시할 페이지 수
    const halfVisible = Math.floor(maxVisiblePages / 2); // 반으로 나눈 값
    let startPage = Math.max(2, currentPage - halfVisible); // 시작 페이지
    let endPage = Math.min(totalPages - 1, currentPage + halfVisible); // 끝 페이지

    // 페이지 수가 6개를 초과할 경우 조정
    if (endPage - startPage < maxVisiblePages - 2) {
      if (startPage === 2) {
        endPage = Math.min(startPage + maxVisiblePages - 3, totalPages - 1);
      } else if (endPage === totalPages - 1) {
        startPage = Math.max(endPage - (maxVisiblePages - 3), 2);
      }
    }

    // 첫 페이지 추가
    pageNumbers.push(
      <Link key={1} to='javascript: void(0);' className={`btn ${currentPage === 1 ? 'on' : ''}`} onClick={() => handlePageChange(1)}>
        {1}
      </Link>
    );

    // 생략된 페이지가 있을 경우 '...' 추가
    if (startPage > 2) {
      pageNumbers.push(<span key='ellipsis-start'>...</span>);
    }

    // 페이지 번호 생성
    for (let i = startPage; i <= endPage; i++) {
      if (i > 1 && i < totalPages) {
        // 첫 페이지와 마지막 페이지 제외
        pageNumbers.push(
          <Link key={i} to='javascript: void(0);' className={`btn ${currentPage === i ? 'on' : ''}`} onClick={() => handlePageChange(i)}>
            {i}
          </Link>
        );
      }
    }

    // 마지막 페이지가 5개 초과일 경우 '...' 추가
    if (endPage < totalPages - 1) {
      pageNumbers.push(<span key='ellipsis-end'>...</span>);
    }

    // 마지막 페이지 추가
    if (totalPages > 1) {
      pageNumbers.push(
        <Link
          key={totalPages}
          to='javascript: void(0);'
          className={`btn ${currentPage === totalPages ? 'on' : ''}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Link>
      );
    }

    return pageNumbers;
  };

  return <div className='paging'>{renderPageNumbers()}</div>;
};

export default Pagination;
