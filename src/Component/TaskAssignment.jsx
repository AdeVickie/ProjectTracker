// import React from "react";
// import { IconShareSocialOutline } from "./Icons";

import {
  Icon090Mobile2,
  IconAccount,
  IconAttach,
  IconBxsPlusCircle,
  IconCheck2,
  IconClipboardCheck,
  IconDeleteBinLine,
  IconIconEdit,
  IconMessageProcessing,
  IconSendCheck,
  IconShareSocialOutline,
  IconTeamLine,
  IconTimerSandComplete,
  IconWebsite,
} from "./Icons";
import image1 from "../Images/Photo1.png";
import image2 from "../Images/Photo2.png";
import image3 from "../Images/Photo.png";
import Model from "./Model";
import { useState } from "react";

function TaskAssignment({ paragraph, unit }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <div className="flex xs:justify-center md:justify-start mt-5 ml-5"> */}
      <div className="h-56 w-[350px] bg-slate-200 border border-gray-300 mt-5">
        {/* <div className="bg-slate-200 absolute shadow-lg rounded-xl w-56 xs:w-72 md:w-52 h-[180px] m-5"> */}

        <p className="text-center text-gray-600">{paragraph}</p>
        <div className="flex justify-between px-3 mb-5 mt-5">
          <h1 className="font-bold">{unit}</h1>
          <div className="">
            <IconIconEdit className="inline-block text-green-500 mr-2 text-lg cursor-pointer" />
            <IconDeleteBinLine className="inline-block text-red-500 text-lg cursor-pointer" />
          </div>
        </div>
        <div className="">
          <img
            src={image1}
            alt=""
            className="rounded-full w-[10%] inline-block h-[10%] border-2 border-white"
          />

          <img
            src={image2}
            alt=""
            className="rounded-full inline-block w-[10%] border-2 border-white"
          />
          <img
            src={image3}
            alt=""
            className=" rounded-full inline-block w-[10%] border-2 border-white"
          />

          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <IconBxsPlusCircle className="inline-block text-3xl cursor-pointer text-orange-500" />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="mt-3">
            <IconAttach className="inline-block mx-2" />
            <h1 className="inline-block">5 Attach</h1>
          </div>
          <div className="mt-3 mx-2">
            <IconTimerSandComplete className="inline-block mx-2" />
            <h1 className="inline-block">4 Months</h1>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="mt-3 ">
            <IconTeamLine className="inline-block mx-2" />
            <h1 className="inline-block">5 Member</h1>
          </div>
          <div className="mt-3 mx-2">
            <IconMessageProcessing className="inline-block mx-2" />
            <h1 className="inline-block ">10 Inboxs</h1>
          </div>
        </div>
        <a href="" className=" text-blue-500 underline p-5 italic">
          more details
        </a>
      </div>

      {open && <Model closeModel={setOpen} />}
    </>
  );
}

export default function Cards() {
  return (
    <>
      <div className="flex flex-1 flex-wrap xs:justify-center md:justify-around">
        <TaskAssignment
          paragraph={"Practice to Perfect"}
          unit={"Website Design"}
        />

        <TaskAssignment paragraph={"Java Dalia"} unit={"App Development"} />

        <TaskAssignment
          paragraph={"Switch and Swiff"}
          unit={"Quality Assurance"}
        />

        <TaskAssignment paragraph={"Fast Card"} unit={"Software Testing"} />
        <TaskAssignment paragraph={"Communication"} unit={"Social Media"} />
        <TaskAssignment paragraph={"System Securing"} unit={"Cyber Analyst"} />
        <TaskAssignment paragraph={"Data Storage"} unit={"Data Scientist"} />
        <TaskAssignment
          paragraph={"Network and Servers"}
          unit={"Network Analyst"}
        />
      </div>
    </>
  );
}
