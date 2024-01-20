import React from 'react'
import { FaHome, FaCity } from "react-icons/fa";

const PanIndiaService = () => {
  return (
    <div className='px-4 md:px-24 bg-gray-100 py-16'>
    <h2 className='text-3xl'>Pan India Network</h2>
    <h3 className='text-2xl'>we are where you are</h3>
    <p className='mt-8 w-full md:w-[800px] text-justify'>Servsy extends its services for home appliances and electronics to over 18,000 pin codes nationwide. This extensive coverage is facilitated through a network of 20 branches and 450+ meticulously chosen franchises. Backed by a spare part supply chain operating from 4 zonal and 20 regional warehouses, our logistics partner ensures swift and dependable movement of products, spares, accessories, and facilitates the return of defective products and spare parts. With its expansive reach, Jeeves enhances business outreach, scale, and operational efficiency.</p>
    <h3 className='font-bold text-gray-500 text-2xl mt-8'>Our Presence</h3>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 justify-between gap-5 w-full md:w-[800px]">
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaHome className='text-3xl' /> <div className='text-4xl'>18,000<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Pin codes</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaHome className='text-3xl' /> <div className='text-4xl'>6,000<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Technicians</h2>
        </div>
        <div className="flex flex-col">
        <div className='flex items-center space-x-2'>
            <FaHome className='text-3xl' /> <div className='text-4xl'>1000<sup>+</sup></div>
        </div>
        <h2 className='text-[20px]'>Cities, Towns & Villages</h2>
        </div>
    </div>
</div>
  )
}

export default PanIndiaService