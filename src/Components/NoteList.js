import React from "react";
import Notes from "./Notes";
import AddNotes from "./AddNotes";

const NoteList = ({notes, handleAddnotes, deleteHandler}) => {
    return (
        <div className="notes-list">
            {notes.map((note)=> (
            <Notes id={note.id} text={note.text} date={note.date}
            deleteHandler = {deleteHandler}/>
         
           ) )}
           <AddNotes handleAddNotes={handleAddnotes}/>
        </div>
    )
};




export default NoteList;