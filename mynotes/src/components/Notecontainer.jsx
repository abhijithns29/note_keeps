import React, { useState, useEffect, useRef } from "react";
import InputField from "./InputField";
import Notes from "./Notes";
import ClearAllButton from "./ClearAllButton";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const Notecontainer = (props) => {
const [notes, setnotes] = useState([]);
const [FinishNotes, setFinishNotes] = useState([]);
const [DeleNotes, setDeleNotes] = useState([]);
const [mainNote, SetmainNote] = useState({
  pending: [],
  finished: [],
  deleted: []
});
const [isLoaded, setIsLoaded] = useState(false);
  const [editMode, setEditMode] = useState(false);



useEffect(() => {
  const savedData = localStorage.getItem("notesData");
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      setnotes(parsed.pending || []);
      setFinishNotes(parsed.finished || []);
      setDeleNotes(parsed.deleted || []);
    } catch (err) {
      console.error("Failed to parse saved notes", err);
    }
  }
  setIsLoaded(true);
}, []);

useEffect(() => {
  if (!isLoaded) return; 

  const updatedMainNote = {
    pending: notes,
    finished: FinishNotes,
    deleted: DeleNotes
  };

  SetmainNote(updatedMainNote); 
  localStorage.setItem("notesData", JSON.stringify(updatedMainNote));
}, [notes, FinishNotes, DeleNotes, isLoaded]);

  function savenote(val,id) {
    debugger;
    console.log(id)
    if(id==null)
    {
      setnotes((prev) => [...prev, val]);

    }
    else{
      debugger;
     if(props.currentlist=="pending"){
      setnotes((prev) => prev.map((note, i) => i === id ? val : note ));


     }
     else if(props.currentlist=="finished"){
     setFinishNotes((prev) => prev.map((note, i) => i === id ? val : note ));
     }
     else if(props.currentlist=="deleted"){
     setDeleNotes((prev) => prev.map((note, i) => i === id ? val : note ));
     }


      
    }
  }
   function clearAll(){
    setnotes([]);
      setFinishNotes([]);
      setDeleNotes([]);
   }




function deleteNote(id) {
  if(props.currentlist=="pending"){
   setDeleNotes(prev => [...prev, notes.find((val, index) => index === id)]);
  setnotes(notes.filter((val, index) => index !== id));
  }
   if(props.currentlist=="finished"){
   setDeleNotes(prev => [...prev, FinishNotes.find((val, index) => index === id)]);
  setFinishNotes(FinishNotes.filter((val, index) => index !== id));
  }
   if(props.currentlist=="deleted"){
  setDeleNotes(DeleNotes.filter((val, index) => index !== id));
  }
 

}
function FinishNote(id) {
    if(props.currentlist=="pending"){
 setFinishNotes(prev => [...prev, notes.find((val, index) => index === id)]);
  setnotes(notes.filter((val, index) => index !== id));
  }
   if(props.currentlist=="deleted"){
   setFinishNotes(prev => [...prev, DeleNotes.find((val, index) => index === id)]);
  setDeleNotes(DeleNotes.filter((val, index) => index !== id));
  }
 }

 function RestoreNote(id){
  console.log("restore")
    if(props.currentlist=="deleted"){
   setnotes(prev => [...prev, DeleNotes.find((val, index) => index === id)]);
  setDeleNotes(DeleNotes.filter((val, index) => index !== id));
  }
   if(props.currentlist=="finished"){
   setnotes(prev => [...prev, FinishNotes.find((val, index) => index === id)]);
  setFinishNotes(FinishNotes.filter((val, index) => index !== id));
  }

 }

  return (
    <div className="w-full flex flex-col items-center relative">
      <InputField savenotes={savenote} editMode={editMode} />
      <div className="max-w-full flex flex-wrap w-full mt-6 relative">
  <>
  {
    <>
<div className="flex flex-wrap ">
  {mainNote[props.currentlist]?.map((val, index) => (
    <Notes
      key={index}
      id={index}
      title={val.title}
      desc={val.desc}
      editMode={editMode}
      setEditMode={setEditMode}
      savenotes={savenote}
      deleteNote={deleteNote}
      FinishNote={FinishNote}
      RestoreNote={RestoreNote}
      currentlist={props.currentlist}
    />
  ))}
</div>



 
   
   
       </>
  }

  


</>


      </div>
      <ClearAllButton clearAll={clearAll}/>
    </div>
  );
};

export default Notecontainer;
