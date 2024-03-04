import React, { useState } from 'react'
import logo from '../assets/logo.svg'
const Nav = () => {
  const [isOpenNav,setIsOpenNav]=useState(false)
  const handleOnClick=(e)=>{
    setIsOpenNav(!isOpenNav)
  }
  return (
    <div className='h-[90px] flex items-center justify-between sticky md:justify-around '> 
      <img src={logo} alt='Logo Image'/>
      <nav>
          <ul className='flex flex-row gap-4'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Our work</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Nav



      /* 
       { !isOpenNav ?
        <svg width={48} height={48} onClick={handleOnClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(184,140,93,1)"><path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>
        :(
          <nav className='mt-[400px] z-40'>
          <ul className='flex flex-col gap-4'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Our work</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
        )      
      }*/