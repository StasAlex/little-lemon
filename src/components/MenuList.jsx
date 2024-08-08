import React from 'react';
import Card from './Card';

const MenuList = ({cards}) => {

  return (
    <div className='flex justify-between lg:justify-start flex-wrap'>
        {cards.map((card) => (
              <Card key={card.title} card={card}/>
            ))}
        </div>
  )
}

export default MenuList
