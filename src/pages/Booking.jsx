import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingTop from '../sections/BookingTop';


const Booking = () => {
  return (
    <>
    <BookingTop isIcons={true} title="Reserve a table"/>
    <BookingForm />
    </>
  );
};

export default Booking;
