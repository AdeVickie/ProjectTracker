import { Route, Switch } from "react-router-dom";

import Sidebar from "./Sidebar";
import Home from "./Home";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className="dashboardScreen">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Home sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
    </div>
  );
};

export default Dashboard;
