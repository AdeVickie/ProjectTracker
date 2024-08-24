import React from "react";
import { IconBxsPlusCircle, IconCalendarTwo, IconCheck2 } from "./Icons";

export default function AddTask() {
  return (
    <div className="addTaskScreenGrp">
      <div className="addTaskContainer">
        <p className="addTaskHeading">
          Juray keeps your most important tasks in one list. Add your most.
          <a href="/">
            <span>Learn more</span>
          </a>
        </p>
        <p className="text-center">
          <button className="addTaskIcon bg-gray-100">
            <IconCheck2 className="text-lg text-gray-400 shadow-xl" />
          </button>
        </p>
        <p className="text-center group">
          <button className=" addTaskBtn bg-blue-300 hover:bg-blue-500">
            <IconBxsPlusCircle className="addTaskBtnIcon" />
            Add Task
          </button>
        </p>
      </div>

      <div className="addTaskContainer">
        <p className="addTaskHeading">
          Juray keeps your most important tasks in one list. Add your most.
          <a href="/">
            <span>Learn more</span>
          </a>
        </p>
        <p className="text-center">
          <button className=" bg-gray-100 mb-5 addTaskIcon">
            <IconCalendarTwo className="text-lg text-gray-400 shadow-xl" />
          </button>
        </p>
        <p className="text-center group">
          <button className="addTaskBtn bg-pink-300 rounded hover:bg-pink-500  group-hover:text-slate-200">
            <IconBxsPlusCircle className="addTaskBtnIcon" />
            Add Caldendar Integration
          </button>
        </p>
      </div>
    </div>
  );
}
