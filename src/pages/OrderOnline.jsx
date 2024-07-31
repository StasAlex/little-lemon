import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../constants/index';

const OrderOnline = () => {
  const { slug } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const filteredCard = cards.find((card) => card.link === slug);
    setCard(filteredCard);
  }, [slug]);

  return (
    <div className='container mx-auto p-4'>
      {card ? (
        <div>
          <h2>Order for {card.title}</h2>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default OrderOnline;