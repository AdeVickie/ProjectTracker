import React, { useState, useEffect } from "react";

import LoginPage from "./Component/LoginPage";
import Dashboard from "./Component/Dashboard";

// import LandingPage from "./Component/LandingPage";
// import { elements } from "chart.js";

// import {
//   Sheet,
//   Spreadsheet,
//   SpreadsheetComponent,
// } from "@syncfusion/ej2-react-spreadsheet";
import Sheets from "./Component/Sheets";

import { db, auth } from "./firebase-config/firebase";
import { getDocs, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const [admin, setAdmin] = useState(auth.currentUser?.email);

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const [loginLoading, setIsLoginLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [dbData, setDbData] = useState([]);

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);

      setIsLoggedIn(true);
      setUserEmail("");
      setUserPassword("");
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  const signIn = async () => {
    setIsLoginLoading(true);

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setIsLoggedIn(true);

      setLoginEmail("");
      setLoginPassword("");
    } catch (err) {
      console.error(err);

      setIsLoggedIn(false);
    } finally {
      setIsLoginLoading(false);
    }
  };

  const logOut = async () => {
    setIsLoginLoading(true);

    try {
      await signOut(auth);
      setIsLoggedIn(false);

      setLoginEmail("");
      setLoginPassword("");
    } catch (err) {
      console.error(err);
      setIsLoggedIn(true);
    }
  };

  const getDatabaseData = async () => {
    const user = auth.currentUser;

    try {
      if (user) {
        const q = collection(db, `users/${user.email}/employeeData`);

        const data = (await getDocs(q)).docs;
        const filteredData = data.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setDbData(filteredData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // get database data and current username once logged in
  useEffect(() => {
    if (isLoggedIn) {
      getDatabaseData();
    }

    if (auth.currentUser?.email) {
      const name = auth.currentUser?.email?.split("@");
      setAdmin(name[0]);
    }

    console.log(dbData);
  }, [isLoggedIn]);

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
          signIn={signIn}
          createAccount={createAccount}
        ></LoginPage>
      )}
    </div>
  );
};

export default App;
