import React from 'react'
import cv from '../../assets/cv.pdf'
import { FaRegMessage } from "react-icons/fa6";

// import '../../index'
const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn2' href={cv} download >Download Catalog</a>
      <a href="#contact" className='btn3'><FaRegMessage/></a>
      
    </div>
  )
}

export default CTA