import React from 'react'
import { FaHome, FaCity } from "react-icons/fa";

const HighlyTrainedPeople = () => {
  return (
    <div className='px-4 md:px-24 bg-gray-100 py-16'>
    <h2 className='text-3xl'>Highly Trained People</h2>
    <h3 className='text-2xl'>skilled, trained, verified, trusted</h3>
    <p className='mt-8 w-full md:w-[800px] text-justify'>Our field engineers drive Servsy' service delivery with high efficiency. These experienced, background-verified, technically trained, and soft-skills-enabled professionals ensure the timely and efficient delivery of services, creating the best possible customer experience.</p>
    <h3 className='font-bold text-gray-500 text-2xl mt-8'>Available for</h3>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 justify-between gap-5 w-full md:w-[800px]">
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaHome className='text-3xl' /> <div className='text-4xl'>14<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Training Teams</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaHome className='text-3xl' /> <div className='text-4xl'>16<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Training Centers</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaHome className='text-3xl' /> <div className='text-4xl'>25,000<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Poeple trained annually</h2>
        </div>
    </div>
</div>
  )
}

export default HighlyTrainedPeople