import React, { useState, useRef } from "react";
import TogleMenu from "./togleMenu";
import InputField from "./InputField";

import EditNoteComponent from "./editNoteComponent";

const Notes = (props) => {
  const [editMode, setEditMode] = useState(false);
  const containerREF = useRef(null);

  function toggleEditMode() {
    // props.setcurrentvalue({
    //   title: props.title || "",
    //   desc: props.desc || "",
    // });
    setEditMode((prev) => !prev);
  }
  function saveEditNote(val,id){
    props.savenotes(val,id)
    console.log("note saved")
    console.log(val)
     setEditMode(false)
  }
   




  return (
    <>
    
      <div
        ref={containerREF}
        className={
          editMode
            ? "fixed top-10 left-1/2 -translate-x-1/2  w-[600px] h-[300px] bg-white shadow-2xl z-50 rounded-xl transition-all duration-300"
            : "p-4 m-3 outline outline-1 rounded-xl max-w-[238px] min-w-[140px]  break-words whitespace-normal h-fit pb-11 group relative bg-white"
        }
        onDoubleClick={toggleEditMode}
      >
        {!editMode && (
          <>
            <h1 className="font-semibold">{props.title}</h1>
            <p className="font-light">{props.desc}</p>
          </>
        )}

        {editMode && ( <EditNoteComponent title={props.title} desc={props.desc} savenotes={props.savenote} id={props.id} saveEditNote={saveEditNote} setEditMode={setEditMode}/>
          )}

        <div className="hidden group-hover:block bottom-1 h-fit w-full left-0 absolute">
          <TogleMenu
            deleteNote={() => props.deleteNote(props.id)}
            FinishNote={() => props.FinishNote(props.id)}
            RestoreNote={() => props.RestoreNote(props.id)}
            currentlist={props.currentlist}
          />
        </div>
      </div>
    </>
  );
};

export default Notes;
