import React from 'react'
import Hero from  '../components/Hero'
import Specials from  '../components/Specials'
import Testimonials from '../components/Testimonials';
import About from '../components/About';

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
