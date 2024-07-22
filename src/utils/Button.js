import { Link } from "react-router-dom"
import React from 'react'

const Button = ({type, link, title}) => {
    const classes = type === 'primary' ? 
    'bg-yellow text-white border border-solid border-yellow hover:bg-green hover:text-yellow' :
    'border border-solid border-dark text-dark hover:border-yellow hover:text-yellow'

  return (
    <div>
        <button className={`${classes} rounded-[20px] px-4 py-2 hover:bg-green transition-all duration-300`}>
            <Link to={link}><span>{title}</span></Link>
        </button>
    </div>
  )
}

export default Button
