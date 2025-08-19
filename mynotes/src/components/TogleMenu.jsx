import React from 'react'
import { ClockFading, ClipboardCheck, Trash } from "lucide-react";
import ButtonCom from './ButtonCom';

const TogleMenu = (props) => {
  return (
    <div className='flex justify-around'>
      <ButtonCom 
        icon={<ClockFading />} 
        btnfn={props.RestoreNote}  
        className={props.currentlist === "pending" ? "hidden" : ""}
      />
      <ButtonCom 
        icon={<ClipboardCheck />}  
        btnfn={props.FinishNote} 
        className={props.currentlist === "finished" ? "hidden" : ""}
      />
      <ButtonCom 
        icon={<Trash />} 
        btnfn={props.deleteNote} 
        className={props.currentlist === "" ? "" : ""}
      />
    </div>
  );
}

export default TogleMenu;
