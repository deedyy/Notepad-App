import React,{useState} from "react";
  

const AddNotes = ({ handleAddNotes }) => {

    const [noteText,setNoteText] = useState('');
    const characterlimit = 350
    
    const handleChange = (event) => {
          if (characterlimit - event.target.value.length >=0 )
        setNoteText (event.target.value)
       
    }
    const handleSaveClick = () => {
      if (noteText.trim().length > 0) {
     handleAddNotes (noteText);
     setNoteText('');
      }
    };
    
    return( 
     <div className="note new">
        <textarea rows='8' cols='10' placeholder="add new note..." 
       value={noteText}
       onChange={handleChange}
        ></textarea>
     <div className="note-footer">
     <small>{characterlimit - noteText.length} remaining</small>
     <button className="save" onClick={handleSaveClick}>Save</button>
     </div>
     </div> 
     
    )
};


export default AddNotes;