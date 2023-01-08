import styled from 'styled-components'
import Notepix from "../Images/notes.jpg"
const Service = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='card'>
          <div className='image'>
            <img src={Notepix} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dignissimos.</p>
        </div>
        <div className='card'>
          <div className='image'>
            <img src={Notepix} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dignissimos.</p>
        </div>
        <div className='card'>
          <div className='image'>
            <img src={Notepix} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dignissimos.</p>
        </div>
      </div>
     
      
    </Wrapper>
  )
}

export default Service
const Wrapper = styled.section`
background-color: #fff;
padding: 3rem 0;

.container{
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  background-color: pink;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.card{
  /* flex: 0 1 ; */
  flex: 1;
  width: 22rem;
}
.image{
  background-color: greenyellow;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22rem;
  width: 100%;
  padding-top: 4rem;
}
img{
  /* width: 100%; */
  object-fit: cover;
}
@media (min-width: 1200px){
  .container{
    flex-direction: row;
    justify-content: space-between;
  }
  .card{
    /* flex: 0 0; */
    width: 30%;
    flex: none;
    /* background-color: #fff; */
  }
}
`