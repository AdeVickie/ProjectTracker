import Sidebar from "./Sidebar";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Team from "./Team";

import { Route, Switch } from "react-router-dom";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className="dashboardScreen">
      <Sidebar sidebarToggle={sidebarToggle} />
      {/* <Home sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} /> */}

      {/* Sidebar toggle effect */}
      <div className={`${sidebarToggle ? " " : "ml-64"} w-full duration-500`}>
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />

        <Switch>
          <Route exact path={"/"}>
            <LandingPage />
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
