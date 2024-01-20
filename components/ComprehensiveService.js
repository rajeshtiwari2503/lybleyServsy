import React from 'react'

const ComprehensiveService = () => {
  return (
    <div className='px-4 md:px-24 bg-gray-100 py-16'>
        <h2 className='text-3xl'>Comprehensive Services</h2>
        <h3 className='text-2xl'>across the entire product lifecycle</h3>
        <p className='mt-8 w-full md:w-[800px] text-justify'> Servsy specializes in delivering personalized services across a diverse range of 30+ products, spanning home appliances, electronics, mobiles, and furniture, covering all regions of India. Our extensive service offerings address the entire product usage lifecycle, encompassing tasks such as product installation, setup, and demonstration, as well as comprehensive repair and refurbishment services for both in-warranty and out-of-warranty products.</p>
        <h3 className='font-bold text-gray-500 text-2xl mt-8'>Services Offered</h3>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-6 justify-between gap-5 w-full md:w-[800px]">
            <div className="flex flex-col justify-center items-center">
            <img src="wrench.png" className='h-[70px]' alt="" />
            <h2 className='text-[20px] text-center'>Installation & Demo</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src="wrench.png" className='h-[70px]' alt="" />
            <h2 className='text-[20px] text-center'>Returns Management</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src="wrench.png" className='h-[70px]' alt="" />
            <h2 className='text-[20px] text-center'>Repair & Refurbish</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src="wrench.png" className='h-[70px]' alt="" />
            <h2 className='text-[20px] text-center'>Spare Parts Management</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src="wrench.png" className='h-[70px]' alt="" />
            <h2 className='text-[20px] text-center'>Customer Relations</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src="wrench.png" className='h-[70px]' alt="" />
            <h2 className='text-[20px] text-center'>Testing & Certification</h2>
            </div>
        </div>
    </div>
  )
}

export default ComprehensiveService 
