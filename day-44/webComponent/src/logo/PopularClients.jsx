// import React from "react";

function PopularClients() {
  const logo = [
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-coinbase.svg",
    },
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-spotify.svg",
    },
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-pinterest.svg",
    },
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-google.svg",
    },

    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-amazon.svg",
    },

    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-netflix.svg",
    },
  ];
  return (
    <div className="w-[90%] w-auto mt-[10rem] text-center">
      <h6 className=" block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit mb-4 uppercase !text-gray-500">
        POPULAR CLIENTS
      </h6>
      <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4 ">
        Trusted by over 10,000+ clients
      </h2>
      <div className="flex items-center gap-4 justify-center flex-wrap mt-10">
        {logo.map((value, key) => {
          console.log(value);
          return (
            <>
              {" "}
              <div key={key} className=" w-[10rem] ">
                <img
                  className="w-full h-auto object-cover grayscale opacity-75"
                  src={value.img}
                  alt="logo"
                />
              </div>
              {/* end img {count ++} */}
            </>
          );
        })}
      </div>
    </div>
  );
}
export default PopularClients;
