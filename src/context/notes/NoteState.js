import React, { useState } from 'react'
import NoteContext from './NoteContext'

function NoteState(props) {
  const notesInitial = [];
  const host = 'http://localhost:3001'

  const [notes, setNotes] = useState(notesInitial);

  //Fetch all notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method : 'GET',
      headers : {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyN2JlMWEzNDEwODc3YjkzYTY4N2ZhIn0sImlhdCI6MTczMDcwOTQ4MX0.ZPiWLuEixGQuhyr1F7JgpyuTy_MPzRJo7X2PVHlQBC0'
      }
    })
    const json = await response.json();
    setNotes(json);
  }

  //Add a Note
  const addNote = (title, description, tag) => {
    //API call pending

    //Logic to Add note in client
    const note = {
      "_id": "6728f0d08eg02e42fd71sdf2b552a",
      "user": "6727be1a3410877b93a687fa",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-11-04T16:05:36.210Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  //Edit a Note
  const editNote = (id, title, description, tag) => {
    //API call pending 

    //Logic to Edit in client
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  //Delete a Note
  const deleteNote = (id) => {
    //API call pending 

    //Logic to Delete in client
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
    // console.log(id);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
