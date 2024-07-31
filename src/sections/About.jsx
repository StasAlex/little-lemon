import React from 'react';
import AboutImg1 from '../assets/about/img-1.png';
import AboutImg2 from '../assets/about/img-2.png';
import Button from '../utils/Button';

function About({isButtonHide}) {

  return (
    <section className="container mx-auto px-4 mb-10 lg:mb-14 lg:flex 2xl:mb-[250px]">
      <article className='mb-3 lg:mb-0 lg:basis-[49%]'>
        <h2 className='text-primary text-3xl md:text-5xl font-semibold mb-2'>Little Lemon</h2>
        <p className='font-secondary mb-3 font-normal text-xl'>Chicago</p>
        <p className='lg:max-w-[75%] mb-3 lg:mb-5'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. At Little Lemon Restaurant, we want you to feel right at home. Our restaurant provides a warm and inviting atmosphere, perfect for a casual lunch with friends, a romantic dinner for two, or a celebratory gathering with family.</p>
        <Button action='secondary' link="/about" title="Read more" isHide={isButtonHide}/>
      </article>
      <div className='flex justify-between lg:basis-[49%] lg:relative'>
        <img className='max-w-[49%] h-56 lg:h-80 lg:max-w-64 2xl:max-w-[300px] 2xl:h-[450px] object-cover lg:absolute top-[-30px] right-0 2xl:right-[100px] z-10' src={AboutImg1} alt='little lemon restaurant'/>
        <img className='max-w-[49%] h-56 lg:h-80 lg:max-w-64 2xl:max-w-[300px] 2xl:h-[450px] object-cover lg:absolute top-[20px] 2xl:left-[100px]' src={AboutImg2} alt = 'little lemon chef cooking'/>
      </div>
    </section>
  );
}

export default About;
