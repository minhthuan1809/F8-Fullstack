// import React from "react";

export default function MyProjects() {
  const data = [
    {
      img: " https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog-1.svg",
      title: "Mobile App Development",
      conten:
        "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      img: " https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog2.svg",
      title: "Landing Page Development",
      conten:
        "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    },
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog3.svg",
      title: "Mobile App Development",
      conten:
        "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog4.svg",
      title: "E-commerce development",
      conten:
        "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    },
    {
      img: " https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog-1.svg",
      title: "Mobile App Development",
      conten:
        "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      img: " https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog2.svg",
      title: "Landing Page Development",
      conten:
        "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    },
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog3.svg",
      title: "Mobile App Development",
      conten:
        "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      img: "https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/blog4.svg",
      title: "E-commerce development",
      conten:
        "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    },
  ];
  return (
    <section className="Project">
      <div>
        {/* title */}
        <div className="text-center mt-[6rem] leading-[2rem]">
          <h1 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
            My Projects
          </h1>
          <p className="w-2/4 m-auto">
            Whether you have a mobile app idea that needs to come to life or a
            website that requires a facelift, I'm here to turn your digital
            dreams into reality.
          </p>
        </div>

        {/* box */}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-[80%] m-auto gap-10 mt-11 ">
          {data.map(({ img, title, conten }) => {
            return (
              <>
                <div>
                  <div className="rounded-md">
                    <img className="w-full object-cover" src={img} />
                  </div>
                  <h3 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                    {title}
                  </h3>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                    {conten}
                  </p>
                  <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                    see details
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
