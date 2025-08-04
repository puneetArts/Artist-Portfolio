import React from 'react'
import './Experience.css'
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Experience = () => {
  return (
        <section id='experience'>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
          <div className="container experience__container">
            <div className="experience__frontend">
               <h3><b>Web Development</b></h3>
               <h5>Frontend +  Backend</h5>
               <div className="experience__content">
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>HTML</h4>
                 <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>CSS</h4>
                 <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Javascript</h4>
                 <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Tailwind</h4>
                 <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>React</h4>
                 <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>NodeJs</h4>
                 <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>ExpressJS</h4>
                 <small className='text-light'>Begginer</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>MongoDB</h4>
                 <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>SQL</h4>
                 <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Python</h4>
                 <small className='text-light'>Experienced</small></div>
                </article>
               </div>
            </div>
            <div className="experience__backend">
              <h3><b>Art</b></h3>
               <div className="experience__content">
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Realistic Portraits</h4>
                 <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Painting</h4>
                 <small className='text-light'>Experienced</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Video/Photo Editing</h4>
                 <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Illustration</h4>
                 <small className='text-light'>Intermediate</small></div>
                </article>
                <article className='experience__details'>
                 <IoShieldCheckmarkSharp className='experience__details-icon'/>
                 <div><h4>Semi-realistic Sketches</h4>
                 <small className='text-light'>Experienced</small></div>
                </article>
               </div>
            </div>
          </div>
        </section>

  )
}

export default Experience