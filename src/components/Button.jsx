import React from "react";

// reusable button component , used in app contain icon, action name, and function

const Button = ({ icon, text, onClick }) => {
  return (
    <button
      className="flex items-center justify-left gap-2 bg-white text-gray-700 w-1/8 drop-shadow-md p-2 rounded-md transition-colors duration-300 border hover:font-bold hover:text-red-600 hover:border-red-600"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
