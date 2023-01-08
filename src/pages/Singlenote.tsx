import {useEffect} from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { useDelete } from '../context/Deletecontext'
import { useNoteContext } from '../context/Notecontext'
import { NoteProp } from '../reducers/deleteReducer'

// type notestype = {id:String,title:String,note:String}[]
// type Noteprop = {
//   notes: notestype
// }
const Singlenote = () => {
  const {setId,deleteNote,loading,error} = useNoteContext()
  const {loading:load,getDeletedNotes,deleteAllNotes,deleteOneNote,retrieveNote,offDelete,onDelete,notes:deletedNotes,deleteflag,singleDeletedNote,note} = useDelete();
    const {noteid} = useParams()
    useEffect(()=>{
      singleDeletedNote(noteid)
    },[])
  return (
    <Wrapper>
      <h1>{note[0].title}</h1>
      <p>{note[0].note}</p>
      {deleteflag ? <Link to={"/dashboard/addnote"}><button>Retrieve</button></Link> : <Link to={"/dashboard/addnote"}><button>Edit</button></Link>}
      <button>delete</button>
    </Wrapper>
  )
}

export default Singlenote
const Wrapper = styled.div`
  
`