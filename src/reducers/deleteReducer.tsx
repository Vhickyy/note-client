export type StateProps ={
    deletedNotes: NoteProp[],
    deleteflag:boolean,
    loading:boolean,
    error:string,
    // setID:string,
    title:string,
    category:string,
    filtered:NoteProp[],
    token:string,
    note:NoteProp[]
}
type ActionProp = {
    type: "GETNOTES"   | "SINGLENOTE" | "DELETE_OR_RETRIEVE_NOTE_ON_DELETE_PAGE" 
    payload:  NoteProp[]
}
export const initialState: StateProps= {
    deletedNotes: [],
    deleteflag: true,
    loading:false,
    error:"",
    // setID:"",
    title:"",
    category:"all",
    filtered:[],
    token: JSON.parse(`${localStorage.getItem("user")}`)?.token || null,
    note: []
}
type Delete = {
    type:  "ERROR" | "SETID" | "SORT" ,
    payload: string
}
type All = {
    type:  "DELETEALLNOTES" | "ONDELETEFLAG" | "OFFDELETEFLAG" | "LOADING" | "LOADEND" | "FILTER"| "DELETEALLNOTES" | "RETRIEVE_OR_DELETE"
}
type Change = {
    type:"CHANGE",
    payload:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
}
export type NoteProp = {
        _id: string,
        title:string,
        note:string,
        category:String,
        createdAt:String,
        // count:String
    }
export const reducer = (state:typeof initialState,action:ActionProp | Delete | All | Change): typeof initialState  => {
   if(action.type === "GETNOTES"){
        return {...state,deletedNotes:action.payload,title:"",category:"all",filtered:action.payload}
    }
   if(action.type === "SINGLENOTE"){
        return {...state,note:action.payload}
    }
    if(action.type === "LOADING"){
        return {...state,loading:true,error:""}
    }
    if(action.type === "LOADEND"){
        return {...state,loading:false}
    }
    if(action.type === "ERROR"){
        return {...state,loading:false,error:action.payload}
    }
    if(action.type === "FILTER"){
        let temp = [...state.deletedNotes]
        if(state.title){
            temp = temp.filter(note=>note.title.includes(state.title))
        }
        if(state.category !== "all"){
            temp = temp.filter(note=>note.category === state.category)
        }
        return {...state,filtered:temp}
    }
    if(action.type === "SORT"){
        let temp = [...state.filtered]
        if(action.payload === "a-z"){
            temp = state.filtered.sort((a,b)=>a.title.localeCompare(b.title))
        }else if(action.payload === "z-a"){
            temp = state.filtered.sort((a,b)=>b.title.localeCompare(a.title))
        }else if(action.payload === "oldest"){

        }
    }
    if(action.type === "ONDELETEFLAG"){
        return {...state,deleteflag:true}
    }
    if(action.type === "OFFDELETEFLAG"){
        return {...state,deleteflag:false}
    }
   if(action.type === "DELETE_OR_RETRIEVE_NOTE_ON_DELETE_PAGE"){
        // const newnotes = state.deletedNotes.filter(note=>note._id !== action.payload)
        return {...state,deletedNotes:action.payload}
    }
   if(action.type === "DELETEALLNOTES"){
        return {...state,deletedNotes:[]}
    }
    // if(action.type === "RETRIEVE_OR_DELETE"){
    //     return {...state}
    // }
    if(action.type === "CHANGE"){
        const {name,value} = action.payload.target
        return {...state,[name]:value}
    }
    
    return state
}
