import React from 'react';
import './Experience.css';
import {BiBadgeCheck} from 'react-icons/bi';

const Experience = () =>
{
    return(
        <section id="experience">
            <h5>My Skills and</h5>
            <h2 className="accent">Work Experience</h2>
            <div className="container experience-container">
                <div className="experience-design">
                    <h3>Art and Design</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Adobe CC Suite</h4>
                                <small className="text-light">Varying Experience</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Clip Studio Paint</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Paint and Sculpture</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>HTML, CSS, and JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Branding and Marketing</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience-other">
                    <h3>Coding and More</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>SQL and NoSQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Team Management</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Customer Service</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BiBadgeCheck className="experience-details-icon"/>
                            <div>
                                <h4>Microsoft Office</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience;