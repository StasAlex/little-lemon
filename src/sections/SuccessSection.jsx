import React from 'react';
import bigChecked from '../assets/icons/bigChecked.svg';
import Button from '../utils/Button';

const SuccessSection = ({title}) => {
  return (
    <div className='container mx-auto p-4 sm:py-10 bg-grey text-center flex flex-col justify-center mb-5 sm:mb-10'>
       <h1 className='text-4xl font-bold mb-3 max-w-[500px] mx-auto sm:mb-5'>
        {title}
      </h1>
      <p className='text-base font-bold mb-3 max-w-[500px] mx-auto'>You will get a confirmation and reminder witht he contact method selected by you</p>
      <img className='max-w-48 mx-auto mb-[30px]' src={bigChecked} alt={bigChecked} />
      <Button action="primary" link="/" title="Return to Home" position='center'/>
    </div>
  )
}

export default SuccessSection
