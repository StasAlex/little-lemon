import React from 'react';
import { useParams } from 'react-router-dom';
import About from '../sections/About'

const AboutPage = () => {
  const { slug } = useParams();

  return (
    <section className='container px-4 mx-auto mt-5 lg:mt-20'>
      {slug === 'about' ?
        <About isButtonHide={true}/>
        : <About/>
      }
    </section>
  )
}

export default AboutPage
