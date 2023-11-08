import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

const Home = () => {
    const listItems = ['Rendering Multiple Elements', 'Rendering Adjacent Elements', 'Elements Inside a Component', 'Try DigitalOcean for free', 'Rendering Multiple Elements', 'Rendering Adjacent Elements']

    return (
        <section className='h-full flex flex-col gap-8 text-gray-900'>
            <div className='lg:grid lg:grid-cols-5 lg:justify-between lg:items-center lg:gap-4 p-8'>
                <div className='lg:col-span-3 mb-8 lg:m-0'>
                    <h1 className='text-sky-700 md:text-4xl text-3xl font-medium uppercase mb-4'>Lorem ipsum dolor sit.</h1>
                    <p className='md:text-lg text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eveniet dicta hic mollitia nulla ipsum, cupiditate deserunt inventore dolore aut aliquid quos, voluptate minima nam temporibus quis, sit deleniti impedit commodi! Sunt.</p>
                </div>
                <div className='lg:col-span-2 overflow-hidden rounded-md md:mx-12 lg:m-0'>
                    <img src="https://source.unsplash.com/random/720x480/" alt="banner" className='rounded-md hover:scale-105 ease-in-out duration-500' />
                </div>
            </div>
            <div className='p-8'>
                <h1 className='text-sky-700 md:text-3xl text-2xl uppercase mb-4'>Lorem ipsum dolor sit.</h1>
                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col items-center">
                    {listItems.map((listItem, index) =>
                        <span className='bg-slate-200 w-fit p-2 m-2 text-xl rounded-md inline-flex items-center gap-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                            key={index}>
                            <BsCheck2Circle className='text-sky-700 flex-shrink-0' />
                            <p className='text-gray-800'>{listItem}</p>
                        </span>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Home