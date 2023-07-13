import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <div className="font-header text-[7rem] md:text-[15rem] lg:text-[25rem] text-[#02C39A]">2023</div>
        <div className="text-white w-[20%] flex items-center justify-around">
            <Link className='hover:scale-105' to="https://twitter.com/Parth__97"><img src="/twitter.svg" alt="" height={30} width={30} /></Link>
            <Link className='hover:scale-105' to="https://www.instagram.com/parth_bhuva_97/"><img src="/insta.svg" alt="" height={30} width={30} /></Link>
            <Link className='hover:scale-105' to=""><img src="/fb.svg" alt="" height={30} width={30} /></Link>
            <Link className='hover:scale-105' to=""><img src="/twitch.svg" alt="" height={30} width={30} /></Link>
        </div>
    </div>
  )
}

export default Footer