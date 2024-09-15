import React, { useState } from "react";
import "animate.css";

function Nav() {
  // Sử dụng useState để quản lý trạng thái của menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm để chuyển đổi trạng thái của menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.querySelector(".navMenu");
  };

  const Mobile = () => (
    <React.Fragment>
      <div className="navMenu lg:hidden w-[90%] m-auto animate__animated animate__bounceInDown">
        <div className="flex flex-col">
          <span className="bg-zinc-400 h-[1px] mt-2"></span>
          <a href="#" className="p-4">
            <i className="fa-regular fa-paste pr-2 text-lg"></i>
            Pages
          </a>
          <a href="#" className="p-4">
            <i className="fa-solid fa-user pr-2 text-lg"></i>
            Account
          </a>
          <a href="#" className="p-4">
            <i className="fa-solid fa-book pr-2 text-lg"></i>
            Docs
          </a>
        </div>
        <div className="text-xs font-medium">
          <button className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20">
            SIGN IN
          </button>
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            BLOCKS
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <nav className="mt-4">
      <div className="flex justify-evenly items-center max-lg:justify-around">
        <p className="text-xl font-bold">
          <a href="#">Material Tailwind</a>
        </p>
        <div className="max-lg:hidden">
          <a href="#" className="p-4">
            <i className="fa-regular fa-paste p-2 text-lg"></i>
            Pages
          </a>
          <a href="#" className="p-4">
            <i className="fa-solid fa-user p-2 text-lg"></i>
            Account
          </a>
          <a href="#" className="p-4">
            <i className="fa-solid fa-book p-2 text-lg"></i>
            Docs
          </a>
        </div>
        <div className="text-xs font-medium max-lg:hidden">
          <button className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20">
            SIGN IN
          </button>
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            BLOCKS
          </button>
        </div>

        {/* Icon menu mobile */}

        {isMenuOpen ? (
          <button className="lg:hidden" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        ) : (
          <button className="lg:hidden" onClick={toggleMenu}>
            <i className="fa-solid fa-bars text-lg"></i>
          </button>
        )}
      </div>
      {/* Menu mobile */}
      {isMenuOpen && <Mobile />}
    </nav>
  );
}

export default Nav;
