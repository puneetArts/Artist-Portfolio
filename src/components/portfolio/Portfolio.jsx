import React, { useState } from 'react'
import './Portfolio.css'
import IMG from '../../assets/port2.jpg.webp';
import IMG2 from '../../assets/port3.jpg';
import IMG3 from '../../assets/port4.jpg';
import IMG4 from '../../assets/port5.jpg.webp';
import IMG16 from '../../assets/port16.jpg';
import IMG6 from '../../assets/port7.jpg';
import IMG7 from '../../assets/port8.jpg';
import IMG8 from '../../assets/port10.jpg';
import IMG9 from '../../assets/port11.jpg.webp';
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";


// data array
const data=[
  {
    id:1,
    image:IMG,
    title:'Graphite Portrait',
    insta_view:"https://www.instagram.com/p/CyusbC7tc7v/?igsh=eDA4ZnhneXZ0NTZ2",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:2,
    image:IMG2,
    title:'Charcoal Artwork',
    insta_view:"https://www.instagram.com/p/Cy-m8k8NZl6/?igsh=N2NqbTNoZTdmZWVh",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:3,
    image:IMG3,
    title:'Rohit Sharma  Portrait',
    insta_view:"https://www.instagram.com/p/CzQqzNDyvZs/?igsh=M3M1NnJmbHJxMDFx",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:4,
    image:IMG4,
    title:'Charcoal Artwork',
    insta_view:"https://www.instagram.com/p/Cza0KXANtjT/?igsh=MW5zNGp4M3hibHk5OQ==",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:6,
    image:IMG6,
    title:'Figure Drawing',
    insta_view:"https://www.instagram.com/reel/C0BRmCVtxT4/?igsh=MWZwODBqcWdqamJ5aQ==",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:7,
    image:IMG7,
    title:'Custom Graphite',
    insta_view:"https://www.instagram.com/p/C0n7bF-t59P/?igsh=dWpmaXhwZzdma283",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:8,
    image:IMG8,
    title:'Graphite Portrait',
    insta_view:"https://www.instagram.com/p/C1B64z0So81/?igsh=MW85ZXJ2NWpkdDltdg==",
    demo:"http://dribble.com/Alien_pixels"
  },
  {
    id:8,
    image:IMG9,
    title:'Charcoal Portrait',
    insta_view:"https://www.instagram.com/p/C1MCAECSsww/?igsh=ejE4c2hmOXR1a25q",
    demo:"http://dribble.com/Alien_pixels"
  }
  
]

const Portfolio = () => {
   const [bookmarked, setBookmarked] = useState([]);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title, insta_view,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
             <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta' >
            <a href={insta_view} className='btn btn-primary' target='_blank'>View on Instagram</a>
          
          </div>
          <button
              className={`bookmark-btn ${bookmarked.includes(id) ? 'bookmarked' : ''}`}
              onClick={() => toggleBookmark(id)}
              aria-label="Bookmark this project"
            >
              {bookmarked.includes(id) ? <FaBookmark /> : <FaRegBookmark />}
            </button>
        </article>
            )
          })
        }
        
        
      </div>
    </section>
  )
}

export default Portfolio

// <div className="container portfolio__container">
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//         <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//              <img src={IMG} alt='IMG1'/>
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta' >
//             <a href="http://github.com" className='btn' target='_blank'>Github</a>
//           <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
        
//       </div>