import { useState } from "react";

export default function Modal({ CloseForm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
      <div className="w-[600px]">
        <div className="bg-white p-2 rounded-lg m-10 transition ease-out duration-500 transform">
          <div className="flex justify-between">
            {" "}
            <h1 className="mt-2 mb-2 font-bold text-blue-950">Add Project</h1>
            <button
              onClick={() => CloseForm(false)}
              className=" text-black px-[0.8rem] py-1 border-2 border-blue-400  border-opacity-25"
            >
              X
            </button>
          </div>
          <form>
            <label className="block mb-2">Project Name:</label>
            <input
              type="text"
              className="w-full h-8 md:outline-none md:border mb-2 md:focus:outline-none md:focus:ring-0 md:focus:border-gray-600 text-base px-2 py-1 rounded-md"
              placeholder="Project Name....."
            />

            <label className="mb-2">Select Category</label>
            <select
              name="categories"
              className="w-full h-8 md:outline-none md:border mt-2 mb-2 md:focus:outline-none md:focus:ring-0 md:focus:border-gray-600 text-base px-2 py-1 rounded-md"
            >
              <option value="FrontEnd">Categories....</option>
              <option value="Frontend">Front End Dev</option>
              <option value="Backend">Back End Dev</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Content">Content Writing</option>
              <option value="Marketing">Marketing</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Data Science">Data Science</option>
            </select>

            <label className="">Select Team</label>
            <select
              name="categories"
              className="w-full h-8 md:outline-none md:border mt-2 md:focus:outline-none md:focus:ring-0 md:focus:border-gray-600 text-base px-2 py-1 rounded-md"
            >
              <option value="select">Teams.....</option>
              <option value="Frontend">Adedoyin</option>
              <option value="Full Stack">Pascal</option>
              <option value="General Manager">Ubanga</option>
              <option value="Product Manager">Seaman</option>
              <option value="School Solutions">Oche</option>
              <option value="Cyber Security">Emmanuel</option>
              <option value="Data Science">Manager</option>
            </select>
            <p className="text-center">
              <button className="px-32 py-2 bg-blue-950 text-white rounded mt-5">
                Add Project
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
