import React, { useEffect } from 'react'
import './Contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {

  useEffect(() => {
    Aos.init({ once: true, duration: 1000  })
  }, []);
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xxhyrvf', 'template_nnb336o', form.current, 'EqkWOgtVnZ8pvi5Kw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
    alert('Message sent')
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2><span className='title-list'>04.</span> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>isaacmiralles@gmail.com</h5>
            <a href="mailto:isaacmiralles@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+34644133042</h5>
            <a href="https://api.whatsapp.com/send?phone=34644133042" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter your name' required />
          <input type="email" name="email" placeholder='Enter your email' required />
          <textarea name="message" rows="7" placeholder='Type your message' required></textarea>
          <button type='submit' >Send</button>
        </form>
      </div>
      <hr />
    </section>
  )
}

export default Contact