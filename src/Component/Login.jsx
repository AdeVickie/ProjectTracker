import loginImage from "../assets/Images/loginImage.gif";
import { IconAccount } from "./Icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    // login form background image
    <div className="flex justify-center items-center bg-gray-400 w-screen h-screen fixed">
      <img
        src={loginImage}
        alt="Login Image"
        height={300}
        width={300}
        className="relative"
      />
      {/*forms  */}
      <form className="bg-white rounded-lg shadow-md absolute h-96 w-96 opacity-60 text-black">
        {/*Account icon  */}
        <div className="flex justify-center gap-2 text-3xl pt-5">
          <IconAccount />
          <p className="">Login</p>
        </div>
        <div className="p-7">
          {/* Username */}
          <label className="text-lg font-semibold">Username: *</label>
          <input
            type="text"
            placeholder="Enter Username...."
            className="w-full text-base bg-gray-500 h-10 p-2"
          />

          {/* password */}
          <label className="text-lg font-semibold">Password: *</label>
          <input
            type="password"
            placeholder="Enter Password...."
            className="w-full text-base bg-gray-500 h-10 p-2"
          />
          {/* forget password */}
          <p className="text-red-700 font-extrabold cursor-pointer mt-5 ">
            Forget Password? &rarr;
          </p>
          {/* Login link to dashbaord */}
          <p className="text-center mt-5">
            <Link to="/dashboard">
              <button className="px-10 py-3 rounded-2xl bg-orange-800 text-white">
                Login &rarr;
              </button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
