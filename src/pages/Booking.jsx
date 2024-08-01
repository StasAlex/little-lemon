import React from 'react';
import BookingForm from '../components/BookingForm';
import { icons } from '../constants';

const Booking = () => {
  return (
    <>
    <section className='bg-green text-white mb-3 lg:mb-10'>
        <div className="container px-4 flex flex-col sm:flex sm:flex-row mx-auto h-full">
          <div className='px-4 py-6 sm:basis-1/2 sm:flex sm:flex-col sm:justify-center'>
              <h1 className='font-secondary text-yellow text-6xl font-medium'>Little Lemon</h1>
              <p className='font-secondary font-normal text-xl'>Chicago</p>
          </div>
        </div>
    </section>
    <section className='container mx-auto p-4 flex-grow'>
      <h1 className='font-primary font-extrabold text-2xl mb-8 lg:mb-10'>Reserve a table</h1>
      <div className='flex mb-5 lg:mb-10'>
        {icons.map((icon) => (
              <img key={icon.title} src={icon.img} alt={icon.title} className='mr-5 last:mr-0'/>
            ))}
        </div>
      <BookingForm />
    </section>
    </>
  );
};

export default Booking;
