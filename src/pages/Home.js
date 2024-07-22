import React from 'react'
import Hero from  '../components/Hero'
import Specials from  '../components/Specials'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <Specials/>
    </div>
  )
}

export default Home
