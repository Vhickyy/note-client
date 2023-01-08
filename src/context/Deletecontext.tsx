import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { reducer,initialState,NoteProp, StateProps} from "../reducers/deleteReducer";
type props={
    children:React.ReactNode
}
type ContextProps={
    notes: NoteProp[],
    deleteflag:Boolean,
    loading:Boolean,
    error:string,
    setID:string,
    title:string,
    category:string,
    filtered:NoteProp[],
    token:string,
    deleteOneNote: (value:string)=>{},
    deleteAllNotes:()=>void,
    getDeletedNotes:()=>void,
    retrieveNote:(value:string)=>void,
    onDelete:()=>void,
    offDelete:()=>void,
    filter:()=>void,
    sort:(value:string)=>void,
    changeValue:(param: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
    loadDeleteNote:()=>void
}
const initState={
    // notes: [],
    // deleteflag:Boolean,
    // loading:Boolean,
    // error:string,
    // setID:string,
    // title:string,
    // category:string,
    // filtered:NoteProp[],
    // token:string,
    ...initialState as StateProps,
    deleteOneNote: (value:string)=>{},
    deleteAllNotes:()=>{},
    getDeletedNotes:()=>{},
    retrieveNote:(value:string)=>{},
    onDelete:()=>{},
    offDelete:()=>{},
    filter:()=>{},
    sort:(value:string)=>{},
    changeValue:(param: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {},
    loadDeleteNote:()=>{}
}
const DeleteContext = createContext<ContextProps>({} as ContextProps)
export const DeleteContextProvider = ({children}:props) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const getDeletedNotes = async ()=>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await  axios("/api/delete",{headers: {Authorization: `Bearer ${state.token}`}})
            dispatch({type:"GETNOTES",payload:data.note})
            dispatch({type:"LOADEND"})
            console.log(data);
            
        } catch (error:any) {
            dispatch({type:"LOADEND"})
            console.log(error.response.data.message);
            
            dispatch({type:"ERROR",payload:error.response.data.message})
        }
    }
    const filter = ()=>{
        dispatch({type:"FILTER"})
    }
    const sort = (value:string)=>{
        dispatch({type:"SORT",payload:value})
    }
    const deleteAllNotes = async ()=>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any =await axios.delete("/api/delete",{headers: {Authorization: `Bearer ${state.token}`}})
            console.log(data);
            dispatch({type:"DELETEALLNOTES"})
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"LOADEND"})
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const loadDeleteNote = ()=>{
        dispatch({type:"LOADING"})
    }
    const deleteOneNote = async (value:string) =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.delete("/api/deleted")
            console.log(data);
            dispatch({type:"DELETENOTE",payload:value})
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"LOADEND"})
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const retrieveNote = async (value:string) =>{
         dispatch({type:"LOADING"})
        try {
            const {data}:any =await  axios("/api/delete",{headers: {Authorization: `Bearer ${state.token}`}})
            console.log(data);
            dispatch({type:"RETRIEVE",payload:data})
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"LOADEND"})
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const onDelete = ()=>{
        dispatch({type:"ONDELETEFLAG"})
    }
    const offDelete = ()=>{
        dispatch({type:"OFFDELETEFLAG"})
    }
    const changeValue = (param:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
        dispatch({type:"CHANGE",payload:param})
    }
    return (
        <DeleteContext.Provider value={{...state,deleteOneNote,deleteAllNotes,getDeletedNotes,retrieveNote,onDelete,offDelete,filter,sort,changeValue,loadDeleteNote}}>
            {children}
        </DeleteContext.Provider>
    )
}
export const useDelete = ()=>{
    return useContext(DeleteContext);
}