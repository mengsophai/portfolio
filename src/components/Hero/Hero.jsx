import React, { useEffect } from 'react';
import './Hero.css';
import phaixtey from '../../assets/phaixtey.jpg';
import { motion } from 'framer-motion';

import DownloadButton from '../Download/DownloadButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  useEffect(() => {
    let typed;
    let isMounted = true;

    import('typed.js').then((module) => {
      if (isMounted) {
        const Typed = module.default;
        typed = new Typed('.animation', {
          strings: ["I'm a Web Developer", "I love building websites", "Let's build together!"],
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 1500,
          loop: true,
        });
      }
    });

    return () => {
      isMounted = false;
      if (typed) typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="hero">
      <div className="image-wrapper">
        <motion.img
          src={phaixtey}
          alt="Portrait of Phaixtey"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
        />
      </div>

      <DownloadButton />

      <h1 className="hero-title">
        Hi, <span className="animation" aria-label="Animated typing text"></span>
      </h1>

      <div className="phaixtey"></div>

      <p className="hero-description">
        I'm a web developer from Phnom Penh with a passion for creating beautiful and functional websites.
        I love to learn new technologies and improve my skills.
      </p>

      <div className="hero-action">
        <button className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </button>
        <button className="hero-resume">My resume</button>
      </div>
    </div>
  );
};

export default Hero;
