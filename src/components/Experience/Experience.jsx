import React from 'react'
import './Experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { DiBootstrap } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { GrNode } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Experience Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <IoLogoCss3 />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <DiBootstrap />
              <h4>Boostrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <IoLogoJavascript />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <GrReactjs />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Experience Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <SiMongodb />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <SiExpress />
              <h4>Express JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
           
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience