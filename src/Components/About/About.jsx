import './About.scss'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import JS from '../../assets/JS.webp'
import { motion } from 'framer-motion';
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {

    const aboutTextAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }

    const aboutItemAnimation = {
        hidden: {
            display : 'none',
            x: 100,
            opacity: 0
        },
        visible: {
            display : 'flex',
            x: 0,
            opacity: 1,
        }
    }

    const aboutBottomAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.5 },
          })
    }

    return (
        <section
            className='about' id='about'>
            <div className="container">
                <div className="about__wrapper">
                    <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className='about__head'>
                        <motion.p variants={aboutTextAnimation} className='about__subtitle'>About Me</motion.p>
                        <motion.div variants={aboutItemAnimation} className='about__socials'>
                            <Link target='_blank' to={'https://www.instagram.com/_akbarov_a1'} className='about__social'><FaInstagram /></Link>
                            <Link target='_blank' to={'https://www.linkedin.com/in/abubakir-akbarov-9069b6312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} className='about__social'><FaLinkedinIn /></Link>
                            <Link target='_blank' to={'https://t.me/BB_PL_AW'} className='about__social'><FaTelegramPlane /></Link>
                            <Link target='_blank' to={'mailto:aakbarov209@gmail.com'} className='about__social'><SiGmail /></Link>
                        </motion.div>
                    </motion.div>
                    <div className='about__content'>
                        <motion.h2 
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2 }}
                        variants={aboutTextAnimation} className='about__title'>Results-driven Front-end Web Developer with 1 year of <br /> experience <br /> delivering high-quality, user-friendly web applications. I spent honing my skills in HTML, CSS and JavaScript</motion.h2>
                        <motion.h3
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2 }}
                        variants={aboutTextAnimation} className='about__subtitle'>1 understand the importance of a <br /> Pixel- <br /> perfect Website, pride myself on producing high-quality websites, and <br /> I'm <br /> comfortable working solo or as part <br /> of a <br /> team.</motion.h3>
                    </div>
                    <img className='about__img' src="https://www.epitech-it.es/wp-content/uploads/2022/07/danial-igdery-FCHlYvR5gJI-unsplash-1536x864.jpg" alt="" />
                    <img className='about__img-media' src="https://www.epitech-it.es/wp-content/uploads/2022/07/danial-igdery-FCHlYvR5gJI-unsplash-1536x864.jpg" alt="" />
                </div>
            </div>
            <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} className='about__bottom'>
                <motion.div variants={aboutBottomAnimation} custom={1} className='about__bottom-content'>
                    <div className='about__bottom-img'>
                        <img width={50} src={HTML} alt="" />
                        <h3>HTML</h3>
                    </div>
                    <p className='about__bottom-text'>HyperText Markup Language</p>
                </motion.div>
                <motion.div variants={aboutBottomAnimation} custom={2} className='about__bottom-content'>
                    <div className='about__bottom-img'>
                        <img width={50} src={CSS} alt="" />
                        <h3>CSS</h3>
                    </div>
                    <p className='about__bottom-text'>Cascading Style Sheets</p>
                </motion.div>
                <motion.div variants={aboutBottomAnimation} custom={3} className='about__bottom-content'>
                    <div className='about__bottom-img'>
                        <img width={70} src={JS} alt="" />
                        <h3>JavaScript</h3>
                    </div>
                    <p className='about__bottom-text'>a scripting language</p>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About