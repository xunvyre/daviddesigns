import React from 'react';
import CV from '../../assets/Victoria David.pdf';

const Buttons = () =>
{
  return(
    <div className="cta">
        <a href={CV} target="_blank" rel="noreferrer" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
};

export default Buttons;