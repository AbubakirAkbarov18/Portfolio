import './Bottom.scss'
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'

const Bottom = () => {

  const bottomItemAnimation = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    }
  }

  const bottomItemAnimation2 = {
    hidden: {
      y: -50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    }
  }

  const bottomItemAnimation3 = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    }
  }
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3 }}
      className='bottom'>
      <div className="bottom__wrapper">
        <motion.h2 custom={1} variants={bottomItemAnimation}>Let’s <br /> Work Together -</motion.h2>
        <div className='bottom__links'>
          <motion.Link custom={2} variants={bottomItemAnimation2} target='_blank' className='bottom__link' to={'mailto:aakbarov209@gmail.com'}><SiGmail /> aakbarov209@gmail.com</motion.Link>
          <motion.Link custom={3} variants={bottomItemAnimation3} target='_blank' className='bottom__link' to={'https://www.linkedin.com/in/abubakir-akbarov-9069b6312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}><FaLinkedin /> Hire me on LinkedIn</motion.Link>
        </div>
      </div>
    </motion.section>
  )
}

export default Bottom