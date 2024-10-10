import React from "react";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="w-[15%] rounded-full h-auto  overflow-hidden ">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWoNYgCeroo4t7CsTSQ8cwLZsTwAE9Ku6Aw&s"
          alt="img 404"
        />
      </div>
      <div>
        <h1 className="text-[10rem] md:text-[20rem] font-bold text-gray-800">
          404
        </h1>
        <h2 className="text-4xl md:text-6xl text-gray-600">Not Found</h2>
      </div>
    </div>
  );
}
