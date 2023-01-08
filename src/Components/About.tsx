import styled from "styled-components"
import Notepix from "../Images/notes.jpg"
const About = () => {
  return (
    <Wrapper>
        <div className="top">
            <h1>About</h1>
            <div className="about">
              <div className="text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, saepe corrupti! Quis architecto incidunt nam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, saepe corrupti! Quis architecto incidunt nam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, saepe corrupti! Quis architecto incidunt nam.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, saepe corrupti! Quis architecto incidunt nam.</p>
            </div>
            {/* <div className="image"> */}
              <img src={Notepix} alt="" />
            {/* </div>
            
            */}
            </div>
        </div>
    </Wrapper>
  )
}

export default About
const Wrapper = styled.section`
padding: 3rem 0;
/* height: 100vh; */
background-color: whitesmoke;
.top{
    max-width: 80%;
    margin: 0 auto;
    /* background-color: yellow; */
    text-align: center;
}
img{
  display: none;
}

p{
  margin-bottom: 2rem;
}
h1{
  font-size: 1.6rem;
}
.about{
  margin-top: 4rem;
  /* display: flex; */
  /* background-color: green; */
}
@media (min-width:1010px){
  img{
    display: block;
    width: 100%;
    height: 30rem;
    border-radius: 1rem;
  }
  .about{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
p{
  margin: 0;
}
.text{
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
}
`