import styled from "styled-components";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Protected from "./Components/Protected";
import AddNote from "./pages/AddNote";
import Deleted from "./pages/Deleted";
import Singlenote from "./pages/Singlenote";
import { notes } from "./fakedata";
import { useState,useEffect } from "react";
import axios from "axios";
import { useAuth } from "./context/Authcontext";
import Shared from "./pages/Shared";
import { useNoteContext } from "./context/Notecontext";

type bodyProps={
    name:String,
    email:string,
    password:string
}
function App() {
  const [data,setData] = useState(notes);
  const {logout,registerUser,loginUser} = useAuth();
  const {getNotes} = useNoteContext()
  
  // useEffect(()=>{
  //   registerUser({name:"jj",email:"jj@gmail.com",password:'secret'})
  // },[])
  // useEffect(()=>{
  //   loginUser({email:"jj@gmail.com",password:'secret'})
  //   // logout()
  // },[])
  // useEffect(()=>{
  //   getNotes()
  // },[])
   
  // const bo: bodyProps= {name:"john",email:"joh1n@gmail.com",password:"secret"}
  //   const fet = async ()=>{
  //       const data:any =await axios.post("api/register",bo)
  //       console.log(data);
  //   }
  //   fet()
  //   console.log('hi');
    
  return (

    <Wrapper>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        <Route path="/">
          <Route path="/" element={<Protected>
            <Shared/>
          </Protected>}>
            <Route path="notes" element={<Dashboard notes={notes}/>}/>
          <Route path="addnote" element={<AddNote/>}/>
          <Route path="deleted" element={<Deleted notes={notes}/>}/>
          <Route path="singlenote/:noteid" element={<Singlenote />}/>
          </Route>
          
        </Route>
       </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* background-color: blue; */
`
