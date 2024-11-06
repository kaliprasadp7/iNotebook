import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext)
  
  useEffect(() => {
    const newobj = {
      "name" : "Amit",
      "class" : "10B"
  };
    a.update(newobj); // Set the new value when the component mounts
  }, []);

  return (
    <div>
      <h2>This is about {a.state.name}</h2>
    </div>
  )
}

export default About
