import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext)
  return (
    <div>
      <h2>This is about {a.name} and class is {a.class}</h2>
    </div>
  )
}

export default About
