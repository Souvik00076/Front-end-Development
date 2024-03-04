import React from 'react'
import abt from '../assets/about/img.png'
const About = () => {
  return (
    <div className='w-[80%] flex flex-col lg:flex-row mx-auto mt-24 mb-32'>
        <div className='lg:px-32  text-left' >
            <h2 className='h2 my-8'>We Create The Art Of Stylish Living Stylishly</h2>
            <p>It is a long established fact that the reader will be distracted by the readable
                content of a page when looking at its layouts
            </p>
        <div className='flex gap-2 items-center btn-primary w-[17rem] my-8 px-6 py-4 rounded-[15px] text-white '>
            <button>Get Free Estimation
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
        </div>
        </div>
        <img src={abt}/>
      
    </div>
  )
}

export default About
