import React, { useState } from 'react'
import NoteContext from './NoteContext'

function NoteState(props) {
  const notesInitial = [
    {
      "_id": "6728f0cf802e42fd712b5528",
      "user": "6727be1a3410877b93a687fa",
      "title": "A story of a common man",
      "description": "A man is very poor and operating a very small shop to live",
      "tag": "personal",
      "date": "2024-11-04T16:05:35.292Z",
      "__v": 0
    },
    {
      "_id": "6728f0d080fs2e42fd712b552a",
      "user": "6727be1a3410877b93a687fa",
      "title": "A story of a common man",
      "description": "A man is very poor and operating a very small shop to live",
      "tag": "personal",
      "date": "2024-11-04T16:05:36.210Z",
      "__v": 0
    },
    {
      "_id": "6728f0cf802e4df2fd712b5528",
      "user": "6727be1a3410877b93a687fa",
      "title": "A story of a common man",
      "description": "A man is very poor and operating a very small shop to live",
      "tag": "personal",
      "date": "2024-11-04T16:05:35.292Z",
      "__v": 0
    },
    {
      "_id": "6728f0d0802ef42fd712b552a",
      "user": "6727be1a3410877b93a687fa",
      "title": "A story of a common man",
      "description": "A man is very poor and operating a very small shop to live",
      "tag": "personal",
      "date": "2024-11-04T16:05:36.210Z",
      "__v": 0
    },
    {
      "_id": "6728f0cf802ge42fd712b5528",
      "user": "6727be1a3410877b93a687fa",
      "title": "A story of a common man",
      "description": "A man is very poor and operating a very small shop to live",
      "tag": "personal",
      "date": "2024-11-04T16:05:35.292Z",
      "__v": 0
    },
    {
      "_id": "6728f0d08eg02e42fd712b552a",
      "user": "6727be1a3410877b93a687fa",
      "title": "A story of a common man",
      "description": "A man is very poor and operating a very small shop to live",
      "tag": "personal",
      "date": "2024-11-04T16:05:36.210Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

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
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
