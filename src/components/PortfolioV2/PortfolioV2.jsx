import React, { useEffect } from 'react'
import './PortfolioV2.css'
import IMG1 from '../../assets/reduc.png'
import IMG2 from '../../assets/zombif.png'
import IMG3 from '../../assets/portfolio3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FiGithub } from 'react-icons/fi'
import { CgMediaLive } from 'react-icons/cg'
import { BsFolderCheck } from 'react-icons/bs'




const PortfolioV2 = () => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, []);


  return (
    <section id='portfolio' data-aos='fade-up'>
      <h5>Some things I've build</h5>
      <h2><span className='title-list'>03.</span> Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item" data-aos='zoom-in-up'>
          <div className='portfolio__icons'>
            <BsFolderCheck />
          </div>
          <div className="portfolio__item-text">
            <h3>Re_educ Courses Web App</h3>
            <span>SPA designed as an online learning platform. Conditional rendering based on roles, search bar and search by category, courses and profesional ratings & direct payment method are some of its functionalities. </span>
          </div>
          <div className="portfolio__tech">
            <p>ReactJS |  HTML5 | CSS3 | Javascript | Express | NodeJS | MongoDB | Mongoose | Stripe </p>
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gao83/re_educ-client" target='_blank' rel="noreferrer" ><FiGithub /></a>
            <a href="https://github.com/Gao83/re_educ-server" target='_blank' rel="noreferrer" ><FiGithub /></a>
            <a href="https://re-educ.netlify.app/" target='_blank' rel="noreferrer" ><CgMediaLive /></a>
          </div>
        </article>

        <article className="portfolio__item" data-aos='zoom-in-up'>
          <div className='portfolio__icons'>
            <BsFolderCheck />
          </div>
          <div className="portfolio__item-text">
            <h3>Restaurants Road</h3>
            <span>Find the best roadside restaurants posted by the users using google places, rate them and add many more. Google places API integration, restaurant comments and ratings. </span>
          </div>
          <div className="portfolio__tech">
            <p>HTML5 | CSS3 | JavaScript | Express.js | Node.js | MongoDB | GOOGLE API | HBS | Bootstrap v5.0 | Mongoose </p>
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/alejandroMazas/Road-Restaurants" target='_blank' rel="noreferrer" ><FiGithub /></a>
          </div>
        </article>

        <article className="portfolio__item" data-aos='zoom-in-up'>
          <div className='portfolio__icons'>
            <BsFolderCheck />
          </div>
          <div className="portfolio__item-text">
            <h3>Zombies Game App</h3>
            <span>Classical zombies survivor game developed with Canvas and DOM manipulation. </span>
          </div>
          <div className="portfolio__tech">
            <p>HTML5 | CSS3 | JavaScript | Canvas</p>
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Gao83/Zombies-Game" target='_blank' rel="noreferrer" ><FiGithub /></a>
            <a href="https://gao83.github.io/Zombies-Game/index/" target='_blank' rel="noreferrer" ><CgMediaLive /></a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default PortfolioV2