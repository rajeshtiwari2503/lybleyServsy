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
import Head from 'next/head';


const businessSolution = () => {
    return (
        <>
        <Head>
        <title>Partner with Servsy</title>
        <meta name="description" content="Servsy specializes in delivering personalized services across a diverse range of 30+ products, spanning home appliances, electronics, mobiles, and furniture, covering all regions of India. Our extensive service offerings address the entire product usage lifecycle, encompassing tasks such as product installation, setup, and demonstration, as well as comprehensive repair and refurbishment services for both in-warranty and out-of-warranty products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
        <div>
            <div className="px-4 md:mb-0">
                <div className='rounded-[20px] mt-28 md:mt-20 bg-cover bg-center h-[500px]' style={{ backgroundImage: "url(businessSolution.jpg)" }}>
                    <div className='rounded-[20px] bg-black bg-opacity-30 h-[500px]'>
                        <div className='text-4xl font-bold text-white text-center pt-[50px] md:pt-[270px]'>All-encompassing Solutions for Every Post-purchase Requirement</div>
                        <div className='text-2xl font-bold text-white text-center mt-2'>Expand Your Business with Emphasis on Scale, Efficiency, and Profitability</div>
                        <div data-aos="fade-up">
                            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mt-6 px-4 md:px-24">
                                <div className='bg-white/50 p-2 md:p-4 rounded-[20px] shadow-md'>
                                    <div className='text-xl md:text-3xl font-bold flex items-center'>
                                        <FaHome className='text-xl md:text-3xl' /> <span className='ms-2 md:ms-4 font-bold text-sm md:text-3xl'>3 Million<sup>+</sup> </span>
                                    </div>
                                    <div className='font-bold text-sm md:text-2xl md:mt-0 mt-2'> Happy Customers</div>
                                </div>
                                <div className='bg-white/50 p-2 md:p-4 rounded-[20px] shadow-md'>
                                    <div className='text-xl md:text-3xl font-bold flex items-center'>
                                        <FaCity className='text-xl md:text-3xl' /> <span className='ms-2 md:ms-4 font-bold text-sm md:text-3xl'>100<sup>+</sup></span>
                                    </div>
                                    <div className='font-bold text-sm md:text-2xl md:mt-0 mt-2'>  Cities</div>
                                </div>
                                <div className='bg-white/50 p-2 md:p-4 rounded-[20px] shadow-md '>
                                    <div className='text-xl md:text-3xl font-bold flex items-center'>
                                        <GiWashingMachine className='text-xl md:text-3xl' /><span className='ms-2 md:ms-4 font-bold text-sm md:text-3xl'>20<sup>+</sup></span>
                                    </div>
                                    <div className='font-bold text-sm md:text-2xl md:mt-0 mt-2'>  Products</div>
                                </div>
                                <div className='bg-white/50 p-2 md:p-4 rounded-[20px] shadow-md'>
                                    <div className='text-xl md:text-3xl font-bold flex items-center'>
                                        <PiPencilLineFill /><span className='ms-2 md:ms-4 font-bold text-sm md:text-3xl'>30<sup>+</sup></span>
                                    </div>
                                    <div className='font-bold text-sm md:text-2xl md:mt-0 mt-2'>  Brand Partners</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex justify-center my-10'>
                    <div className=' w-full md:w-[700px] text-2xl text-center px-2'>We offer comprehensive after-sales services for home appliances, mobiles, and furniture, tailored to meet your specific business requirements. Upholding a 'customer-first' approach, our established service delivery network and advanced technology guarantee ongoing care for your customers, ensuring satisfaction year after year.</div>
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
        </>
    )
}

export default businessSolution