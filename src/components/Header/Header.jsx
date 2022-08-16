import React from 'react'
import './Header.css'
import CTA from './CTA'
// import ME from '../../assets/master.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {

    return (
        <header>
            <div className="container header__container" id='home'>
                <h5>Hello! My name is </h5>
                <h1>Isaac Miralles</h1>
                {/* <h5 className="text-light">Full Stack Developer</h5> */}
                <div className='wrapper'>
                    <h5 className='header__typing'>Jr. Full Stack Developer.</h5>
                </div>
                <div className='header__description'>
                    <p>Tech lover, food enthusiast & passionate for videogames. I embrace innovation by creating a culture of inclusiveness and social respect. Ready to dive into Web Developement World. My background: food industry. My moment: achive more knowleadge & experience in this field. My goal: I have many... but to become part of devs comunity is one of them. You are welcome to check some of my work.</p>
                </div>
                <CTA />

                {/* <div className="me">
                    <img src='' alt="me" />
                </div> */}
                <a href="#contact" className='scroll__down'>isaacmiralles@gmail.com </a>
                <HeaderSocials />

            </div>
        </header>
    )
}

export default Header