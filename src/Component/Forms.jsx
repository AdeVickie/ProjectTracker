import React from "react";

import { Link } from "react-router-dom";

export default function Forms() {
  return (
    <div className="flex h-screen w-screen bg-gray-400 justify-center items-start pt-2">
      <div className="w-96 p-6 shadow-lg bg-slate-100 rounded-md">
        <h1 className="flex justify-center gap-4 text-2xl">Register</h1>

        <div className="">
          {/* Name field */}
          <label form="name" className="block text-base mb-2">
            Name *
          </label>
          <input
            type="text"
            id="username"
            className="w-full text-base h-8 ring-0 border rounded-lg focus:outline-none pl-3 focus:border-gray-400 mb-5"
            placeholder="Enter name....."
          />
          {/* Personal email field */}
          <label form="email" className="block text-base">
            Personal Email *
          </label>
          <input
            type="email"
            id="email"
            className="w-full text-base h-8 ring-0 border rounded-lg focus:outline-none pl-3 focus:border-gray-400 mb-5"
            placeholder="Enter Personal email....."
          />
          {/* company's name field */}
          <label form="company's name" className="block text-base mb-2">
            Company's Name
          </label>
          <input
            type="text"
            id="text"
            className="w-full text-base h-8 ring-0 border rounded-lg focus:outline-none pl-3 focus:border-gray-400 mb-5"
            placeholder="Enter Company's name....."
          />

          {/* create password field */}
          <label form="username" className="block text-base mb-2">
            Create Password *
          </label>
          <input
            type="password"
            id="password"
            className="w-full text-base h-8 ring-0 border rounded-lg focus:outline-none pl-3 focus:border-gray-400 mb-5"
            placeholder="Create password....."
          />
          {/* confirm password field */}
          <label form="username" className="block text-base mb-2">
            Confirm Password *
          </label>
          <input
            type="password"
            id="password"
            className="w-full text-base h-8 ring-0 border rounded-lg focus:outline-none pl-3 focus:border-gray-400 b-5"
            placeholder="Confirm password....."
          />
        </div>
        {/* forget password section */}
        <div className="flex mt-3 justify-between items-center">
          <div>
            <input type="checkbox" />
            <label className="pl-2">Remember me</label>
          </div>
          <a href="/" className="font-semibold text-red-400">
            Forgot password?
          </a>
        </div>
        {/* have an account section */}
        <div className="flex gap-2 mt-5">
          <h1>Have an Account ? </h1>

          <Link to="/login" className="text-red-400">
            Login here &rarr;
          </Link>
        </div>
        {/* Register button */}
        <p className="text-center pt-3">
          <button className="px-10 py-3 bg-green-700 rounded-2xl text-white shadow-2xl">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
