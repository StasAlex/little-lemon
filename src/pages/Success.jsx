import React from 'react';
import BookingTop from '../sections/BookingTop';
import SuccessSection from '../sections/SuccessSection';

const Success = () => {
  return (
    <>
      <BookingTop isIcons={false} title="Table Reserved"/>
      <SuccessSection/>
    </>
  )
}

export default Success
