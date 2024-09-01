import {
  updateDoc,
  getDoc,
  doc,
  collection,
  arrayUnion,
} from "firebase/firestore";
import { db, auth } from "../firebase-config/firebase";
import { v4 as uuidv4 } from "uuid";

import { IconBxsPlusCircle } from "./Icons";
import { useState } from "react";
import Modal from "./Modal";

function Project({ getDatabaseData, dbData, isOpen, setIsOpen }) {
  const [addTaskClickedID, setAddTaskClickedID] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [taskContent, setTaskContent] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);

  const addTaskToProject = async (id, task) => {
    const user = auth.currentUser;
    try {
      if (user) {
        const projectDoc = doc(
          collection(db, `users/${user.email}/projectData`),
          id
        );
        await updateDoc(projectDoc, {
          tasks: arrayUnion({
            name: task.name,
            content: task.content,
            status: false,
            id: uuidv4(),
          }),
        });
      }

      alert("task added");
    } catch (err) {
      console.error(err);
    } finally {
      getDatabaseData();
      setTaskName("");
      setTaskContent("");
    }
  };

  // const updateTaskStatus = async (id, completedStatus) => {
  //   const user = auth.currentUser;

  //   try {
  //     if (user) {
  //       const projectDoc = doc(
  //         collection(db, `users/${user.email}/projectData`),
  //         id
  //       );
  //       await updateDoc(projectDoc, { status: completedStatus });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     getDatabaseData();
  //   }
  // };

  const updateTaskStatus = async (projectId, taskId, completedStatus) => {
    const user = auth.currentUser;

    try {
      if (user) {
        const projectDoc = doc(
          collection(db, `users/${user.email}/projectData`),
          projectId
        );

        // First, get the current project document
        const projectSnapshot = await getDoc(projectDoc);

        if (projectSnapshot.exists()) {
          const projectData = projectSnapshot.data();
          const updatedTasks = projectData.tasks.map((task) =>
            task.id === taskId ? { ...task, status: completedStatus } : task
          );

          // Update the project document with the modified tasks array
          await updateDoc(projectDoc, { tasks: updatedTasks });
        } else {
          console.error("Project document does not exist");
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      getDatabaseData();
    }
  };
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
                <div className=" w-full flex flex-row items-center justify-between">
                  <h1 className=" text-lg font-bold uppercase ">
                    {element.projectName}
                  </h1>

                  <p className=" text-sm">{element.projectDuration} months</p>
                </div>

                <div className=" flex flex-row justify-between items-center font-semibold">
                  <p>{element.projectTeam}</p>

                  <button
                    className=" text-sm p-2 rounded-md text-white bg-slate-950"
                    onClick={(e) => {
                      e.preventDefault();
                      setAddTaskClickedID(element.id);
                      console.log(element.id);
                    }}
                  >
                    Add task
                  </button>
                </div>

                <p>{element.projectCategory}</p>

                {/* add task form */}
                {addTaskClickedID === element.id && (
                  <form className=" addTaskForm text-sm flex flex-col gap-2">
                    <div className="taskInputGrp">
                      <label>Task name:</label>
                      <input
                        type="text"
                        className=" taskInput"
                        value={taskName}
                        onChange={(e) => {
                          setTaskName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="taskInputGrp">
                      <label>Task content:</label>
                      <input
                        type="text"
                        className=" taskInput"
                        value={taskContent}
                        onChange={(e) => {
                          setTaskContent(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setAddTaskClickedID(null);
                        addTaskToProject(element.id, {
                          name: taskName,
                          content: taskContent,
                        });
                      }}
                      className=" bg-slate-950 text-white rounded-md p-2 w-fit text-xs"
                    >
                      Submit task
                    </button>
                  </form>
                )}

                {/* Display tasks */}
                {element.tasks && element.tasks.length > 0 && (
                  <div className="tasks-list mt-4">
                    <h2 className="text-md font-semibold">Tasks:</h2>
                    {element.tasks.map((task, index) => (
                      <div key={index} className="task-item p-2 border-b">
                        <h3 className=" font-semibold">{task.name}</h3>

                        <div className=" flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            className=" cursor-pointer"
                            checked={task.status}
                            onChange={(e) => {
                              const checkStatus = e.target.checked;
                              updateTaskStatus(
                                element.id,
                                task.id,
                                checkStatus
                              );
                            }}
                          />

                          <p
                            onClick={() => console.log(task.id)}
                            className={`text-sm ${
                              task.status ? " line-through" : ""
                            }`}
                          >
                            {task.content}
                          </p>
                        </div>

                        <p className="text-xs text-gray-500">
                          {task.status ? "completed" : "pending"}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <p className=" text-xs">
                  Created at {element.createdAt?.toDate().toLocaleString()}
                </p>
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
