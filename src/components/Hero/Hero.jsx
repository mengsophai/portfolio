import React, { useEffect } from 'react';
import './Hero.css';
import phaixtey from '../../assets/phaixtey.jpg';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import DownloadButton from '../Download/DownloadButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

  useEffect(() => {
    const options = {
      strings: ["I'm a Web Developer "],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".animation", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='home' className="hero">
      <div className="image-wrapper">
        <motion.img
          src={phaixtey}
          alt="Hero"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />
      </div>
      <DownloadButton />

      <h1><span className='animation'></span></h1>
      <div className='phaixtey'>

      </div>


      <p>
        I'm a web developer from Phnom Penh with a passion for creating beautiful and functional websites.
        I love to learn new technologies and improve my skills.
      </p>

      <div className="hero-action">
        <button className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>

        <button className="hero-resume">My resume</button>


      </div>



    </div>

  );
};

export default Hero;
