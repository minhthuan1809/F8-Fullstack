import Footer from "../components/Foodter";
import NavBar from "../components/Nav";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-[2rem]">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum. In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum. In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>

          {/* Team Grid */}
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              {[
                {
                  name: "Alexa",
                  id: 1,
                  img: "https://media.istockphoto.com/id/1127975224/photo/portrait-of-a-chinese-businessman.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEXSwBqR0tV4t2qPRbKTfxWZCcAhtndrQ9v3r-pOHs0=",
                },
                {
                  name: "Olivia",
                  id: 2,
                  img: "https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
                },
                {
                  name: "Liam",
                  id: 3,
                  img: "https://media.istockphoto.com/id/2151855990/photo/travelling-asian-businessman-on-his-phone-at-an-airport-lounge.webp?a=1&b=1&s=612x612&w=0&k=20&c=qufqXjcGVS6PduNv5tshMF1kHVKwHG88F-SJq1Zln8k=",
                },
                {
                  name: "Elijah",
                  id: 4,
                  img: "https://media.istockphoto.com/id/1837914419/photo/portrait-of-young-happy-man-contemplating-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=q4HxDK8_KF8PcaNI3avQPUPVOs23aa04CCayUlv3-yo=",
                },
              ].map((member) => (
                <div
                  key={member.id}
                  className="p-4 pb-6 flex justify-center flex-col items-center"
                >
                  <img
                    className="md:block hidden"
                    src={member.img}
                    alt={`${member.name} profile`}
                  />

                  <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
