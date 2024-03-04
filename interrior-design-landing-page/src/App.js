import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Steps from './components/Steps'
import About from './components/About'
import Swiper from './components/Swiper'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='mx-auto bg-grid bg-contain overflow-hidden'>
        <Nav/>
        <Hero/>
        <Steps/>
        <About/>
        <Swiper/>
        <Projects/>
    </div>
  )
}

export default App

//max-w-[1820px]
//max-w-[100%]
//max-w-16
//max-w-[2/5]