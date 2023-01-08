export type StateProps ={
    notes: NoteProp[],
    deleteflag:Boolean,
    loading:Boolean,
    error:string,
    setID:string,
    title:string,
    category:string,
    filtered:NoteProp[],
    token:string,
    note:NoteProp[]
}
type ActionProp = {
    type: "GETNOTES"  | "RETRIEVE" | "SINGLENOTE"
    payload:  NoteProp[]
}
// type SingleProp = {
//     type: "SINGLENOTE"
//     payload:  NoteProp
// }
export const initialState: StateProps= {
    notes: [],
    deleteflag: false,
    loading:false,
    error:"",
    setID:"",
    title:"",
    category:"all",
    filtered:[],
    token: JSON.parse(`${localStorage.getItem("user")}`)?.token || null,
    note: []
}
type Delete = {
    type: "DELETENOTE" | "DELETEALLNOTES" | "ERROR" | "SETID" | "SORT" ,
    payload: string
}
type All = {
    type:  "DELETEALLNOTES" | "ONDELETEFLAG" | "OFFDELETEFLAG" | "LOADING" | "LOADEND" | "FILTER"
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
        return {...state,notes:action.payload,title:"",category:"all",filtered:action.payload}
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
        let temp = [...state.notes]
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
   if(action.type === "DELETENOTE"){
        const newnotes = state.notes.filter(note=>note._id !== action.payload)
        return {...state,notes:newnotes}
    }
   if(action.type === "DELETEALLNOTES"){
        return {...state,notes:[]}
    }
    if(action.type === "SETID"){
        return {...state,setID:action.payload}
    }
    if(action.type === "RETRIEVE"){
        return {...state,notes:action.payload}
    }
    if(action.type === "CHANGE"){
        const {name,value} = action.payload.target
        return {...state,[name]:value}
    }
    
    return state
}
