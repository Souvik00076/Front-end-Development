import React from 'react'
import hero1 from '../images/hero1.jpg'
import para1 from '../images/para1.png'
import data from '../data'
const Home = () => {
  return (
    <div>
        <div className='herosection1 w-[100%] h-screen' >
            <div className='bg-black opacity-70 w-[100%] h-full'>   
            </div>

        </div>

        <div className='w-[100%] bg-white flex flex-row items-center p-20'>
            <div className='w-[60%]'>
                <h1 className='text-4xl font-bold mb-6'>About</h1>
            <div>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
            </div>
            </div>
            <img  src={para1} width={400} height={400}/>
        </div>

        <div className='herosection2 min-h-[35rem] relative'>
           <div className='w-[600px] px-6 py-4 absolute right-44 mt-10'>
           <h1 className='text-3xl font-bold'>WE BELIEVE IN GREAT IDEAS</h1>
            <p className='text-gray-400 mt-10'>Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<br/><br/>
            Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<br/><br/>
            Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <button className='mt-10 bg-indigo-600 px-4 py-2 text-white border rounded-md'>View Works</button>
           </div>
        </div>


        <div className='min-h-screen'>
            <div className='flex flex-col items-center mt-24'>
                <h1 className='text-4xl font-bold'>Our Services</h1>
                <span className='w-[40%] text-center text-gray-600 mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</span>
            </div>
        </div>
    </div>
  )
}

export default Home
