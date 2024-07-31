import { Link } from "react-router-dom"
import React from 'react'

const Button = ({action, link, title, isHide=false, ...props}) => {
    const classes = action === 'primary' ? 
    'bg-yellow text-white border border-solid border-yellow hover:bg-green hover:text-yellow' :
    'border border-solid border-dark text-dark hover:border-yellow hover:text-yellow'

  return (
    <div>
        <button  className={`${classes} ${props.className} ${isHide ? 'hidden' : 'block'} rounded-[20px] px-4 py-2 hover:bg-green transition-all duration-300`}
        onClick={props.onClick}
        >
            <Link to={link}><span>{title}</span></Link>
        </button>
    </div>
  )
}

export default Button
