import Cursor from '../../assets/Cursor'
import './HeroProcess.scss'
import { motion } from 'framer-motion'

const HeroProcess = () => {

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
    onClick={() => steps.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='hero'>
      <div className="container">
        <div className="hero__wrapper">
          <motion.h1 custom={1} variants={itemsAnimation} className='hero__title'><span>Working</span> <br /> <span>Process</span></motion.h1>
          <motion.p custom={2} variants={itemsAnimation} className='hero__subtitle'>How I Combine design and technology to create exceptional user experiences.</motion.p>
          <motion.div custom={3} variants={itemsAnimation} className='icon-down'>
            <Cursor />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroProcess