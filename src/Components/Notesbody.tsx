import styled from 'styled-components'
import { useEffect,useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNoteContext } from '../context/Notecontext'
import { useDelete } from '../context/Deletecontext'
import NoteForm from './NoteForm'
// import { NoteProp } from '../reducers/noteReducer'
import { NoteProp } from '../reducers/deleteReducer'
type notestype = {id:String,title:String,note:String}[]
type Noteprop = {
  deleted?: String,
  notes: notestype,
  deleteflag:Boolean
}

const Notesbody = ({deleted, notes,deleteflag}: Noteprop) => {
    const {getNotes,loading,error,notes:nNotes,title:n_title,category:n_category,change} = useNoteContext();
    const {title:d_title,category:d_category,changeValue,filter,deletedNotes:page,filtered,getDeletedNotes,loading:check,error:err,loadDeleteNote} = useDelete();
    // console.log(err);
    // console.log(check);
    useEffect(()=>{
        console.log(filtered);
    },[])
    const ifLoad = (load:Boolean)=>{
        if(load){
            return <p>Loading</p>
        }
    }
    const ifErr = (deleteError:string)=>{
        if(deleteError){
            return (
                <>
                    <p>Something went wrong</p>
                    <button onClick={getDeletedNotes}>Retry</button>
                </>
            )
        }
    }
    const ifData = (param:NoteProp[])=>{
        return param.map((note)=>{
                return(
                    <div key={note._id} className="note">
                        <Link to={`/singlenote/${note._id}`}>
                        <h3>{note.title.length <= 20 ? note.title : `${note.title.slice(0,23)}...`}</h3>
                        <p>{note.note.slice(0,105)}...</p>
                        </Link>
                        {deleteflag && <div>
                            <button onClick={()=>console.log("delete")}>delete</button>
                            <button onClick={()=>console.log("retrieve")}>Retrieve</button>
                        </div>}
                    </div>
                    )
                })
    }
    const deletemap = (len:NoteProp[],load:Boolean,param:NoteProp[],deleteError:string)=>{
        if(load){
            return ifLoad(load)
        }
        if(deleteError){
            return ifErr(deleteError)
        }
        if(len.length){
            if(param.length){
                console.log(param);
                return ifData(param)
            }else return (
                <h1>No match found</h1>
            )
        }else if(!len.length){
            return (
            <p>No NOTE</p>
            )
        }
    }
    const noteMap = (len:NoteProp[],load:Boolean,param:NoteProp[],checktitle:string,noteError:string)=>{
        if(load){
            return ifLoad(load)
        }
        if(noteError){
            return ifErr(noteError)
        }
        if(!len.length){
            return (
            <p>No NOTE</p>
            )
        }else if(len.length && param.length){
             ifData(param)
        }else if(checktitle && len.length && !param.length){
            return (
                <h1>No match found</h1>
            )
        }
    }
    // useLayoutEffect(()=>{
    //     if(deleteflag){
    //         loadDeleteNote()
    //         console.log('g');
    //     }
    //     console.log(deleteflag);
    // },[])
    useEffect(()=>{
            getDeletedNotes()
            console.log(deleteflag);
    },[])
    // useEffect(()=>{
    //     console.log(deleteflag);
    // },[])
    useEffect(()=>{
        console.log(filtered);
    },[d_title,d_category])
  return (
    <Wrapper>
        <div>
            {/* Form */}
            {deleteflag ? <NoteForm title={d_title} category={d_category} changeValue={changeValue} deleteflag={deleteflag} filter={filter}/> : <NoteForm title={n_title} category={n_category} changeValue={change} deleteflag={deleteflag} filter={filter}/>}
        </div>
        
        {/* Body */}
        {deleteflag ? 
        <div className='flex'>
            {deletemap(page,check,filtered,err)}
        </div>
        : <p>Another page</p>}
       
    </Wrapper>
   
  )
}

export default Notesbody

const Wrapper = styled.div`
    background-color: brown;
    padding: 1rem 1rem;
    /* display: grid; */
    /* gap: 1rem; */
    display: flex;
    flex-direction: column;
    min-height: 81.99vh;
    .search{
        display: flex;
        align-items: center;
        width: 100%;
        background-color: white;
        border-radius: 0.5rem;
        overflow: hidden;
        border: none;
    }
   
    .flex{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        height: 100%;
        background-color: pink;
    }
    .note{
        background-color: green;
        padding: 0.5rem;
        border-radius: 0.7rem;
        display: grid;
        gap: .5rem;
    }
    a{
        text-decoration: none;
        color: black;
    }
`


 {/* {check && <p>loading</p>} */}
        {/* {page.length ? <div className='flex'>
            {filtered.length ? filtered.map((note)=>{
            return(
                <div key={note._id} className="note">
                    <Link to={`/singlenote/${note._id}`}>
                    <h3>{note.title.length <= 20 ? note.title : `${note.title.slice(0,23)}...`}</h3>
                    <p>{note.note.slice(0,105)}...</p>
                    </Link>
                </div>
            )
        }) : <p>No match found</p>}
            
        </div> : <div><p>No note</p></div>} */}
        <>
        {/* {notes.map((note)=>{
            return(
                <div  className="note">
                    <Link to={`/singlenote/${note.id}`}>
                    <h3>{note.title.length <= 20 ? note.title : `${note.title.slice(0,23)}...`}</h3>
                    <p>{note.note.slice(0,105)}...</p>
                    </Link>
                </div>
            )})} */}
        </>