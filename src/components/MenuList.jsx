import React from 'react';
import Card from './Card';
import { cards } from '../constants/index';

const MenuList = () => {
  return (
    <div className='flex justify-between flex-wrap'>
        {cards.map((card) => (
              <Card key={card.title} card={card}/>
            ))}
        </div>
  )
}

export default MenuList
