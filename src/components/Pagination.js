import React from 'react';
import '../styles/Pagination.css'; 
const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pages = [];

  // An array of page numbers based on totalPages
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button 
        disabled={currentPage === 1} 
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button 
          key={page} 
          className={page === currentPage ? 'active' : ''} 
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button 
        disabled={currentPage === totalPages} 
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
