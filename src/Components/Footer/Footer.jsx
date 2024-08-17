import './Footer.scss'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__wrapper">
                <p>© 2023 All rights reserved.</p>
                <div className='footer__socials'>
                    <Link target='_blank' to={'https://www.instagram.com/_akbarov_a1'} className='footer__social'><FaInstagram /></Link>
                    <Link target='_blank' to={'https://www.linkedin.com/in/abubakir-akbarov-9069b6312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'} className='footer__social'><FaLinkedinIn /></Link>
                    <Link target='_blank' to={'https://t.me/BB_PL_AW'} className='footer__social'><FaTelegramPlane /></Link>
                    <Link target='_blank' to={'mailto:aakbarov209@gmail.com'} className='footer__social'><SiGmail /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer