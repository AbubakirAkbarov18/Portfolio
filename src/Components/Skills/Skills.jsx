import './Skills.scss'
import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import TS from '../../assets/TS.png'
import NEXT from '../../assets/NEXT.jpg'
import JS from '../../assets/JS.webp'
import React from '../../assets/React.webp'
import planning from '../../assets/planning.svg'
import launch from '../../assets/launch.svg'
import design from '../../assets/design.svg'
import development from '../../assets/development.svg'
import { motion } from 'framer-motion'

const Skills = () => {

    const skillsItemAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        })
    }

    const skillsItemAnimation2 = {
        hidden: {
            opacity: 0
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { delay: custom * 0.3 },
        })
    }

    const skillsCardAnimation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: (custom) => ({
            y: 50,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        })
    }

    const skillsCardAnimation2 = {
        hidden: {
            y: 150,
            opacity: 0
        },
        visible: (custom) => ({
            y: 100,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        })
    }

    const skillsCardAnimation3 = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: (custom) => ({
            y: 150,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        })
    }

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3 }}
            className='skills'>
            <div className="container">
                <div className="skills__wrapper">
                    <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.3 }}
                    custom={1}
                    variants={skillsItemAnimation}
                    className='skills__head'>
                        <p>What Do I Do And How?</p>
                    </motion.div>
                    <motion.h2
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.3 }}
                    custom={2}
                    variants={skillsItemAnimation}>1 love to craft functional solutions for unique problems. These are some <br /> skills <br /> I've picked up over my career.</motion.h2>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.3 }}
                        className='skills__cards'>
                        <motion.div custom={1} variants={skillsCardAnimation} className='skills__card'>
                            <img src={HTML} alt="" />
                            <h3>html</h3>
                            <p>As a Front-end developer, I specialize in creating beautiful, intuitive designs that make your website stand out.</p>
                        </motion.div>
                        <motion.div custom={2} variants={skillsCardAnimation2} className='skills__card'>
                            <img src={CSS} alt="" />
                            <h3>css</h3>
                            <p>I specialize in creating custom, responsive CSS websites that look great and function seamlessly across all devices. With attention to detail.</p>
                        </motion.div>
                        <motion.div custom={3} variants={skillsCardAnimation3} className='skills__card'>
                            <img src={JS} alt="" />
                            <h3>javascript</h3>
                            <p>JavaScript is my passion. I build interactive websites, use asynchronous requests, and am proficient in frameworks such as React and Next.</p>
                        </motion.div>
                        <motion.div custom={4} variants={skillsCardAnimation} className='skills__card'>
                            <img src={TS} alt="" />
                            <h3>typescript</h3>
                            <p>TypeScript is my reliable companion. I use it for strong typing, improving development, and building scalable applications.</p>
                        </motion.div>
                        <motion.div custom={5} variants={skillsCardAnimation2} className='skills__card'>
                            <img src={React} alt="" />
                            <h3>react</h3>
                            <p>React is a JavaScript library for creating user interfaces. I am a huge supporter of React and believe that it is one of the most powerful tools for developing web applications.</p>
                        </motion.div>
                        <motion.div custom={6} variants={skillsCardAnimation3} className='skills__card'>
                            <img src={NEXT} alt="" />
                            <h3>next.js</h3>
                            <p>Next.js is a framework for developing web applications based on React. It provides many features to create powerful and fast applications.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.3 }}
                        className='skills__cards-media'>
                        <motion.div custom={1} variants={skillsCardAnimation} className='skills__card skills__card-media'>
                            <img src={HTML} alt="" />
                            <h3>html</h3>
                            <p>As a Front-end developer, I specialize in creating beautiful, intuitive designs that make your website stand out.</p>
                        </motion.div>
                        <motion.div custom={2} variants={skillsCardAnimation2} className='skills__card skills__card-media'>
                            <img src={CSS} alt="" />
                            <h3>css</h3>
                            <p>I specialize in creating custom, responsive CSS websites that look great and function seamlessly across all devices. With attention to detail.</p>
                        </motion.div>
                        <motion.div custom={3} variants={skillsCardAnimation} className='skills__card skills__card-media'>
                            <img src={JS} alt="" />
                            <h3>javascript</h3>
                            <p>JavaScript is my passion. I build interactive websites, use asynchronous requests, and am proficient in frameworks such as React and Next.</p>
                        </motion.div>
                        <motion.div custom={4} variants={skillsCardAnimation2} className='skills__card skills__card-media'>
                            <img src={TS} alt="" />
                            <h3>typescript</h3>
                            <p>TypeScript is my reliable companion. I use it for strong typing, improving development, and building scalable applications.</p>
                        </motion.div>
                        <motion.div custom={5} variants={skillsCardAnimation} className='skills__card skills__card-media'>
                            <img src={React} alt="" />
                            <h3>react</h3>
                            <p>React is a JavaScript library for creating user interfaces. I am a huge supporter of React and believe that it is one of the most powerful tools for developing web applications.</p>
                        </motion.div>
                        <motion.div custom={6} variants={skillsCardAnimation2} className='skills__card skills__card-media'>
                            <img src={NEXT} alt="" />
                            <h3>next.js</h3>
                            <p>Next.js is a framework for developing web applications based on React. It provides many features to create powerful and fast applications.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.3 }}
                        className='skills__bottom'>
                        <div className='skills__bottom-content first-type'>
                            <motion.div custom={1} variants={skillsItemAnimation2} className='skills__bottom-line'>
                                <img src={planning} alt="" />
                            </motion.div>
                            <h3>Planning</h3>
                            <p>Define goal, wireframe, <br /> design concept, content write.</p>
                            <h4>1</h4>
                        </div>
                        <div className='skills__bottom-content second-type'>
                            <motion.div custom={2} variants={skillsItemAnimation2} className='skills__bottom-line'>
                                <img src={design} alt="" />
                            </motion.div>
                            <h4>2</h4>
                            <h3>Design</h3>
                            <p>Visual design, branding elements, <br /> color, typography and images.</p>
                        </div>
                        <div className='skills__bottom-content first-type'>
                            <motion.div custom={3} variants={skillsItemAnimation2} className='skills__bottom-line'>
                                <img src={development} alt="" />
                            </motion.div>
                            <h3>Development</h3>
                            <p>Develop website with responsive <br /> design that works across different <br /> device.</p>
                            <h4>3</h4>
                        </div>
                        <div className='skills__bottom-content second-type'>
                            <motion.div custom={4} variants={skillsItemAnimation2} className='skills__bottom-line'>
                                <img src={launch} alt="" />
                            </motion.div>
                            <h4>4</h4>
                            <h3>Launch</h3>
                            <p>Once the website has been <br /> thoroughly tested and approved, <br /> launch it to the public.</p>
                        </div>
                        <div className='skills__bottom-way--first'>
                        </div>
                        <div className='skills__bottom-way--second'>
                        </div>
                        <div className='skills__bottom-way--third'>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Skills