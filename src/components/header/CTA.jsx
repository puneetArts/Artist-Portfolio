import React from 'react'
import cv from '../../assets/cv.pdf'
// import '../../index'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={cv} download className='btn'>Download Catalog</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA