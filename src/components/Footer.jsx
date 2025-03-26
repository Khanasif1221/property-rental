import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
    overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row
      justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>At Property-Rental, we are dedicated to simplifying your property rental 
              experience. Whether you're looking for a temporary stay or a long-term home, our platform offers a wide range 
              of carefully curated properties to suit every need and budget. Our mission is to provide students their dream flat near colleges.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Home" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Contact" className='hover:text-white'>Contact Us</a>
                <a href="#Policy" target='' className='hover:text-white'>Privacy Policy</a>
                <a href="#Conditions" className='hover:text-white'>Terms and Conditions</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our Page</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest property additions and removals will be sent to your inbox daily.</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your email' 
                className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700
                focus:outline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-blue-500
                text-white'>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center
      text-gray-500'>
        Copyright 2025 © . All Right Reserved</div>
    </div>
  )
}

export default Footer
