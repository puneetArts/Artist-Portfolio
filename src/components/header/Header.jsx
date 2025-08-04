import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/meD3.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h4> Hey there! Welcome to</h4>
          <h1><b>Puneet Arts</b></h1>
          <h5 className='text-light'>Web Developer | Artist</h5>
          <CTA/>
          <HeaderSocial/>
          <div className='me'>
            <img src={ME} alt='me' className='me-pic'></img>
          </div>
          <a href='#contact' className='scroll__down' > Scroll Down</a>
        </div>
    </header>
  )
}

export default Header