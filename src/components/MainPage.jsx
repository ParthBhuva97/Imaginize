import React from 'react'
import Home from './Home'
import Hero from './Hero';
import Banner from './Banner';
import Footer from './Footer';
import About from './About';
import InfoGraphics from './InfoGraphics';
import Conversion from './Conversion';

const MainPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-auto bg-black">
      <div className='text-[#00A896] w-[90%] md:w-[70%] pt-[3rem] lg:pt-[6rem]'>
        <Home/>
      </div>
      <div className='text-[#00A896] w-[90%] md:w-[70%] pt-[3rem] lg:pt-[6rem]'>
        <Hero/>
      </div>
      <div className='text-[#00A896] w-[90%] md:w-[70%] pt-[6rem] lg:pt-[12rem]'>
        <About/>
      </div>
      <div className='text-[#00A896] w-[90%] md:w-[70%] pt-[6rem] lg:pt-[12rem]'>
        <InfoGraphics/>
      </div>
      <div className='text-[#00A896] w-[90%] md:w-[70%] pt-[6rem] lg:pt-[12rem]'>
        <Conversion/>
      </div>
      <div className='text-[#00A896] w-full pt-[12rem]'>
        <Banner/>
      </div>
      <div className='text-[#00A896] w-full py-[5rem]'>
        <Footer/>
      </div>
    </div>
  )
}

export default MainPage