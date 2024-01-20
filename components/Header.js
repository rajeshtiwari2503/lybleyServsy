
import React, { useState } from "react";

import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import ResponsiveHeader from "./ResponsiveHeader";
import { useRouter } from "next/router";

export const NavbarLinks = [
  {
    name: "Customer Support",
    link: "customerSupport",
  },
  
  {
    name: "Business Solution",
    link: "businessSolution",
  },
  {
    name: "Login",
    link: "login",
  }   
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "hrefp Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Header = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router=useRouter();
  const hrefggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50  bg-white backdrop-blur-sm text-black">
         
        <div className="py-1">
          <div className="container mx-auto md:px-14 px-4 py-3 sm:py-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 py-1 font-bold text-md md:text-2xl">
                <Link href={"/"}  >
                  {/* <img src={"/Logo.png"} alt="" className="h-16 max-w-full rounded-lg" /> */}
                  <div className="bg-black p-4 text-center text-white font-bold tracking-widest rounded-md">SERVSY</div>
                </Link>
              
              </div>
              
              <div className="flex items-center gap-4">
              <div className=" ">
                <ul className="flex items-center text-md md:text-2xl font-bold gap-6 animatedRight ">
                  
                <li className="py-4">
                    <Link href=" contact" className={`text-decoration-none ${router.pathname==="/contact" ? "text-blue-400" : "" }`} >
                      Contact us
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link href=" businessSolution" className={`text-decoration-none ${router.pathname==="/businessSolution" ? "text-blue-400" : "" }`} >
                      Business Solution
                    </Link>
                  </li>
                  
                  
                </ul>
              </div>
                 
              </div>
            </div>
          </div>
        </div>
        {/* <ResponsiveHeader setShowMenu={setShowMenu} showMenu={showMenu} /> */}
      </nav>
    </>
  );
};

export default Header;
