import React, { useRef, useEffect, useState } from "react";
import useOnclick from "../hooks/useOnclick";

const InputField = (props) => { 
  const [focused, setFocus] = useState(false);
  const [currentvalue, setcurrentvalue] = useState({ title: "", desc: "" });
  const currentvalueref   = useRef()
  const containerRef = useRef(null);

  //trigger input div when clicked on input
  const handleClickInside = (event) => {
    setFocus(true);
  };

  useEffect(()=>{
    currentvalueref.current = currentvalue;
  }, [currentvalue])

  function save(){
    if(!props.editMode){
     if (currentvalueref.current.title != "" || currentvalueref.current.desc != "") {
      console.log("iam being triggerd")
        props.savenotes(currentvalueref.current);
      
      setFocus(false);
      setcurrentvalue({ title: "", desc: "" });
    }}
  }
    useOnclick(containerRef,save)



  function handilinginput(event) {
    const { name, value } = event.target;

    setcurrentvalue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className=" dark:bg-gray-900 dark:text-gray-100" onFocus={handleClickInside}>
      <div
        ref={containerRef}
        className="mt-5 w-[590px] dark:bg-gray-600 dark:text-gray-100 shadow-[0_0_10px_rgba(0,0,0,0.3)] p-5 rounded-xl"
      >
        <input
          type="text"
          name="title"
          className="w-full outline-none placeholder:font-bold"
          placeholder={focused ? "Title..." : "Take a note..."}
          onChange={handilinginput}
          value={currentvalue.title}
          
        />
        <input
          type="text"
          name="desc"
          className={focused ? "w-full outline-none mt-2" : "hidden"}
          placeholder="Enter the note..."
          onChange={handilinginput}
          value={currentvalue.desc}
        />
      </div>
    </div>
  );
};
export default InputField;

