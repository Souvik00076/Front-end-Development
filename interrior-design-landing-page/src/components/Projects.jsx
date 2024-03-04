import React from 'react'
import _1 from '../assets/brands/01.svg'
import _2 from '../assets/brands/02.svg'
import _3 from '../assets/brands/03.svg'
import _4 from '../assets/brands/04.svg'
import w1 from '../assets/work/01.png'
import w2 from '../assets/work/02.png'
import w3 from '../assets/work/03.png'
import w4 from '../assets/work/04.png'
const Projects = () => {
  return (
    <div className='w-[70%] lg:w-[80%] flex flex-col container mx-auto '>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-0 gap-20 items-center'>
            <img src={_1}  />
            <img src={_2} />
            <img src={_3} />
            <img src={_4} />
        </div>

        <div className='lg:w-[80%] w-[100%] mx-auto mt-52'>
            <h1 className='h1 text-center mb-8'>Follow Our Projects</h1>
            <p className='text-center'>It is a long established fact that a reader will be distracted by the of readable
                content of a page when looking at its layout points.
            </p>
        </div>

        <div className='my-16 grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8 '>
            <div>
                <img src={w1}/>
                <div className='py-4 lg:pr-8 flex flex-row justify-between items-center'>
                    <div>
                        <h3 className='h4 lg:h3'>Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                    </div>
                    
                 <svg className='bg-accent rounded-full lg:w-12 lg:h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
               
                </div>
                
            </div>
            <div>
                <img src={w1}/>
                <div className='py-4 lg:pr-8 flex flex-row justify-between items-center'>
                    <div>
                        <h3 className='h4 lg:h3'>Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                    </div>
                    
                 <svg className='bg-accent rounded-full lg:w-12 lg:h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
               
                </div>
                
            </div>
            <div>
                <img src={w1}/>
                <div className='py-4 lg:pr-8 flex flex-row justify-between items-center'>
                    <div>
                        <h3 className='h4 lg:h3'>Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                    </div>
                    
                 <svg className='bg-accent rounded-full lg:w-12 lg:h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
               
                </div>
                
            </div>
            <div>
                <img src={w1}/>
                <div className='py-4 lg:pr-8 flex flex-row justify-between items-center'>
                    <div>
                        <h3 className='h4 lg:h3'>Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                    </div>
                    
                 <svg className='bg-accent rounded-full lg:w-12 lg:h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
               
                </div>
                
            </div>
           
        </div>

      
    </div>
  )
}

export default Projects
