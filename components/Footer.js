import Link from "next/link";
import React from "react";
import {
  
  FaLocationArrow,
  FaMobileAlt, FaEnvelope
} from "react-icons/fa";


const FooterLinks = [
  {
    title: "Services",
    link: "services",
  },
   
  

  {
    title: "Privacy Policy",
    link: "privacyPolicy",
  },
  {
    title: "Business Solutions",
    link: "BusinessSolutions",
  },
  {
    title: "Contact us",
    link: "contact",
  },
  {
    title: "Login CRM",
    link: "http://162.240.13.171/~fxnktkmy/servce/",
  },
];
const serviceCenter = [
  {
    title: "Delhi ",
    
  },
   
  {
    title: "Punjab",
    
  },
  {
    title: "Uttar Pradesh",
    
  },
  {
    title: "Maharastra",
  
  },
  {
    title: "Bangal",
    
  },
  {
    title: "Hariyana",
    
  },
  {
    title: "Karnatka",
    
  },{
    title: "Tamil Nadu",
    
  },{
    title: "Bihar",
    
  },{
    title: "Madya Pradesh",
    
  } 
];
const Footer = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="bg-black text-white">
          <div className="container mx-auto md:px-14 px-4">
            <div className="grid md:grid-cols-4 py-5   rounded-t-xl">
              <div className="py-8 col-span-2 ">
                <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                  <Link href={"/"}>
                  
                  <div className="bg-black p-4 border border-2-white text-white font-bold tracking-widest rounded-md">SERVSY</div>

                     </Link>

                </h1>
               
                <br />
                <div className="flex items-center gap-3 ">
                  <FaLocationArrow />
                  <p className="text-sm">A-9, A Block, Sector 59, Noida, Uttar Pradesh 201301</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaEnvelope />
                  <p>Servsy.india@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 9266985775</p>
                </div>

              </div>
              <div className="py-8   ">
                <div>
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                   Service Center
                  </h1>
                  <ul className="grid grid-cols-1 md:grid-cols-2 justify-between gap-3">
                    { serviceCenter.map((link, index) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-blue-400 space-x-1 text-white" key={index}>
                        
                          <span>&#11162;</span>
                          <span className="ps-1">{link.title}</span>
                         
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-4 flex justify-end">
                <div>
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  {FooterLinks.map((link, index) => (
                    <li className={`${link?.title==="Login CRM" ? "text-blue-400" : "text-white"} cursor-pointer hover:translate-x-1 duration-300 hover:text-blue-400 space-x-1`} key={index}>
                      <Link
                        href={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                        target={link?.title==="Login CRM" ?"_blank" :"_parent"}
                      >
                        <span>&#11162;</span>
                        <span className="ms-2">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                </div>
              </div>

            </div>
            <div className="block md:hidden pb-10">
                <div className="flex justify-center items-center gap-6  ">

                  <Link href={"https://m.facebook.com/lybley/photos/a.361705534523649/702715043756028/?type=3&_rdrs"} target="_blank"><img className="bg-white  rounded-full" src="https://static.vecteezy.com/system/resources/previews/022/227/316/non_2x/facebook-logo-icon-free-png.png" alt="logo" height="40px" width="40px" /></Link>
                  <Link href={"https://twitter.com/i/flow/login?redirect_after_login=%2FRLybley"} target="_blank"><img className="  rounded-full bg-white" src="https://cdn-icons-png.flaticon.com/512/1051/1051382.png" alt="logo" height="40px" width="40px" /></Link>
                  <Link href={"https://in.linkedin.com/company/lybley"} target="_blank"><img className="  rounded-full bg-white" src="https://img.icons8.com/?size=512&id=60443&format=png" alt="logo" height="40px" width="40px" /> </Link>
                </div>
              </div>
            <div className="flex justify-between items-center  border-t-2 border-gray-300/50 ">
              <div className="text-center py-5 text-primary  ">
                @copyright 2024 All rights reserved || Made  by SERVSY.
              </div>
              <div className="md:block hidden">
                <div className="flex items-center gap-6  ">

                  <Link href={"https://m.facebook.com/lybley/photos/a.361705534523649/702715043756028/?type=3&_rdrs"} target="_blank"><img className="bg-white  rounded-full" src="https://static.vecteezy.com/system/resources/previews/022/227/316/non_2x/facebook-logo-icon-free-png.png" alt="logo" height="40px" width="40px" /></Link>
                  <Link href={"https://twitter.com/i/flow/login?redirect_after_login=%2FRLybley"} target="_blank"><img className="  rounded-full bg-white" src="https://cdn-icons-png.flaticon.com/512/1051/1051382.png" alt="logo" height="40px" width="40px" /></Link>
                  <Link href={"https://in.linkedin.com/company/lybley"} target="_blank"><img className="  rounded-full bg-white" src="https://img.icons8.com/?size=512&id=60443&format=png" alt="logo" height="40px" width="40px" /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
