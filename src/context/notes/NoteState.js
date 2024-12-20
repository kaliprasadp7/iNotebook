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
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = await response.json();
    setNotes(json);
  }


  //Add a Note
  const addNote = async (title, description, tag) => {
    //API call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    })
    const note = await response.json();
    setNotes(notes.concat(note));
    props.showAlert("Note Added Successfully", "success")
  }


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    })
    const json = await response.json()
    console.log(json)

    setNotes(prevNotes => 
      prevNotes.map(note => note._id === id ? { ...note, title, description, tag } : note)
    );
    props.showAlert("Note Updated Successfully", "success")
  }


  //Delete a Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = await response.json();
    console.log(json)

    //Logic to Delete in client
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
    props.showAlert("Note Deleted Successfully", "success")
    // console.log(id);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
