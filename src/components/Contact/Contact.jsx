import React from 'react';
import './Contact.css';
import {BiMailSend, BiPhone} from 'react-icons/bi';
import {TbBrandMessenger} from 'react-icons/tb';

const Contact = () =>
{
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2 className="accent">Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <div className="contact-option">
                        <BiMailSend className="contact-option-icon"/>
                        <h4>Email</h4>
                        <h5 className="text-light">victoria@thedavids.us</h5>
                        <a href="mailto:victoria@thedavids.us" target="_blank" rel="noreferrer">Send a Message</a>
                    </div>
                    <div className="contact-option">
                        <TbBrandMessenger className="contact-option-icon"/>
                        <h4>Messenger</h4>
                        <h5 className="text-light">Victoria David</h5>
                        <a href="https://m.me/rebeldraconis" target="_blank" rel="noreferrer">Send a Message</a>
                    </div>
                    <div className="contact-option">
                        <BiPhone className="contact-option-icon"/>
                        <h4>Text or Call</h4>
                        <h5 className="text-light">904-556-0330</h5>
                        <a href="tel:9045560330" target="_blank" rel="noreferrer">Send a Message</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;