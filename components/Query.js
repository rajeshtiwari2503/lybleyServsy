import React, { useState } from 'react'

const Query = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
    website:'Servsy'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch('https://lybleybackend-production.up.railway.app/createContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setIsLoading(false);
      if (response.ok) {
        console.log('Message sent successfully');
        setMsg("Message sent successfully")
        setTimeout(() => {
          setMsg("");
        }, 3000)
        
      } else {
        console.error('Failed to send message');
    
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };
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
            <input type='text' name="name" className='col-span-2 md:col-span-1 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Name' onChange={handleInputChange} />

            <input type='number' name="contact" className='col-span-2 md:col-span-1 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Phone Number' onChange={handleInputChange} />

            <input type='email' name="email" className='col-span-2 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' placeholder='Email' onChange={handleInputChange} />

            <textarea className='col-span-2 focus:outline-none w-full   rounded-lg bg-[#eaeaea] p-4' name="message" placeholder='Your Suggestion' onChange={handleInputChange} />
            <button className='bg-blue-400 text-xl w-full text-white font-bold  rounded-lg   p-4' disabled={isLoading} onClick={handleSubmit}>{isLoading ? "Submitting" : "Submit"}</button>
            <div className='text-center text-green-500 font-bold text-2xl pt-4'>{msg}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Query