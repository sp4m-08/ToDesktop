import React from "react";

const Pricing = () => {
  return (
    <div id="pricing-section" className="container ">
      <h2 className="font-semibold">Choose a plan that fits your needs</h2>
      <div className="flex flex-col gap-6 mt-10 lg:grid lg:grid-cols-3">
        <div
          id="box1"
          className="flex flex-col bg-white border border-gray-200 rounded-xl gap-10 p-6"
        >
          <h3 className="font-medium">Free</h3>
          <p className=" text-gray-500">
            For personal use or testing your app before deploying to customers.
          </p>
          <p className="font-semibold text-gray-500">KEY FEATURES</p>
          <div id="key-features" className="flex flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <img src="tick.png" className="max-h-4 max-w-4" alt="" />
              Free for personal use
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="tick.png" className="max-h-4 max-w-4" alt="" />
              Run App Locally
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="cross-small.png" className="max-h-4 max-w-4" alt="" />
              No Public Distribution
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="cross-small.png" className="max-h-4 max-w-4" alt="" />
              No Native Installers
            </div>
          </div>
          <button className="border border-gray-400 p-4 rounded-2xl cursor-pointer hover:border-gray-700">
            <span className="font-bold text-blue-600">Get Started</span>
          </button>
        </div>
        <div
          id="box1"
          className="flex flex-col bg-white border border-gray-200 rounded-xl gap-10 p-6"
        >
          <h3 className="font-medium">Essential</h3>
          <p className=" text-gray-500">For simple desktop apps.</p>
          <p className="font-semibold text-gray-500">KEY FEATURES</p>
          <div id="key-features" className="flex flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <img src="tick.png" className="max-h-4 max-w-4" alt="" />
              Free for personal use
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="tick.png" className="max-h-4 max-w-4" alt="" />
              Run App Locally
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="cross-small.png" className="max-h-4 max-w-4" alt="" />
              No Public Distribution
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="cross-small.png" className="max-h-4 max-w-4" alt="" />
              No Native Installers
            </div>
          </div>
          <button className="border border-gray-400 p-4 rounded-2xl cursor-pointer hover:border-gray-700">
            <span className="font-bold text-blue-600">Get Started</span>
          </button>
        </div>
        <div
          id="box1"
          className="flex flex-col bg-white border border-gray-200 rounded-xl gap-6 p-6"
        >
          <div className="flex flex-rows justify-between">
            <h3 className="font-medium">Professional</h3>
            <div className="text-indigo-600 font-semibold bg-blue-300 rounded-full px-3 py-2 -translate-y-10">
              Most Popular
            </div>
          </div>
          <p className=" text-gray-500">For sophisticated desktop apps.</p>
          <p className=" font-semibold text-gray-500">KEY FEATURES</p>
          <div id="key-features" className="flex flex-col gap-5 mt-6">
            <div className="flex flex-row gap-3 items-center">
              <img src="tick.png" className="max-h-4 max-w-4" alt="" />
              Free for personal use
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="tick.png" className="max-h-4 max-w-4" alt="" />
              Run App Locally
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="cross-small.png" className="max-h-4 max-w-4" alt="" />
              No Public Distribution
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src="cross-small.png" className="max-h-4 max-w-4" alt="" />
              No Native Installers
            </div>
          </div>
          <button className="border bg-blue-600 border-gray-400 p-4 rounded-2xl cursor-pointer hover:bg-blue-800">
            <span className="font-bold text-white">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
