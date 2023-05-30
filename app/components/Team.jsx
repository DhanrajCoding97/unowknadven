import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div>
        <h1 className='text-center text-5xl md:text-6xl font-bold text-[#1CBE12]'>Our <span className='text-[#F7D311]'>Team</span></h1>
        <div className='py-14 max-w-[1400px] m-auto md:flex gap-5'>
            <div className='flex flex-col gap-5'>
                <div className='w-full bg-white flex flex-col justify-center items-center rounded-[50px]'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: '400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>ROHIT</h2>
                        <p className='text-xl pb-2 font-bold'>Sales & Marketing</p>
                    </div>
                </div>
                 <h1 className='text-4xl text-center font-bold text-[#1CBE12]'>TRAINED<br /> TESTED</h1>
            </div>
            <div className='flex flex-col  gap-5'>
                <h1 className='text-4xl text-center font-bold text-[#F7D311]'>TRAVEL <br /> EXPERTS</h1>
                <div className=' w-full bg-white flex flex-col justify-center items-center rounded-[50px]'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: '400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>VIREN</h2>
                        <p className='text-xl pb-2 font-bold'>Technical Support</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col  gap-5'>
                <div className=' w-full bg-white flex flex-col justify-center items-center rounded-[50px]'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: '400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>SWAPNIL</h2>
                        <p className='text-xl pb-2 font-bold'>Outdoor Photographer</p>
                    </div>
                </div>
                <h1 className='text-4xl text-center font-bold text-[#F7D311]'>EVENT <br /> EXPERTS</h1>
            </div>
            <div className='flex flex-col  gap-5'>
                <h1 className='text-4xl text-center font-bold text-[#1CBE12]'>15+ <br /> CREW</h1>
                <div className=' w-full bg-white flex flex-col justify-center items-center rounded-[50px]'> 
                        <Image 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: '400px' , borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}} // optional
                        />
                    <div className='w-full text-center text-black'>
                        <h2 className='font-bold text-2xl'>IBRAHIM</h2>
                        <p className='text-xl pb-2 font-bold'>Planning Expert</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team