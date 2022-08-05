import React from 'react'
import './Footer.css'
import { AiFillTwitterCircle, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className='footer__logo'>
        <p>PERSONAL PORTFOLIO</p>
      </div>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><AiFillFacebook /></a>
        <a href="https://twitter.com"><AiFillTwitterCircle/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>

      </div>
      <div className='footer__designed'>
        <p>-  Designed & Build by Gao83  -</p>
      </div>

    </footer>
  )
}

export default Footer