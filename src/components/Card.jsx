import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import {  useDispatch } from 'react-redux';
import demoimage from "../assets/images/flashcard.png";
import { deleteGroup } from '../redux/actions/flashaardActions';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Card = ({ group }) => {
  const dispatch = useDispatch();

  const handleDelete = (groupId) => {
    Swal.fire({
      title: "Do you want to delete this card?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      denyButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteGroup(groupId));
        Swal.fire("Deleted!", "Your card has been deleted.", "success");
      }
    });
  };

  return (
    <div className="p-2 flex flex-col space-y-3 items-center justify-center rounded-lg w-[20rem] sm:w-[25rem] h-[18rem] relative border-2 border-gray-200 bg-white">
      <div className="absolute -top-8 border rounded-full">
        {group.groupImage?<img
          className="rounded-full w-16 h-16 object-cover aspect-square"
          src={group.groupImage}
          alt="No img" // Use the group name as alt text for the image
        />:<img
          className="rounded-full w-16 h-16 object-cover aspect-square"
          src={demoimage}
          alt="No img" // Use the group name as alt text for the image
        />}
      </div>
      <div className="m-1 absolute top-0 right-0">
       <button onClick={() => handleDelete(group.id)}> <MdDeleteOutline className="text-gray-600 w-6 h-6 transition-colors duration-300 hover:font-bold hover:text-red-600" /></button>
      </div>

      <h2 className="font-bold text-lg">{group?.groupName}</h2>
      <p className="text-center font-medium text-sm text-slate-500 line-clamp-2">
        {group?.groupDescription}
      </p>
      <p className="font-medium test-sm text-slate-700">
        {group.cards.length} Cards
      </p>
      <Link to={`/cardDetails/${group.id}`}>
        <button className="py-1 px-8 text-red-500 font-bold rounded-md border-red-500 border-3 transition-colors duration-300 border hover:bg-red-500 hover:text-white">
          View Cards
        </button>
      </Link>
    </div>
  );
};

export default Card;
