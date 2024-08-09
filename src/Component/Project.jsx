import React from "react";

export default function Project() {
  return (
    <div>
      <form className="inline-block">
        <label className="block">Project Name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          required
          className="h-8 ring-0 focus:outline-none text-base focus:border-blue-200 border outline-2 "
        />
        <label className="block">Project Name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          required
          className="h-8 ring-0 focus:outline-none text-base focus:border-blue-200 border outline-2 "
        />
      </form>
    </div>
  );
}
