import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./header/Navbar";

export default function Products() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar />
      </header>
      {/* end header */}
      <main className="mt-[7rem] p-4 w-[85%] m-auto">
        <h1 className="text-center text-6xl font-sans font-bold text-slate-800 mb-6">
          Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(16)].map((_, index) => (
            <Link to="/thuan">
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md transition-shadow duration-300  hover:shadow-lg"
              >
                <div className="flex justify-center  mb-2 h-[20rem] w-[80%] m-auto overflow-hidden hover:scale-105  transition-transform duration-300 ease-in-out">
                  <img
                    className="object-cover h-full w-full rounded-md "
                    src="https://picsum.photos/200?_id=n5uc1s69ha8e4cde9-oee9rt9z6BToMhen850"
                    alt="Product"
                  />
                </div>
                <p className="text-center font-semibold text-2xl mt-3">
                  Bánh kẹo
                </p>
                <div className="flex justify-between items-center mt-2 text-xl">
                  <b>2.000.000 VND</b>

                  <button
                    className="bg-slate-600 text-white px-3 py-2 rounded hover:scale-110 transition-transform duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("thuận");
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      {/* end main */}
    </div>
  );
}
