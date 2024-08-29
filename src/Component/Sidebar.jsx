import React from "react";
import { Link } from "react-router-dom";
// Icons importation
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
    // side bar width and toggle effect
    <div className={`${sidebarToggle ? "hidden" : "block"} sidebar`}>
      <div className="my-2 mb-10 duration-500">
        <h1 className="text-2xl text-white font-bold">Project Dashbaord</h1>
      </div>

      <ul className="sidebarItemGrp">
        {/* Dashboard */}
        <Link
          to={"/"}
          className="mb-7 rounded duration-300 hover:shadow bg-blue-500 py-2"
        >
          <li>
            <a href="" className="px-3">
              <IconHomeOutline className="sideMenuIcon" />
              Dashbaord
            </a>
          </li>
        </Link>

        {/* project section and dropdown */}
        <Link to={"/Project"} className="sidebarItem">
          <IconFolderOutline className="sideMenuIcon" />
          Project
        </Link>

        {/* Team dropdown menu */}
        <Link to="/Team" className="sidebarItem">
          <li className="group ">
            <IconTeamLine className="sideMenuIcon" />
            Team
          </li>
        </Link>

        <Link to={"/Chart"} className="sidebarItem">
          <IconBarChartLine className="sideMenuIcon" />
          Chart
        </Link>

        <Link to={"/Sheet"} className="sidebarItem">
          <IconCalendarTwo className="sideMenuIcon" />
          Sheet
        </Link>

        <Link to={"/Revenue"} className="sidebarItem">
          <IconLineChartLine className="sideMenuIcon" />
          Revenue
        </Link>
      </ul>
    </div>
  );
}
