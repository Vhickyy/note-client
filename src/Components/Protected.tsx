import {Navigate} from 'react-router-dom'
import { useAuth } from '../context/Authcontext'

type childrenProps = {
  children: React.ReactNode
}

const Protected = ({children}: childrenProps) => {
  const {user} = useAuth()
  
  if(!user){
    return <Navigate to="/login"/>
  }
  return (
    <>
     {children}
    </>
  )
}

export default Protected
