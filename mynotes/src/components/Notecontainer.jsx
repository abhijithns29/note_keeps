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
    deleted: [],
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [editMode, setEditMode] = useState(false);

 

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:3000/notesData");
        const data = await res.json();

        setnotes(data.pending || []);
        setFinishNotes(data.finished || []);
        setDeleNotes(data.deleted || []);
        setIsLoaded(true);
      } catch (err) {
        console.error("Failed to fetch notes from server", err);
      }
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const updatedMainNote = {
      pending: notes,
      finished: FinishNotes,
      deleted: DeleNotes,
    };

    SetmainNote(updatedMainNote);

    const postNote = async () => {
      try {
        const res = await fetch("http://localhost:3000/notesData", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMainNote),
        });
        const data = await res.json();
        console.log("Synced with server:", data);
      } catch (err) {
        console.error("Failed to sync notes:", err);
      }
    };
    postNote();
  }, [notes, FinishNotes, DeleNotes, isLoaded]);

  function savenote(val, id) {
    debugger;
    console.log(id);
    if (id == null) {
      setnotes((prev) => [...prev, val]);
    } else {
      debugger;
      if (props.currentlist == "pending") {
        setnotes((prev) => prev.map((note, i) => (i === id ? val : note)));
      } else if (props.currentlist == "finished") {
        setFinishNotes((prev) =>
          prev.map((note, i) => (i === id ? val : note))
        );
      } else if (props.currentlist == "deleted") {
        setDeleNotes((prev) => prev.map((note, i) => (i === id ? val : note)));
      }
    }
  }
  function clearAll() {
    setnotes([]);
    setFinishNotes([]);
    setDeleNotes([]);
  }

  function deleteNote(id) {
    if (props.currentlist == "pending") {
      setDeleNotes((prev) => [
        ...prev,
        notes.find((val, index) => index === id),
      ]);
      setnotes(notes.filter((val, index) => index !== id));
    }
    if (props.currentlist == "finished") {
      setDeleNotes((prev) => [
        ...prev,
        FinishNotes.find((val, index) => index === id),
      ]);
      setFinishNotes(FinishNotes.filter((val, index) => index !== id));
    }
    if (props.currentlist == "deleted") {
      setDeleNotes(DeleNotes.filter((val, index) => index !== id));
    }
  }
  function FinishNote(id) {
    if (props.currentlist == "pending") {
      setFinishNotes((prev) => [
        ...prev,
        notes.find((val, index) => index === id),
      ]);
      setnotes(notes.filter((val, index) => index !== id));
    }
    if (props.currentlist == "deleted") {
      setFinishNotes((prev) => [
        ...prev,
        DeleNotes.find((val, index) => index === id),
      ]);
      setDeleNotes(DeleNotes.filter((val, index) => index !== id));
    }
  }

  function RestoreNote(id) {
    console.log("restore");
    if (props.currentlist == "deleted") {
      setnotes((prev) => [
        ...prev,
        DeleNotes.find((val, index) => index === id),
      ]);
      setDeleNotes(DeleNotes.filter((val, index) => index !== id));
    }
    if (props.currentlist == "finished") {
      setnotes((prev) => [
        ...prev,
        FinishNotes.find((val, index) => index === id),
      ]);
      setFinishNotes(FinishNotes.filter((val, index) => index !== id));
    }
  }

  return (
    <div className=" dark:bg-gray-900 dark:text-gray-100 w-full flex flex-col items-center relative">
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
      <ClearAllButton clearAll={clearAll} />
    </div>
  );
};

export default Notecontainer;
