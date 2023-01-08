import { createContext, useContext, useReducer } from "react";
import { reducer,initialState, NoteProp, StateProps} from "../reducers/noteReducer";
import axios from "axios";
import { useAuth } from "./Authcontext";
type ContextProps={
    notes: NoteProp[],
    setID:String,
    loading:boolean,
    error:string,
    title:string,
    category:string,
    filterbackend:NoteProp[]
    getNotes: ()=>void,
    deleteNote:(value:string)=>void,
    editNote:(value:string)=>void,
    setId:(value:string)=>void,
    change:(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>void,
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
    const deleteNote = async(value:string) =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.delete(`/api/todo/${value}`)
            console.log(data);
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const editNote = async(value:string) =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.patch(`/api/todo/${value}`)
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
    const change = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch({type:"CHANGE",payload:e})
    }
    return(
        <Notecontext.Provider value={{...state,getNotes,deleteNote,setId,editNote,change}}>
        {children}
        </Notecontext.Provider>
    )
}
export const useNoteContext = ()=>{
   return useContext(Notecontext);
}