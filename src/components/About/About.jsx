import React, { useEffect } from 'react'
import './About.css'
import ME from '../../assets/Development-Frameworks-846x697-1.jpg'
import { BsTrophy } from 'react-icons/bs'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'


function About() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <section id='about' >

      <h5>Get to Know</h5>
      <h2> <span className='title-list'>01.</span> About Me </h2>


      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" className="about__me-image" />
        </div>
        <div className="about__content" data-aos='flip-up'>
          <div className='about__cards'>
            <article className="about__card">
              <BsTrophy className="about__icon" />
              <h5>Experience</h5>
              <small>Many years working in hospitality & food industry</small>
            </article>
            <article className="about__card">
              <BsFillPeopleFill className="about__icon" />
              <h5>Soft Skills</h5>
              <small> Communication Teamwork Adaptability <br/> Problem Solving Integrity Perseverance Proactivity</small>

            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Languages</h5>
              <small>Spanish (native) Catalan (native) English (advanced) French (basic)</small>
            </article>
          </div>

          <p>I am a <strong>  Junior Full Stack Developer </strong>with Hotel Management and Sociology background and 15 years of experience in hospitality and food industry.</p>
          <p>The desire to <strong> reinvent myself </strong>along the motivation to learn and the curiosity that has accompanied me throughout my life, brought me to become a web developer.</p>
          <p>I intend to be considered, to be able to prove my worth as a frontend developer, continue to absorb knowledge and grow professionally as part of a team, and thus contribute my technical and personal skills. Also being able to give back to others that it is never too late and that with effort, perseverance, a certain adaptability and desire to learn something new, <strong> all change is possible. </strong></p>
          <a href="#contact" className='btn btn-primary'>Let´s talk</a>
        </div>
      </div>

    </section >
  )
}

export default About
