import axios from "axios";
import { useEffect, useState } from "react"
type bodyProps={
    name:String,
    email:String,
    password:string
}
export const useFetch = (url:string,{name,email,password}:bodyProps)=>{
    const [state,setState] = useState({loading:false,error:"",data:[]});
   
    useEffect(()=>{
        const fetchfunc = async(url:string)=>{
            setState({...state,loading:true})
            const {data} :any= await axios.post(url);
            try {
                setState({...state,loading:false,data})
            } catch (err: any) {
                setState({...state,loading:false,error:err.message})
            }
        }
        fetchfunc(url)
    },[])
    return state
}