import { db, auth } from "../firebase-config/firebase";
import { addDoc, collection } from "firebase/firestore";

import { IconBxsPlusCircle } from "./Icons";
import { useEffect, useState } from "react";

function Team({ getTeamData, teamData, isOpenTeam, setIsOpenTeam }) {
  const [teamName, setTeamName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  const createTeam = async () => {
    const user = auth.currentUser;

    try {
      if (user) {
        await addDoc(collection(db, `users/${user.email}/teamData`), {
          teamName: teamName,
          teamMembers: teamMembers,

          userID: user.uid,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      getTeamData();

      setTeamName("");
      setMemberName("");

      setIsOpenTeam(false);
    }
  };

  useEffect(() => {
    console.log(teamMembers);
  }, [teamMembers]);

  const handleAddMember = () => {
    if (memberName.trim() !== "") {
      setTeamMembers([...teamMembers, memberName]);
      setMemberName(""); // Clear the input after adding
    }
  };

  return (
    <div>
      <div className="underline-offset-24">
        <div className="flex justify-between mt-5 mx-4">
          <div>
            <h1 className="text-blue-950 content-center md:text-2xl md:font-bold xs:text-sm font-bold mt-3 ">
              Team
            </h1>
          </div>

          <div className="flex">
            <button
              className=" px-2 rounded text-white font-semibold py-2 bg-blue-950 md:mr-5 xs:text-sm md:text-lg"
              onClick={() => setIsOpenTeam(true)}
            >
              <IconBxsPlusCircle className=" xs:text-sm text-white inline-block -mt-1 md:text-2xl" />
              Create Team
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
          {teamData && teamData.length > 0 ? (
            teamData.map((element) => (
              <div key={element.id} className="projectBody">
                <h1 className=" text-xl font-bold uppercase">
                  {element.teamName}
                </h1>

                {/* <p>{element.memberName}</p> */}

                {element.teamMembers && element.teamMembers.length > 0 ? (
                  <p className=" capitalize">
                    {element.teamMembers
                      .map(
                        (e, i) => e
                        // <span key={i} className="projectBody">
                        //   {e},
                        // </span>
                      )
                      .join(", ")}
                  </p>
                ) : (
                  <p className=" font-semibold">No members found.</p>
                )}
              </div>
            ))
          ) : (
            <h1 className=" text-2xl font-bold uppercase">No teams found.</h1>
          )}
        </div>
      </div>

      {/* CREATE TEAM MODAL */}
      {isOpenTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
          <div className="w-[600px]">
            <div className="modalBody">
              <div className="flex justify-between items-center mb-5">
                <h1 className=" text-2xl font-bold text-blue-950">
                  Create Team
                </h1>

                <button
                  onClick={() => setIsOpenTeam(false)}
                  className=" text-black py-1 px-2.5 border-2 border-blue-400 rounded-lg border-opacity-25"
                >
                  X
                </button>
              </div>

              <form>
                <div>
                  <label>Team Name:</label>

                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => {
                      setTeamName(e.target.value);
                    }}
                    className="modalInput"
                    placeholder="Enter Team name"
                  />
                </div>

                <div>
                  <label>Member Name:</label>

                  <input
                    type="text"
                    value={memberName}
                    onChange={(e) => {
                      setMemberName(e.target.value);
                    }}
                    className="modalInput"
                    placeholder="Enter member name"
                  />

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddMember();
                    }}
                    className="p-2 bg-blue-950 text-white rounded-md mt-2 text-sm"
                  >
                    Add Member
                  </button>
                </div>

                <button
                  className=" w-3/5 mx-auto py-2 bg-blue-950 text-white rounded-md mt-5"
                  onClick={(e) => {
                    e.preventDefault();
                    createTeam();
                  }}
                >
                  Create team
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
