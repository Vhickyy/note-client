import {useLayoutEffect} from 'react'
import Notesbody from '../Components/Notesbody'
import Notesfooter from '../Components/Notesfooter'
import Notesheader from '../Components/Notesheader'
import { useDelete } from '../context/Deletecontext'
type notestype = {id:String,title:String,note:String}[]
type Noteprop = {
  notes: notestype
}
const Dashboard = ({notes}:Noteprop) => {
  const {offDelete} = useDelete()
  useLayoutEffect(()=>{
    offDelete()
  },[])
  return (
    <>
      <Notesheader/>
      {/* <div className='calc'> */}
        <Notesbody notes={notes}/>
      {/* </div> */}
      <Notesfooter/>
    </>
  )
}

export default Dashboard