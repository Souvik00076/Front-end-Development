import React from 'react'
import logo from '../images/logo.png'

const Nav = () => {
  return (
    <div className='flex items-center relative  h-20 p-16'>
        <div className='flex space-x-4 absolute left-[10rem]'>
            <img src={logo} width={40} height={40}/>    
            <h1 className='text-gray-500 text-bold text-4xl'>AirSpace</h1>
        </div>    
        <div className='flex  space-x-4 absolute right-[10rem] text-gray-500'>
            <a>HOME</a>
            <a>PORTFOLIO</a>
            <a>SERVICE</a>
            <a>BLOG</a>
            <a>PAGES</a>
            <a>CONTACT</a>
        </div>
        
        </div>
  )
}
export default Nav
