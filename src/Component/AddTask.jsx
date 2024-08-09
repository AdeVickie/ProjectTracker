import React from "react";
import { IconBxsPlusCircle, IconCalendarTwo, IconCheck2 } from "./Icons";

export default function AddTask() {
  return (
    <div className="gap-10 h-[30rem] flex xs:flex-col px-5 ">
      <div className="flex-1 relative rounded-2xl hover:shadow-lg hover:border hover:border-x-gray-500 hover:border-y-gray-500">
        <p className=" text-center p-5 ">
          Juray keeps your most important tasks in one list. Add your most.{" "}
          <a href="/">
            <span className="text-blue-500 hover:underline">Learn more</span>
          </a>
        </p>
        <p className="text-center">
          <button className="px-5 py-3 bg-gray-100 mb-5 rounded-xl">
            <IconCheck2 className="text-lg text-gray-400 shadow-xl" />
          </button>
        </p>
        <p className="text-center group">
          <button className="px-4 py-2 bg-blue-300 rounded hover:bg-blue-500 duration-300 group-hover:text-slate-200">
            {" "}
            <IconBxsPlusCircle className="inline-block -mt-1 text-lg text-gray-500 group-hover:text-slate-200" />
            Add Task
          </button>
        </p>
      </div>

      {/* <div className="flex-1 rounded-2xl  hover:shadow-lg hover:border hover:border-x-gray-500 hover:border-y-gray-500"> */}
      <div className="flex-1 relative rounded-2xl hover:shadow-lg hover:border hover:border-x-gray-500 hover:border-y-gray-500">
        <p className=" text-center p-5 ">
          Juray keeps your most important tasks in one list. Add your most.{" "}
          <a href="/">
            <span className="text-blue-500 hover:underline">Learn more</span>
          </a>
        </p>
        <p className="text-center">
          <button className="px-5 py-3 bg-gray-100 mb-5 rounded-xl">
            <IconCalendarTwo className="text-lg text-gray-400 shadow-xl" />
          </button>
        </p>
        <p className="text-center group">
          <button className="px-4 py-2  bg-pink-300 rounded hover:bg-pink-500 duration-300 group-hover:text-slate-200">
            {" "}
            <IconBxsPlusCircle className="inline-block -mt-1 text-lg text-gray-500 group-hover:text-slate-200" />
            Add Caldendar Integration
          </button>
        </p>
      </div>
    </div>
  );
}
