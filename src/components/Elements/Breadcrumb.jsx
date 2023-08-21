import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumb = ({ second = false, third = false, fourth = false }) => {
  return (


    <nav className="flex justify-center mt-4 mb-8" aria-label="Breadcrumb ">
      <ol className="inline-flex items-center text-center ">
        <Link to="/cart" className="active select-none cursor-pointer bg-main_c dark:bg-blue-600 text-white font-semibold rounded-full text-base  inline-flex items-center py-1 px-8">
          1. Cart
        </Link>
        <li>
          <div className={`w-12 h-1  ${second || third ? "bg-main_c dark:bg-blue-600 text-white" : "bg-n_active_main_c dark:bg-blue-400 "} `}></div>
        </li>
        <Link to="/checkout" className={` select-none cursor-pointer ${second || third ? "bg-main_c dark:bg-blue-600 text-white" : " bg-n_active_main_c text-main_c dark:bg-blue-400 dark:text-white "}   font-semibold rounded-full text-base  inline-flex items-center py-1 px-8`}>
          2. Details
        </Link>
        <li>
          <div className={`w-12 h-1 ${third ? "bg-main_c dark:bg-blue-600" : "bg-n_active_main_c text-main_c dark:bg-blue-400 dark:text-white"} `}></div>
        </li>
        <Link to="/payment" className={` select-none cursor-pointer  ${third ? "text-white bg-main_c dark:bg-blue-600 " : "bg-n_active_main_c  text-main_c dark:bg-blue-400 dark:text-white"}  font-semibold rounded-full text-base  inline-flex items-center py-1 px-8`} aria-current="page">
          3. Payments
        </Link>
        <li>
          <div className='select-none cursor-default w-12 h-1 bg-n_active_main_c dark:bg-blue-400 dark:text-white' ></div>
        </li>
        <li className="select-none cursor-default opacity-60 bg-n_active_main_c text-main_c font-semibold rounded-full text-base  inline-flex items-center py-1 px-8 dark:bg-blue-400 dark:text-white" aria-current="page">
          4. Review
        </li>
      </ol>
    </nav>


  )
}
