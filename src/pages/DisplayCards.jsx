
import React, { useState } from "react";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CARDS_PER_PAGE } from "../constants/flashcardConstants";
const DisplayCards = () => {
  const groups = useSelector((state) => state.cards.groups);
  let navigate=useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = CARDS_PER_PAGE;
  const totalItems = groups.length; // Example total number of items

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page's items
  const currentItems = groups.slice(startIndex, endIndex);

  return (
    <div className=" p-1 sm:p-2 pt-4 ">
      <div className="flex flex-wrap justify-evenly align-center">
        {currentItems.length > 0 ? (
          currentItems.map((group) => (
            <div
              className="m-1 pt-10 flex justify-center align-center"
              key={group.id}
            >
              <Card group={group} />
            </div>
          ))
        ) : (
          <div
            className="flex flex-col items-center justify-center shadow-lg p-20"
          >
            <h1 className="font-semibold text-2xl ">No any FlashCards created</h1>
            <button
                className="text-blue-600 cursor-pointer font-semibold border border-2 border-blue-600 text-blue-600 p-2 m-2 rounded hover:bg-blue-200"
                onClick={() => navigate("/")}
              >
                Create Flashcard
              </button>
          </div>
        )}
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
