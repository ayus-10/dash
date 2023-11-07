import React from 'react'
import { PiGearSixBold } from 'react-icons/pi'
import { MdInfo } from 'react-icons/md'
import { BiDollarCircle, BiSupport, BiSolidHome } from 'react-icons/bi'
import Logo from '../assets/react.svg'

const Sidebar = () => {
    return (
        <div className='col-span-1'>
            <div className='bg-slate-800 h-screen flex flex-col'>
                <div className='text-white text-xl'>
                    <a className='flex items-center justify-center m-4 gap-2' href='#'>
                        <img src={Logo} alt='logo' />
                        <h1 className='lg:text-4xl text-3xl'>DASH</h1>
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
            </div>
        </div>
    )
}

export default Sidebar