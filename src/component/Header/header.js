"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState} from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  
  const [menuButton, setMenuButton] = useState(true);
  

  return (
    <>
      <section
        data-aos="zoom-in"
        className="shadow-2xl md:h-12 border-b-2 backdrop-blur-lg bg-gradient-to-r from-white to-white/70 fixed top-0 z-40 right-0 left-0 border-gray-400 md:border-blue-400 rounded-md"
      >
       
        {/* Desktop Header - Hidden on Small Screens */}
        <div className="hidden md:flex justify-between items-center px-[5%] text-xl py-1">
          <img className="w-16" src="https://idreamcareer.com/wp-content/uploads/2021/08/small-logo-1.webp" />
          <div className="flex gap-x-5">
            <Link href="#template">
              <h1 className="hover:bg-gray-200 bg-gray-100  px-2 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer text-sm">
                Schools
              </h1>
            </Link>
            <Link href="#pricing">
              <h1 className="hover:bg-gray-200 bg-gray-100  px-2 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer text-sm">
                CSR-Govt
              </h1>
            </Link>
            <Link href="#contact">
              <h1 className="hover:bg-gray-200 bg-gray-100  px-2 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer text-sm">
                Counselors
              </h1>
            </Link>
            <Link href="#contact">
              <h1 className="hover:bg-gray-200 bg-gray-100  px-2 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer text-sm">
                Get Conselling
              </h1>
            </Link>
           
          </div>

         <div className="space-x-5">
         <button
             
             className=" px-2 py-1 rounded-lg transition-all duration-300 ease-in-out bg-blue-100 cursor-pointer text-sm "
            >
              +91 99108 31919
            </button>

            <button
             
             className=" px-2 py-1 rounded-lg transition-all duration-300 ease-in-out text-white hover:bg-red-600 cursor-pointer text-sm bg-red-500"
            >
              Login
            </button>
            </div>
        

          
        </div>

        {/* Mobile header - Hidden on medium screens */}
        <div className="flex md:hidden px-5 justify-between items-center transition-all duration-1000 ease-in-out">
          <Link href="/">
            <img  className="h-10 my-2 " src="https://idreamcareer.com/wp-content/uploads/2021/08/small-logo-1.webp" alt="logo" />
          </Link>
          
          <div className="transition-all duration-300 ease-in-out flex items-center gap-x-5">
             <button className="bg-red-500 px-4 py-1 rounded-md text-white text-lg">Login</button>
            {menuButton ? (
              <HiOutlineMenuAlt3
                onClick={() => setMenuButton(!menuButton)}
                className="text-3xl rounded-sm bg-gray-300 px-1 transition-all duration-300 ease-in-out"
              />
            ) : (
              <IoClose
                onClick={() => setMenuButton(!menuButton)}
                className="text-3xl rounded-sm bg-gray-300 px-1 transition-all duration-300 ease-in-out"
              />
            )}
          </div>
        </div>

        {/* mobile menu */}
        {!menuButton && (
          <div className="fixed inset-0 backdrop-blur-lg bg-white/95 h-[90vh] mt-14  z-50 flex flex-col   space-y-6 text-xl text-black transition-all border-x border-b  rounded-b-md border-gray-400 duration-1000 ease-in-out mb-1">
            <Link href="#" onClick={() => setMenuButton(!menuButton)}>
              <h1 className=" px-4 rounded-sm  border-b-2 border-gray-400 text-2xl py-1 mt-5">
                Corporates/CSR
              </h1>
            </Link>

            <Link href="#" onClick={() => setMenuButton(!menuButton)}>
              <h1 className=" px-4 rounded-sm  border-b-2 border-gray-400 text-2xl py-1">
                Counselors
              </h1>
            </Link>

            <Link href="#" onClick={() => setMenuButton(!menuButton)}>
              <h1 className=" px-4 rounded-sm  border-b-2 border-gray-400 text-2xl py-1">
                Schools
              </h1>
            </Link>

            <Link href="#" onClick={() => setMenuButton(!menuButton)}>
              <h1 className=" px-4 rounded-sm  border-b-2 border-gray-400 text-2xl py-1">
                Connect to a Counselor
              </h1>
            </Link>

            <Link href="#" onClick={() => setMenuButton(!menuButton)}>
              <h1 className=" px-4 rounded-sm  border-b-2 border-gray-400 text-2xl py-1">
                About us
              </h1>
            </Link>
            
                 <h1
             
             className="w-11/12 text-center text-2xl px-2 py-1 rounded-lg transition-all duration-300 ease-in-out bg-blue-300 cursor-pointer mx-auto "
            >
              +91 99108 31919
         </h1>     

          <h1
             
             className="w-11/12 text-center text-2xl px-2 py-1 rounded-lg transition-all duration-300 ease-in-out bg-blue-300 cursor-pointer mx-auto "
            >
              Connect on Whatsapp
         </h1>         
          </div>
        )}

 </section>
       
    </>
  );
};

export default Header;