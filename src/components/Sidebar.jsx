import React from 'react'
import { PiGearSixBold } from 'react-icons/pi'
import { MdInfo } from 'react-icons/md'
import { BiDollarCircle, BiSupport, BiSolidHome } from 'react-icons/bi'
import Logo from '../assets/react.svg'

const Sidebar = () => {
    return (
        <div className='bg-slate-800 h-screen flex flex-col justify-between'>
            <div className='text-white text-xl'>
                <a className='group flex items-center justify-center m-4 gap-2' href='#'>
                    <img src={Logo} alt='logo' />
                    <div className='md:flex md:flex-col items-center hidden'>
                        <h1 className='lg:text-4xl text-3xl text-center'>DASH</h1>
                        <div className='bg-white w-0 group-hover:w-full ease-in-out duration-500 h-1'></div>
                    </div>
                </a>
                <a className='bg-slate-600 hover:bg-slate-700 ease-in-out duration-300 p-2 m-2 rounded-md flex items-center justify-center gap-1' href='#'>
                    <BiSolidHome className='inline flex-shrink-0' />
                    <span className='md:inline hidden'>Home</span>
                </a>
                <a className='bg-slate-600 hover:bg-slate-700 ease-in-out duration-300 p-2 m-2 rounded-md flex items-center justify-center gap-1' href='#'>
                    <MdInfo className='inline flex-shrink-0' />
                    <span className='md:inline hidden'>About</span>
                </a>
                <a className='bg-slate-600 hover:bg-slate-700 ease-in-out duration-300 p-2 m-2 rounded-md flex items-center justify-center gap-1' href='#'>
                    <PiGearSixBold className='inline flex-shrink-0' />
                    <span className='md:inline hidden'>Services</span>
                </a>
                <a className='bg-slate-600 hover:bg-slate-700 ease-in-out duration-300 p-2 m-2 rounded-md flex items-center justify-center gap-1' href='#'>
                    <BiDollarCircle className='inline flex-shrink-0' />
                    <span className='md:inline hidden'>Pricing</span>
                </a>
                <a className='bg-slate-600 hover:bg-slate-700 ease-in-out duration-300 p-2 m-2 rounded-md flex items-center justify-center gap-1' href='#'>
                    <BiSupport className='inline flex-shrink-0' />
                    <span className='md:inline hidden'>Support</span>
                </a>
            </div>
            <div className='text-white md:text-sm sm:text-xs text-[0.5rem]'>
                <a href='#' className='hover:underline block m-2'>Privacy Policy</a>
                <a href='#' className='hover:underline block m-2'>Terms and Conditions</a>
            </div>
        </div>
    )
}

export default Sidebar