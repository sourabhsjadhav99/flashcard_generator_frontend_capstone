import React from 'react';

const Button = ({ icon, text }) => {
  return (
    <button className="flex items-center justify-left gap-2 bg-white text-gray-700 w-1/8 drop-shadow-md p-2 rounded-md transition-colors duration-300 border hover:font-bold hover:text-red-600 hover:border-red-600">
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default Button;