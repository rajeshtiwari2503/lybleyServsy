import React from 'react'

const Subscription = () => {
    return (
        <div className='py-10 bg-black/5'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-1 items-center md:grid-cols-3 ">
                    <div>

                    </div>
                    <div className='col-span-2 p-4 md:p-0'>
                    <h3 className='text-2xl text-yellow-700 font-bold'>Welcome to Servsy – Your Premier Home Appliances After Sales Service Provider Across India</h3>
                    <p className='mt-4 text-justify text-2xl md:text-start'>Servsy takes pride in being your trusted after-sales service partner, specializing in a wide range of home appliances. With a dedicated network of 600 service centers spanning the length and breadth of India, we ensure that your satisfaction knows no bounds.</p>
                </div>
                </div>
                <div className='flex justify-center'>
                    <img src="homeAppliances.png" className='mt-12 md:mt-0 h-[250px] md:h-[400px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Subscription