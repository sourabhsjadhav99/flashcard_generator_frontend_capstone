import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <li key={i} className={i === currentPage ? "isActive" : ""}>
          <button
            className="px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded-md"
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return items;
  };

  return (
    <>
    <ul className="pagination flex justify-center items-center mt-4">
      <li>
        <button
          className={`px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded-md ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      {renderPaginationItems()}
      <li>
        <button
          className={`px-3 py-1 mx-1 bg-gray-200 hover:bg-gray-300 rounded-md ${
            currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
    <style>
        {`
          .isActive{
            color: red;
            font-weight: 700;  
          }
        `}
      </style>
    </>
  );
};

export default Pagination;
