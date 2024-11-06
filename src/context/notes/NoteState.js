import React from 'react'
import NoteContext from './NoteContext'

function NoteState(props) {
    const state = {
        "name" : "Kali Prasad",
        "class" : "B25"
    }
  return (
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
