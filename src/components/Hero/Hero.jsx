import React from 'react'
import './Hero.css'
import phaixtey from '../../assets/phaixtey.jpg' 
import { motion } from "framer-motion";// Adjust the path as necessary

const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="image-wrapper">
      <motion.img
        src={phaixtey}
        alt="Hero Image"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
      />
    </div>


        <h1> <span>i'm meng sophai,</span>  web-development based in kh.</h1>
        <p>I'm a web developer from phnom penh with a passion for creating beautiful and functional websites. I love to learn new technologies and improve my skills.</p>
         <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume"> My  resume</div>
         </div>
    </div>
  )
}

export default Hero