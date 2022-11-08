import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiIndeed} from 'react-icons/si';

const Socials = () =>
{
  return (
    <div className="header-socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://indeed.com" target="_blank" rel="noreferrer"><SiIndeed/></a>
    </div>
  )
}

export default Socials;