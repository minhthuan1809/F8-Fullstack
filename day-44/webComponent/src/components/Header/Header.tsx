import React from "react";

function Header() {
  return (
    <>
      <div className="flex max-w-[70%] justify-center gap-5 m-auto mt-[3rem] items-center">
        <div className="flex-1 leading-9">
          <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
            Welcome to my Web Development Portofolio!
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            I'm Lily Smith, a passionate web developer based in USA. Here,
            you'll get a glimpse of my journey in the world of web development,
            where creativity meets functionality.
          </p>
          <form action="" className="flex items-center mt-6">
            <div>
              <label className="block">Your email</label>
              <input
                type="text"
                id="email"
                className="border-2 border-solid border-black rounded-lg"
              />
              <label htmlFor="email">Enter your email</label>
            </div>
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]">
              require offer
            </button>
          </form>
        </div>
        {/* end title  */}
        <div className="flex-1 rounded-[5px]">
          <img
            className="w-full"
            src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/image-7.svg"
            alt="photo"
          />
        </div>
      </div>
    </>
  );
}
export default Header;
