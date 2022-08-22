import React, {useEffect} from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/reduc.png'
import IMG2 from '../../assets/zombif.png'
import IMG3 from '../../assets/portfolio3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Portfolio = () => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, []);


  return (
    <section id='portfolio' data-aos='fade-up'>
      <h5>Some things I've build</h5>
      <h2><span className='title-list'>03.</span> Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item" data-aos='zoom-in-up'>
          <div className="portfolio__item-image">
            <div>
              <img src={IMG1} alt="" />
            </div>
            <h3>Re_educ Courses Web App</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/" target='_blank' rel="noreferrer" className='btn'>Github</a>
              <a href="https://dribbble.com/" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item" data-aos='zoom-in-up'>
          <div className="portfolio__item-image">
            <div>
              <img src={IMG2} alt="" />
            </div>
            <h3>Zombies Canvas Game</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/" target='_blank' rel="noreferrer" className='btn'>Github</a>
              <a href="https://dribbble.com/" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item" data-aos='zoom-in-up'>
          <div className="portfolio__item-image">
            <div>
              <img src={IMG3} alt="" />
            </div>
            <h3>This is a portfolio title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/" target='_blank' rel="noreferrer" className='btn'>Github</a>
              <a href="https://dribbble.com/" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
            </div> 
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio