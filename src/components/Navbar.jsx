import React, { useState } from "react";

function Navbar() {
  const [Mobilemenu, setMobilemenu] = useState();

  const togglemenu = () => {
    setMobilemenu((prev) => !prev);
  };
  return (
    <nav className="font-['Poppins'] z-50 flex justify-between items-center px-6 py-1 min-h-20 bg-white border-0 shadow-lg">
      <div className="flex items-center text-lg font-medium gap-2">
        <img src="asset 0.png" className="object-cover max-w-12 max-h-12" />
        ToDesktop
      </div>

      <div className="hidden md:flex align-center justify-center gap-12 sm:visible">
        <div className="flex items-center hover:text-blue-500 cursor-pointer text-lg ">
          Pricing
        </div>
        <div className="flex items-center hover:text-blue-500 cursor-pointer  text-lg ">
          Docs
        </div>
        <div className="flex items-center hover:text-blue-500 cursor-pointer text-lg">
          Changelogs
        </div>
        <div className="flex items-center hover:text-blue-500 cursor-pointer text-lg">
          Blogs
        </div>
        <div className="flex items-center hover:text-blue-500 cursor-pointer text-lg">
          Login
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden lg:flex border-1 border-gray-300 p-2 rounded-2xl items-center gap-3 cursor-pointer hover:border-gray-900">
          <img src="electron.png" className="max-w-9 max-h-9" />
          Electron developers
        </button>

        <button onClick={togglemenu}>
          <img
            src={Mobilemenu ? "cross-small.png" : "burger.png"}
            className="max-w-12 max-h-12 p-3 cursor-pointer md:hidden"
          />
        </button>
      </div>

      {Mobilemenu && (
        <div className="fixed bg-white inset-0 z-50 md:hidden max-w-screen min-h-screen">
          <div
            id="nav-bar-responsive"
            className="font-['Poppins'] flex justify-between items-center px-6 py-3 min-h-20 bg-white border-0 shadow"
          >
            <div className="flex items-center text-lg font-medium gap-2">
              <img
                src="asset 0.png"
                className="object-cover max-w-12 max-h-12"
              />
              ToDesktop
            </div>

            <button onClick={togglemenu} className="">
              <img
                src="cross-small.png"
                className="max-w-12 max-h-12 p-3 cursor-pointer md:hidden"
              />
            </button>
          </div>
          {/* mobile menu items */}
          <div className="font-['Poppins'] flex flex-col items-center gap-6 mt-4 px-3">
            <div className="flex items-center hover:text-blue-500 hover:bg-gray-100 rounded-2xl cursor-pointer text-lg ">
              Pricing
            </div>
            <div className="flex items-center hover:text-blue-500 hover:bg-gray-100 rounded-2xl cursor-pointer  text-lg ">
              Docs
            </div>
            <div className="flex items-center hover:text-blue-500 hover:bg-gray-100 rounded-2xl cursor-pointer text-lg">
              Changelogs
            </div>
            <div className="flex items-center hover:text-blue-500 hover:bg-gray-100 rounded-2xl cursor-pointer text-lg">
              Blogs
            </div>
            <div className="flex items-center hover:text-blue-500 hover:bg-gray-100 rounded-2xl cursor-pointer text-lg">
              Login
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 mt-5"></div>
          <div className="px-2">
            <button className="w-full mt-5 justify-center flex border-1 border-gray-300 p-2 rounded-2xl items-center gap-3 cursor-pointer hover:border-gray-900">
              <img src="electron.png" className="max-w-9 max-h-9" />
              Electron developers
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
