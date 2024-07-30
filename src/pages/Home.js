import React from 'react'
import Hero from  '../sections/Hero'
import Specials from  '../sections/Specials'
import Testimonials from '../sections/Testimonials';
import About from '../sections/About';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default Home
