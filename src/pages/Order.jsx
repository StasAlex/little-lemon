import React from 'react';
import MenuList from '../components/MenuList';

const Order = () => {
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-primary text-3xl md:text-5xl font-semibold my-5 xs:my-7'>Choose from our menu</h2>
      <MenuList/>
    </div>
  )
}

export default Order
