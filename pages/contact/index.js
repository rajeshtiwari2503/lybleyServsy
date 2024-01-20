import Query from '@/components/Query'
import React from 'react'

const Contact = () => {
    return (
        <div className='mt-24'>
            <div className="px-4 md:mb-0">
                <div className='rounded-[20px] mt-28 md:mt-20 bg-cover bg-center h-[430px]' style={{ backgroundImage: "url(businessSolution.jpg)" }}>
                    <div className='rounded-[20px] bg-black bg-opacity-30 h-[430px]'>
                        <div className='text-4xl font-bold text-white text-center pt-[330px]'>Contact us</div>
                       
                    </div>
                </div>
            </div>
            <Query />
        </div>
    )
}

export default Contact