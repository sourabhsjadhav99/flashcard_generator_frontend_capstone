

import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import demoimage from "../assets/images/almabetterlogo.png";

const Card = () => {
  return (
    <div
      
      className="p-2  flex flex-col space-y-3 items-center justify-center rounded-lg w-[25rem] h-[18rem] relative border-2 border-gray-200 bg-white"
    >
      <div className="absolute -top-8">
        <img
          className="rounded-full w-16 h-16  object-cover aspect-square"
          src={demoimage}
          alt="" // here we are giving the group name as and alt to image tag
        />
      </div>
      <div className="m-1 absolute top-0 right-0">
        < MdDeleteOutline className="text-gray-600 w-6 h-6 transition-colors duration-300 hover:font-bold hover:text-red-600" />
      </div>

      <h2 className="font-bold text-lg"> No description</h2>
      <p className="text-center font-medium text-sm text-slate-500 line-clamp-2">
        No description No description No descriptionNo description No description No description
      </p>
      <p className="font-medium test-sm text-slate-700">
        {/*if the flashcard is present then it will write length of flashcard else it will write 
          zero  */}
        2 Cards
      </p>

      <button className="py-1 px-8 text-red-500 font-bold rounded-md border-red-500 border-3 transition-colors duration-300 border hover:bg-red-500 hover:text-white">
        View Cards
      </button>
    </div>
  );
};

export default Card;
