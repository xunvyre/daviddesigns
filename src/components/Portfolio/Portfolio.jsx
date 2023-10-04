import React from 'react';
import spSP from '../../assets/sleepSpaceBG.png';
import newJour from '../../assets/journify-new-journal.png';
import tarot from '../../assets/ambiguous copy.png';
import wAct from '../../assets/well-actually.jpg';
import fore from '../../assets/forecaster.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './Portfolio.css';

// import required modules
import { Navigation } from "swiper";

const data =
[
  {
    id: 1,
    image: tarot,
    alt: "A tarot-card style illustration of a charr from GW2.",
    title: "David Designs Things",
    desc: "Art and Design Portfolio",
    github: "#portfolio",
    demo: "https://daviddesignsthings.myportfolio.com/",
  },
  {
    id: 2,
    image: newJour,
    alt: "A stylized pencil on a textured white background.",
    title: "JOURNIFY",
    desc: "Node.js, MySQL, MVC",
    github: "https://github.com/xunvyre/journify",
    demo: "Offline",
  },
  {
    id: 3,
    image: wAct,
    alt: "A screenshot of a blogging website styled after Windows 95.",
    title: "Well, Actually",
    desc: "HTML, CSS, Node.js",
    github: "https://github.com/xunvyre/tech-blogging",
    demo: "Offline",
  },
  {
    id: 4,
    image: spSP,
    alt: "A digital painting of a small city with a large galaxy background.",
    title: "sleepSpace",
    desc: "HTML, CSS, JS",
    github: "https://github.com/xunvyre/project-sleepSpace",
    demo: "https://xunvyre.github.io/project-sleepSpace/",
  },
  {
    id: 5,
    image: fore,
    alt: "A screenshot of a browser-based weather forcasing app.",
    title: "Forecaster",
    desc: "Server-Side API",
    github: "https://github.com/xunvyre/forecaster",
    demo: "https://xunvyre.github.io/forecaster/",
  }
];

const Portfolio = () =>
{
    return (
      <section id="portfolio">
          <h5>A Collection of Works</h5>
          <h2 className="accent">My Portfolio</h2>
          <Swiper 
            navigation={true}
            modules={[Navigation]}
            slidesPerView='auto'
            spaceBetween={10}
            className="container portfolio-container mySwiper"
          >
              {
                data.map(({id, image, alt, title, desc, github, demo}) =>
                {
                  return(
                    <SwiperSlide key={id} className="portfolio-item">
                        <div className="portfolio-item-img">
                            <img src={image} alt={alt}/>
                        </div>
                        <h3>{title}</h3>
                        <small className="text-light">{desc}</small>
                        <div className="portfolio-item-btns">
                          <a href={github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                          <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary">Website</a>
                        </div>
                    </SwiperSlide>
                  )
                })
              }
          </Swiper>
      </section>
    )
};

export default Portfolio;