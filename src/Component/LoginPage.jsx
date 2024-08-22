import { useRef, useState } from "react";

import FirstPage from "./FirstPage";

import closedEye from "../assets/closedEye.svg";
import openedEye from "../assets/openedEye.svg";

const LoginPage = ({
  loginLoading,
  setIsLoginLoading,
  userEmail,
  userPassword,
  setUserEmail,
  setUserPassword,
  loginEmail,
  loginPassword,
  setLoginEmail,
  setLoginPassword,

  createAccount,
  signIn,
}) => {
  const passwordRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginHereClicked, setLoginHereClicked] = useState(false);

  return (
    <div className="loginPage">
      <div className="loginImageContainer">
        <FirstPage />
      </div>

      {/* REGISTRATION FORM */}
      {loginHereClicked && (
        <form className="loginForm">
          <h1 className="loginFormHeading">CREATE AN ACCOUNT</h1>

          <div className="loginFieldGrp">
            <label htmlFor="registerEmail">Email</label>
            <input
              id="registerEmail"
              type="email"
              placeholder="Email"
              className="loginInput"
              required
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>

          <div className="loginFieldGrp">
            <div className="passwordBox">
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                value={userPassword}
                ref={passwordRef}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                required
              />

              <img
                className="h-6 cursor-pointer"
                src={!passwordVisible ? closedEye : openedEye}
                alt="eye icon"
                onClick={() => {
                  setPasswordVisible(!passwordVisible);
                  const passwordType =
                    passwordRef.current?.getAttribute("type") === "password"
                      ? "text"
                      : "password";

                  passwordRef.current?.setAttribute("type", passwordType);
                }}
              />
            </div>
          </div>

          <div className=" flex flex-row gap-14 justify-between items-center">
            <button
              className="loginBtn"
              onClick={(e) => {
                e.preventDefault();
                createAccount();
              }}
            >
              {loginLoading ? "Creating account" : "Create account and Sign in"}
            </button>

            {loginLoading && <Spinner></Spinner>}
          </div>

          <p className="xl:pl-5">
            Already have an account? Login{" "}
            <span
              className=" underline cursor-pointer"
              onClick={() => {
                setLoginHereClicked(!loginHereClicked);
              }}
            >
              here
            </span>
          </p>
        </form>
      )}

      {/* LOGIN FORM */}
      {!loginHereClicked && (
        <form className="loginForm">
          <h1 className="loginFormHeading">LOGIN</h1>

          <div className="loginFieldGrp">
            <label htmlFor="loginEmail">Email</label>
            <input
              id="loginEmail"
              type="email"
              placeholder="Email"
              className="loginInput"
              required
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
          </div>

          <div className="loginFieldGrp">
            <div className="passwordBox">
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                value={loginPassword}
                ref={passwordRef}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                required
              />

              <img
                className="h-6 cursor-pointer"
                src={!passwordVisible ? closedEye : openedEye}
                alt="eye icon"
                onClick={() => {
                  setPasswordVisible(!passwordVisible);
                  const passwordType =
                    passwordRef.current?.getAttribute("type") === "password"
                      ? "text"
                      : "password";

                  passwordRef.current?.setAttribute("type", passwordType);
                }}
              />
            </div>
          </div>

          <div className=" flex flex-row gap-14 justify-between items-center">
            <button
              className="loginBtn"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              {loginLoading ? "Signing In" : "Sign In"}
            </button>
          </div>

          <p className="xl:pl-5">
            Don't have an account? Create one here{" "}
            <span
              className=" underline cursor-pointer"
              onClick={() => {
                setLoginHereClicked(!loginHereClicked);
              }}
            >
              here
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
