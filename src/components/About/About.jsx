import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg' // Adjust the path as necessary
import tey from '../../assets/tey.jpg' // Adjust the path as necessary
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>

            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={tey} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                        I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development began with a fascination for technology and a desire to bring ideas to life through code. I have honed my skills in HTML, CSS, JavaScript, and various frameworks, allowing me to build user-friendly interfaces and seamless user experiences. 

                    </p>
                    <p>
                        my approach to web development is centered around understanding user needs and delivering solutions that are not only functional but also visually appealing. I thrive on challenges and enjoy collaborating with teams to tackle complex problems. My goal is to continuously learn and adapt in this ever-evolving field, ensuring that I stay at the forefront of web development trends and technologies.
                    </p>
                </div>
                 <div className="about-skills">

                    <div className="about-skill"><p> html & css</p><hr style={{width: "50%"}} />  </div>

                    <div className="about-skill"><p> react js</p><hr style={{width: "70%"}} />  </div>

                    <div className="about-skill"><p>  JavaScript</p><hr style={{width: "60%"}} />  </div>

                    <div className="about-skill"><p> next js</p><hr style={{width: "50%"}} />  </div>
                 </div>


            </div>
        </div>
        <div className="about-achievements">
            <div className="about-actievement">
                 <h1>1 +</h1>
                 <p>Years iof experience</p>
            </div>
            <hr />
            <div className="about-actievement">
                 <h1>9+</h1>
                 <p>projects completed</p>
            </div>
            <hr />
            <div className="about-actievement">
                 <h1>1+</h1>
                 <p>happy cliens</p>
            </div>

        </div>


    </div>
  )
}

export default About