import React from "react";
import { Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const features = [
    "Cool stuff",
    "Random feature",
    "Team feature",
    "Stuff for developers",
    "Another one",
    "Last time",
  ];

  const resources = [
    "Resource",
    "Resource name",
    "Another resource",
    "Final resource",
  ];

  const about = ["Team", "Locations", "Privacy", "Terms"];

  const help = ["Support", "Help Center", "Contact Us"];

  const renderLinks = (items) => (
    <ul className="list-none">
      {items.map((item) => (
        <li key={item} className="mb-2">
          <a
            href="#"
            className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 w-4/5 m-auto">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            {renderLinks(features)}
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            {renderLinks(resources)}
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            {renderLinks(about)}
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            {renderLinks(help)}
          </div>

          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href="#"
                className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>FWR</strong>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              123 6th St.
              <br />
              Melbourne, FL 32904
            </address>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>.<br />
              <em>All are MIT License</em>
            </p>
          </div>
          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
