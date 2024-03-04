import React from 'react'
import {register} from 'swiper/element/bundle'
import Clients from '../constants/Clients'
register()
const Swiper = () => {
  return (
   <div className='max-w-[80%] container mx-auto lg:max-w-[70%] lg:min-h-[30rem] bg-accent-secondary rounded-[70px] p-8 lg:p-12  my-48'>
   <h2 className='h2 text-center mb-8'>What clients say</h2>
   <swiper-container
     pagination="true"
     breakpoints={
      JSON.stringify({
        slidesPerView:3,
        640:{
          slidesPerView:1,
          spaceBetween:20
        },
        768:{
          slidesPerView:2,
          spaceBetween:20
        },
        1032:{
          slidesPerView:3,
          spaceBetween:20
        }
      })
     }
     
   >

    {
    Clients.map((user)=>{
        return <swiper-slide key={user.id}> 
          <div className='bg-white  text-start px-4 py-8 rounded-[30px] max-h-[300px]'>
            <div className='flex justify-between items-start flex-row mb-4'>
              <img src={user.image} width={48} height={48}  className='rounded-full' />
              <div>
                <h3 className='h3'>{user.name}</h3>
                <span>{user.location}</span>
              </div>
            </div>
            <p>{user.message}</p>
        </div>
        </swiper-slide>
    })
  }
    </swiper-container>
    
    </div>
  )
}

export default Swiper
