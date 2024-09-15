import React from "react";

export default function ClientsSay() {
  // State to store the URL of the large image
  const [largeImageSrc, setLargeImageSrc] = React.useState(
    "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar1.jpg"
  );

  // Function to update the large image
  const showLargeImage = (src) => {
    setLargeImageSrc(src);
  };

  return (
    <section className="ClientsSay">
      <div className="mt-16 w-full max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
            What Clients Say
          </h1>
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12">
            Discover what clients have to say about their experiences working
            with me. My client's satisfaction is my greatest achievement!
          </p>
        </div>
        {/* end */}
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center mt-10 lg:gap-[10rem] max-lg:mt-[3rem] ">
          <div className="flex-1 max-w-lg lg:max-w-xs">
            <h2 className="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 mb-4 font-bold">
              Mobile App Development
            </h2>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-3 font-normal !text-gray-500">
              I had the pleasure of working with Lily on a critical web
              development project, and I can confidently say that their
              expertise and professionalism exceeded my expectations.
            </p>
            <h3 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-0.5">
              Michael - Technical Manager
            </h3>
            <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal mb-5 !text-gray-500">
              Marketing @ APPLE INC.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <img
                className="inline-block object-cover object-center w-9 h-9 rounded-md cursor-pointer"
                src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar1.jpg"
                alt="logo"
                onClick={() =>
                  showLargeImage(
                    "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar1.jpg"
                  )
                }
              />
              <div className="w-px h-9 bg-slate-300"></div>
              <img
                className="inline-block object-cover object-center w-9 h-9 rounded-md cursor-pointer"
                src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar2.jpg"
                alt="logo"
                onClick={() =>
                  showLargeImage(
                    "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar2.jpg"
                  )
                }
              />
              <div className="w-px h-9 bg-slate-300"></div>
              <img
                className="inline-block object-cover object-center w-9 h-9 rounded-md cursor-pointer"
                src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar3.jpg"
                alt="logo"
                onClick={() =>
                  showLargeImage(
                    "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/avatar3.jpg"
                  )
                }
              />
            </div>
          </div>
          {/* end */}
          <div className="flex-1 mt-8 lg:mt-0 max-w-lg">
            <div className="w-full">
              <img
                id="largeImage"
                className="w-full h-auto rounded-2xl"
                src={largeImageSrc}
                alt="Large display"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
