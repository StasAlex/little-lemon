import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { cards } from '../constants/index';
import Specials from  '../components/Specials'

const Dish = () => {
  const { slug } = useParams();
  const [filteredCard, setFilteredCard] = useState({});

  useEffect(() => {
    const card = cards.find(card => card.link === slug);
    setFilteredCard(card || {});

  }, [slug])

  return (
    <div className='container mx-auto p-4'>
      {slug !== 'order' ?
      <div className='flex flex-col sm:flex-row'>
        <img src={filteredCard.img} alt={filteredCard.title} />
        <div className='px-6 py-5 flex flex-wrap items-center justify-between'>
              <h3 className='font-secondary text-2xl text-black'>{filteredCard.title}</h3>
              <span className='text-coral text-base font-bold'>${filteredCard.price}</span>
              <p className='mt-5 mb-5 text-green'>{filteredCard.description}</p>
              <Link to={`/order/${filteredCard.link}`}
              className="group flex items-center text-dark hover:text-white hover:bg-green px-2 rounded-md transition-all ease-in duration-300">
                <span className="mr-2">Order a delivery</span>
                <img src="icons/order.svg" alt="order-icon" className='block group-hover:hidden'/>
                <img src="icons/order-hover.svg" alt="order-hover-icon" className='hidden group-hover:block'/>
              </Link>
        </div>
      </div>
      :
      <Specials/>
      }
      
    </div>
  );
};

export default Dish;
