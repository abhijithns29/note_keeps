import "./index.css";
import "./App.css";
import React ,{ useEffect, useState ,memo}from "react";
import Navbar from "./components/Navbar";
import Notecontainer from "./components/Notecontainer";
import Sidebar from "./components/Sidebar";
import TogleMenu from "./components/togleMenu";
import Filetry from "./components/filetry";

function App() {
  const [togleside, settogleside] = useState(false);
   const [currentlist, setcurrentlist] = useState("pending");
  

   function setcurrentlistfn(value){
    setcurrentlist(value)
   }

  function activatesidebar() {
    settogleside((prev) => !prev);
  }

  return (
    <div className="h-full ">
      
      <Navbar sidebarfn={activatesidebar} />
      <div className="flex h-full ">
        <Sidebar togle={togleside} setcurrentlistfn={setcurrentlistfn} currentlist={currentlist} />
          
        <Notecontainer currentlist={currentlist} />
        
      </div>
   
    </div>
  );
}

export default App;
