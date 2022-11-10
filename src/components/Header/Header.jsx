import React from 'react';
import './Header.css';
import Buttons from './Buttons';
import PFP from '../../assets/pfp.jpg';
import Socials from './Socials';

const Header = () =>
{
    return (
        <header id="home">
            <div className="container header-container">
                <h1>Victoria David</h1>
                <h5 className="text-light">
                    Illustrator, Graphic Designer, Full Stack Developer
                </h5>
                <Buttons/>
                <Socials/>
                <div className="pfp">
                    <img src={PFP} alt="A person with glasses looking up toward the camera." />
                </div>
            </div>
        </header>
    )
};

export default Header;