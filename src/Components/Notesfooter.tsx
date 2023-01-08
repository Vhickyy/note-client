import React, { useEffect } from 'react'
import { FaNotesMedical, FaPlus, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDelete } from '../context/Deletecontext'

const Notesfooter = () => {
  const {onDelete,offDelete,deleteflag} = useDelete()
  
  // useEffect(()=>{
    // console.log(deleteflag);
  // },[])
  return (
    <Wrapper>
        <button onClick={()=>offDelete()}><Link to={"/notes"}><FaNotesMedical/></Link></button>
        <button><Link to={"/addnote"}><FaPlus/></Link></button>
        <button><FaNotesMedical/></button>
        <button onClick={()=>onDelete()}><Link to={"/deleted"}><FaTrash/></Link></button>
        
    </Wrapper>
  )
}

export default Notesfooter
const Wrapper = styled.footer`
    width: 100%;
    background-color: blanchedalmond;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    position: sticky;
    bottom: 0;
    /* left: 0; */
    button{
        padding: 1rem;
    }
`