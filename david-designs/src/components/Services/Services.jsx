import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () =>
{
    return(
        <section id="services">
            <h5>What Can I Do For You?</h5>
            <h2>Services</h2>
            <div className="container services-container">
                <article className="service">
                    <div className="service-header">
                        <h3>Graphic Design</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Extensive Knowledge of Adobe Photoshop</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Branding and Marketing Experience</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Assistance from Mockups to Print-Ready Documents</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Web Layouts, Print Ads, Illustrations, and More!</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service-header">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Specialized in Front-End Design: HTML, CSS, JS</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Sketches, Wireframes, and Mockups</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Database Creation and Maintenance</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Featuring Custom Assets and Edited Photos!</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service-header">
                        <h3>Art by Commission</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Digital and Traditional Media</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Per-Request Design Consultation</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Character Concepts and References</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>From Sketches to Sculptures</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service-header">
                        <h3>Other Services</h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Data Organization and Management</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Editing Services from Outlines to Novels</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Basic Tech Maintenance and Cleaning</p>
                        </li>
                        <li>
                            <BiCheck className="service-list-icon"/>
                            <p>Art Student Mentorships, Any Age!</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
};

export default Services;