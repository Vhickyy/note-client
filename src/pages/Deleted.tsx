import {useEffect,useLayoutEffect} from 'react'
import Notesbody from '../Components/Notesbody'
import Notesfooter from '../Components/Notesfooter'
import Notesheader from '../Components/Notesheader'
import { useDelete } from '../context/Deletecontext'
type notestype = {id:String,title:String,note:String}[]
type Noteprop = {
  notes: notestype
}
const Deleted = ({notes}:Noteprop) => {
  const {onDelete} = useDelete()
  useLayoutEffect(()=>{
    onDelete()
  },[])
  return (
    <>
      <Notesheader/>
      <Notesbody deleted="deleted" notes={notes}/>
      <Notesfooter/>
    </>
  )
}

export default Deleted