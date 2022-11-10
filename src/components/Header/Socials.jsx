import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {RiInstagramLine} from 'react-icons/ri';

const Socials = () =>
{
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/victoria-david-a163b8161/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/xunvyre" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/rebeldraconis" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/xunvyre" target="_blank" rel="noreferrer"><RiInstagramLine/></a>
    </div>
  )
}

export default Socials;