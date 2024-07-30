import React from 'react';
import Button from '../utils/Button';
import Card from '../components/Card';
import { cards } from '../constants/index';

const Specials = () => {
  return (
    <section className="container px-4 mx-auto mb-10 lg:mb-14">
        <div className='flex items-center justify-center xs:justify-between flex-wrap mb-5 lg:mb-10'>
            <h2 className='text-primary text-3xl md:text-5xl font-semibold mb-3 xs:mb-0 mx-2'>Whis week specials!</h2>
            <Button action="primary" link="/menu" title="Online Menu" className="mt-3"/>
        </div>
        <div className='flex justify-between flex-wrap'>
        {cards.map((card) => (
              <Card key={card.title} card={card}/>
            ))}
        </div>
    </section>
  )
}

export default Specials
