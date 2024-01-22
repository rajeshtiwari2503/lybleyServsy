import Query from '@/components/Query'
import React from 'react'
import Head from 'next/head'

const Contact = () => {
    return (
        <>
        <Head>
        <title>Contact us</title>
        <meta name="description" content="Warranty Buy-out, Extended Warranties, Accidental Damage Protection, Annual Maintenance Contracts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
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
        </>
    )
}

export default Contact