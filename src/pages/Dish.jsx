import React, { useState, useEffect, useContext } from 'react';
import toast from 'react-simple-toasts';
import { toastConfig } from '../constants/index';
import Button from '../utils/Button';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { cards } from '../constants/index'; // Ensure this is correctly exporting data
import Specials from '../sections/Specials';
import order from '../assets/icons/order.svg';
import orderHover from '../assets/icons/order-hover.svg';

const Dish = () => {
  const { slug } = useParams();
  const [card, setCard] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Find the card based on slug from params
    const selectedCard = cards.find(item => item.link === slug);

    // Set filtered card and filtered cards
    setCard(selectedCard || null);
    setFilteredCards(cards.filter(item => item.link !== slug));
  }, [slug]);

  const handleDelivery = () => {
    if (card) {
      addToCart(card);
      toast(`${card.title} successfully added to cart`, toastConfig);
    }
  };

  if (!card) return <p>Loading...</p>; // Optional: Handle loading state

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col sm:flex-row sm:justify-between'>
        <img src={card.img} alt={card.title} className='sm:basis-[59%] sm:max-w-[59%] sm:object-cover lg:max-h-[300px] 2xl:max-w-[49%]'/>
        <div className='py-5 sm:py-0 flex md:flex-col flex-wrap items-center md:justify-start justify-between sm:items-start sm:basis-[39%] 2xl:basis-[40%]'>
          <h3 className='font-secondary text-2xl text-black md:mb-5'>{card.title}</h3>
          <span className='text-coral text-base font-bold'>${card.price}</span>
          <p className='mt-5 mb-5 text-green md:w-[90%] lg:w-[70%] 2xl:w-full'>{card.description}</p>
          <Button action='primary' onClick={handleDelivery} title='Order a delivery' addClass='sm:w-full md:mt-auto'>
            <img src={order} alt="order-icon" className='block group-hover:hidden'/>
            <img src={orderHover} alt="order-hover-icon" className='hidden group-hover:block'/>
          </Button>
        </div>
      </div>
      <Specials title="You may also like" isButton={false} cards={filteredCards} className="mt-5 sm:mt-10"/>
    </div>
  );
};

export default Dish;
