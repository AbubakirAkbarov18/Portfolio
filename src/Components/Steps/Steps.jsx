import './Steps.scss'
import { motion } from 'framer-motion'

const Steps = () => {

    const stepsAnimation = {
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
  return (
    <div 
    className='steps' 
    id='steps'>
        <div className='container'>
            <div className='steps__wrapper'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2 }} className='steps__content'>
                    <div className='step'>
                        <motion.span custom={1} variants={stepsAnimation} className='step__number'>Step 01</motion.span>
                        <motion.h3 custom={2} variants={stepsAnimation} className='step__title'>Get Started</motion.h3>
                    </div>
                    <div className='steps__texts'>
                        <motion.p custom={3} variants={stepsAnimation} className='step__text'>Starting with create a coming soon page for your website. <br /> <br /> <span>Why?</span> Because It builds anticipation: A coming soon page generates buzz and excitement about your website before it even launches. This can be particularly helpful for new businesses or startups that want to generate interest and curiosity around their brand.</motion.p>
                    </div>
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2 }} className='steps__content'>
                    <div className='step'>
                        <motion.span custom={1} variants={stepsAnimation} className='step__number'>Step 02</motion.span>
                        <motion.h3 custom={2} variants={stepsAnimation} className='step__title'>Planning</motion.h3>
                    </div>
                    <div className='steps__texts'>
                        <motion.p custom={3} variants={stepsAnimation} className='step__text'>At Begin by defining the goals and objectives of the website. This includes understanding the target audience, identifying the key features and functionality required, and establishing a timeline for the project. <br /> <br /> Develop a detailed plan for the project, including the site architecture, wireframes, and design concept with should also include a content strategy and a plan for search engine optimization.</motion.p>
                    </div>
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2 }} className='steps__content'>
                    <div className='step'>
                        <motion.span custom={1} variants={stepsAnimation} className='step__number'>Step 03</motion.span>
                        <motion.h3 custom={2} variants={stepsAnimation} className='step__title'>Design</motion.h3>
                    </div>
                    <div className='steps__texts'>
                        <motion.p custom={3} variants={stepsAnimation} className='step__text'><span>Identify branding elements:</span> The first step in creating the visual design of a website is to identify the client's branding elements. This includes their logo, color palette, typography, and any other design elements that are part of your brand identity. <br /> <br /> <span>Choose imagery:</span> It's important to choose images that are high-quality, relevant to the content, and consistent with the brand identity. This can include photographs, illustrations, icons, and other graphic elements. <br /> <br /> <span>Create a design concept:</span> That aligns with the your goals and objectives. This involves creating a mockup or prototype of the website that incorporates these elements and establishes a visual hierarchy for the content. <br /> <br /> <span>Refine the design:</span> After the initial design concept has been created, we will take a feedback from you. and we are ready to making some adjustments (if needed) to the layout, color scheme, typography, or imagery to better align with your goals and objectives.</motion.p>
                    </div>
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2 }} className='steps__content'>
                    <div className='step'>
                        <motion.span custom={1} variants={stepsAnimation} className='step__number'>Step 04</motion.span>
                        <motion.h3 custom={2} variants={stepsAnimation} className='step__title'>Development</motion.h3>
                    </div>
                    <div className='steps__texts'>
                        <motion.p custom={3} variants={stepsAnimation} className='step__text'>We will present a fully design demo website with mobile responsive design and it will iterate to get the visual right. After design approval we will develop the website. <br /> <br /> I will use platform like, Wordpress, Webflow, Elementor, and Shopify to develop the website complete with a CMS (content management system) that will allow you to edit/manage your website’s content without the need for a developer.</motion.p>
                    </div>
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2 }} className='steps__content'>
                    <div className='step'>
                        <motion.span custom={1} variants={stepsAnimation} className='step__number'>Step 05</motion.span>
                        <motion.h3 custom={2} variants={stepsAnimation} className='step__title'>Launching</motion.h3>
                    </div>
                    <div className='steps__texts'>
                        <motion.p custom={3} variants={stepsAnimation} className='step__text'><span>Testing:</span> Conduct thorough testing of the website, including functional testing, user testing, and performance testing. This ensures that the website works as intended and meets user expectations. <br /> <br /> <span>Launch:</span> Once the website has been thoroughly tested and approved, launch it to the public. This includes setting up hosting, domain registration, and any necessary DNS settings.</motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Steps