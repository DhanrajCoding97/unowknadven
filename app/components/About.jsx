import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 gap-4 h-[80vh]'>
            <Image 
                className='row-span-3 object-cover w-full h-full p-2 transition duration-300 ease-in-out hover:scale-110 rounded-xl'
                src="https://images.pexels.com/photos/5195493/pexels-photo-5195493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} // optional
            />
            <Image 
                className='row-span-2 object-cover w-full h-full p-2 transition duration-300 ease-in-out hover:scale-110 rounded-xl'
                src="https://images.pexels.com/photos/14604046/pexels-photo-14604046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} // optional
            />
            <Image 
                className='row-span-2 object-cover w-full h-full p-2 transition duration-300 ease-in-out hover:scale-110 rounded-xl'
                src="https://images.pexels.com/photos/1497585/pexels-photo-1497585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} // optional
            />
            <Image 
                className='row-span-3 object-cover w-full h-full p-2 transition duration-300 ease-in-out hover:scale-110 rounded-xl'
                src="https://images.pexels.com/photos/15804646/pexels-photo-15804646/free-photo-of-people-on-a-motorbike-on-a-mountain-road.jpeg?auto=compress&cs=tinysrgb&w=1600"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} // optional
            />
            <Image 
                className='row-span-2 object-cover w-full h-full p-2 transition duration-300 ease-in-out hover:scale-110 rounded-xl'
                src="https://images.pexels.com/photos/3687139/pexels-photo-3687139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} // optional
            />
        </div>
        <div className='flex flex-col items-center justify-center px-4'> 
            <h1 className='text-5xl md:text-6xl font-bold text-[#1CBE12]'>Vision <span className='text-[#F7D311]'>Mission</span></h1>
            <p className='text-2xl py-6'><span className=' font-bold text-[#1CBE12]'>Vision: </span>To be the one stop solution for all the Adventure enthusiast.</p>
            <p className='text-2xl'><span className=' font-bold text-[#F7D311]'>Mission: </span>To provide never lasting experience on road, off road. </p>

        </div>
    </div>
  )
}

export default About