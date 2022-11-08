import React from 'react';
import './About.css';
import ME from '../../assets/guinea-pig.jpg';
import {BiBookmarkHeart} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {TbBrush} from 'react-icons/tb';

const About = () =>
{
    return (
        <section id="about">
            <h5>The Person Behind the Screen</h5>
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <img src={ME} alt="A person with glasses looking up toward the camera." />
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <BiBookmarkHeart className="about-icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years Freelance</small>
                        </article>
                        <article className="about-card">
                            <RiServiceLine className="about-icon"/>
                            <h5>Programs</h5> 
                            <small>Photoshop to SQL</small>
                        </article>
                        <article className="about-card">
                            <TbBrush className="about-icon"/>
                            <h5>Portfolio</h5>
                            <small>Sketches to Web</small>
                        </article>
                    </div>
                    <p>
                        I started as a classically trained artist, then took it digital with graphic design, and now I'm a full stack developer. 
                        When I first started doodling on my homework in gradeschool, I never thought I'd end up coding my own portfolio. 
                        You never know where life will take you!
                        <br /><br />
                        I have a passion for crisp lines, tiny sculptures, clean code, and native wildlife. 
                        In addition to the color pink, I draw influence from a family history in Computer Science, growing up with Disney and Studio Ghibli, and my love for nature.
                        <br /><br />
                        I currently reside in sunny Florida with my best friend, nine fat guinea pigs, and our expanding collection of fish. 
                        When I'm not working or creating, I love to unwind with good food, tea, and video games. 
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's chat sometime!</a>
                </div>
            </div>
        </section>
    )
};

export default About;