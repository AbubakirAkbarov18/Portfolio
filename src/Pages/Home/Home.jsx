import About from '../../Components/About/About'
import Featured from '../../Components/Featured/Featured'
import Hero from '../../Components/Hero/Hero'
import Skills from '../../Components/Skills/Skills'
import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <Hero/>
      <About/>
      <Featured/>
      <Skills/>
    </div>
  )
}

export default Home