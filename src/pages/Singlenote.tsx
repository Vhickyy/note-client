import {useEffect} from 'react'
import styled from 'styled-components'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDelete } from '../context/Deletecontext'
import { useNoteContext } from '../context/Notecontext'
import { NoteProp } from '../reducers/deleteReducer'

// type notestype = {id:String,title:String,note:String}[]
// type Noteprop = {
//   notes: notestype
// }
const Singlenote = () => {
  const {loading,error} = useNoteContext()
  const {loading:load,getDeletedNotes,deleteAllNotes,offDelete,onDelete,deletedNotes:deletedNotes,deleteflag,getSingleDeletedNote,note} = useDelete();
  const navigate = useNavigate()
    const {noteid} = useParams()
    useEffect(()=>{
      getSingleDeletedNote(noteid)
    },[])
  return (
    <Wrapper>
      <h1>{note[0].title}</h1>
      <p>{note[0].note}</p>
      {deleteflag ? <button onClick={()=>navigate('/deleted')}>Retrieve</button> : <button onClick={()=>navigate('/addnote')}>Edit</button>}
      <button onClick={()=>deleteflag ? navigate('/deleted') : navigate('/notes')}>delete</button>
    </Wrapper>
  )
}

export default Singlenote
const Wrapper = styled.div`
  
`