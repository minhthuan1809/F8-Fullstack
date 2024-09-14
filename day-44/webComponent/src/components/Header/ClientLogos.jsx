// import React from "react";

function ClientLogos() {
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
    <div className="w-4/5 w-auto mt-[5rem]">
      <h6 className="block text-center text-xl antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-8">
        My awesome clients
      </h6>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        {logo.map((value, key) => {
          console.log(value);
          return (
            <>
              {" "}
              <div key={key} className=" w-[10rem]">
                <img
                  className="w-full h-auto object-cover"
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
export default ClientLogos;
