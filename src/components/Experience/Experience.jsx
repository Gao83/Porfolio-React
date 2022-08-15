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
      <h2><span className='title-list'>02.</span> My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Experience Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <DiBootstrap className='experience__details-icon'/>
              <div>
                <h4>Boostrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Experience Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className='experience__details-icon'/>
              <div>
                <h4>Express JS</h4>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience