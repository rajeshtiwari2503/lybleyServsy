import React from 'react'
import { FaHome,FaCity } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { PiPencilLineFill } from "react-icons/pi";

const HomePage = () => {
  return (
    <div className="px-4 ">
    <div className='rounded-[20px] mt-20 w-full h-screen bg-gradient-to-b from-yellow-400 to-white'>
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen justify-center gap-4">
        <div className='px-16 py-16'>
        <h1 className='font-bold text-6xl'>Services that are simple, dependable, and budget-friendly</h1> 
        <h3 className='font-bold text-3xl pt-4'>For every household device and piece of furniture.</h3>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-7">
            <div>
                <FaHome className='text-3xl' /> <div className=' text-2xl'> 3 Million Happy Customers</div>
            </div>
            <div>
                <FaCity className='text-3xl' /> <div className=' text-2xl'> 100 Cities</div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-7">
            <div>
                <GiWashingMachine className='text-3xl' /><div className=' text-2xl'> 20 Products</div>
            </div>
            <div>
                <PiPencilLineFill className='text-3xl' /><div className=' text-2xl'> 30 Brand Partners</div>
            </div>
        </div>
       </div>
       </div>
       <div className='flex justify-center items-center'>
        <img src="homeAppliances.png" alt="img" />

       </div>
       </div>
    </div>
    </div>
  )
}

export default HomePage