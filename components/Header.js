
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
        {/* <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div> */}
        <div className="py-1">
          <div className="container mx-auto md:px-14 px-4 py-3 sm:py-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 py-1 font-bold text-2xl">
                <Link href={"/"}  >
                  <img src={"/Logo.png"} alt="" className="h-16 max-w-full rounded-lg" />
                </Link>
                {/* <span>TCJ hrefurism</span> */}
              </div>
              
              <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <ul className="flex items-center font-bold gap-6 animatedRight ">
                  <li className="py-4">
                    <Link href="services" className={`text-decoration-none ${router.pathname==="/services" ? "text-primary" : "" }`} >
                      Customer Support
                    </Link>
                  </li>
                  
                  <li className="py-4">
                    <Link href="blogs" className={`text-decoration-none ${router.pathname==="/blogs" ? "text-primary" : "" }`} >
                      Business Solution
                    </Link>
                  </li>
                  
                  <li className="py-4">
                    <Link href="about" className={`text-decoration-none ${router.pathname==="/about" ? "text-primary" : "" }`} >
                      Login
                    </Link>
                  </li>
                  
                </ul>
              </div>
                <div className="md:hidden block">
                  {showMenu ? (
                    <HiMenuAlt1
                      onClick={hrefggleMenu}
                      className=" cursor-pointer transition-all"
                      size={30}
                    />
                  ) : (
                    <HiMenuAlt3
                      onClick={hrefggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Header;
