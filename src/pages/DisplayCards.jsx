import React, { useState } from "react";
import Pagination from "../components/Pagination";
import Card from "../components/Card";

const DisplayCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = 30; // Example total number of items

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Simulated data array (replace with your actual data)
  const data = Array.from({ length: totalItems }, (_, index) => (
    <div className="m-1 pt-10  flex justify-center align-center "  key={index}>
      <Card />
    </div>
  ));

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page's items
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className=" p-2 pt-4 ">
     
      <div className=" flex flex-wrap justify-evenly align-center">
        {currentItems}
      </div>
   
      {/* Render pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DisplayCards;
