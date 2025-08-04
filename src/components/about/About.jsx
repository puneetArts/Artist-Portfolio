import React from 'react'
import './About.css'
import Me from '../../assets/A51.png'
import { TbAwardFilled } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAwardFilled className='about__icon' />
              <h5>Experience</h5>
              <small>5+ years</small>


            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Clients</small>


            </article>
            <article className='about__card'>
              <MdOutlineFolderCopy className='about__icon' />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>

          <p>A creative artist with a passion for sketching and web design. I enjoy blending art with digital design to create visually engaging and user-friendly websites. Currently developing my skills further in web design while continuing to explore new ways to express creativity through sketches and digital media. Always open to learning and growing in both artistic and tech-driven spaces.</p>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

        </div>
      </div>
    </section>

  )
}

export default About