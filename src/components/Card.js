import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({card}) => {
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
            <Link to={`/order/${card.link}`}
            className="mt-auto group flex items-center text-dark hover:text-white hover:bg-green px-2 rounded-md transition-all ease-in duration-300">
              <span className="mr-2">Order a delivery</span>
              <img src="icons/order.svg" alt="order-icon" className='block group-hover:hidden'/>
              <img src="icons/order-hover.svg" alt="order-hover-icon" className='hidden group-hover:block'/>
            </Link>
      </div>
    </div>
  )
}

export default Card
