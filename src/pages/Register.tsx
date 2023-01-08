import { Link } from "react-router-dom"
import styled from "styled-components"
import { useAuth } from "../context/Authcontext"

const Register = () => {
  const {registerUser} = useAuth()
  return (
    <Wrapper>
      <div className="top">
         <h1>LOGO</h1>
      </div>
      <div className="formdiv">
        <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm password</label>
          <input type="password" name="confirmpassword" />
        </div>
      </form>
      <p>Already have an account? <span><Link to={"/login"}>Log in</Link></span></p>
      </div>
      

    </Wrapper>
  )
}

export default Register

const Wrapper = styled.main`

height: 100vh;
/* background-color: brown; */
  .top{
    padding: 2rem 0;
     max-width: 85%;
     margin: 0 auto;
  }
  .formdiv{
    width: 100%;
    background-color: green;
    display: grid;
    place-items: center;
    padding: 1rem 0;
    /* height: 8vh; */
  }
  form{
    /* background-color: blue; */
    background-color: whitesmoke;
    box-shadow: 2px 3px 2px 3px gray;
    border-radius: 1rem;
    width: 80%;
    max-width: 30rem;
    /* min-width: 80%;
    max-width: 70%; */
    padding: 3rem 1.5rem;
  }
  form > div{
    display: grid;
    gap: .2rem;
    margin-bottom: 1rem;
  }
  input{
    border-radius: .5rem;
    height: 2rem;
    padding: 1rem .5rem;
    border: 2px solid gray;
    outline: none;
  }
`