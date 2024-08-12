import React from "react";
import {
  IconAccountCircleLine,
  IconBars,
  IconBellRingOutline,
  IconSearch,
} from "./Icons";

export default function Navbar({ sidebarToggle, setSidebarToggle }) {
  return (
    <>
      <nav className="bg-gray-600 px-4 py-3 flex justify-between">
        {/* left side */}
        <div className="flex items-center text-xl ">
          <IconBars
            className="text-white me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
          <span className="text-white font-semibold">Report</span>
        </div>
        {/* right side */}
        <div className="flex items-center gap-x-5">
          <div className="relative md:w-65">
            <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
              <button className="p-1 focus:outline-none text-white md:text-black hidden md:block">
                <IconSearch />
              </button>
            </span>
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            />
          </div>
          {/* bell icon */}
          <div className="text-white">
            <IconBellRingOutline className="w-6 h-6" />
          </div>
          {/* Account dropdown */}
          <div className="relative">
            <button className="text-white group ">
              <IconAccountCircleLine className="w-6 h-6 mt-1" />
              <div className="z-10 bg-white  group-focus:block hidden absolute rounded-lg transition-all duration-500 ease-in-out shadow w-32 top-full right-0 ">
                <ul className="py-2 text-sm text-gray-950">
                  <li className="pb-3">Profile</li>
                  <li>Setting</li>
                  <li className="pt-3">Log Out</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
