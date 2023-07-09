import React from 'react'

const Banner = () => {
  return (
    <div className='relative flex items-center justify-center h-screen bg-[url("https://framerusercontent.com/images/Y32Tld2JQTOYe1Kp1XmVmGPcD8.jpg")] bg-no-repeat bg-cover grayscale'>
        <div className="absolute z-10 w-full h-[100%] bg-black opacity-70"></div>
        <div className="absolute z-20 w-[60%] h-[100%] flex items-center justify-center text-center font-header text-[2rem] md:text-[3rem] lg:text-[5rem] text-white">Your imagination, visualized.</div>
    </div>
  )
}

export default Banner