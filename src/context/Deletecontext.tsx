import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { reducer,initialState,NoteProp, StateProps} from "../reducers/deleteReducer";
type props={
    children:React.ReactNode
}
type ContextProps={
    deletedNotes: NoteProp[],
    deleteflag:Boolean,
    loading:Boolean,
    error:string,
    // setID:string,
    title:string,
    category:string,
    filtered:NoteProp[],
    token:string,
    note:NoteProp[],
    deleteOrRetrieveOnDeletePage: (value:string,url:string)=>{},
    deleteAllNotes:()=>void,
    getDeletedNotes:()=>void,
    retrieveOrDeleteNote:(value:string)=>void,
    onDelete:()=>void,
    offDelete:()=>void,
    filter:()=>void,
    sort:(value:string)=>void,
    changeValue:(param: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
    loadDeleteNote:()=>void,
    getSingleDeletedNote:(value:string | undefined)=>void,
}
const initState={
    ...initialState as StateProps,
    deleteOrRetrieveOnDeletePage: (value:string)=>{},
    deleteAllNotes:()=>{},
    getDeletedNotes:()=>{},
    retrieveOrDeleteNote:(value:string)=>{},
    onDelete:()=>{},
    offDelete:()=>{},
    filter:()=>{},
    sort:(value:string)=>{},
    changeValue:(param: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {},
    loadDeleteNote:()=>{},
    getSingleDeletedNote:(value:string | undefined)=>{},
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
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const getSingleDeletedNote = (id:string | undefined)=>{
        const singleNote = state.deletedNotes.filter(note=>note._id === id)
        return(dispatch({type:"SINGLENOTE",payload:singleNote}))
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
    const deleteOrRetrieveOnDeletePage = async (value:string,url:string) =>{
        dispatch({type:"LOADING"})
        try {
            const {data}:any = await axios.delete(url)
            console.log(data);
            dispatch({type:"DELETE_OR_RETRIEVE_NOTE_ON_DELETE_PAGE",payload:data})
            dispatch({type:"LOADEND"})
        } catch (error:any) {
            dispatch({type:"LOADEND"})
            dispatch({type:"ERROR",payload:error.message})
        }
    }
    const retrieveOrDeleteNote = async (url:string) =>{
         dispatch({type:"LOADING"})
        try {
            const {data}:any =await  axios(url,{headers: {Authorization: `Bearer ${state.token}`}})
            console.log(data);
            // dispatch({type:"RETRIEVE_OR_DELETE"})
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
        <DeleteContext.Provider value={{...state,deleteOrRetrieveOnDeletePage,deleteAllNotes,getDeletedNotes,retrieveOrDeleteNote,onDelete,offDelete,filter,sort,changeValue,loadDeleteNote,getSingleDeletedNote}}>
            {children}
        </DeleteContext.Provider>
    )
}
export const useDelete = ()=>{
    return useContext(DeleteContext);
}