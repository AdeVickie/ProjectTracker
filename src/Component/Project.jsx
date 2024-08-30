import { IconBxsPlusCircle } from "./Icons";
import { useState } from "react";
import Modal from "./Modal";

function Project({ getDatabaseData, dbData, isOpen, setIsOpen }) {
  return (
    <div>
      <div className="underline-offset-24">
        <div className="flex justify-between mt-5 mx-4">
          <div>
            <h1 className="text-blue-950 content-center md:text-2xl md:font-bold xs:text-sm font-bold mt-3 ">
              Project
            </h1>
          </div>

          <div className="flex flex-row items-center">
            <button
              onClick={() => setIsOpen(true)}
              className=" px-2 rounded text-white font-semibold py-2 bg-blue-950 md:mr-5 xs:text-sm md:text-lg"
            >
              <IconBxsPlusCircle className=" xs:text-sm text-white inline-block -mt-1 md:text-2xl" />
              Create Project
            </button>
            <div className="cursor-pointer xs:hidden md:block px-6 py-3 border border-blue-950 rounded ">
              <h1 className="inline-block mr-5">All</h1>
              <h1 className="inline-block mr-5">Started</h1>
              <h1 className="inline-block mr-5">Approval</h1>
              <h1 className="inline-block">Completed</h1>
            </div>
          </div>
        </div>

        <div className="listOfProjects">
          {dbData && dbData.length > 0 ? (
            dbData.map((element) => (
              <div key={element.id} className="projectBody">
                <h1 className=" text-xl font-bold uppercase">
                  {element.projectName}
                </h1>

                <p>{element.projectTeam}</p>
                <p>{element.projectCategory}</p>
              </div>
            ))
          ) : (
            <h1 className=" text-2xl font-bold uppercase">
              No projects found.
            </h1>
          )}
        </div>
      </div>

      {isOpen && (
        <Modal setIsOpen={setIsOpen} getDatabaseData={getDatabaseData} />
      )}
    </div>
  );
}

export default Project;
