import React from "react";

const Customer = () => {
  return (
    <div className="container ">
      <h2 className="mb-15">Customer Stories</h2>

      <div
        id="clickup-box"
        className="flex flex-col border gap-12 p-6 border-gray-300 rounded-2xl lg:flex-row items-end"
      >
        <div className="flex flex-col gap-12">
          <h3 className=""> ClickUp</h3>
          <p className="text-xl font-medium">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months
          </p>
          <div id="buttons" className="flex gap-3 flex-wrap">
            <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src="tick.png" alt="tick" className="max-h-4 max-w-4" />
              <span class="font-display font-medium">Chromeless UI</span>
            </div>
            <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src="tick.png" alt="tick" className="max-h-4 max-w-4" />
              <span class="font-display font-medium">Native spellcheck</span>
            </div>
            <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src="tick.png" alt="tick" className="max-h-4 max-w-4" />
              <span class="font-display font-medium">Task time in menubar</span>
            </div>
            <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src="tick.png" alt="tick" className="max-h-4 max-w-4" />
              <span class="font-display font-medium">
                Notification count in the dock
              </span>
            </div>
            <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src="tick.png" alt="tick" className="max-h-4 max-w-4" />
              <span class="font-display font-medium">
                Global hotkey to create task
              </span>
            </div>
          </div>
          <p className="text-lg font-light text-gray-500">
            “ToDesktop provided us with a{" "}
            <span className="text-black"> polished desktop app</span> in no
            time. Their expert team guided us through a smooth migration from
            our outdated legacy desktop app, enabling us to deliver
            <span className="text-black">new and improved features</span> to our
            customers within days.”
          </p>
          <div id="zeb-evans" className="flex flex-row gap-3 items-center">
            <img src="asset 45.jpeg" className="rounded-full" alt="" />
            <div className="flex flex-col gap">
              <p>Zeb Evans</p>
              <p className="text-gray-500">
                Founder & CEO,
                <a href="#" className="hover:cursor-pointer underline">
                  ClickUp
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="items-end">
          <img src="asset 46.png" alt="" />
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-4">
        {/* boxes */}
        <div className="mt-6 group rounded-2xl h-full w-full bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200  p-[1px]">
          <div
            id="box-1"
            className=" bg-white flex flex-col gap-4 p-6 border w-full h-full border-gray-300 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 "
          >
            <p className="text-2xl font-medium flex flex-row items-center gap-3">
              <img
                src="message-code.png"
                className="max-h-12 max-w-12 rounded-full"
                alt=""
              />
              Native APIs
            </p>
            <p className="text-lg font-light">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div class="flex gap-4">
              <div class="flex">
                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                  <img src="asset 47.png" class="min-w-16 min-h-16" alt="" />
                </div>
                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                  <img src="asset 48.jpeg" alt="" />
                </div>
              </div>
              <div class="flex flex-col">
                <p className="font-medium">Rick Pastoor</p>
                <a href="#" class="anchor-hover w-fit text-gray-500">
                  Rise
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* boxes */}
        {/* boxes */}
        <div className="mt-6 group rounded-2xl h-full w-full bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200  p-[1px]">
          <div
            id="box-2"
            className=" bg-white flex flex-col gap-4 p-6 border w-full h-full border-gray-300 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 "
          >
            <p className="text-2xl font-medium flex flex-row items-center gap-3">
              <img
                src="message-code.png"
                className="max-h-12 max-w-12 rounded-full"
                alt=""
              />
              Native APIs
            </p>
            <p className="text-lg font-light">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div class="flex gap-4">
              <div class="flex">
                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                  <img src="asset 47.png" class="min-w-16 min-h-16" alt="" />
                </div>
                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                  <img src="asset 48.jpeg" alt="" />
                </div>
              </div>
              <div class="flex flex-col">
                <p className="font-medium">Rick Pastoor</p>
                <a href="#" class="anchor-hover w-fit text-gray-500">
                  Rise
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* boxes */}
        {/* boxes */}
        <div className="mt-6 group rounded-2xl h-full w-full bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200  p-[1px]">
          <div
            id="box-3"
            className=" bg-white flex flex-col gap-4 p-6 border w-full h-full border-gray-300 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 "
          >
            <p className="text-2xl font-medium flex flex-row items-center gap-3">
              <img
                src="message-code.png"
                className="max-h-12 max-w-12 rounded-full"
                alt=""
              />
              Native APIs
            </p>
            <p className="text-lg font-light">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div class="flex gap-4">
              <div class="flex">
                <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                  <img src="asset 47.png" class="min-w-16 min-h-16" alt="" />
                </div>
                <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                  <img src="asset 48.jpeg" alt="" />
                </div>
              </div>
              <div class="flex flex-col">
                <p className="font-medium">Rick Pastoor</p>
                <a href="#" class="anchor-hover w-fit text-gray-500">
                  Rise
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* boxes */}
      </div>
      {/* Download-ToDesktop */}
      <div
        id="download-box"
        className="flex flex-col border gap-12 p-6 border-gray-300 rounded-2xl bg-black mt-6 lg:flex-row"
      >
        <div className="flex flex-col gap-12 p-6 rounded-2xl bg-black mt-6">
          <p className="text-semibold text-gray-400">READY TO START BUILDING</p>
          <h2 className="text-white">Create your desktop app for free*</h2>
          <p className="text-lg font-light text-gray-400">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>
          <button className="flex flex-row items-center justify-center gap-3 text-white bg-blue-700 rounded-xl py-5">
            <img
              src="download.png"
              alt="download"
              className="max-h-4 max-w-4"
            />
            Download ToDesktop Builder
          </button>
          <p className="font-light -mt-8 text-sm text-gray-400 ">
            *You can create a desktop app and run it on your computer for free.
            You will only be charged if you want to create a distributable app
            for your customers.
          </p>
        </div>
        {/* design */}
        <div>
          <img src="asset 46.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
