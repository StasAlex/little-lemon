import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import toast from 'react-simple-toasts';
import {toastConfig} from '../constants/index';
import Button from '../utils/Button';

const Card = ({card}) => {
  const { addToCart } = useContext(CartContext);
  const handleDelivery = () => {
    addToCart(card);
    toast(`${card.title} successfully added to cart`, toastConfig);
  }
  return (
    <div className='flex flex-col mb-5 basis-[100%] xs:basis-[49%] lg:basis-[30%] h-auto'>
      <Link to={`/menu/dishes/${card.link}`}>
        <img className='w-full object-cover border border-solid border-black rounded-t-2xl lg:h-52' src={card.img} alt={card.title} />
      </Link>
      <div className='p-3 flex grow justify-between items-baseline flex-wrap bg-grey'>
            <Link to={`/menu/dishes/${card.link}`} className='grow-0'>
              <h3 className='font-secondary text-2xl text-black'>{card.title}</h3>
            </Link>
            <span className='text-coral text-base font-bold grow-0'>${card.price}</span>
            <p className='mb-2 text-green grow'>{card.description}</p>
            <Button action='primary' title='Order a delivery' onClick={handleDelivery}>
              <img src="icons/order.svg" alt="order-icon" className='block group-hover:hidden'/>
              <img src="icons/order-hover.svg" alt="order-hover-icon" className='hidden group-hover:block'/>
            </Button>
      </div>
    </div>
  )
}

export default Card
