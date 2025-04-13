import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg' // Adjust the path as necessary
import mail_icon from '../../assets/mail_icon.svg' // Adjust the path as necessary
import call_icon from '../../assets/call_icon.svg' // Adjust the path as necessary
import Location_icon from '../../assets/Location_icon.svg' // Adjust the path as necessary

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a59cbe2f-8dda-47ea-af5d-dba0ce2dac07");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>get in touch</h1>
                <img src={theme_pattern} alt="" />

            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>let's talk</h1>
                    <p>
                        I'm currently looking for new opportunities, and I'm open to freelance work. If you have a project in mind or just want to chat, feel free to reach out!

                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>Mengsophai7799@gmail.com</p>


                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+855 16314357</p>

                        </div>
                        <div className="contact-detail">
                            <img src={Location_icon} alt="" /> <p> Kh, cambodia</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" id="name" />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" id="email" />

                    <label htmlFor="message">Write Your Message</label>
                    <textarea name="message" id="message" rows="8" placeholder="Enter your message"></textarea>

                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>

            </div>

        </div>
    )
}

export default Contact