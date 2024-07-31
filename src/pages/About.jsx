import React from 'react';
import { useParams } from 'react-router-dom';
import About from '../sections/About'

const AboutPage = () => {
  const { link } = useParams();

  console.log(link)

  return (
    <section className='container px-4 mx-auto mt-5 lg:mt-20'>
      {link === 'about' ?
        <About isButtonHide={true}/>
        : <About/>
      }
    </section>
  )
}

export default AboutPage
