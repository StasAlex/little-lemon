import React from 'react';
import BookingTop from '../sections/BookingTop';
import SuccessSection from '../sections/SuccessSection';

const Success = () => {
  return (
    <>
      <BookingTop isIcons={false} title="Order Submitted"/>
      <SuccessSection title='Dishes has been ordered successfully!'/>
    </>
  )
}

export default Success