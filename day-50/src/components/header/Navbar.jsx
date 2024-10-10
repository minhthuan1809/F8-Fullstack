import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const dataCart = useSelector((state) => state.carts.ProductInCart);
  return (
    <div>
      <div className="fixed right-0 left-0 top-0 bg-slate-600 shadow-lg z-50">
        <nav className="flex justify-between items-center w-4/5 m-auto py-4">
          <Link to="/" className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
              alt="logo"
            />
            <h2 className="ml-2 text-xl font-sans font-bold text-white">
              Welcome to Show
            </h2>
          </Link>
          <div className="relative">
            <Link to="/carts">
              <FontAwesomeIcon
                className="text-3xl text-white cursor-pointer transition-transform transform hover:scale-110"
                icon={faCartShopping}
              />
            </Link>
            <span className="absolute top-[-12px] right-[-10px] bg-red-500 text-white rounded-full px-2 py-0.5">
              {dataCart.length}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
