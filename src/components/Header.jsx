import React from "react";
import logo from "../assets/images/logo.png";

// Header component of app contain logo at left side
const Header = () => {
  return (
    <header className="p-5 bg-white  text-white">
      <div className="container flex justify-between ">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
