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
  dbData,
  logOut,
  admin,
}) => {
  return (
    <div className="dashboardScreen">
      <Sidebar sidebarToggle={sidebarToggle} />

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
            <LandingPage />
          </Route>

          <Route path={"/Project"}>
            <Project getDatabaseData={getDatabaseData} dbData={dbData} />
          </Route>

          <Route path={"/Team"}>
            <Team />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
