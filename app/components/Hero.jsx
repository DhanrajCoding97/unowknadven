import React from 'react'


const Hero = () => {
  return (
    <div className='relative w-full h-[100vh]'>
        <div className='absolute inset-0 w-full h-full bg-black/40'></div>
        <video autoPlay muted loop className='w-full h-full object-cover'>
            <source src='/bgVideo.mp4'></source>
        </video>
        <div className='m-auto p-4 md:left-[10%] max-w-[1100px] absolute w-full h-full top-0 left-0 flex flex-col justify-center items-start'> 
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl text-[#F7D311]'>Travel Event</h1>
            <p className=' max-w-[600px] drop-shadow-2xl py-2 text-2xl text-lime-400'>We Are Tour & Event Company for all type of Adventure & Event Activities </p>
        </div> 
    </div>
  )
}

export default Hero