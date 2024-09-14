import React from "react";

export default function Contact() {
  return (
    <section className="Contact">
      <div className="mt-20 w-[90%] m-auto">
        <div className="text-center mb-12">
          <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="block antialiased font-sans text-sm font-normal leading-relaxed text-inherit mx-auto w-full lg:w-5/12 !text-gray-500">
            Ready to get started? Feel free to reach out through the contact
            form, and let's embark on a journey of innovation and success.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row bg-white rounded-xl shadow-md container mx-auto border border-gray-200">
          {/* Contact Information */}
          <div className="w-full text-white lg:w-5/12 bg-gray-900 p-8 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-8 text-base text-gray-400">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-phone"></i>
                <strong>+1(424) 535 3523</strong>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-envelope"></i>
                <strong>hello@mail.com</strong>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-ticket-simple"></i>
                <strong>Open Support Ticket</strong>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form className="flex-1 p-8 w-full">
            <div className="mb-8 grid gap-4 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="firstNameContact"
                  className="block mb-2 text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstNameContact"
                  placeholder="eg. Lucas"
                  className="w-full bg-transparent border-b border-gray-300 text-sm focus:border-gray-900 outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="lastNameContact"
                  className="block mb-2 text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastNameContact"
                  placeholder="eg. Jones"
                  className="w-full bg-transparent border-b border-gray-300 text-sm focus:border-gray-900 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="emailContact"
                className="block mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="emailContact"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-300 text-sm focus:border-gray-900 outline-none transition-all"
              />
            </div>
            {/* check box */}
            <div className="mb-8">
              <label className="block mb-2 text-gray-700">
                What are you interested in?
              </label>
              <div className="flex flex-wrap items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="check"
                    id="Design"
                    className="mr-2"
                  />
                  <label htmlFor="Design" className="text-gray-700">
                    Design
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="check"
                    id="Development"
                    className="mr-2"
                  />
                  <label htmlFor="Development" className="text-gray-700">
                    Development
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="check"
                    id="Support"
                    className="mr-2"
                  />
                  <label htmlFor="Support" className="text-gray-700">
                    Support
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="check"
                    id="Other"
                    className="mr-2"
                  />
                  <label htmlFor="Other" className="text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </div>
            {/* textarea */}
            <div>
              <label htmlFor="textarea">Your Message</label>
              <textarea
                name=""
                id="textarea"
                className="w-full bg-transparent border-b border-gray-300 text-sm focus:border-gray-900 outline-none transition-all"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
