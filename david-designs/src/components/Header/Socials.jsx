import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiIndeed} from 'react-icons/si';

const Socials = () =>
{
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/victoria-david-a163b8161/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="hhttps://github.com/xunvyre" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://indeed.com" target="_blank" rel="noreferrer"><SiIndeed/></a>
    </div>
  )
}

export default Socials;