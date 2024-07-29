import React from 'react'
import Button from '../utils/Button'

const Hero = () => {
  return (
    <div className='bg-green text-white flex-grow sm:mb-16'>
        <div className="container flex flex-col sm:flex sm:flex-row mx-auto h-full">
        <div className='px-4 py-6 sm:basis-1/2 sm:flex sm:flex-col sm:justify-center'>
            <h1 className='font-primary text-yellow text-6xl font-medium'>Little Lemon</h1>
            <p className='font-secondary mb-6 font-normal text-xl'>Chicago</p>
            <p className='mb-6 text-base max-w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button action='primary' link="/booking" title="Reserve a Table"/>
       </div>
       <div className='order-first sm:order-1 sm:basis-1/2 sm:flex sm:flex-col sm:justify-center sm:relative'>
            <img src="./hero.jpg" alt="rest-dish" className='max-h-64 w-full object-cover sm:h-full sm:max-h-[400px] sm:max-w-[300px] sm:absolute sm:top-12 sm:right-4 md:max-h-[500px] md:max-w-full md:left-0 md:right-0'/>
       </div>
        </div>
    </div>
  )
}

export default Hero
