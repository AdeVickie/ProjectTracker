import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Progress from "./Progress";
import AddTask from "./AddTask";

export default function Home({ sidebarToggle, setSidebarToggle }) {
  return (
    <>
      {/* Sidebar toggle effect */}
      <div className={`${sidebarToggle ? " " : "ml-64"} w-full duration-500`}>
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <LandingPage />
        <Progress />
        <AddTask />
      </div>
    </>
  );
}
