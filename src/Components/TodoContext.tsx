import { createContext, useEffect, useReducer } from "react";
import {reducer,Stateprops} from '../reducer'
import { notes } from '../fakedata'
type TodoProps = {
    children: React.ReactNode
}
const Todocontext = createContext({})
const user = JSON.parse(`${localStorage.getItem('user')}`) || null
console.log(user);
// type Stateprops={
//     user:string,
//     token:string,
//     notes:{id:String,title:string,note:string}[],
//     deletedTodos:string[],
//     loading:boolean
// }
const initialState: Stateprops= {
    user: user,
    token: JSON.parse(`${localStorage.getItem('token')}`) || null,
    notes: notes,
    deletedTodos:[],
    loading:false
}
const TodocontextProvider = ({children}:TodoProps)=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        
    })
    return(
        <Todocontext.Provider value='hello'>
            {children}
        </Todocontext.Provider>
    )
}