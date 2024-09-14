// import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className=" flex w-[90%] mt-[10rem] m-auto items-center justify-around flex-wrap mb-[2rem]">
          <div>© 2024 Made with Material Tailwind by Creative Tim.</div>
          <div>
            <ul className="flex items-center justify-center gap-6 max-md:mt-[2rem]">
              <li>
                <a href="#" className="hover:text-slate-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Blog
                </a>
              </li>
              <a href="#" className="hover:text-slate-500">
                Service
              </a>
              <li></li>
              <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                subscribe
              </button>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
