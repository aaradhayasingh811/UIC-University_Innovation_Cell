import React from 'react'
import './Contact.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  return (
    <div>
      <div className="container mx-auto" id="contact">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            University Innovation Cell comes under Institution Innovation council which focuses on Skill Developent.
          </p>

          <div className="info">
            <div className="information">
              {/* <i className="fas fa-map-marker-alt"></i> &nbsp &nbsp */}

              <p>Madan Mohan Malaviya University of Technology, Gorakhpur</p>
            </div>
            <div className="information">
              {/* <i className="fas fa-envelope"></i> &nbsp &nbsp */}
              <p>uicmmmut@gmail.com</p>
            </div>
            {/* <div className="information">
              <i className="fas fa-phone"></i>&nbsp&nbsp
              <p>123-456-789</p>
            </div> */}
          </div>

          <div className="social-media">
            <p className=''>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <XIcon />
             </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="" autocomplete="off">
            <h3 className="title text-xl heading-white text-white">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
