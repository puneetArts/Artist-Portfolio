import React from 'react'
import './Contact.css'

import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Mail sent successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>puneetsingh91100@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/?view=cm&to=puneetsingh91100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Send a mail</b>
            </a>
          </article>
          <article className="contact__option">
            <FaInstagram className='contact__option-icon'/>
            <h4>Connect on Instagram</h4>
            <h5>puneetarts51</h5>
            <a
              href="https://instagram.com/puneetarts51"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>View Profile</b>
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+9193********</h5>
            <a href="https://wa.me/919936460308"
              target="_blank"
              rel="noopener noreferrer"><b>Send a message</b></a>
            {/* "https://wa.me/919336809720" */}
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
//egator