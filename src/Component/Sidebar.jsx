import React from "react";
import { Link } from "react-router-dom";
import {
  IconBarChartLine,
  IconCalendarTwo,
  IconDownOpenMini,
  IconFolderOutline,
  IconHomeOutline,
  IconLineChartLine,
  IconProgressCheck,
  IconTeamLine,
} from "./Icons";

export default function Sidebar({ sidebarToggle }) {
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-gray-800 fixed h-full px-4 py-2 duration-500`}
    >
      <div className="my-2 mb-10 duration-500">
        <h1 className="text-2xl text-white font-bold">Project Dashbaord</h1>
      </div>

      <ul className="mt-3 text-white font-semibold">
        <li className="mb-7 rounded duration-300 hover:shadow bg-blue-500 py-2">
          <a href="" className="px-3">
            <IconHomeOutline className="inline-block w-6 h-6 mr-5 -mt-2" />
            Dashbaord
          </a>
        </li>

        <li className="mb-7  rounded duration-300 hover:shadow relative hover:bg-blue-500 py-2 ">
          <Link to="/project" className="px-3 relative">
            <IconFolderOutline className="inline-block w-6 h-6 mr-5 -mt-2" />
            Project
          </Link>

          <button className="text-white group absolute top-0 right-0 w-[40px] h-[100%] ">
            <IconDownOpenMini className="w-8 h-8 " />
            <div className="group-hover:block hidden duration-700 absolute w-36 top-full rounded left-[50px] z-10 bg-white text-lg">
              <ul className="py-2 text-sm text-gray-600">
                <li className="pb-5">Add Task</li>
                <li>Check Calendar</li>
                <li className="pt-5 mb-3">Add New Team</li>
              </ul>
            </div>
          </button>
        </li>

        <li className="mb-7 relative group rounded duration-300 hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3 relative">
            <IconTeamLine className="inline-block w-6 h-6 mr-5 -mt-2" />
            Team
          </a>
          <button className="absolute w-[40px] h-[100%] right-0 top-0 ">
            <IconDownOpenMini className="w-8 h-8" />
            <div className="hidden group-hover:block bg-white w-48 h-48 absolute top-full rounded text-gray-600 left-[50px] z-10 text-lg ">
              <ul className="py-2 text-sm text-gray-60">
                <li className="pb-5 ">Add Team</li>
                <li>Assign Task</li>
                <li className="pt-5">Check Calendar</li>
                <li className="pt-5">Assign Task</li>
                <li className="py-5">Check Chat</li>
              </ul>
            </div>
          </button>
        </li>

        <li className="mb-7 rounded duration-300 hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <IconBarChartLine className="inline-block w-6 h-6 mr-5 -mt-2" />
            Chart
          </a>
        </li>
        <li className="mb-7 rounded duration-300 hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <IconCalendarTwo className="inline-block w-6 h-6 mr-5 -mt-2" />
            Sheet
          </a>
        </li>
        <li className="mb-7 rounded duration-300 hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <IconLineChartLine className="inline-block w-6 h-6 mr-5 -mt-2" />
            Revenue
          </a>
        </li>
        <li className="mb-7 rounded duration-300 hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <IconProgressCheck className="inline-block w-6 h-6 mr-5 -mt-2" />
            Revenue
          </a>
        </li>
      </ul>
    </div>
  );
}
