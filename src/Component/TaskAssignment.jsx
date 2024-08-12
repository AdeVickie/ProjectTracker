// import React from "react";
// import { IconShareSocialOutline } from "./Icons";

import {
  IconAccount,
  IconAttach,
  IconBxsPlusCircle,
  IconDeleteBinLine,
  IconIconEdit,
  IconMessageProcessing,
  IconShareSocialOutline,
  IconTeamLine,
  IconTimerSandComplete,
} from "./Icons";
import image1 from "../Images/Photo1.png";
import image2 from "../Images/Photo2.png";
import image3 from "../Images/Photo.png";

import { useState } from "react";
import Model from "./Model";
// function TaskAssignment(
//   Icons,
//   paragraph,
//   header,
//   icon1,
//   icon2,
//   icon3,
//   text1,
//   icon4,
//   text2,
//   icon5,
//   text3,
//   icon6,
//   text4,
//   text5,
//   icon7,
//   text6
// ) {
//   return (
//     <div>
//       <div className="flex">
//         <div>
//           <div className="px-5 py-4 bg-gray-400">{Icons}</div>
//           <p>{paragraph}</p>
//         </div>
//         <div>
//           <h1>{header}</h1>
//           <h1>{icon1}</h1>
//           <h1>{icon2}</h1>
//         </div>
//         <div>
//           <h1>{icon3}</h1>
//           <h1>{text1}</h1>
//           <h1>{icon4}</h1>
//           <h1>{text2}</h1>
//         </div>
//         <div>
//           <h1>{icon5}</h1>
//           <h1>{text3}</h1>
//           <h1>{icon6}</h1>
//           <h1>{text4}</h1>
//         </div>
//         <div>
//           <h1>{text5}</h1>
//           <h1>{icon7}</h1>
//           <h1>{text6}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function PropCall() {
//   return (
//     <>
//       <div className="flex-1 bg-red-500">
//         <TaskAssignment
//           Icons={<IconShareSocialOutline />}
//           paragraph={"Social Geek Made"}
//           header={"Task Assignment"}
//           icon1={<IconShareSocialOutline />}
//           icon2={<IconShareSocialOutline />}
//           icon3={<IconShareSocialOutline />}
//           text1={"Social Geek Made"}
//           icon4={<IconShareSocialOutline />}
//           text2={"Social Geek Made"}
//           icon5={<IconShareSocialOutline />}
//           text3={"Social Geek Made"}
//           icon6={<IconShareSocialOutline />}
//           text4={"Social Geek Made"}
//           text5={"Social Geek Made"}
//           icon7={<IconShareSocialOutline />}
//           text6={"Social Geek Made"}
//         />
//       </div>
//     </>
//   );
// }

export default function TaskAssignment() {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="flex xs:justify-center md:justify-start mt-5">
        <div className="h-56 w-[350px] absolute bg-slate-200 border border-gray-300 mt-5 ">
          <div className="relative h-14 w-16 mx-auto rounded bottom-6 bg-gray-300">
            <IconShareSocialOutline className=" h-[100%] mx-auto text-3xl font-extrabold " />
          </div>

          <p className="text-center -mt-5 text-gray-600">Social Greek Made</p>
          <div className="flex justify-between px-3 mb-4">
            <h1 className="font-bold">UI/UX Designer</h1>
            <div className="">
              <IconIconEdit className="inline-block text-green-500 mr-2 text-lg cursor-pointer" />
              <IconDeleteBinLine className="inline-block text-red-500 text-lg cursor-pointer" />
            </div>
          </div>
          <div className="">
            <img
              src={image1}
              alt=""
              className="rounded-full w-[10%] relative top-0 left-0 inline-block h-[10%] border-2 border-white"
            />

            <img
              src={image2}
              alt=""
              className="rounded-full inline-block absolute w-[10%] left-[14px] border-2 border-white"
            />
            <img
              src={image3}
              alt=""
              className=" rounded-full inline-block w-[10%] relative left-[1px] border-2 border-white"
            />

            <button
              onClick={() => {
                setOpenModel(true);
              }}
            >
              <IconBxsPlusCircle className="inline-block absolute w-[10%] left-[50px] text-4xl top-[100px] cursor-pointer text-orange-500" />
            </button>
          </div>
          <div className="flex justify-between">
            <div className="mt-3">
              <IconAttach className="inline-block mx-2" />
              <h1 className="inline-block">5 Attach</h1>
            </div>
            <div className="mt-3 mx-2">
              <IconTimerSandComplete className="inline-block mx-2" />
              <h1 className="inline-block">4 Months</h1>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mt-3 ">
              <IconTeamLine className="inline-block mx-2" />
              <h1 className="inline-block">5 Member</h1>
            </div>
            <div className="mt-3 mx-2">
              <IconMessageProcessing className="inline-block mx-2" />
              <h1 className="inline-block ">10 Inboxs</h1>
            </div>
          </div>
        </div>
      </div>
      {openModel && <Model closeModel={setOpenModel} />}
    </>
  );
}
