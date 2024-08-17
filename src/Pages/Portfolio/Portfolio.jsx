import HeroPort from '../../Components/HeroPort/HeroPort'
import Selected from '../../Components/Selected/Selected'
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <HeroPort/>
      <Selected/>
    </div>
  )
}

export default Portfolio