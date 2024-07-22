import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({card}) => {
  return (
    <div className='flex flex-col'>
      <img src={card.img} alt={card.title} />
      <div>
            <h3>{card.title}</h3>
            <span>${card.price}</span>
            <p>{card.description}</p>
            <Link to={card.link}/>
        </div>
    </div>
  )
}

export default Card
