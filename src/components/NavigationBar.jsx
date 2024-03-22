import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="border-b-2 border-gray-300 p-0">
      <div>
        <h2 className="text-3xl font-semibold ">Create Flashcard</h2>
      </div>
      <div className="flex font-medium text-gray-500">
          <NavLink
            to={"/"}
            className="nav-link p-2 transition-colors duration-300 hover:text-red-600"
          >
            Create New
          </NavLink>
          <NavLink
            to={"/DisplayCards"}
            className="nav-link p-2 transition-colors duration-300 hover:text-red-600"
          >
            My Flashcard
          </NavLink>
      </div>

      {/* Conditionally applied CSS styles */}
      <style>
        {`
          .active{
            border-bottom: 4px solid red;
            color: red;
            font-weight: 700;
          
          }
        `}
      </style>
    </div>
  );
}

export default NavigationBar;
