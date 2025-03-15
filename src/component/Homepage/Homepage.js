"use client";

import React from "react";
import ReactPlayer from "react-player";
import { Roboto } from "next/font/google";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Marquee from "react-fast-marquee"
const font = Roboto({
  subsets: ["latin"], // Supports Latin characters
  weight: ["400", "700"], // Choose font weights (Regular & Bold)
  variable: "--font-roboto", // Custom CSS variable (optional)
});

const clients = [
    "https://idreamcareer.com/wp-content/uploads/2024/12/cambridge-1.webp",
    "https://idreamcareer.com/wp-content/uploads/2024/12/image-103.webp",
    "https://idreamcareer.com/wp-content/uploads/2024/12/Group-48096408-1.webp",
    "https://idreamcareer.com/wp-content/uploads/2024/12/presidium-gurgaon-1.webp",
    "https://idreamcareer.com/wp-content/uploads/2024/12/logo.webp"
  ];

const Homepage = () => {
  

  return (
    <div
      className={`px-[5%] pt-20 bg-gradient-to-b from-blue-100 via-white to-white ${font.className}`}
    >
      {/* Hero section */}
      <section className="md:flex  items-center space-y-10 md:space-y-0 justify-between">
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-3xl md:text-5xl font-black md:leading-14">
            <a className="bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
              Integrating
            </a>{" "}
            Career Guidance for Lasting Impact
          </h1>
          <p className="md:text-lg text-gray-600">
            Enabling Schools, CSR-Government & Counselors to Shape Brighter
            Futures.
          </p>
          <button className="bg-blue-500 flex items-center gap-x-1 text-white px-4 rounded-sm py-1 hover:gap-x-3 hover:bg-blue-700 text-lg transition-all duration-200 ease-in">
            Know More{" "}
            <img
              className="h-6"
              src="https://images.squarespace-cdn.com/content/v1/56de2a8a7c65e48c2cb8bf74/e6048596-bdd8-49b6-8c84-70a5de047b00/white+arrows+down.gif"
            />
          </button>
        </div>

        {/* Wrapper div for Tailwind styling */}
        <div className="md:w-1/2 rounded-xl overflow-hidden mx-auto justify-end flex items-end">
          <ReactPlayer
            url="https://youtu.be/HdQ_9OSKI_4"
            controls // Show player controls
            width="100%"
            height="400px"
            playing={true} // Autoplay
            muted={true} // Mute audio
          />
        </div>
      </section>

      {/* know our ecosystem */}
      <section className="space-y-10 md:space-y-20">
        <h1 className="text-center text-3xl md:text-4xl mt-44 font-bold">
          Know Our Ecosystem
        </h1>

        {/* usp grids */}
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-10 h-full text-black grid-cols-1">
          {[
            {
              title: "Schools",
              description:
                "Integrate NEP-aligned Career Guidance Program for School Students",
            },
            {
              title: "CSR-Govt",
              description:
                "Transform lives with Social Impact Programs with extensive monitoring and evaluation",
            },
            {
              title: "Counselors",
              description:
                "Get globally recognized as a Career Counselor with our Platform",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 border border-gray-300 relative rounded-lg shadow-2xl h-[12rem] flex flex-col"
            >
              {/* Move h1 outside using absolute positioning */}
              <h1 className="text-center bg-amber-300 border border-amber-500 rounded-full px-4 text-xl font-bold absolute -top-4 left-1/2 -translate-x-1/2">
                {item.title}
              </h1>

              {/* Text Content */}
              <div className="flex-grow mt-6">
                <p className="text-lg text-center">{item.description}</p>
              </div>

              {/* Button Fixed at Bottom */}
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-full px-4 py-1 gap-x-1 hover:gap-x-3 transition-all duration-150 ease-in-out">
                More info <BsArrowUpRightCircleFill />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About us */}
      <section className=" mt-44 space-y-10 md:space-y-20">
        <h1 className="text-center text-3xl md:text-4xl  font-bold">
          About us
        </h1>

        <div className="md:flex md:shadow-2xl items-center justify-between md:border md:border-gray-300 md:bg-gray-100 transition-all duration-150 ease-in-out md:hover:bg-gray-200  rounded-xl md:space-x-10 p-2 md:p-6 space-y-10 md:space-y-0">
          {/* Image Container */}
          <div className="md:w-1/2 object-cover md:overflow-hidden">
            <img
              className="h-96 rounded-md"
              src="https://media.licdn.com/dms/image/v2/D5622AQHj4esghL7ElA/feedshare-shrink_800/feedshare-shrink_800/0/1712387514924?e=2147483647&v=beta&t=3R63UW4-cPoa9lSvCD5uQmzZxtCvDiRz_p1UtvwmXkI"
              alt="About us"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 md:space-y-5">
            <ul className="md:list-disc  space-y-5 text-xl">
              <li className="text-black bg-gray-200 p-2 rounded-lg">
                India&apos;s largest career guidance platform impacting 1
                million+ students.
              </li>
              <li className="text-black bg-gray-200 p-2 rounded-lg">
                The only multilingual career navigation platform in India&sbquo;
                making career guidance accessible to all.
              </li>
              <li className="text-black bg-gray-200 p-2 rounded-lg">
                A track record of 13 years with strong focus on counseling
                efficacy, NPS of 75+ & 99% partners continuation.
              </li>
              <li className="text-black bg-gray-200 p-2 rounded-lg">
                India’s highest administered psychometric career assessment tool
                taken by 2.2 million students.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* impact we made */}
      <section className="mb-20 mt-44 space-y-20">
        <h1 className="text-center text-3xl  md:text-4xl md:w-1/2 mx-auto font-bold">
          The Impact We Have Created With{" "}
          <a className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text  text-transparent">
            {" "}
            Schools&sbquo; CSR-Govt &sbquo; & Counselors
          </a>
        </h1>

        <div className="  md:flex justify-center space-y-10 md:space-y-0  gap-x-10 text-center md:text-left">
          <div className=" space-y-10 ">
            <div className="  md:flex gap-x-10 space-y-10 md:space-y-0">
              <div className=" border rounded-xl bg-green-200 border-green-300 p-5 transition-all hover:bg-green-300 duration-300 ease-in-out ">
                <h1 className="md:text-xl text-center font-bold">
                  1&sbquo;000+
                </h1>
                <p className="md:text-sm">Schools Partnered PAN-India</p>
              </div>
              <div className=" border rounded-xl bg-green-200 border-green-300 p-5 transition-all hover:bg-green-300 duration-300 ease-in-out ">
                <h1 className="md:text-xl font-bold text-center">
                  1&sbquo;600+
                </h1>
                <p className="md:text-sm">Counselors Trained </p>
              </div>
            </div>

            <div className=" md:flex gap-x-10 space-y-10 md:space-y-0">
              <div className=" border bg-amber-100 rounded-xl border-amber-300 p-5 hover:bg-amber-300 transition-all duration-200 ease-in-out">
                <h1 className="md:text-xl text-center font-bold">
                  2.1 Million+
                </h1>
                <p className="md:text-sm">Students Served in Total </p>
              </div>
              <div className=" border bg-amber-100 rounded-xl border-amber-300 p-5 hover:bg-amber-300 transition-all duration-200 ease-in-out">
                <h1 className="md:text-xl font-bold text-center">75%</h1>
                <p className="md:text-sm">
                  College Enrollment Ratio in CSR Projects
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-200 p-5 border border-blue-300 rounded-xl hover:bg-blue-300 transition-all duration-300 ease-in-out">
            <h1 className="md:text-3xl text-center font-bold">5.5 Cr+</h1>
            <p className="md:text-xl">
              worth of Economic Opportunities Created Annually{" "}
            </p>
          </div>
        </div>
      </section>

       {/* Technology led  */}
      <section className="mb-20 mt-44 space-y-20 bg-blue-100 py-5 rounded-2xl">
        <h1 className="text-center text-3xl  md:text-4xl w-[95%] md:w-1/2 mx-auto font-bold">
          {" "}
          <a className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text  text-transparent">
            Technology-Led
          </a>{" "}
          Career Guidances
        </h1>

        <div className="w-[90%] rounded-xl overflow-hidden mx-auto justify-end flex items-end">
          <ReactPlayer
            url="https://youtu.be/00y64DswX6Y"
            controls // Show player controls
            width="100%"
            height="400px"
            // Mute audio
          />
        </div>
        <button className="bg-blue-500 flex items-center gap-x-2 text-white px-4 rounded-sm py-1 hover:gap-x-5 hover:bg-blue-700 text-lg transition-all duration-200  ease-in mx-auto">
          Contact Us <BsArrowUpRightCircleFill />
        </button>
      </section>

      {/* Empowering schools */}
      <section className="mb-20 mt-44 space-y-20 rounded-2xl">
        <h1 className="text-center bg-gradient-to-t from-amber-600 to-amber-400 py-1 rounded-full text-3xl md:text-4xl md:w-1/2 mx-auto font-bold">
          Empowering Schools
        </h1>

        <div className="md:flex space-y-10  items-center">
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-3xl md:text-5xl font-black md:leading-14">
            <a className="bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text">
            Integrate
            </a>{" "}
             NEP Aligned Career Guidance in your School
          </h1>
          <p className="md:text-lg text-gray-600">
          We work with forward thinking private schools to enhance their career guidance capacities to make sure that their students stay ahead of time.
          </p>
          <button className="bg-blue-500 flex items-center gap-x-1 text-white px-4 rounded-sm py-1 hover:gap-x-3 hover:bg-blue-700 text-lg transition-all duration-200 ease-in">
            Know More{" "}
            <img
              className="h-6"
              src="https://images.squarespace-cdn.com/content/v1/56de2a8a7c65e48c2cb8bf74/e6048596-bdd8-49b6-8c84-70a5de047b00/white+arrows+down.gif"
            />
          </button>
        </div>
             

             {/* Wrapper div for Tailwind styling */}
        <div className="md:w-1/2 rounded-xl overflow-hidden mx-auto justify-end flex items-end">
          <ReactPlayer
            url="https://youtu.be/PFVHUJP25Cg"
            controls // Show player controls
            width="100%"
            height="400px"
            playing={true} // Autoplay
            muted={true} // Mute audio
          />
        </div>
        </div>
      </section>

      <section className=" mt-44 space-y-20 px-[5%] pb-20">
        <h1 className="text-3xl md:text-4xl  font-bold text-gray-700">
        Schools that we Enable
        </h1>
        <Marquee pauseOnHover={true} direction="right" speed={10}>
          <div className="flex mx-5 gap-x-10 md:gap-x-20 pt-5 pb-5">
          {clients.map((data, index) => (
  <div key={index} className="flex flex-col items-center">
    <img
      src={data} // Use data directly since it's a URL
      className="w-20 h-20 md:w-28 md:h-28  object-contain"
      alt={`client-${index}`}
    />
  </div>
))}

          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Homepage;
