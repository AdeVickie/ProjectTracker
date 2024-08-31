import { useEffect, useState } from "react";
import { db, auth } from "../firebase-config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Modal({ setIsOpen, getDatabaseData }) {
  const [projectName, setProjectName] = useState("");
  const [projectTeam, setProjectTeam] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectDuration, setProjectDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const addProject = async () => {
    setIsLoading(true);
    const user = auth.currentUser;

    try {
      if (user) {
        await addDoc(collection(db, `users/${user.email}/projectData`), {
          projectName: projectName,
          projectTeam: projectTeam,
          projectCategory: projectCategory,
          projectDuration: projectDuration,
          createdAt: serverTimestamp(),

          userID: user.uid,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      getDatabaseData();

      setIsLoading(false);

      setProjectName("");
      setProjectCategory("");
      setProjectTeam("");

      setIsOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
      <div className="w-[600px]">
        <div className="modalBody">
          <div className="flex justify-between items-center mb-5">
            <h1 className=" text-2xl font-bold text-blue-950">Add Project</h1>

            <button
              onClick={() => setIsOpen(false)}
              className=" text-black py-1 px-2.5 border-2 border-blue-400 rounded-lg border-opacity-25"
            >
              X
            </button>
          </div>

          <form>
            <div>
              <label>Project Name:</label>

              <input
                type="text"
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                className="modalInput"
                placeholder="Enter project name"
              />
            </div>

            <div>
              <label>Project Duration (MONTHS):</label>

              <input
                type="number"
                value={projectDuration}
                onChange={(e) => {
                  setProjectDuration(e.target.value);
                }}
                className="modalInput"
                placeholder="Estimated project duration"
              />
            </div>

            <div>
              <label>Select Category</label>

              <select
                name="categories"
                className="modalInput"
                onChange={(e) => {
                  setProjectCategory(e.target.value);
                }}
              >
                <option value="">Categories....</option>
                <option value="Frontend">Front End Dev</option>
                <option value="Backend">Back End Dev</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Content">Content Writing</option>
                <option value="Marketing">Marketing</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Data Science">Data Science</option>
              </select>
            </div>

            <div>
              <label>Select Team</label>

              <select
                name="categories"
                className="modalInput"
                onChange={(e) => {
                  setProjectTeam(e.target.value);
                }}
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
            </div>

            <button
              className=" w-3/5 mx-auto py-2 bg-blue-950 text-white rounded-md mt-5"
              onClick={(e) => {
                e.preventDefault();
                addProject();
              }}
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
