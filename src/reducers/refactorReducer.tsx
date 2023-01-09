export type StateProps ={
    notes: NoteProp[],
    deletedNotes:NoteProp[],
    deleteflag:Boolean,
    loading:Boolean,
    error:string,
    setID:string,
    title:string,
    category:string,
    deletedFiltered:NoteProp[],
    filtered:NoteProp[],
    token:string,
    note:NoteProp[]
    editFlag:boolean,
    // count:String,
}
type NoteProp = {
    _id: string,
    title:string,
    note:string,
    category:String,
    createdAt:String,
    // count:String
}
const initialState: StateProps= {
    notes: [],
    deletedNotes:[],
    deleteflag: false,
    loading:false,
    error:"",
    setID:"",
    title:"",
    category:"all",
    deletedFiltered:[],
    filtered:[],
    token: JSON.parse(`${localStorage.getItem("user")}`)?.token || null,
    note: [],
    editFlag:false
}
type All = {
    type:  "DELETEALLNOTES" | "ONDELETEFLAG" | "OFFDELETEFLAG" | "LOADING" | "LOADEND" |  "ONEDITFLAG" | "OFFEDITFLAG" | "FILTER"
}
type GetDeleted = {
    type: "GETDELETEDNOTES"  | "RETRIEVE" | "SINGLENOTE"
    payload:  NoteProp[]
}
type GetNote = {
    type: "GETNOTES"
    payload: {
        notes: NoteProp[],
        filtered:  NoteProp[]
    }
}
type Edit = {
    type: "DELETE_NOTE_ON_DELETE_PAGE" | "ERROR",
    payload: string
}
const reducer = (state:typeof initialState,action: All | GetDeleted | GetNote | Edit)=>{
     if(action.type === "LOADING"){
        return {...state,loading:true,error:""}
    }
    if(action.type === "LOADEND"){
        return {...state,loading:false}
    }
    if(action.type === "ONDELETEFLAG"){
        return {...state,deleteflag:true}
    }
    if(action.type === "OFFDELETEFLAG"){
        return {...state,deleteflag:false}
    }
    if(action.type === "GETDELETEDNOTES"){
        return {...state,deletedNotes:action.payload,title:"",category:"all",filtered:action.payload}
    }
    if(action.type === "GETNOTES"){
        return {...state,notes:action.payload.notes,filterbackend:action.payload.filtered,editFlag:false,loading:false}
    }
    if(action.type === "ERROR"){
        return {...state,loading:false,error:action.payload}
    }
    if(action.type === "DELETE_NOTE_ON_DELETE_PAGE"){
        const newnotes = state.notes.filter(note=>note._id !== action.payload)
        return {...state,deletedNotes:newnotes}
    }
    if(action.type === "DELETEALLNOTES"){
        return {...state,notes:[]}
    }
    if(action.type === "RETRIEVE"){
        return {...state,deletedNotes:action.payload}
    }
    if(action.type === "SINGLENOTE"){
        return {...state,note:action.payload}
    }
    if(action.type === "ONEDITFLAG"){
        return {...state,editFlag:true}
    }
    if(action.type === "OFFEDITFLAG"){
        return {...state,editFlag:false}
    }
    if(action.type === "FILTER"){
        let temp = [...state.notes]
        if(state.title){
            temp = temp.filter(note=>note.title.includes(state.title))
        }
        if(state.category !== "all"){
            temp = temp.filter(note=>note.category === state.category)
        }
        return {...state,filtered:temp}
    }
}