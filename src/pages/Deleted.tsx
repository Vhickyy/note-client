import {useEffect,useLayoutEffect} from 'react'
import Notesbody from '../Components/Notesbody'
import Notesfooter from '../Components/Notesfooter'
import Notesheader from '../Components/Notesheader'
import { useDelete } from '../context/Deletecontext'
type notestype = {id:String,title:String,note:String}[]
type Noteprop = {
  notes: notestype,
}
const Deleted = ({notes}:Noteprop) => {
  const {deleteflag,onDelete} = useDelete()
  useEffect(()=>{
    onDelete()
    console.log(deleteflag);
    
  },[])
  return (
    <>
      {deleteflag && <><Notesheader/>
      <Notesbody deleted="deleted" notes={notes} deleteflag={deleteflag}/>
      <Notesfooter/></>}
    </>
  )
}

export default Deleted