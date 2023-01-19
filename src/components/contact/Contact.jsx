import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rai_tayamul@hotmail.com</h5>
            <a href="mailto: rai_tayamul@hotmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          {/* <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>07948956381</h5>
            <a href="https://api.whatsapp.com/send?phone=+447948956381" target="_blank">Send a message</a>
          </article> */}
        </div> 
        <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>07940024769</h5>
            <a href="https://api.whatsapp.com/send?phone=+447948956381" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          {/* <form action="">
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form> */}
        </div>
    </section>
  )
}

export default Contact;