import React from 'react'
import { Link } from 'react-router-dom'

const Conversion = () => {
  return (
    <div className='w-full flex flex-col gap-[2rem]'>
        <div className="font-header text-[1.5rem] md:text-[3rem] lg:w-[80%]">
        Ready to embark on your creative journey? Unleash the AI artist within you now!
        </div>
        <div className="flex gap-[1.5rem] md:flex-row flex-col">
        {/* <button className="py-[0.625rem] font-subHeader text-black px-[0.9375rem]  rounded-lg">Create Now</button> */}
        <Link className="py-[0.625rem] text-center font-subHeader text-black px-[0.9375rem] bg-[#00A896] rounded-lg" to='/generate'>Get Started</Link>
        <button className="py-[0.625rem] font-subHeader text-white px-[0.9375rem] bg-[#05668D] rounded-lg">Learn More</button>
        </div>
    </div>
  )
}

export default Conversion