import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingTop from '../sections/BookingTop';
import SuccessSection from '../sections/SuccessSection';

const Success = () => {
  const location = useLocation();
  const { submittedCartItems } = location.state || {};

  return (
    <>
      <BookingTop isIcons={false} title="Order Submitted" />
      <SuccessSection 
        title="Dishes have been ordered successfully!" 
        orderedItems={submittedCartItems || []}
      />
    </>
  );
};

export default Success;
