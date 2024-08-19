import './Nav.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className='nav' data-open={open}>
      <div className="nav__wrapper" data-open={open}>
        <div className='nav__top'>
          <h3 className='nav__title'>Abubakir.</h3>
          <div data-open={open} className='nav__actions' onClick={() => setOpen(!open)}>
            <GiHamburgerMenu className='hamburger-menu' />
          </div>
        </div>
        <div className='nav__bottom'>
            <div className='nav__bottom-content'>
              <h2>Hi, I am Abubakir! I am a <br /> Front-end Developer <br /> based on Tashkent.</h2>
              <ul className='nav__bottom-about'>
                  <li>Age - 16</li>
                  <li>Country - Tashkent</li>
                  <li><Link target='_blank' to={'https://t.me/BB_PL_AW'} className='nav__bottom-link'>Telegram - @BB_PL_AW</Link></li>
                  <li><Link target='_blank' to={'mailto:aakbarov209@gmail.com'} className='nav__bottom-link'>Email - aakbarov209@gmail.com</Link></li>
              </ul>
              <div className='nav__bottom-socials'>
                  <Link target='_blank' to={'https://www.instagram.com/_akbarov_a1'} className='nav__bottom-social'><FaInstagram/></Link>
                  <Link target='_blank' to={'https://www.linkedin.com/in/abubakir-akbarov-9069b6312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} className='nav__bottom-social'><FaLinkedinIn/></Link>
              </div>
            </div>
            <ul className='nav__bottom-links'>
              <li><Link onClick={() => {setOpen(!open); window.scrollTo(0, 0)}} style={pathname === '/' ? {color: '#dedede'} : {color: '#a9a9a9'}} className='nav__link' to={'/'}>Home</Link></li>
              <li><Link onClick={() => {setOpen(!open); window.scrollTo(0, 0)}} style={pathname.includes('portfolio') ? {color: '#dedede'} : {color: '#a9a9a9'}} className='nav__link' to={'/portfolio'}>Portfolio</Link></li>
              <li><Link onClick={() => {setOpen(!open); window.scrollTo(0, 0)}} style={pathname.includes('process') ? {color: '#dedede'} : {color: '#a9a9a9'}} className='nav__link' to={'/process'}>Process</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav