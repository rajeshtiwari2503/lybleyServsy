import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/HomePage'
import Head from 'next/head'

import HomeSolution from '@/components/HomeSolution'
import BussinessSolution from '@/components/BussinessSolution'
import Testimonial from '@/components/Testomonial'
import Subscription from '@/components/Subscription'
import OurBrand from '@/components/OurBrand'
import Query from '@/components/Query'
import OurServices from '@/components/ourServices'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>After sale service</title>
        <meta name="description" content="At Servsy, we take pride in providing comprehensive after-sales services tailored to your specific needs. Whether you're looking for support with home appliances, mobile devices, or furniture, we have you covered. Our commitment to a 'customer-first' approach sets us apart. With a well-established service delivery network and cutting-edge technology, we ensure that your customers receive unparalleled care. Our after-sales services are designed to guarantee satisfaction year after year." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>

      <main
        className="  "
      >
       
        <HomePage />
        <HomeSolution />
        <Subscription />
        <OurServices/>
        <BussinessSolution />
        <OurBrand />
        <Query />
        <Testimonial />
       
      </main>
    </>
  )
}
