import React, { useEffect } from 'react'
import './Experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { DiBootstrap } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { GrNode } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Experience = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2><span className='title-list'>02.</span> My Experience</h2>

      <div className="container experience__container" >
        <div className="experience__frontend" data-aos='fade-up-right'>
          <h3>Experience Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
              </div>
            </article>
            <article className="experience__details">
              <DiBootstrap className='experience__details-icon' />
              <div>
                <h4>Boostrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend" data-aos='fade-up-left'>
          <h3>Experience Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>ExpressJS</h4>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience