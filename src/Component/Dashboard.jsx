import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Team from "./Team";
import Project from "./Project";
import { Route, Switch } from "react-router-dom";

const Dashboard = ({
  sidebarToggle,
  setSidebarToggle,
  getDatabaseData,
  getTeamData,
  dbData,
  teamData,
  logOut,
  admin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTeam, setIsOpenTeam] = useState(false);

  return (
    <div className="dashboardScreen">
      <Sidebar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      {/* Sidebar toggle effect */}
      <div className={`${sidebarToggle ? " " : "ml-64"} w-full duration-500`}>
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          logOut={logOut}
          admin={admin}
        />

        <Switch>
          <Route exact path={"/"}>
            <LandingPage dbData={dbData} getDatabaseData={getDatabaseData} />
          </Route>

          <Route path={"/Project"}>
            <Project
              getDatabaseData={getDatabaseData}
              dbData={dbData}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </Route>

          <Route path={"/Team"}>
            <Team
              getTeamData={getTeamData}
              teamData={teamData}
              isOpenTeam={isOpenTeam}
              setIsOpenTeam={setIsOpenTeam}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
