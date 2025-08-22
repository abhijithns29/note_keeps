import React, { useEffect, useState } from "react";
import { ClockFading, ClipboardCheck, Trash } from "lucide-react";

const Sidebar = (props) => {
 
  // const [istogelled,settoggel]=useState(false)

  //  useEffect(()=>{
  //   settoggel((prev)=>!prev)
  //  },[props.togle])

  return (
    <div
      className={`   flex flex-col items-start relative dark:bg-gray-900 dark:text-gray-400  ${
        props.togle ? "w-[60px]" : "w-[310px]"
      }`}
    >
      <div
        className={`absolute top-2 left-2  p-2 hover:bg-amber-200 rounded-full ${
          props.currentlist === "pending" ? "bg-amber-200" : ""
        }  `}
        onClick={() => props.setcurrentlistfn("pending")}
      >
        <ClockFading />
      </div>
      <div
        className={`absolute top-15 left-2 p-2 hover:bg-amber-200 rounded-full ${
          props.currentlist === "finished" ? "bg-amber-200" : ""
        }  `}
        onClick={() => props.setcurrentlistfn("finished")}
      >
        <ClipboardCheck />
      </div>
      <div
        className={`absolute top-28 left-2 p-2 hover:bg-amber-200 rounded-full ${
          props.currentlist === "deleted" ? "bg-amber-200" : ""
        }  `}
        onClick={() => props.setcurrentlistfn("deleted")}
      >
        <Trash />
      </div>
      <button
        onClick={() => props.setcurrentlistfn("pending")}
        className={`w-[310px] mt-1 h-[48px] rounded-r-full font-semibold pr-37
     ${props.currentlist === "pending" ? "bg-amber-200" : "hover:bg-gray-200"} ${
          props.togle ? "hidden" : ""
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => props.setcurrentlistfn("finished")}
        className={`w-[310px] mt-1 h-[48px] rounded-r-full font-semibold pr-37 ${
          props.currentlist === "finished" ? "bg-amber-200" : "hover:bg-gray-200"
        } ${props.togle ? "hidden " : ""}`}
      >
        Finished
      </button>

      <button
        onClick={() => props.setcurrentlistfn("deleted")}
        className={`w-[310px] mt-1 h-[48px] rounded-r-full font-semibold pr-37 ${
          props.currentlist === "deleted" ? "bg-amber-200" : "hover:bg-gray-200"
        } ${props.togle ? "hidden" : ""}`}
      >
        Deleted
      </button>
    </div>
  );
};

export default Sidebar;
