import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../constants/index';

const Order = () => {
  const { dish } = useParams();
  const [filteredCard, setFilteredCard] = useState({})

  useEffect(() => {
    const card = cards.find(card => card.link === dish);
    setFilteredCard(card || {});

  }, [dish])


  return (
    <div className='container mx-auto p-4'>
      Order for {filteredCard.title}
    </div>
  )
}

export default Order
