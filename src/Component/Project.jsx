import React from "react";
import { IconBxsPlusCircle } from "./Icons";

export default function Project() {
  return (
    <div className="underline-offset-24">
      <div className="flex justify-between mt-5 mx-4">
        <div>
          <h1 className="text-blue-950 content-center md:text-2xl md:font-bold xs:text-sm mt-3 ">
            Projects
          </h1>
        </div>

        <div>
          <div className="flex">
            <button className=" px-2 rounded text-white font-semibold py-2 bg-blue-950 md:mr-5 xs:text-sm md:text-lg">
              <IconBxsPlusCircle className=" xs:text-sm text-white inline-block -mt-1 md:text-2xl" />
              Create Projects
            </button>
            <div className="cursor-pointer xs:hidden md:block px-6 py-3 border border-blue-950 rounded ">
              <h1 className="inline-block mr-5">All</h1>
              <h1 className="inline-block mr-5">Started</h1>
              <h1 className="inline-block mr-5">Approval</h1>
              <h1 className="inline-block">Completed</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
