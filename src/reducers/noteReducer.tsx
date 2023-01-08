export type StateProps ={
    notes: NoteProp[],
    setID:String,
    loading:boolean,
    error:string,
    title:string,
    category:string,
    count:String,
    filterbackend:NoteProp[]
}
export const initialState: StateProps= {
    notes: [],
    setID:"",
    loading:false,
    error:"",
    title:"",
    category:"all",
    filterbackend:[],
    count:"1"
}
export type NoteProp = {
        id: String,
        title:String,
        note:String,
        category:String,}
type ActionProp = {
    type: "GETNOTES"   
    payload: {
        notes: NoteProp[],
        filtered:  NoteProp[]
    }
       
}
type Loading = {
    type:"LOADING" | "LOADEND"
}
type Edit = {
    type: "DELETENOTE" | "SETID" | "ERROR",
    payload: string
}
type Change = {
    type:"CHANGE",
    payload:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
}
export const reducer =(state:typeof initialState,action:ActionProp | Loading | Edit | Change): typeof initialState =>{
   if(action.type === "GETNOTES"){
        return {...state,notes:action.payload.notes,filterbackend:action.payload.filtered,setID:"",loading:false}
    }
    if(action.type === "LOADING"){
        return {...state,loading:true,error:"",setID:""}
    }
    if(action.type === "LOADEND"){
        return {...state,loading:true}
    }
    if(action.type === "ERROR"){
        return {...state,loading:false,error:action.payload}
    }
    if(action.type === "DELETENOTE"){
        const newnotes= state.notes.filter(note=>note.id !== action.payload )
        return {...state,notes:newnotes}
    }
    if(action.type === "SETID"){
        return {...state,setID:action.payload}
    }
    if(action.type === "CHANGE"){
        const {name,value} = action.payload.target
        return {...state,[name]:value}
    }
    // if(action.type === "SINGLENOTE"){
    //     const newnote = state.notes.find(note=>note.id===action.payload)
    //     return {...state,setID:action.payload}
    // }
    // if(action.type === "EDITNOTE"){
    //     const newnotes=state.notes.map(note=>{
    //         if(note.id === state.editID){
    //             return action.payload
    //         }else return note
    //     })
    //     return {...state,notes:newnotes}
    // }
    //add,delete,edit,retrieve,permanentdelete,deleteall
    return state;
}