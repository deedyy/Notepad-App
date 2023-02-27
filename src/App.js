import React, {useState} from "react";
import './App.css';
import Nav from "./Components/Nav";
import NoteList from "./Components/NoteList";
import {nanoid} from 'nanoid'





const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(),
     text: 'First Note',
     date: '22/02/2023',
    },
    {
     id: nanoid(),
     text: 'Second Note',
     date: '23/02/2023',
    },
    {
     id: nanoid(),
     text: 'Third Note',
     date: '24/02/2023',
    },
    {
     id: nanoid(),
     text: 'Fourth Note',
     date: '25/02/2023',
    },
    {
     id: nanoid(),
     text: 'New Note',
     date: '28/02/2023',
    },
  ]);

    const handleAddnote = (text) =>{
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    };
   
      const deleteNote = (id) => {
      const newNotes = notes.filter((note)=>note.id !== id);
      setNotes(newNotes);
    };


  return (
    <div className="container">
      <Nav/>
    <NoteList notes={notes} 
    handleAddnotes={handleAddnote}
     deleteHandler={deleteNote}
    />
    </div>
  )
}

export default App;