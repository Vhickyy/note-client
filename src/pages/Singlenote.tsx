import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDelete } from '../context/Deletecontext'
import { useNoteContext } from '../context/Notecontext'

type notestype = {id:String,title:String,note:String}[]
type Noteprop = {
  notes: notestype
}
const Singlenote = ({notes}:Noteprop) => {
  const {setId,deleteNote,loading,error} = useNoteContext()
  const {loading:load,getDeletedNotes,deleteAllNotes,deleteOneNote,retrieveNote,onDelete,offDelete} = useDelete();
    const {noteid}  = useParams()
    const singlenote = notes.find(note=>note.id === noteid)
  return (
    <div>
      <h3>{singlenote?.title}</h3>
      <p>{singlenote?.note}</p>
      <Link to={"/dashboard/addnote"}><button>Edit</button></Link>
      <button>delete</button>
    </div>
  )
}

export default Singlenote