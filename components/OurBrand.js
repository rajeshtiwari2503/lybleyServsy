import React from 'react'
import Marquee from "react-fast-marquee";

const OurBrand = () => {
    return (
        <div className='flex justify-center'>
            <div className='pt-14   md:pt-0 w-[86%]' data-aos="fade-up">
                <h3 className='text-3xl md:text-4xl font-bold px-5 md:px-0 text-center mb-6 '>Trusted By Leading Brands</h3>
                <Marquee autoFill pauseOnHover >
                    <div className='flex  m-4  p-4 bg-black/20  shadow-md   rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px] hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                </Marquee>
                <Marquee autoFill pauseOnHover direction='right' >
                    <div className='flex  m-4  p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px] hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                    <div className='   flex   m-4     p-4 bg-black/20  shadow-md  rounded-md items-center'>
                        <img src="settings.png" className='  h-[60px]  hover:shadow-md transition-transform transform scale-100 hover:scale-90' alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default OurBrand