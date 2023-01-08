import axios from "axios";
import { createContext, useReducer,useContext } from "react";
import { useFetch } from "../useFetch";
import { reducer,initialState } from "../reducers/authReducer";
type Props ={
    children:React.ReactNode
}
type bodyProps={
    name:String,
    email:string,
    password:string
}
type contextProp = {

}
const Authcontext = createContext<any>({})
export const AuthProvider = ({children}:Props)=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    // const {loading,error,data} = useFetch("/register",{name:"john",email:"john@gmail.com",password:"secret"})
    const saveUser = (data:any)=>{
        localStorage.setItem("user",JSON.stringify(data))
    }
    const removeUserFromLocalStorage = ()=>{
        localStorage.removeItem("user")
    }
    const registerUser = async (userdata:any)=>{
        dispatch({type:"USERSTART"})
        console.log(userdata);
        
        try {
            const {data}:any= await axios.post("/api/register",userdata);
            const {user,token} = data
            console.log(data);
            dispatch({type:"USEREND",payload:{user,token}}); 
            saveUser(data)
        } catch (error:any) {
            dispatch({type:"USERERROR",payload:error.message})
            console.log(error.message);
        }
    }
    const loginUser = async (userdata:any)=>{
        dispatch({type:"USERSTART"})
        try {
            const {data}:any= await axios.post("/api/login",userdata,);
            const {user,token} = data
            console.log(data);
            dispatch({type:"USEREND",payload:{user,token}});
            saveUser(data)
        } catch (error:any) {
            dispatch({type:"USERERROR",payload:error.message})
            console.log(error.message);
        }
    }
    const user = async ({userdata}:any,endpoint:string)=>{
        dispatch({type:"USERSTART"})
        try {
            const {data}:any= await axios.post(`/api/${endpoint}`,userdata);
            const {user,token} = data
            console.log(data);
            dispatch({type:"USEREND",payload:{user,token}});  
        } catch (error:any) {
            dispatch({type:"USERERROR",payload:error.message})
            console.log(error.message);
        }
    }
    const logout = () =>{
        removeUserFromLocalStorage()
    }
    
    const bo: bodyProps= {name:"john",email:"joh3n15@gmail.com",password:"secret"}
    // const fet = async ()=>{
    //     try {
    //         const data:any =await axios.post("api/register",bo)
    //          console.log(data);
    //     } catch (error:any) {
    //         console.log(error.message);
    //     }
    // }
    // fet()
    
    return (
        <Authcontext.Provider value={{...state,registerUser,loginUser,logout}}>
            {children}
        </Authcontext.Provider>
    )
}
export const useAuth = ()=>{
    return useContext(Authcontext)
}