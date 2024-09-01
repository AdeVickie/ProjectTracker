import { db, auth } from "../firebase-config/firebase";
import {
  getDoc,
  addDoc,
  arrayUnion,
  updateDoc,
  deleteDoc,
  collection,
  doc,
} from "firebase/firestore";

import { IconBxsPlusCircle } from "./Icons";
import { useEffect, useState } from "react";

function Team({ getTeamData, teamData, isOpenTeam, setIsOpenTeam }) {
  const [teamName, setTeamName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  const [addMemberClickedID, setAddMemberClickedID] = useState(null);
  const [addThisMember, setAddThisMember] = useState("");
  const [membersToDelete, setMembersToDelete] = useState([]);

  const handleCheckboxChange = (teamId, memberName, isChecked) => {
    if (isChecked) {
      setMembersToDelete((prev) => [...prev, { teamId, memberName }]);
    } else {
      setMembersToDelete((prev) =>
        prev.filter((member) => member.memberName !== memberName)
      );
    }
  };

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

  const addMemberToTeam = async (id, member) => {
    const user = auth.currentUser;
    try {
      if (user) {
        const teamDoc = doc(collection(db, `users/${user.email}/teamData`), id);

        await updateDoc(teamDoc, {
          teamMembers: arrayUnion(member),
        });

        setAddMemberClickedID(null);
      }

      alert("member successfully added");
    } catch (err) {
      console.error(err);
    } finally {
      getTeamData();
      setAddThisMember("");
    }
  };

  const deleteMemberFromTeam = async (teamId, memberToDelete) => {
    const user = auth.currentUser;

    try {
      if (user) {
        const teamDoc = doc(
          collection(db, `users/${user.email}/teamData`),
          teamId
        );

        // First, get the current team data
        const teamSnapshot = await getDoc(teamDoc);
        if (teamSnapshot.exists()) {
          const teamData = teamSnapshot.data();

          // Filter out the member to be deleted
          const updatedMembers = teamData.teamMembers.filter(
            (member) => member !== memberToDelete
          );

          // Update the document with the new members list
          await updateDoc(teamDoc, {
            teamMembers: updatedMembers,
          });

          alert("Member deleted successfully");
        } else {
          alert("Team not found");
        }
      }
    } catch (err) {
      console.error("Error deleting member:", err);
    } finally {
      getTeamData();
    }
  };

  const handleDeleteSelected = () => {
    membersToDelete.forEach((member) => {
      deleteMemberFromTeam(member.teamId, member.memberName);
    });
    setMembersToDelete([]);
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
                <div className=" flex flex-row justify-between items-center">
                  <h1 className=" text-xl font-bold uppercase">
                    {element.teamName}
                  </h1>

                  {element.teamMembers.length > 0 ? (
                    <p>{element.teamMembers.length} member(s)</p>
                  ) : (
                    <p>0 members</p>
                  )}
                </div>

                {/* team member list */}
                {element.teamMembers && element.teamMembers.length > 0 ? (
                  <div className=" grid grid-cols-2 gap-1">
                    {element.teamMembers.map((e, i) => (
                      <div key={i}>
                        <div className=" flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            onChange={(event) =>
                              handleCheckboxChange(
                                element.id,
                                e,
                                event.target.checked
                              )
                            }
                          />

                          <p className=" capitalize text-sm">{e}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className=" font-semibold">No members found.</p>
                )}

                {/* add member form */}
                {addMemberClickedID === element.id && (
                  <form className=" addTaskForm text-sm flex flex-col gap-2">
                    <input
                      type="text"
                      className=" taskInput"
                      value={addThisMember}
                      onChange={(e) => {
                        setAddThisMember(e.target.value);
                      }}
                    />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addMemberToTeam(element.id, addThisMember);
                      }}
                      className=" bg-slate-950 text-white rounded-md p-2 w-fit text-xs capitalize"
                    >
                      Add {addThisMember}
                    </button>
                  </form>
                )}

                <div className=" flex flex-row justify-between items-center">
                  <button
                    className=" bg-slate-950 p-2 rounded-md text-white text-sm w-fit"
                    onClick={(e) => {
                      e.preventDefault();
                      setAddMemberClickedID(element.id);
                      console.log(element.id);
                    }}
                  >
                    Add new member
                  </button>

                  <button
                    onClick={handleDeleteSelected}
                    className="bg-red-500 p-2 rounded-md text-white text-sm w-fit"
                  >
                    Delete Members
                  </button>
                </div>
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
