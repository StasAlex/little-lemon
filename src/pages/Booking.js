import React from 'react';
import BookingForm from '../components/BookingForm';
import { icons } from '../constants';

const Booking = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-primary font-extrabold text-3xl'>Reserve a table</h1>
      <div>
        {icons.map((icon) => (
              <img key={icon.title} src={icon.img} alt={icon.title}/>
            ))}
        </div>
      <BookingForm />
    </div>
  );
};

export default Booking;
