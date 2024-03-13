import React from 'react'
import { FaHome, FaCity } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";

const CustomerRelation = () => {
  return (
    <div className='px-4 md:px-24 py-16'>
    <h2 className='text-3xl'>Customer Relations</h2>
    <h3 className='text-2xl'>building lasting relations</h3>
    <p className='mt-8 w-full md:w-[800px] text-justify'>Our customer relations solutions empower support across various channels, including call, email, or online. Operated by technically trained personnel, our dedicated multi-lingual call center is supported by robust processes and an in-house CRM system. Guided by the distinctive "You Touch It, You Own It" philosophy, we prioritize customer satisfaction, aiming for near-zero escalations and ensuring the highest level of customer delight.</p>
    <h3 className='font-bold text-gray-500 text-2xl mt-8'>Our Expertise</h3>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 justify-between gap-5 w-full md:w-[800px]">
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <BsBuildings className='text-3xl' /> <div className='text-4xl'>1<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Call centers</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaUserGroup className='text-3xl' /> <div className='text-4xl'>120<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Executives</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <IoIosCall className='text-3xl' /> <div className='text-4xl'>1000<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Calls per day</h2>
        </div>
    </div>
</div>
  )
}

export default CustomerRelation