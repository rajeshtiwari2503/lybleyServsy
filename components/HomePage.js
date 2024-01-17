import React from 'react'
import { FaHome, FaCity } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { PiPencilLineFill } from "react-icons/pi";

const HomePage = () => {
    return (
        <div className="px-4 ">
            <div className='rounded-[20px] mt-20 w-full h-screen bg-gradient-to-b from-yellow-400 to-white'>
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-center gap-4">
                    <div className='px-16  '>
                        <h1 className='font-bold text-6xl'>Services that are simple, dependable, and budget-friendly</h1>
                        <h3 className='font-bold text-3xl pt-4'>For every household device and piece of furniture.</h3>
                        <div data-aos="fade-up">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-7">
                                <div className='bg-white/20 p-4 rounded-[20px] shadow-md'>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <FaHome className='text-3xl' /> <span className='ms-4'>3 Million </span>
                                    </div>
                                    <div className='font-bold text-2xl'> Happy   Customers</div>
                                </div>
                                <div className='bg-white/20 p-4 rounded-[20px] shadow-md'>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <FaCity className='text-3xl' /> <span className='ms-4'>100</span>
                                    </div>
                                    <div className='font-bold text-2xl'>  Cities</div>
                                </div>
                            </div>
                            <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 mt-7">
                                <div className='bg-white/20 p-4 rounded-[20px] shadow-md '>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <GiWashingMachine className='text-3xl' /><span className='ms-4'>20</span>
                                    </div>
                                    <div className='font-bold text-2xl'>  Products</div>
                                </div>

                                <div className='bg-white/20 p-4 rounded-[20px] shadow-md'>
                                    <div className='text-3xl font-bold flex items-center'>
                                        <PiPencilLineFill /><span className='ms-4'>30</span>
                                    </div>
                                    <div className='font-bold text-2xl'>  Brand Partners</div>
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