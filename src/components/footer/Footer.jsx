import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>TAYAMUL RAI</a>

        <ul className='permalinks'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about"> About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/tayamul-rai/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://twitter.com/Taya351" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a href="https://github.com/Tayamul" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; TAYAMUL's PORTFOLIO. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer