import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import FadeIn from './Fade';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-r from-blue-100 via-blue-0 to-pink-50">
                      <div className='w-[95vw] text-center flex flex-col justify-center'>
                      <FadeIn delay={0.2} direction="down" padding fullWidth>
                      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Create <span className='text-blue-800'>menu</span> for your business.</h1>
                      </FadeIn>
                        
                        <div className='m-1 text-center md:w-[57vw] self-center text-[5vw] md:text-2xl lg:text-2xl 
                        lg:w-[30vw] xl:w-[24vw]'>
                         <TypeAnimation
      sequence={[
       
        'In this digital age whether you own a restaurant',
        1000, 
        'In this digital age whether you own a cafe',
        1000,
        'In this digital age whether you own a food truck',
        1000,
        'In this digital age whether you own a pani puri vala',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={5}
      className='text-black-800'
    />
    </div>
                         <p className='text-[5vw] md:text-2xl lg:text-2xl text-black-800'> your menu card is your silent salesperson.</p>
        
                        <Link to='/login'><button className='bg-blue-800 w-[200px] text-white rounded-md font-semibold text-[20px] my-4 mx-auto py-3'>Get Started</button></Link> 
         </div>



  </div>

  )
}

export default Hero

