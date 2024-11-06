import React, { useState } from 'react'
import NoteContext from './NoteContext'

function NoteState(props) {
    const s1 = {
        "name" : "Kali Prasad",
        "class" : "5B"
    };
    const [state, setState] = useState(s1);
    const update = (value) => {
        const s = setState(value);
        return s;
    }

  return (
    <NoteContext.Provider value={{state, update}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
