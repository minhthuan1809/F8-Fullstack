// import React from "react";

export default function MyResume() {
  return (
    <section className="My Resume">
      <div className="flex flex-wrap justify-evenly w-[80%] m-auto mt-[8rem] max-md:flex-col max-md:gap-[5rem]">
        <div className="flex-1">
          <h1 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900">
            My Resume
          </h1>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </p>
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 flex items-center gap-2">
            view more
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="flex-1">
          <div className="flex gap-5 items-center mb-5">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
              <i className="fa-brands fa-react"></i>
            </div>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
              Certified Web Developer
            </p>
          </div>
          <div className="flex gap-5 items-center mb-5">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
              <i className="fa-solid fa-barcode"></i>
            </div>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
              Bachelor of Science in Computer Science
            </p>
          </div>
          <div className="flex gap-5 items-center mb-5">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
              <i className="fa-solid fa-barcode"></i>
            </div>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
              Bachelor of Science in Computer Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
