import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <>
        <div className="grid grid-cols-2 px-7 mx-auto my-3 gap-7">
        <div className="">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Exploore the world, one country at a time.
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Discover the history
          </p>
          <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Start exploreing
            <FaArrowRightLong />
          </button>
        </div>
        <div className="">
          <img src="/image/World-removebg.png"></img>
        </div>
      </div>
    </>
  )
}
