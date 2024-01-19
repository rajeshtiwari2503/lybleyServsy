import React from 'react'
import {
  
    FaLocationArrow,
    FaMobileAlt, FaEnvelope
  } from "react-icons/fa";

const privacyPolicy = () => {
    return (
        <div className='mt-24 container mx-auto md:px-14 px-4'>
            <div className='text-black font-bold text-7xl text-center mb-10'>Privacy & Policy</div>
            <div className=' flex justify-center'>
                <div className='w-full md:w-[700px]'>
                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>Introduction</div>
                    <div className='text-gray-500 font-bold'>
                        Welcome to Servsy, your trusted partner for after-sales services. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you engage with our after-sales services.
                    </div>
                    <div className='mt-8 mb-8 text-black font-bold text-4xl  text-center  '>Information We Collect</div>

                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>1. Personal Information:</div>
                    <div className='text-gray-500 font-bold'>
                        We may collect personal information, including but not limited to your name, contact details, address, and purchase history. This information is necessary for providing after-sales services, such as product support, warranty claims, and returns.
                    </div>

                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>2. Communication Data:</div>
                    <div className='text-gray-500 font-bold'>
                        When you contact us via email, phone, or other communication channels, we may collect and retain the communication data to address your inquiries, provide assistance, and improve our services.
                    </div>

                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>How We Use Your Information</div>
                    <div className='text-gray-500 font-bold'>
                        We use your personal information for the following purposes:
                    </div>
                    <div className='text-black   font-bold'>1. Providing After-Sales Services: <span className='text-gray-500 font-bold'>To assist you with product-related inquiries, warranty</span></div>
                    <div className='text-black   font-bold'>2. Communication: <span className='text-gray-500 font-bold'> To respond to your queries, provide updates about your service requests, and inform you about relevant product information.</span></div>
                    <div className='text-black   font-bold'>3. Improving Services: <span className='text-gray-500 font-bold'> To analyze customer feedback and preferences, helping us enhance our after-sales services and overall customer experience.</span></div>


                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>Data Security and Retention</div>
                    <div className='text-gray-500 font-bold'>
                        We prioritize the security of your personal information. We implement industry-standard security measures to protect against unauthorized access, disclosure, alteration, and destruction of your data. Your information is retained only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
                    </div>

                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>Sharing Your Information</div>
                    <div className='text-gray-500 font-bold'>
                        Servsy does not sell or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in delivering after-sales services, conducting customer surveys, or managing communications.
                    </div>


                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>Your Rights</div>

                    <div className='text-gray-500 font-bold'>Rectify inaccuracies in your personal information.
                        Access and request a copy of the personal information we hold about you.
                    </div>
                    <div className='list-disc'>
                        <li className='text-gray-500 font-bold '>
                            Rectify inaccuracies in your personal information.
                        </li>
                        <li className='text-gray-500 font-bold'>
                            Withdraw your consent for processing personal information, where applicable.
                        </li>
                        <li className='text-gray-500 font-bold'>
                            Request the deletion of your personal information under certain circumstances.
                        </li>
                    </div>

                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>Cookies and Similar Technologies</div>
                    <div className='text-gray-500 font-bold'>Servsy may use cookies and similar technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
                    </div>

                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>Changes to This Privacy Policy</div>
                    <div className='text-gray-500 font-bold'> Servsy reserves the right to update or modify this Privacy Policy at any time. We will notify you of any material changes via email or by posting the updated policy on our website.
                    </div>

                    <div className='mt-8  text-black font-bold text-2xl   mb-2'>Contact Us</div>
                    <div className='text-gray-500 font-bold'>If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us at:
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaEnvelope />
                        <p className='font-bold'>help@servsy.com</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt />
                        <p className='font-bold'>+91 7011071202</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default privacyPolicy