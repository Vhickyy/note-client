type User = {
    type: "USEREND",
    payload:{
        user:string,
        token:string,
    }
}
type UserStart = {
    type: "USERSTART"
}
type Error = {
    type: "USERERROR",
    payload:string
}
type Stateprops={
    user: string,
    token:string,
    loading:boolean,
    error:string
}
const userlocal = JSON.parse(`${localStorage.getItem("user")}`)
export const initialState : Stateprops={
    user: userlocal?.user || null,
    token:  userlocal?.token || null,
    loading:false,
    error:""
}

export const reducer = (state: typeof initialState,action:User | UserStart | Error): typeof initialState=>{
    if(action.type === "USERSTART"){
        return {...state,loading:true,error:""}
    }
    if(action.type === "USEREND"){
        return {...state,loading:false,user:action.payload.user,token:action.payload.token}
    }
    if(action.type === "USERERROR"){
        return {...state,loading:false,error:action.payload}
    }
    return state
}