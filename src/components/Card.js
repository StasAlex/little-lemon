import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({card}) => {
  return (
    <div className='flex flex-col mb-5'>
      <img className='border border-solid border-black rounded-t-2xl' src={card.img} alt={card.title} />
      <div className='px-6 py-5 flex flex-wrap items-center justify-between bg-grey'>
            <h3 className='font-secondary text-2xl text-black'>{card.title}</h3>
            <span className='text-coral text-base font-bold'>${card.price}</span>
            <p className='mt-5 text-green'>{card.description}</p>
            <Link to={card.link}
            className="text-dark hover:text-white hover:bg-green px-2 rounded-md transition-all ease-in duration-300">Order a delivery</Link>
      </div>
    </div>
  )
}

export default Card
