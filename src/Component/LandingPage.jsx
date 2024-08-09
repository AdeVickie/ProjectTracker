import React from "react";
import Navbar from "./Navbar";
import {
  IconFolderOutline,
  IconLineChartLine,
  IconMoneyEuroCircleLine,
  IconTeamLine,
  IconTimeOutline,
} from "./Icons";

function LandingPage({ writeup1, icon, writeup2, click }) {
  return (
    <>
      <div className="bg-slate-200 shadow-lg rounded-xl w-56 xs:w-72 md:w-52 h-[180px] m-5">
        <div className="flex justify-between p-2">
          <p className="font-semibold text-2xl">{writeup2}</p>
          <div className="px-3 py-3 rounded-full bg-gray-300 text-red-500 opacity-90">
            {icon}
          </div>
        </div>
        <h1 className="text-3xl pl-2 xs:text-center md:text-start">
          {writeup1}
        </h1>
        <p className="pl-2 text-slate-100 pt-4 xs:text-center md:text-start">
          <button className="px-5 py-2 bg-red-400 rounded-lg ">{click}</button>
        </p>
      </div>
    </>
  );
}

export default function Card() {
  return (
    <>
      <div className="flex flex-1 flex-wrap xs:justify-center md:justify-around">
        <LandingPage
          icon={<IconFolderOutline />}
          writeup1={20}
          writeup2="Total projects"
          click={"Add new project"}
        />
        <LandingPage
          icon={<IconTeamLine />}
          writeup1={126}
          writeup2="Team size"
          click={"Add new members"}
        />
        <LandingPage
          icon={<IconLineChartLine />}
          writeup1={16000}
          writeup2="Total revenue"
          click={"Add more info"}
        />
        <LandingPage
          icon={<IconTimeOutline />}
          writeup1={9000}
          writeup2="Time spent"
          click={"Extend period"}
        />
        <LandingPage
          icon={<IconMoneyEuroCircleLine />}
          writeup1={2000}
          writeup2="Resources"
          click={"Extend period"}
        />
      </div>
    </>
  );
}
