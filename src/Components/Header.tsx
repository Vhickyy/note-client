import styled from "styled-components"
import {FaBars} from 'react-icons/fa'
const Header = () => {
  return (
    <Wrapper>
        <nav>
            <h1>LOGO</h1>
            <FaBars className="mobile" size="2rem"/>
            {/* <div > */}
                <ul className="desktop">
                    <li>Home</li>
                    <li>About</li>
                    <li>Register</li>
                    <li>Contact Us</li>
                </ul>
            {/* </div> */}
        </nav>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
    background-color: #bc842f;
    position: sticky;
    top: 0;
    width: 100%;
    /* height: vh; */
    .desktop{
        display: none;
    }
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 80%;
        margin: 0 auto;
        /* padding: 2rem 0; */
    }
    /* .mobile{
        display: block;
    } */
    @media (min-width:900px){
        .mobile{
            display: none;
        }
        .desktop{
            display: flex;
            justify-content: space-between;
            width:50%;
            /* background-color: pink; */
        }
    }
`