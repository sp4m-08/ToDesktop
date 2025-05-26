import React from "react";

const Hero = () => {
  return (
    <div className="z-0 flex flex-col justify-center items-start px-4 py-14 grid-cols-1 min-h-full sm:items-center sm:text-center transition">
      <div
        id="page-bug-button"
        className="shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer transition flex text-yellow-600 bg-[#fefce8] items-center border-amber-400 border-1 py-1 px-5 text-[14px] min-w-auto rounded-md gap-1"
      >
        v0.21.1:{" "}
        <span className="text-yellow-700"> Find-in-page bug fixes</span>
        <img src="arrow-small-right.png" className="max-w-4 max-h-4" />
      </div>

      <div
        id="windows-mac-linux"
        className="hidden sm:flex p-6 flex-row justify-evenly items-center gap-6 text-gray-400"
      >
        <div className="flex gap-2 items-center">
          <img src="document.png" />
          Code Optional
        </div>
        <div className="flex gap-2 items-center">
          <img src="hand-back-fist.png" />
          Drag & Drop Builder
        </div>
        <div className="flex gap-2 items-center">
          <img src="laptop.png" />
          Windows, Mac, Linux
        </div>
      </div>

      <h2 className="text-[35px] gap-y-0 mt-4 leading-[1.1] sm:text-[60px] px-2 font-bold">
        Web app to desktop app in minutes
      </h2>
      <br />

      <p className="text-lg px-2">
        Take your web app codebase and transform it into a cross platform
        desktop app with native functionality.
      </p>

      <div
        id="buttons"
        className="flex flex-col w-full items-center justify-center gap-y-3 py-15 gap-4 sm:flex-row sm:max-w-fit"
      >
        <button className="sm:px-3 sm:min-w-fit w-full py-3 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-800 cursor-pointer">
          Download Now
        </button>

        <button
          id="read-docs"
          className="sm:px-3 sm:min-w-fit w-full py-3 bg-white font-semibold rounded-md  border-1 border-gray-200 hover:border-gray-500 transition cursor-pointer"
        >
          Read Docs
        </button>
      </div>
    </div>
  );
};

export default Hero;
