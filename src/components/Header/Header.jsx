import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/master.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {

    return (
        <header>
            <div className="container header__container" id='home'>
                <h5 >Hello! My name is </h5>
                <h1>Isaac Miralles</h1>
                {/* <h5 className="text-light">Full Stack Developer</h5> */}
                <div className='wrapper'>
                    <h5 className='header__typing'>Full Stack Developer based in Madrid.</h5>
                </div>
                <CTA />
                <hr />

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