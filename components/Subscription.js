import React from 'react'

const Subscription = () => {
    return (
        <div className='py-10 bg-black/5'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-1 items-center md:grid-cols-3 ">
                    <div>

                    </div>
                    <div className='col-span-2 p-4 md:p-0'>
                    <h3 className='text-2xl text-yellow-700 font-bold'>Be previleged</h3>
                    <h1 className='text-4xl font-bold'>Buy our subscriptions,</h1>
                    <h1 className='text-4xl font-bold'>Be worry Free!</h1>
                    <p className='mt-4 text-justify md:text-start'>Be worry-free with ReadyAssist subscriptions. Our customers can avail services such as Flat tyre repair, fuel delivery, battery jumpstart, and towing anywhere in India, absolutely free of cost. We have a network of trained professionals and tow trucks that are available 24/7 to provide assistance to our customers. Our prime subscriptions are a one-stop solution for your vehicle maintenance and upkeeping worries.</p>
                   <div className="text-center md:text-start"> <button className='rounded-full bg-black text-white px-4 py-2 mt-4'>Subscribe</button></div>
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