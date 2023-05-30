import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div>
        <h1 className='text-center text-5xl md:text-6xl font-bold text-[#1CBE12]'>Our <span className='text-[#F7D311]'>Team</span></h1>
        <div className='max-w-[1400px] m-auto py-16 px-4 flex  gap-5'>
            <div>
                <div className=' bg-cyan-700 flex flex-col items-center justify-center gap-2'>
                    <div className='max-w-sm'>
                    <Image
                    className='p-4'
                    src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }} // optional
                    />
                    </div>
                    <h2 className='text-2xl text-[#073064] font-bold'>ROHIT</h2>
                    <p className='text-2xl text-[#073064] font-bold'>Sales & marketing</p>
                </div>
                <h1 className='font-bold text-6xl text-[#1CBE12]'>TRAINED <br /> TESTED</h1>
                {/* <h1 className='font-bold text-6xl text-[#1CBE12]'></h1> */}
            </div>
            <div>
            <h1 className='font-bold text-6xl text-[#F7D311]'>TRAVEL <br /> EXPERTS</h1>
                <div className='flex flex-col items-center justify-center gap-2'>
                <div className='max-w-sm'>
                    <Image
                    className=' p-4'
                    src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }} // optional
                    />
                </div>
                    <h2 className='text-2xl text-[#073064] font-bold'>ROHIT</h2>
                    <p className='text-2xl text-[#073064] font-bold'>Sales & marketing</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center gap-2'>
                <div className='max-w-sm'>
                    <Image
                    className=' p-4'
                    src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }} // optional
                    />
                </div>
                    <h2 className='text-2xl text-[#073064] font-bold'>ROHIT</h2>
                    <p className='text-2xl text-[#073064] font-bold'>Sales & marketing</p>
                </div>
                <h1 className='font-bold text-6xl text-[#F7D311]'>EVENT <br /> EXPERTS</h1>
            </div>
            <div>
                <h1 className='font-bold text-6xl text-[#1CBE12]'>15+ <br /> CREW</h1>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='max-w-sm'>
                    <Image
                    className=' p-4'
                    src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }} // optional
                    />
                    </div>
                    <h2 className='text-2xl text-[#073064] font-bold'>ROHIT</h2>
                    <p className='text-2xl text-[#073064] font-bold'>Sales & marketing</p>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default Team