import Cursor from '../../assets/Cursor'
import './HeroPort.scss'
import { motion } from 'framer-motion'

const HeroPort = () => {

  const itemsAnimation = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    })
  }

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
    onClick={() => selected.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='hero'>
      <div className="container">
        <div className="hero__wrapper">
          <motion.h1 custom={1} variants={itemsAnimation} className='hero__title'>Showcasing my <span>talent</span> and <span>passion</span></motion.h1>
          <motion.div custom={2} variants={itemsAnimation} className='icon-down'>
            <Cursor />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroPort