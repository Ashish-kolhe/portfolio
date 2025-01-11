import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=''>
        <div
  className="hero min-h-1.5 py-20"
  style={{
    backgroundImage: 'url(/Bg.jpg)',
  }}>
  <div className="hero-content text-neutral-content text-center mt-14">
    <div className="">
      <h1 className="mb-5 text-3xl  font-black text-gray-900  lg:text-6xl lg:leading-tight "><span className='bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent'>HEY</span> I'M ASHISH KOLHE</h1>
      
      <p className='lg:text-xl lg:font-semibold text-gray-800 lg:mt-10 text-md mt-4 font-medium'>I prefer creating functional products over chasing certifications.</p>
     
   <Link href="#projects"> <button className='btn mt-8 px-10 py-2 focus:outline-none bg-gradient-to-r from-yellow-400 to-orange-600 text-white text-lg font-bold'>PROJECTS</button></Link>
      <div className='flex justify-center mt-4'>
      <img className='w-24 ml-14' src="./arrow.png" alt="" />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero