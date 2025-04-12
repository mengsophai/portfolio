import React from 'react';
import './Hero.css';
import phaixtey from '../../assets/phaixtey.jpg';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <div className="hero">
      <div className="framers">
        {['LOVE', 'Phai'].map((letter, index) => (
          <motion.div
            key={index}
            style={{
              width: 50,
              height: 50,
              padding: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
              background: 'linear-gradient(267deg, #Da7c25 0.36%, #b923e1 102.06%)',
              border: '4px solid #fff',
              margin: '20px auto',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["10%", "10%", "50%", "50%", "10%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {letter}
          </motion.div>
          

          
        ))}
       
      </div>  
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
