import React,{memo} from "react";
import { AlignJustify, FileUp, Search } from "lucide-react";

function Navbar(props) {
  return (
    <div className="flex h-[48px]  w-full items-center py-8 border-b">
      <AlignJustify
        size={25}
        className="ml-4 mt-3  "
        onClick={props.sidebarfn}
      />
      <FileUp size={25} className="ml-4 mt-3 text-amber-300 " />

      <h1 className="text-3xl ml-2 mt-1 text-gray-600 font-semibold">Keep</h1>

      <div className=" relative">
        <Search className="absolute mt-5 ml-14" />
        <input
          type="text"
          placeholder="Search"
          className="w-[720px] bg-gray-200 px-16 py-3 mt-2 ml-10 rounded-2xl"
        />
      </div>
    </div>
  );
}
export default memo(Navbar);
