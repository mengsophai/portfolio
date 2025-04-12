import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png' // Adjust the path as necessary
import user_icon from '../../assets/user_icon.svg' // Adjust the path as necessary                                          

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={Logo} alt="" />
                <p> 
                    I'm a web developer from phnom penh with a passion for creating beautiful and functional websites. I love to learn new technologies and improve my skills.
                </p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                 <div className="footer-subscribe">subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'> 2025 Mengsophai .all rights </p>
            <div className="footer-bottom-right">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Contact</p>
            </div>
        </div>

    </div>
  )
}

export default Footer