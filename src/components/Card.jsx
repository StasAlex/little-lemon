import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import toast from 'react-simple-toasts';
import {toastConfig} from '../constants/index';
import Button from '../utils/Button';
import order from '../assets/icons/order.svg';
import orderHover from '../assets/icons/order-hover.svg';

const Card = ({card}) => {
  const { addToCart } = useContext(CartContext);
  const handleDelivery = () => {
    addToCart(card);
    toast(`${card.title} successfully added to cart`, toastConfig);
  }
  return (
    <div className='flex flex-col mb-5 basis-[100%] xs:basis-[49%] lg:basis-[30%] lg:mr-[5%] last:lg:mr-0 h-auto'>
      <Link to={`/menu/dishes/${card.link}`}>
        <img className='w-full h-[250px] xs:h-[170px] lg:h-[250px] object-cover border border-solid border-black rounded-t-2xl' src={card.img} alt={card.title} />
      </Link>
      <div className='p-3 flex grow justify-between items-baseline flex-wrap bg-grey pb-5'>
            <Link to={`/menu/dishes/${card.link}`} className='grow-0'>
              <h3 className='font-secondary text-2xl text-black'>{card.title}</h3>
            </Link>
            <span className='text-coral text-base font-bold grow-0'>${card.price}</span>
            <p className='mt-3 mb-5 text-green grow'>{card.description}</p>
            <Button action='primary' title='Order a delivery' onClick={handleDelivery}>
              <img src={order} alt="order-icon" className='block group-hover:hidden'/>
              <img src={orderHover} alt="order-hover-icon" className='hidden group-hover:block'/>
            </Button>
      </div>
    </div>
  )
}

export default Card
