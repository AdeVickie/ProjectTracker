import React from "react";

export default function Model({ closeModel }) {
  return (
    <div className="mx-auto h-32 w-32 bg-gray-200">
      <div className="">
        <button onClick={() => closeModel(false)}>X</button>
        <div className="">
          <h1>Are you sure?</h1>
        </div>
        <div className="body">
          <p>The next page is awesome</p>
        </div>
        <div className="">
          <button onClick={() => closeModel(false)}>Yes</button>
        </div>
      </div>
    </div>
  );
}
