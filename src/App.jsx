import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import React, { useState } from "react";

import FirstPage from "./Component/FirstPage";
import Forms from "./Component/Forms";
import Login from "./Component/Login";

import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
import LandingPage from "./Component/LandingPage";
import { elements } from "chart.js";

import ProjectCom from "./Component/ProjectCom";
import Model from "./Component/Model";

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
        <Home
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/register",
    element: <Forms />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/project",
    element: <ProjectCom />,
  },
]);

//       {
//         path: "/contactus",
//         element: <ContactUs />,
//       },
//       {
//         path: "/knowmore",
//         element: <KnowMore />,
//       },
//     ],
//   },
// ]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
      <Home /> */}
      {/* <FirstPage /> */}
    </>
  );
}

export default App;
