import React from 'react';
import { FaCheck } from "react-icons/fa6";

const ValueAddedServices = () => {
  return (
    <div className='px-24 py-16'>
    <h2 className='text-3xl'>Value Added Services</h2>
    <h3 className='text-2xl'>customised for your business</h3>
    <p className='mt-8 w-[800px] text-justify'>
    Servsy Protection Plans contribute to the growth of your business by guaranteeing customer satisfaction year after year. Offering a wide range of tailored extended warranty programs, these plans provide coverage for up to 3 years for new products. Additionally, for products beyond the initial warranty period, our Annual Maintenance Plans offer ongoing protection, delivering genuine peace of mind to your customers.
    </p>
    <h3 className='font-bold text-gray-500 text-2xl mt-8'>Our Offering</h3>
    <div className="mt-2 ms-6">
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Warranty Buy-out</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Extended Warranties</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Accidental Damage Protection</div></div>
     <div className='flex items-center space-x-2'><FaCheck className='text-green-700' /><div className='text-2xl'> Annual Maintenance Contracts</div></div>
</div>
</div>
  )
}

export default ValueAddedServices