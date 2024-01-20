import React from 'react'
import { FaCheck } from "react-icons/fa6";

const TechnologyAndSystems = () => {
  return (
    <div className='px-24 py-16'>
    <h2 className='text-3xl'>Technology & Systems</h2>
    <h3 className='text-2xl'>accentuating service with scale</h3>
    <p className='mt-8 w-[800px] text-justify'>
    Servsy attains operational scale and efficiency through the integration of technology and automation. Our in-house Service Management Suite oversees the entire service lifecycle, starting from registration to on-field completion, customer feedback, and real-time tracking at each stage. All our processes, including the call center, service delivery, inventory management, accounting, and training, are technology-driven, ensuring transparency, reliability, and accountability.
    </p>
    <h3 className='font-bold text-gray-500 text-2xl mt-8'>Our Tech Systems</h3>
    <div className="mt-2 ms-6">
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'>In-house comprehensive CRM system</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Anywhere access on web and mobile</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Intelligent service ticket allocation</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Real-time service status tracking</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Warehouse management system</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Reporting and analytics platform</div></div>
</div>
</div>
  )
}

export default TechnologyAndSystems