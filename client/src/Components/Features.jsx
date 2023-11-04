import React from 'react'
import FadeIn from './Fade'
const Features = () => {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center text-center'>
        
        <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className='font-bold text-[6vw] md:text-[4vw] mt-5 lg:text-[4vw] xl:text-[2vw]'>How</h1>
        </FadeIn>
        <FadeIn delay={0.3} direction="left" padding fullWidth>
                  
                  
    <div className='flex flex-wrap justify-center lg:flex-nowrap'>
         <h2 className= 'font-medium text-[7vw] self-center md:text-[5vw] lg:text-[3vw]'>Create an account</h2>
         <img src='./screen1.png' alt="screen1" className='w-[60vw] self-center lg:w-[30vw]'/>
    </div>
        </FadeIn> 
        <FadeIn delay={0.8} direction="right" padding fullWidth>
                  
                  
    <div className='flex flex-wrap justify-center lg:flex-nowrap'>
    <img src='./screen2.png' alt="screen2" className='w-[60vw] lg:w-[30vw] order-2 lg:order-1'/>
             <h2 className= 'font-medium text-[7vw] self-center  lg:text-[3vw] md:text-[5vw] order-1 lg:order-2'>Fill the items and select theme</h2>
    </div>
        </FadeIn> 
             
        <FadeIn delay={1} direction="left" padding fullWidth>
                  
                  
    <div className='flex flex-wrap justify-center lg:flex-nowrap'>
    <h2 className= 'font-medium text-[7vw] self-center md:text-[5vw] lg:text-[3vw]'>Share your menu with QR code</h2>
             <img src='./screen3.png' alt="screen3" className='w-[60vw] lg:w-[30vw]'/>
    
    </div>
        </FadeIn> 
        

        

    </div>
  )
}

export default Features