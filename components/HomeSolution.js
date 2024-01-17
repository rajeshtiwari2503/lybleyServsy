import React from 'react'

const HomeSolution = () => {
  return (
    <div data-aos="fade-up">
        <h3 className='text-4xl font-bold mt-12 text-center'>Solutions for your home</h3>
        <p className='text-center text-2xl mt-2'>We Service All Home Appliances, Electronics, Mobile & Furnitures</p>
        <div  className="grid grid-cols-3 gap-12 px-24 mt-14">
          <div data-aos="fade-left" className='flex flex-col text-center items-center'>
            <img src="settings.png"  className='h-[120px]' alt="" />
            <h2 className='font-bold text-2xl py-2'>Protect</h2>
            <p>Our Extended Protection Plans ensure the ongoing safeguarding of your products against defects and failures, providing continuous cost savings and a prolonged product lifespan that is assured year after year</p>
          </div>
          <div data-aos="fade-left" className='flex flex-col text-center items-center'>
           <img src="easy-installation.png" className='h-[120px]' alt="" />
           <h2 className='font-bold text-2xl py-2'>Install</h2>
           <p>We seamlessly manage the installation, configuration, and readiness of your products at your home, prioritizing your convenience for a hassle-free experience. Trust us to ensure a smooth setup process that guarantees your satisfaction.</p>
          </div>
          <div data-aos="fade-left"   className='flex flex-col text-center items-center'>
          <img src="settings.png" className='h-[120px]' alt="" />
          <h2 className='font-bold text-2xl py-2'>Fix</h2>
          <p>Our skilled service experts efficiently address a wide range of product issues, spanning from regular maintenance to complete breakdowns. Rely on us for a dependable solution, ensuring guaranteed peace of mind.</p>
          </div>
        </div>
    </div>
  )
}

export default HomeSolution;