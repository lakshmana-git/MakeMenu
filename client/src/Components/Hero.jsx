import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import FadeIn from './Fade';

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
        // Same substring at the start will only be typed out once, initially
        'In this digital age whether you own a restaurant',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'In this digital age whether you own a cafe',
        1000,
        'In this digital age whether you own a food truck',
        1000,
        'In this digital age whether you own a pani puri vala',
        1000
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={5}
      className='text-black-800'
    />
    </div>
                         <p className='text-[5vw] md:text-2xl lg:text-2xl text-black-800'> your menu card is your silent salesperson.</p>
        
                         <button className='bg-blue-800 w-[200px] text-white rounded-md font-semibold text-[20px] my-4 mx-auto py-3'>Get Started</button>
         </div>



  </div>







  // <div className='flex justify-center'>
  // <div className="pt-0 md:pt-8">
  //     <div className="grid grid-cols-1 gap-y-12 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
  //       <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
  //         <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
  //         Create <span className='text-blue-800'>menu cards</span> for your business.
  //         </h1>
  //         <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
  //           Unleash the power of seamless form creation. Customize, Share, and
  //           Analyze like never before.
  //         </p>

          
  //       </div>

  //       <div className="xl:col-span-1">
  //       <img src='/person.png' alt="person" className='w-[30rem]'/>        
  //       </div>
  //     </div>
  //   </div>
  //   </div>

  )
}

export default Hero

{/* <div className='p-40 text-center'>
<h1 className='text-5xl font-bold w-[70vw]'>Create <span className='text-blue-800'>menu cards</span> for your business.</h1>
 <p className='mb-3 text-2xl text-slate-700 p-3 from-neutral-600'>In this digital  whether you own a restaurant, cafe, food truck, or any other food-related business, your menu card is your silent salesperson.</p>
 {/* <a href="/register" className="bg-blue-200 px-10 py-3  rounded-xl" >
  Get Started
</a> */}
// </div> */}