import React from 'react'
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="p-4 bg-gray-10  text-white">
      <div className="container flex justify-between ">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8"
          />
          
        </div>
        
      </div>
    </header>
  );
};

export default Header;
