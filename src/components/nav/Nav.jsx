import React, { useState } from 'react'
import './Nav.css'
import { GoHome } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";
import { LuMessageCirclePlus } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";


const Nav = () => {

  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')}  className={activeNav==='#' ? 'active' : ''}><GoHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')}  className={activeNav==='#about' ? 'active' : ''}><HiOutlineUser /></a>
      <a href='#experience'  onClick={()=> setActiveNav('#experience')}  className={activeNav==='#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#services'onClick={()=> setActiveNav('#services')}  className={activeNav==='#services' ? 'active' : ''} ><RiServiceLine /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active' : ''}><LuMessageCirclePlus /></a>

    </nav>
  )
}

export default Nav