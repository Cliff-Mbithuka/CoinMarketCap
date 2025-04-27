
// import React from 'react';
// import './Pagination.css';

// const Pagination = ({ 
//   currentPage = 1,
//   totalPages = 99,
//   totalItems = 9809,
//   itemsPerPage = 100,
//   onPageChange = () => {},
//   onItemsPerPageChange = () => {}
// }) => {
//   const displayedPages = 7; 
  
//   const getPageNumbers = () => {
//     const pages = [];
    
//     if (totalPages <= displayedPages) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);
      
//       let startPage = Math.max(2, currentPage - 1);
//       let endPage = Math.min(totalPages - 1, currentPage + 1);
      
//       if (currentPage <= 3) {
//         endPage = 4;
//       }
      
//       if (currentPage >= totalPages - 2) {
//         startPage = totalPages - 3;
//       }
    
//       if (startPage > 2) {
//         pages.push('...');
//       }
    
//       for (let i = startPage; i <= endPage; i++) {
//         pages.push(i);
//       }
      
//       if (endPage < totalPages - 1) {
//         pages.push('...');
//       }
      
//       pages.push(totalPages);
//     }
    
//     return pages;
//   };
  
//   const handlePageClick = (page) => {
//     if (page !== '...' && page !== currentPage) {
//       onPageChange(page);
//     }
//   };
  
//   const goToPrevPage = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };
  
//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };
  
//   const firstItem = (currentPage - 1) * itemsPerPage + 1;
//   const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

//   return (
//     <>
//     <div className="pagination-container">
//       <div className="pagination-info">
//         Showing {firstItem} - {lastItem} out of {totalItems}
//       </div>
      
//       <div className="pagination-controls">
//         <button 
//           className="pagination-nav-button"
//           onClick={goToPrevPage}
//           disabled={currentPage === 1}
//           aria-label="Previous page"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//             <path d="M15.5 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
        
//         <div className="pagination-pages">
//           {getPageNumbers().map((page, index) => (
//             <button
//               key={`page-${index}`}
//               className={`pagination-page-button ${page === currentPage ? 'active' : ''} ${page === '...' ? 'ellipsis' : ''}`}
//               onClick={() => handlePageClick(page)}
//               disabled={page === '...'}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
        
//         <button 
//           className="pagination-nav-button"
//           onClick={goToNextPage}
//           disabled={currentPage === totalPages}
//           aria-label="Next page"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//             <path d="M8.5 19l7-7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
//       </div>
      
//       <div className="pagination-dropdown">
//         <select 
//           value={itemsPerPage} 
//           onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
//           className="pagination-select"
//         >
//           <option value={50}>Show 50</option>
//           <option value={100}>Show 100</option>
//           <option value={200}>Show 200</option>
//         </select>
//         <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none">
//           <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </div>

//     </div>
//     <div className="pagination-help">
//     Find out how we work by clicking here. <u>Read More</u>
//   </div>
//   </>
//   );
// };

// export default Pagination;
import React from 'react';
import './Pagination.css';

const Pagination = ({ 
  currentPage = 1,
  totalPages = 99,
  totalItems = 9809,
  itemsPerPage = 100,
  onPageChange = () => {},
  onItemsPerPageChange = () => {}
}) => {
  const displayedPages = 7; 
  
  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= displayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= 3) {
        endPage = 4;
      }
      
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
    
      if (startPage > 2) {
        pages.push('...');
      }
    
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  const handlePageClick = (page) => {
    if (page !== '...' && page !== currentPage) {
      onPageChange(page);
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  const firstItem = (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <>
    <div className="pagination-container">
      {/* Pagination controls now come first for mobile layout */}
      <div className="pagination-controls">
        <button 
          className="pagination-nav-button"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15.5 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="pagination-pages">
          {getPageNumbers().map((page, index) => (
            <button
              key={`page-${index}`}
              className={`pagination-page-button ${page === currentPage ? 'active' : ''} ${page === '...' ? 'ellipsis' : ''}`}
              onClick={() => handlePageClick(page)}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button 
          className="pagination-nav-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 19l7-7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* New container to group info and dropdown for mobile */}
      <div className="info-dropdown-container">
        <div className="pagination-info">
          Showing {firstItem} - {lastItem} out of {totalItems}
        </div>
        
        <div className="pagination-dropdown">
          <select 
            value={itemsPerPage} 
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="pagination-select"
          >
            <option value={50}>Show 50</option>
            <option value={100}>Show 100</option>
            <option value={200}>Show 200</option>
          </select>
          <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div className="pagination-help">
      Find out how we work by clicking here. <u>Read More</u>
    </div>
    </>
  );
};

export default Pagination;