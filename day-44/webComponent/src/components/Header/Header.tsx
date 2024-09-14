import React from "react";

function Header() {
  return (
    <div className="flex flex-col lg:flex-row max-w-[80%] justify-center gap-10 m-auto mt-12 items-center">
      {/* Text Section */}
      <div className="flex-1 leading-9 text-center lg:text-left">
        <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 text-3xl lg:text-5xl leading-tight">
          Welcome to my Web Development Portfolio!
        </h1>
        <p className="block antialiased font-sans text-lg lg:text-xl font-normal leading-relaxed text-gray-500 mb-6 lg:pr-16 xl:pr-28">
          I'm Lily Smith, a passionate web developer based in the USA. Here,
          you'll get a glimpse of my journey in the world of web development,
          where creativity meets functionality.
        </p>
        <label htmlFor="email" className="block mb-2 text-gray-700">
          Your Email
        </label>
        <form className="flex w-full max-w-lg  gap-4 items-center mx-auto lg:mx-0">
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   text-sm px-3 py-3 rounded-md  "
          />
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]">
            Require Offer
          </button>
        </form>
        <p className="mt-2 block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">
          Read my{" "}
          <a href="#" className="font-medium underline transition-colors">
            Terms and Conditions
          </a>
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 rounded-lg overflow-hidden">
        <div className="w-[70%] m-auto">
          <img
            className="w-full object-cover"
            src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/image-7.svg"
            alt="Web Development"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
