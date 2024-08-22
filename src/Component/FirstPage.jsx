// import Logo from "../assets/Images/Vihubs.png";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IconAngleLeft } from "./Icons";
import Logo from "../assets/Images/Logo4.png";

import { Link } from "react-router-dom";

function FirstPage() {
  return (
    // logo
    <div className="bg-gray-800 w-full h-screen flex justify-center items-center">
      <div>
        <img
          src={Logo}
          alt="First Page"
          className="mx-auto"
          height={400}
          width={400}
        />

        {/* next page button */}
        {/* <p className="text-center pt-8">
          <Link to="/register">
            <button className="px-4 py-4 rounded-full bg-slate-100 text-black text-2xl">
              <IconAngleLeft />
            </button>
          </Link>
        </p> */}
      </div>
    </div>
  );
}
export default FirstPage;
