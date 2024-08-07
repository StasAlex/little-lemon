import React, { useEffect, useState, useContext } from 'react';
import toast from 'react-simple-toasts';
import {toastConfig} from '../constants/index';
import Button  from '../utils/Button';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { cards } from '../constants/index';
import Specials from  '../sections/Specials';
import order from '../assets/icons/order.svg';
import orderHover from '../assets/icons/order-hover.svg';

const Dish = () => {
  const params = useParams();
  const [filteredCard, setFilteredCard] = useState({});
  const { addToCart } = useContext(CartContext);

  const handleDelivery = () => {
    addToCart(filteredCard);
    toast(`${filteredCard.title} successfully added to cart`, toastConfig);
  }

  useEffect(() => {
    const card = cards.find(card => card.link === params.slug);
    console.log(card);
    setFilteredCard(card || {});

  }, [params])

  return (
    <div className='container mx-auto p-4'>
      {params.slug !== 'order' ?
      <div className='flex flex-col sm:flex-row'>
        <img src={`${filteredCard.img}`} alt={filteredCard.title} />
        <div className='py-5 flex flex-wrap items-center justify-between'>
              <h3 className='font-secondary text-2xl text-black'>{filteredCard.title}</h3>
              <span className='text-coral text-base font-bold'>${filteredCard.price}</span>
              <p className='mt-5 mb-5 text-green'>{filteredCard.description}</p>
              <Button action='primary' onClick={handleDelivery} title='Order a delivery'>
                <img src={order} alt="order-icon" className='block group-hover:hidden'/>
                <img src={orderHover} alt="order-hover-icon" className='hidden group-hover:block'/>
              </Button>
        </div>
      </div>
      :
      <Specials/>
      }
    </div>
  );
};

export default Dish;
