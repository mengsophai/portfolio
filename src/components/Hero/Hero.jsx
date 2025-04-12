import React from 'react';
import './Hero.css';
import phaixtey from '../../assets/phaixtey.jpg';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <div className="hero">
  
      <div className="image-wrapper">
        <motion.img
          src={phaixtey}
          alt="Hero"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />
      </div>


      
      <div class="card">code</div>





      <h1>
      
        <span>I'm Meng Sophai,</span> web developer based in KH.
      </h1>
      <p>
        I'm a web developer from Phnom Penh with a passion for creating beautiful and functional websites.
        I love to learn new technologies and improve my skills.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
