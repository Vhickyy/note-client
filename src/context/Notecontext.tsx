import { createContext, useContext, useReducer } from "react";
import { reducer,initialState, NoteProp, StateProps} from "../reducers/noteReducer";
import axios from "axios";
import { useAuth } from "./Authcontext";
type Params={
        title:string,
        note:string,
        category:string
    }
type ContextProps={
    notes: NoteProp[],
    setID:String,
    loading:boolean,
    error:string,
    title:string,
    category:string,
    filterbackend:NoteProp[],
    addTitle:string,
    addCategory:string,
    addBody:string,
    getNotes: ()=>void,
    deleteOneNote:(value:string)=>void,
    editNote:(value:string)=>void,
    addNote:()=>void,
    deleteAllNotes:()=>void,
    change:(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> |React.ChangeEvent<HTMLTextAreaElement> ) =>void,
    singleNote:(value:string | undefined)=>void,
    onEditFlag:({title,note,category}:Params)=>void,
    offEditFlag:()=>void
}
const Notecontext = createContext<ContextProps>({} as ContextProps)
type NoteProps = {
    children: React.ReactNode
}
export const NotecontextProvider= ({children}:NoteProps)=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const {token} = useAuth()
    
    const getNotes = async()=>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios("/api/todo",{headers: {Authorization: `Bearer ${token}`}})
            console.log(data);
            dispatch({type:"GETNOTES",payload:data})
        } catch (error:any) {
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const singleNote = (id:string | undefined)=>{
        const singleNote = state.notes.filter(note=>note._id === id)
        return(dispatch({type:"SINGLENOTE",payload:singleNote}))
    }
    const deleteOneNote = async(value:string) =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.delete(`/api/todo/${value}`,{headers: {Authorization: `Bearer ${token}`}})
            console.log(data);
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const deleteAllNotes = async() =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.delete(`/api/todo`,{headers: {Authorization: `Bearer ${token}`}})
            console.log(data);
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const editNote = async(value:string) =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.patch(`/api/todo${value}`,{headers: {Authorization: `Bearer ${token}`}})
            console.log(data);
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"LOADEND"})
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const addNote = async() =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.post(`/api/todo`,{headers: {Authorization: `Bearer ${token}`}})
            console.log(data);
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"LOADEND"})
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const setId = (value:string) =>{
        dispatch({type:"SETID",payload:value})
    }
    const onEditFlag= ({title,note,category}:Params) =>{
        dispatch({type:"ONEDITFLAG",payload:{title,note,category}})
    }
    const offEditFlag = () =>{
        dispatch({type:"OFFEDITFLAG"})
    }
    const change = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
        dispatch({type:"CHANGE",payload:e})
    }
    // const text_change = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    //     dispatch({type:"TEXT_CHANGE"},payload:e)
    // }
    return(
        <Notecontext.Provider value={{...state,getNotes,deleteOneNote,addNote,editNote,change,singleNote,onEditFlag,offEditFlag,deleteAllNotes}}>
        {children}
        </Notecontext.Provider>
    )
}
export const useNoteContext = ()=>{
   return useContext(Notecontext);
}