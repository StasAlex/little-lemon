import React from 'react';
import bigChecked from '../assets/icons/bigChecked.svg';
import Button from '../utils/Button';

const SuccessSection = ({ title, orderedItems }) => {
  // Filter out items with qty 0
  const filteredItems = orderedItems.filter(item => item.qty > 0);

  return (
    <div className='container mx-auto p-4 sm:py-10 bg-grey text-center flex flex-col justify-center mb-5 sm:mb-10'>
      <h1 className='text-4xl font-bold mb-3 max-w-[500px] mx-auto sm:mb-5'>
        {title}
      </h1>
      <p className='text-base font-bold mb-3 max-w-[500px] mx-auto'>
        You will get a confirmation and reminder with the contact method selected by you.
      </p>
      <img className='max-w-48 mx-auto mb-[30px]' src={bigChecked} alt="Order successful" />
      {filteredItems.length > 0 && 
        <div className='text-left max-w-[500px] mx-auto'>
          <h2 className='text-xl font-bold mb-4 text-center'>Your Order:</h2>
          <ul className='mb-4'>
            {filteredItems.map(item => (
              <li key={item.id} className='flex justify-between mb-2'>
                <span className='font-bold mr-2'>{item.title} x {item.qty}</span>
                <span>${(item.qty * item.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h3 className='text-xl font-bold text-center mb-5'>Total: ${filteredItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2)}</h3>
        </div>
      }

      <Button action="primary" link="/" title="Return to Home" position='center'/>
    </div>
  )
}

export default SuccessSection;
