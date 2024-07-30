import React from 'react';
import Button from '../utils/Button';
import Card from '../components/Card';
import { cards } from '../constants/index.js';

const Specials = () => {
  return (
    <div className="px-4 py-6">
        <div className='flex items-center justify-center xs:justify-between flex-wrap mb-5'>
            <h2 className='text-primary font-medium text-3xl mb-3 xs:mb-0 mx-2'>Whis week specials!</h2>
            <Button action="primary" link="/menu" title="Online Menu" className="mt-3"/>
        </div>
        <div className='flex justify-between flex-wrap'>
        {cards.map((card) => (
              <Card key={card.title} card={card}/>
            ))}
        </div>
    </div>
  )
}

export default Specials
