import React from 'react'
import { FaHome, FaCity,FaWarehouse } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiStockFill } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";

const SparepartManagement = () => {
  return (
    <div className='px-4 md:px-24 bg-gray-100 py-16'>
    <h2 className='text-3xl'>Spare Parts Management</h2>
    <h3 className='text-2xl'>saving cost and effort</h3>
    <p className='mt-8 w-full md:w-[800px] text-justify'>Servsy' on-site problem resolution solutions are designed to reduce product returns and significantly cut costs. These services are accessible nationwide, covering a diverse range of 30+ products, supported by technology that minimizes expenses related to replacements and return logistics. Our parts management services, facilitated by strategically positioned central and branch warehouses equipped with cutting-edge tech systems, guarantee the timely availability of the right parts. Our network accommodates both MSL and on-demand parts, providing a comprehensive solution.</p>
    <h3 className='font-bold text-gray-500 text-2xl mt-8'>Our Supply Chain Network</h3>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-4 justify-between gap-5 w-full md:w-[800px]">
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <MdLocationCity className='text-3xl' /> <div className='text-4xl'>1</div>
        </div>
        <h2 className='text-[20px]'>Central Warehouses</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaWarehouse className='text-3xl' /> <div className='text-4xl'>3</div>
        </div>
        <h2 className='text-[20px]'>Branch Warehouses</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <IoMdSettings className='text-3xl' /> <div className='text-4xl'>1000<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Spare Parts</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <RiStockFill className='text-3xl' /> <div className='text-4xl'>10<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Brand Stocks</h2>
        </div>
    </div>
</div>
  )
}

export default SparepartManagement