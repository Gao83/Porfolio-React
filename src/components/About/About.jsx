import React from 'react'
import './About.css'
import ME from '../../assets/master.jpg'
import { BsTrophy } from 'react-icons/bs'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'



function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" className="about__me-image" />

        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className="about__card">
              <BsTrophy className="about__icon" />
              <h5>Experience</h5>
              <small>Brand new in the labour market</small>
            </article>
            <article className="about__card">
              <BsFillPeopleFill className="about__icon" />
              <h5>Clients</h5>
              <small>300 +</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>100</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta, molestias provident quisquam omnis alias explicabo quas sapiente nihil odio magni velit ab incidunt, hic id possimus cum libero consectetur?</p>
          <a href="#contact" className='btn btn-primary'>Let´s talk</a>
        </div>
      </div>

    </section >
  )
}

export default About
