import React from 'react'
import Card from '../components/Card';
import { cards } from '../constants/index';

const Menu = () => {
  return (
    <section className='container px-4 mx-auto'>
     <h1 className='text-primary text-3xl font-semibold mb-3 xs:mb-0 mx-2'>Our Menu</h1>
     <div className='flex justify-between flex-wrap'>
        {cards.map((card) => (
              <Card key={card.title} card={card}/>
            ))}
        </div>
    </section>
  )
}

export default Menu
