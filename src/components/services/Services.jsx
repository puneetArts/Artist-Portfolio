import React from 'react'
import './Services.css'
import { IoMdCheckmark } from "react-icons/io";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services Menu</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h2>Web Development</h2>
          </div>
          <ul className='service__list'>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>UI/UX Designing</p>
            </li>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>Frontend Development</p>
            </li>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>Full Stack Web Development</p>
            </li>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>Portfolio/ Blog Websites</p>
            </li>

          </ul>
        </article>

        {/* end of ui/ux */}

        <article className='service'>
          <div className="service__head">
            <h2>Art</h2>
          </div>
          <ul className='service__list'>
            <li className='list_items'><IoMdCheckmark className='service__list-icon' />
              <div><h4>Portrait (Bust/ Half/ Full Body)</h4>
                <small className='text-light'>Charcoal + Graphite</small></div>
            </li>

            <li className='list_items'><IoMdCheckmark className='service__list-icon' />
              <div><h4>Couple/Family Portrait(Bust/ Half/ Full Body)</h4>
                <small className='text-light'>Charcoal + Graphite</small></div>
            </li>
            <li className='list_items'><IoMdCheckmark className='service__list-icon' />
              <div><h4>Canvas Painting</h4>
                <small className='text-light'>Acrylic + Oil</small></div>
            </li>
            <li className='list_items'><IoMdCheckmark className='service__list-icon' />
              <p>Character Design</p>
            </li>
            <li className='list_items'><IoMdCheckmark className='service__list-icon' />
              <div><h4>Concept Art</h4>
              </div>
            </li>



          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h2>Other Services</h2>
          </div>
          <ul className='service__list'>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>Social Media Illustration</p>
            </li>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>Logo & Branding</p>
            </li>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>Video Editing</p>
            </li>
            <li><IoMdCheckmark className='service__list-icon' />
              <p>Content Writing</p>
            </li>


          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services