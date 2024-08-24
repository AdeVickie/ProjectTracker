import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

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
      </div>
    </>
  );
}
