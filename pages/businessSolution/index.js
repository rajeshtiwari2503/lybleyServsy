import ComprehensiveService from '@/components/ComprehensiveService';
import CustomerRelation from '@/components/CustomerRelation';
import HighlyTrainedPeople from '@/components/HighlyTrainedPeople';
import OurBrand from '@/components/OurBrand'
import PanIndiaService from '@/components/PanIndiaService';
import SparepartManagement from '@/components/SparepartManagement';
import TechnologyAndSystems from '@/components/TechnologyAndSystems';
import ValueAddedServices from '@/components/ValueAddedServices';
import React from 'react'
import { FaHome, FaCity } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { PiPencilLineFill } from "react-icons/pi";


const businessSolution = () => {
    return (
        <div>
            <div className="px-4 md:mb-0">
                <div className='rounded-[20px] mt-28 md:mt-20 bg-cover bg-center h-[500px]' style={{ backgroundImage: "url(businessSolution.jpg)" }}>
                    <div className='rounded-[20px] bg-black bg-opacity-30 h-[500px]'>
                        <div className='text-4xl font-bold text-white text-center pt-[270px]'>All-encompassing Solutions for Every Post-purchase Requirement</div>
                        <div className='text-2xl font-bold text-white text-center mt-2'>Expand Your Business with Emphasis on Scale, Efficiency, and Profitability</div>
                        <div data-aos="fade-up">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-6 px-24">
                                <div className='bg-white/50 p-4 rounded-[20px] shadow-md'>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <FaHome className='text-3xl' /> <span className='ms-4'>3 Million<sup>+</sup> </span>
                                    </div>
                                    <div className='font-bold text-2xl'> Happy Customers</div>
                                </div>
                                <div className='bg-white/50 p-4 rounded-[20px] shadow-md'>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <FaCity className='text-3xl' /> <span className='ms-4'>100<sup>+</sup></span>
                                    </div>
                                    <div className='font-bold text-2xl'>  Cities</div>
                                </div>
                                <div className='bg-white/50 p-4 rounded-[20px] shadow-md '>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <GiWashingMachine className='text-3xl' /><span className='ms-4'>20<sup>+</sup></span>
                                    </div>
                                    <div className='font-bold text-2xl'>  Products</div>
                                </div>
                                <div className='bg-white/50 p-4 rounded-[20px] shadow-md'>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <PiPencilLineFill /><span className='ms-4'>30<sup>+</sup></span>
                                    </div>
                                    <div className='font-bold text-2xl'>  Brand Partners</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex justify-center my-10'>
                    <div className='w-[700px] text-2xl text-center'>We offer comprehensive after-sales services for home appliances, mobiles, and furniture, tailored to meet your specific business requirements. Upholding a 'customer-first' approach, our established service delivery network and advanced technology guarantee ongoing care for your customers, ensuring satisfaction year after year.</div>
                </div>
                <OurBrand />
                <ComprehensiveService />
                <ValueAddedServices />
                 <SparepartManagement />
                 <CustomerRelation />
                 <PanIndiaService />
                 <TechnologyAndSystems />
                 <HighlyTrainedPeople />
        </div>
    )
}

export default businessSolution