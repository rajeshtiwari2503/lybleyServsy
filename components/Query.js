import React from 'react'

const Query = () => {
  return (
    <div className='container mx-auto md:px-14 px-4 mt-8 mb-8'> 
       <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        <div>
            <div className='text-yellow-400 text-2xl font-bold'>How Can We Assist You?</div>
            <div className='text-black text-2xl font-bold py-4' >Whether you have questions, need assistance, or want to share feedback, our dedicated after-sales support team is here to help. Please feel free to reach out to us through the following channels:</div>
            {/* <div className='text-gray-400 mt-2'>We highly appreciate your valuable suggestions and feedback. We'll list the best recommendations/reviews and will give offer subscription packages as a token of our gratitude.</div> */}
        </div>
        <div className='border border-gray-200 p-6 rounded-xl '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input type='text' className='col-span-2 md:col-span-1 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Name'/>
            
                <input type='number' className='col-span-2 md:col-span-1 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Phone Number'/>
            
                <input type='email' className='col-span-2 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Email'/>
             
                <textarea className='col-span-2 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Your Suggestion'/>
                <button className='col-span-2 bg-green-400 text-xl w-full text-white font-bold  rounded-lg   p-4' >Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Query