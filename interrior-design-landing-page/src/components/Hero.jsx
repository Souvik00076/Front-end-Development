import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='hero h-[540px] xl:h-[650px] bg-hero bg-center xl:bg-cover bg-fixed bg-no-repeat xl:rounded-bl-[240px] relative '>
     <div className='container mx-auto h-full flex items-center'>
     <div className='flex items-center lg:items-start flex-col text-center lg:text-start w-[576px]'>
      <h1 className='h1 mb-8'>Let Your Home Be Unique</h1>
      <p className='mb-8'>There are many variations of passages of lorem ipsum from available, variations of the passages.</p>
      <div className='flex gap-2 items-center btn-primary px-6 py-4 rounded-[15px] text-white '>
      <button>Get Free Estimation
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
      </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default Hero
  

