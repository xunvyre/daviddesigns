import {React, useState} from 'react';
import './Nav.css';
import {BiHomeHeart, BiHeart, BiBookmarkHeart} from 'react-icons/bi';
import {RiServiceLine, RiChatHeartLine} from 'react-icons/ri';
import {TbBrush} from 'react-icons/tb';

const Nav = () =>
{
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav("#home")}className={activeNav === "#home" ? "active" : ""}><BiHomeHeart/></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiHeart/></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBookmarkHeart/></a>
            <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine/></a>
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><TbBrush/></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><RiChatHeartLine/></a>
        </nav>
    )
};

export default Nav;