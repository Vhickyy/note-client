import About from '../Components/About'
import Hero from '../Components/Hero'
import Layout from '../Components/Layout'
import Service from '../Components/Service'

const Home = () => {
  return (
    <Layout>
     <Hero/>
     <About/>
     <Service/>
    </Layout>
  )
}

export default Home