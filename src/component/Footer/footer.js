"use client"
import React, { useEffect } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {

     useEffect(() => {
       AOS.init({
         duration: 1000,
         once: true,
         easing: "ease-in-out",
       });
     }, []);
  return (
    
    <>
      <section className="md:py-10 grid md:grid-cols-5 bg-gradient-to-b from-blue-100 to-blue-300 pb-5 md:pb-0 rounded-t-4xl md:px-[5%] text-center">


     <div>
        <h1 className='text-2xl md:text-xl font-bold mt-5 md:mt-0'>iDreamCareer</h1>
         <div className='space-y-1 md:mt-5 text-lg'>
            <p>About Us</p>
            <p>Our Team</p>
            <p>Contact Us</p>
         </div>
     </div>

     <div>
        <h1 className='text-2xl md:text-xl font-bold mt-5 md:mt-0'>Partnereships</h1>
         <div className='space-y-1 md:mt-5 text-lg'>
            <p>Corporate - CSR</p>
            <p>Private Schools</p>
            <p>Counsellor</p>
         </div>
     </div>

     <div>
        <h1 className='text-2xl md:text-xl font-bold mt-5 md:mt-0'>Legal</h1>
         <div className='space-y-1 md:mt-5 text-lg'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        
         </div>
     </div>

     <div>
        <h1 className='text-2xl md:text-xl font-bold mt-5 md:mt-0'>Reports</h1>
         <div className='space-y-1 md:mt-5 text-lg'>
            <p>Career Report 2021</p>
            <p>Bharat Career</p>
            <p>Aspirations Reports</p>
         </div>
     </div>

     <div className="flex flex-col items-center">
  <h1 className="text-2xl md:text-xl font-bold mt-5 md:mt-0 text-center">Socials</h1>
  <div className="grid grid-cols-5 md:grid-cols-2 gap-4 text-4xl md:text-2xl mt-5 w-full justify-items-center bg-blue-200 rounded-full px-[2%] py-1">
    <FaLinkedin className="hover:text-gray-800 rounded-sm" />
    <FaInstagramSquare className="hover:text-gray-800 rounded-sm" />
    <FaSquareFacebook className="hover:text-gray-800 rounded-sm" />
    <FaXTwitter className="hover:text-gray-800 rounded-sm" />
    <FaYoutube className="hover:text-gray-800 rounded-sm" />
  </div>
</div>


      </section>
      <h1 className='text-center text-black bg-blue-300 border-t border-blue-500 '>Copyright - Medhavi Professional Services Pvt Ltd. All Rights Reserved</h1>
    </>
  )
}

export default Footer
