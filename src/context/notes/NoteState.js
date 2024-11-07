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


  return (
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
