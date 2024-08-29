import React, { useState, useEffect } from "react";

import LoginPage from "./Component/LoginPage";
import Dashboard from "./Component/Dashboard";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const [loginLoading, setIsLoginLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {/* login page is shown when isLoggedIn === false while dashboard is not but when isLoggedIn === true dashboard is shown and login page is not*/}

      {isLoggedIn ? (
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        ></Dashboard>
      ) : (
        <LoginPage
          loginLoading={loginLoading}
          setIsLoginLoading={setIsLoginLoading}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          userPassword={userPassword}
          setUserPassword={setUserPassword}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
        ></LoginPage>
      )}
    </div>
  );
};

export default App;
