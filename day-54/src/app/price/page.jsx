import Footer from "@/components/Foodter";
import NavBar from "@/components/Nav";
import { Check, MoveRight } from "lucide-react";
import React from "react";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: 10,
      bgColor: "bg-white",
      textColor: "text-gray-500",
      features: [
        "Get started with messaging",
        "Flexible team meetings",
        "5 TB cloud storage",
      ],
      image: "https://res.cloudinary.com/williamsondesign/abstract-1.jpg", // Using placeholder instead of external image
      order: "lg:order-1",
      rounded: "lg:rounded-r-none",
    },
    {
      name: "Startup",
      price: 24,
      bgColor: "bg-gray-900",
      textColor: "text-gray-400",
      features: [
        "All features in Basic",
        "Flexible call scheduling",
        "15 TB cloud storage",
      ],
      image: "https://res.cloudinary.com/williamsondesign/abstract-2.jpg",
      order: "lg:order-2",
      rounded: "",
    },
    {
      name: "Enterprise",
      price: 35,
      bgColor: "bg-white",
      textColor: "text-gray-500",
      features: [
        "All features in Startup",
        "Growth oriented",
        "Unlimited cloud storage",
      ],
      image: "https://res.cloudinary.com/williamsondesign/abstract-3.jpg",
      order: "lg:order-3",
      rounded: "lg:rounded-l-none",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto pt-10 pb-36 px-8">
        <div className="max-w-md mx-auto mb-14 text-center pt-[4rem]">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
            <span className="text-indigo-600">Flexible</span> Plans
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Choose a plan that works best for you and your team.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`w-full flex-1 mt-8 p-8 shadow-xl rounded-3xl sm:w-96 lg:w-full ${plan.bgColor} ${plan.order} ${plan.rounded}`}
            >
              <div
                className={`mb-7 pb-7 flex items-center border-b ${
                  plan.bgColor === "bg-gray-900"
                    ? "border-gray-600"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={plan.image}
                  alt={`${plan.name} plan`}
                  className="rounded-3xl w-20 h-20"
                />
                <div className="ml-5">
                  <span
                    className={`block text-2xl font-semibold ${
                      plan.bgColor === "bg-gray-900" ? "text-white" : ""
                    }`}
                  >
                    {plan.name}
                  </span>
                  <span>
                    <span
                      className={`font-medium text-xl align-top ${plan.textColor}`}
                    >
                      ${" "}
                    </span>
                    <span
                      className={`text-3xl font-bold ${
                        plan.bgColor === "bg-gray-900" ? "text-white" : ""
                      }`}
                    >
                      {plan.price}{" "}
                    </span>
                  </span>
                  <span className={plan.textColor}>/ user</span>
                </div>
              </div>

              <ul
                className={`mb-7 font-medium ${plan.textColor} ${
                  plan.bgColor === "bg-gray-900" ? "text-xl" : "text-lg"
                }`}
              >
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex mb-2">
                    <Check />
                    <span className="ml-3">
                      {feature.split(" ").map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className={
                            wordIndex === feature.split(" ").length - 1
                              ? plan.bgColor === "bg-gray-900"
                                ? "text-white"
                                : "text-black"
                              : ""
                          }
                        >
                          {word}{" "}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#/"
                className={`flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white ${
                  plan.bgColor === "bg-gray-900" ? "text-2xl py-6" : "text-xl"
                }`}
              >
                Choose Plan
                <MoveRight className="pt-2 pl-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
