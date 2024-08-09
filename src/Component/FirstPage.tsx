import React from "react";
// import Logo from "../assets/Images/Vihubs.png";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IconAngleLeft } from "./Icons";
import Logo from "../assets/Images/Logo4.png";

import { Link } from "react-router-dom";

function FirstPage() {
  // const [typeEffect] = useTypewriter({
  //   words: [
  //     "project managers",w
  //     "software engineers",
  //     "designers",
  //     "companies",
  //     "stake holders",
  //     "team leads",
  //   ],
  //   loop: {},
  //   typeSpeed: 100,
  //   deleteSpeed: 100,
  // });

  return (
    // <div className="h-[100vh] shrink-0 bg-gray-800">
    //   <div className="flex items-center">
    //     <img
    //       src={Logo}
    //       alt="First Page"
    //       className="mx-auto"
    //       height={600}
    //       width={600}
    //     />
    //     {/* <h1 className="text-center text-2xl font-bold text-slate-100 lg:text-3xl">
    //       Best software for{" "}
    //       <span className="font-bold text-2xl lg:text-3xl text-pink-400">
    //         {typeEffect}{" "}
    //       </span>
    //       <span className="text-pink-400">
    //         <Cursor />
    //       </span>
    //     </h1> */}

    //     {/* <p className="text-center pt-8">
    //       <Link to="/register">
    //         <button className="px-4 py-4 rounded-full bg-pink-400  text-white text-2xl">
    //           <IconAngleLeft />
    //         </button>
    //       </Link>
    //     </p> */}
    //   </div>
    // </div>
    <div className="bg-gray-800 w-screen h-screen flex justify-center items-center shrink-0 fixed">
      <div>
        <img
          src={Logo}
          alt="First Page"
          className="mx-auto"
          height={400}
          width={400}
        />
        <p className="text-center pt-8">
          <Link to="/register">
            <button className="px-4 py-4 rounded-full bg-slate-100 text-black text-2xl">
              <IconAngleLeft />
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default FirstPage;
