import './Featured.scss'
import Coffee from '../../assets/Coffee.jpg'
import Climber from '../../assets/Climber.jpg'
import eBay from '../../assets/eBay.jpg'
import Chocolate from '../../assets/Chocolate.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import ChocolateView from '../../assets/ChocolateView.png'
import ClimberView from '../../assets/ClimberView.png'
import CoffeeView from '../../assets/CoffeeView.png'
import eBayView from '../../assets/eBayView.png'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const Featured = () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const Navigate = useNavigate()

    const featuredItemAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.4 },
        })
    }

    const featuredItemAnimation2 = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.4 },
        })
    }

    const featuredBtnAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            className='featured'>
            <div className="container">
                <div className="featured__wrapper">
                    <div className='featured__head'>
                        <motion.p custom={1} variants={featuredItemAnimation} className='about__subtitle'>Featured Projects</motion.p>
                    </div>
                    <motion.h2 custom={2} variants={featuredItemAnimation}>I craft digital solutions that showcase my passion and expertise in design and development.</motion.h2>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.5 }}
                        className='featured__content'>
                        <motion.div custom={1} variants={featuredItemAnimation} className='featured__card'>
                            <a target='_blank' href="https://roaster-coffee.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={Coffee} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://roaster-coffee.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen1(!open1)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://roaster-coffee.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                        <motion.div custom={2} variants={featuredItemAnimation2} className='featured__card'>
                            <a target='_blank' href="https://climber-1.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={Climber} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://climber-1.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen2(!open2)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://climber-1.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                        <motion.div custom={3} variants={featuredItemAnimation} className='featured__card'>
                            <a target='_blank' href="https://ebay-5.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={eBay} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://ebay-5.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen3(!open3)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://ebay-5.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                        <motion.div custom={4} variants={featuredItemAnimation2} className='featured__card'>
                            <a target='_blank' href="https://simplechocolate.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={Chocolate} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://simplechocolate.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen4(!open4)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://simplechocolate.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className="featured__media-cards">
                        <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} variants={featuredItemAnimation} className='featured__card featured__card-media'>
                            <a target='_blank' href="https://roaster-coffee.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={Coffee} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://roaster-coffee.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen1(!open1)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://roaster-coffee.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                        <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} variants={featuredItemAnimation2} className='featured__card featured__card-media'>
                            <a target='_blank' href="https://climber-1.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={Climber} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://climber-1.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen2(!open2)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://climber-1.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                        <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} variants={featuredItemAnimation} className='featured__card featured__card-media'>
                            <a target='_blank' href="https://ebay-5.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={eBay} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://ebay-5.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen3(!open3)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://ebay-5.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                        <motion.div initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }} variants={featuredItemAnimation2} className='featured__card featured__card-media'>
                            <a target='_blank' href="https://simplechocolate.netlify.app/">
                                <div className='featured__card-img'>
                                    <img src={Chocolate} alt="" />
                                    <a className='featured__card-link--flow' target='_blank' href="https://simplechocolate.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                                </div>
                            </a>
                            <div className='featured__card-content'>
                                <button onClick={() => setOpen4(!open4)} className='featured__card-btn'>Landing Page</button>
                                <a className='featured__card-link' target='_blank' href="https://simplechocolate.netlify.app/">View Project <MdOutlineArrowOutward className='featured__card-arrow' /></a>
                            </div>
                        </motion.div>
                    </div>
                    <motion.a
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2 }}
                        variants={featuredBtnAnimation}
                        className='featured__link' href='/portfolio'>Explore all the projects
                    </motion.a>
                </div>
            </div>
            {open1 &&
                <div onClick={() => setOpen1(!open1)} data-open={open1} className='featured__overlay'>
                    <div onClick={(e) => e.stopPropagation()} className='container'>
                        <div className="featured__overlay-content">
                            <img src={CoffeeView} alt="" />
                            <button className='featured__overlay-btn' onClick={() => setOpen1(!open1)}>Close <RxCross1 /></button>
                        </div>
                    </div>
                </div>
            }
            {open2 &&
                <div onClick={() => setOpen2(!open2)} data-open={open2} className='featured__overlay'>
                    <div onClick={(e) => e.stopPropagation()} className='container'>
                        <div className="featured__overlay-content">
                            <img src={ClimberView} alt="" />
                            <button className='featured__overlay-btn' onClick={() => setOpen2(!open2)}>Close <RxCross1 /></button>
                        </div>
                    </div>
                </div>
            }
            {open3 &&
                <div onClick={() => setOpen3(!open3)} data-open={open3} className='featured__overlay'>
                    <div onClick={(e) => e.stopPropagation()} className='container'>
                        <div className="featured__overlay-content">
                            <img src={eBayView} alt="" />
                            <button className='featured__overlay-btn' onClick={() => setOpen3(!open3)}>Close <RxCross1 /></button>
                        </div>
                    </div>
                </div>
            }
            {open4 &&
                <div onClick={() => setOpen4(!open4)} data-open={open4} className='featured__overlay'>
                    <div onClick={(e) => e.stopPropagation()} className='container'>
                        <div className="featured__overlay-content">
                            <img src={ChocolateView} alt="" />
                            <button className='featured__overlay-btn' onClick={() => setOpen4(!open4)}>Close <RxCross1 /></button>
                        </div>
                    </div>
                </div>
            }
        </motion.section>
    )
}

export default Featured