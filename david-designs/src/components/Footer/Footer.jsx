import React from 'react';
import './Footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {RiInstagramLine} from 'react-icons/ri';

const Footer = () =>
{
    return(
        <footer>
            <a href="#home" className="footer-logo accent">David Designs</a>
            <ul className="footer-socials">
                <li><a href="https://www.linkedin.com/in/victoria-david-a163b8161/" target="_blank" rel="noreferrer"><BsLinkedin/></a></li>
                <li><a href="https://github.com/xunvyre" target="_blank" rel="noreferrer"><BsGithub/></a></li>
                <li><a href="https://www.facebook.com/rebeldraconis" target="_blank" rel="noreferrer"><FaFacebookSquare/></a></li>
                <li><a href="https://www.instagram.com/xunvyre" target="_blank" rel="noreferrer"><RiInstagramLine/></a></li>
            </ul>
            <div className="footer-copyright">
                <small>&copy; XUNVYRE 2022, All Rights Reserved</small>
            </div>
        </footer>
    )
};

export default Footer;