import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({card}) => {
  return (
    <div className='flex flex-col mb-5'>
      <Link to={card.link}>
        <img className='w-full object-cover border border-solid border-black rounded-t-2xl' src={card.img} alt={card.title} />
      </Link>
      <div className='px-6 py-5 flex flex-wrap items-center justify-between bg-grey'>
            <Link to={card.link}>
              <h3 className='font-secondary text-2xl text-black'>{card.title}</h3>
            </Link>
            <span className='text-coral text-base font-bold'>${card.price}</span>
            <p className='mt-5 mb-5 text-green'>{card.description}</p>
            <Link to={`/order/${card.link}`}
            className="group flex items-center text-dark hover:text-white hover:bg-green px-2 rounded-md transition-all ease-in duration-300">
              <span className="mr-2">Order a delivery</span>
              <img src="icons/order.svg" alt="order-icon" className='block group-hover:hidden'/>
              <img src="icons/order-hover.svg" alt="order-hover-icon" className='hidden group-hover:block'/>
            </Link>
      </div>
    </div>
  )
}

export default Card
