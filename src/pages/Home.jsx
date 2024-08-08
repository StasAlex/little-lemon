import React from 'react'
import Hero from  '../sections/Hero'
import Specials from  '../sections/Specials'
import Testimonials from '../sections/Testimonials';
import About from '../sections/About';
import { cards } from '../constants/index';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <Specials title="This week specials!" isButton={true} cards={cards}/>
      <Testimonials/>
      <About isButtonHide={false} />
    </div>
  )
}

export default Home
