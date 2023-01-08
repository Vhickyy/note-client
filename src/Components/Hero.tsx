import styled from "styled-components"
import Notepix from "../Images/notes.jpg"

const Hero = () => {
  return (
    <Wrapper>
        <div className="top">
            <div className="hero">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, modi maiores perferendis nesciunt molestiae nisi eos aspernatur culpa. 
                </p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={Notepix} alt="" />
            </div>
            
        </div>
    </Wrapper>
  )
}

export default Hero
const Wrapper = styled.section`
padding: 3.3rem 0;
min-height: 85vh;
background-color: #fff;
.top{
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(19.58rem,1fr));
    gap: 2rem;
    /* background-color: yellow; */
}
.image{
    width: 100%;
    height: 400px;
    background-color: blue;
}
img{
    width: 100%;
    height: 100%;
}
.hero{
    text-align: center;
    display:grid;
    gap: 1.5rem;
    /* background-color: blue; */
}
button{
    width: 15em;
    margin: 0 auto;
}
@media (min-width:1010px){
    padding-top: 5rem;
    padding-bottom: 4rem;
    min-height: 87vh;

.hero{
    margin: 0;
    padding: 5rem 0;
    /* height: 500px; */
    gap: 0;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    padding-right: 1rem;
}
.image{
    height: 500px;
}
}
`