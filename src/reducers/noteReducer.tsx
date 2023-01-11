export type StateProps ={
    notes: NoteProp[],
    setID:String,
    loading:boolean,
    editFlag:boolean,
    error:string,
    title:string,
    category:string,
    count:String,
    filterbackend:NoteProp[],
    note:NoteProp[],
    addTitle:string,
    addCategory:string,
    addBody:string,
}
export const initialState: StateProps= {
    notes: [],
    setID:"",
    editFlag:false,
    loading:false,
    error:"",
    title:"",
    category:"all",
    filterbackend:[],
    note: [],
    addTitle:'',
    addCategory:'',
    addBody:'',
    count:"1"
}
export type NoteProp = {
        _id: String,
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
type SingleProp = {
    type: "SINGLENOTE" 
    payload:NoteProp[]
}
type Loading = {
    type:"LOADING" | "LOADEND"  | "OFFEDITFLAG"
}
type OnEdit = {
    type:"ONEDITFLAG",
    payload:{
        title:string,
        note:string,
        category:string
    }
}
type Edit = {
    type:  "SETID" | "ERROR",
    payload: string
}
type Change = {
    type:"CHANGE"
    payload:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
}
export const reducer =(state:typeof initialState,action:ActionProp | Loading | Edit | Change | SingleProp | OnEdit): typeof initialState =>{
   if(action.type === "GETNOTES"){
        return {...state,notes:action.payload.notes,filterbackend:action.payload.filtered,editFlag:false,loading:false}
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
    // if(action.type === "DELETENOTE"){
    //     return {...state,notes:action.payload}
    // }
    if(action.type === "SETID"){
        return {...state,setID:action.payload}
    }
    if(action.type === "CHANGE"){
        const {name,value} = action.payload.target
        console.log(name,value);
        
        return {...state,[name]:value}
    }
    if(action.type === "SINGLENOTE"){
        return {...state,note:action.payload}
    }
    if(action.type === "ONEDITFLAG"){
        return {...state,editFlag:true,addTitle:action.payload.title,addBody:action.payload.note,addCategory:action.payload.category}
    }
    if(action.type === "OFFEDITFLAG"){
        return {...state,editFlag:false}
    }
    // if(action.type === "ADD_FORM_EDIT"){
    //     return {...state,addTitle:action.payload.title,addBody:action.payload.note,addCategory:action.payload.category}
    // }
    //add,delete,edit,retrieve,permanentdelete,deleteall
    return state;
}