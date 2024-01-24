import React from 'react'

const OurService = () => {
    return (
        <div className='pt-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-center'>Our Home Appliances Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 px-4 md:px-14 ">
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl mt-4 font-bold'>Air Cooler Services</h3>
                    <p className='text-justify text-[16px] md:text-2xl'>Keep cool and comfortable with Servsy's expert after-sales service for air coolers. Our technicians are equipped to handle all maintenance and repair needs promptly.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="aircooler.png" className='h-[200px] md:h-[400px]' alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 bg-black/5 md:grid-cols-2 gap-4 py-8 px-4 md:px-14">
                <div className='flex justify-center items-center hidden md:block'>
                    <img src="tv.png" className='h-[180px] md:h-[300px]' alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl mt-4 font-bold'>TV Repairs</h3>
                    <p className='text-justify text-[16px] md:text-2xl'>Enjoy uninterrupted entertainment as Servsy offers comprehensive TV repair services. From minor glitches to major issues, we have it covered.</p>
                </div>
                <div className='flex justify-center items-center md:hidden block'>
                    <img src="tv.png" className='h-[180px] md:h-[300px]' alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 px-4 md:px-14">
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl mt-4 font-bold'>Washing Machine Care</h3>
                    <p className='text-justify text-[16px] md:text-2xl'>Let your laundry worries be ours. Servsy excels in providing efficient repair and maintenance services for washing machines, ensuring your clothes are handled with care.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="washingmachine.png" className='h-[190px] md:h-[350px]' alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 bg-black/5 md:grid-cols-2 gap-4 py-8 px-4 md:px-14">
                <div className='flex justify-center items-center hidden md:block'>
                    <img src="multibrand.png" className='h-[180px] md:h-[300px]' alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl mt-4 font-bold'>Multi-Brand Support</h3>
                    <p className='text-justify text-[16px] md:text-2xl'>We proudly serve as the after-sales service provider for a diverse range of home appliance brands. Our expertise extends to various makes and models, guaranteeing a solution for every need.</p>
                </div>
                <div className='flex justify-center items-center md:hidden block'>
                    <img src="multibrand.png" className='h-[180px] md:h-[300px]' alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 px-4 md:px-14">
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl mt-4 font-bold'>Nationwide Presence</h3>
                    <p className='text-justify text-[16px] md:text-2xl'>Servsy boasts a robust network of 600 service centers strategically located across India. No matter where you are, our service is just a call away. Experience the convenience of nationwide after-sales support that ensures your home appliances remain in top-notch condition.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="nationwide.png" className='h-[190px] md:h-[350px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurService