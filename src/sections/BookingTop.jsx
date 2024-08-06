import React from 'react';
import { icons } from '../constants';

const BookingTop = ({isIcons, title}) => {
  return (
    <>
      <section className='bg-green text-white'>
        <div className="container px-4 flex flex-col sm:flex sm:flex-row mx-auto h-full">
          <div className='px-4 py-6 sm:basis-1/2 sm:flex sm:flex-col sm:justify-center'>
              <h1 className='font-secondary text-yellow text-5xl font-medium'>Little Lemon</h1>
              <p className='font-secondary font-normal text-xl'>Chicago</p>
          </div>
        </div>
    </section>
    <section className='container mx-auto p-4 flex-grow'>
      <h1 className='font-primary font-extrabold text-2xl'>{title}</h1>
      {isIcons ?
        <div className='flex mb-5 lg:mb-10'>
        {icons.map((icon) => (
                <img key={icon.title} src={icon.img} alt={icon.title} className='mr-5 last:mr-0'/>
            ))}
        </div>
        : null
      }
    </section>
    </>
  )
}

export default BookingTop
