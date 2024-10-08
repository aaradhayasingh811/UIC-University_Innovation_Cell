import React from 'react'
import './Contact.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  return (
    <div>
      <div class="container" id="contact">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            University Innovation Cell comes under Institution Innovation council which focuses on Skill Developent.
          </p>

          <div class="info">
            <div class="information">
              {/* <i class="fas fa-map-marker-alt"></i> &nbsp &nbsp */}

              <p>Madan Mohan Malaviya University of Technology, Gorakhpur</p>
            </div>
            <div class="information">
              {/* <i class="fas fa-envelope"></i> &nbsp &nbsp */}
              <p>uicmmmut@gmail.com</p>
            </div>
            {/* <div class="information">
              <i class="fas fa-phone"></i>&nbsp&nbsp
              <p>123-456-789</p>
            </div> */}
          </div>

          <div class="social-media">
            <p className=''>Connect with us :</p>
            <div class="social-icons">
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

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="" autocomplete="off">
            <h3 class="title text-xl heading-white text-white">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
