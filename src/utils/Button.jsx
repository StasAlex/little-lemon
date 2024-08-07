import { Link } from "react-router-dom"
import React from 'react'

const Button = ({action, link, title, isHide=false, position='start', children, ...props}) => {
    const classes = action === 'primary' ?
    'bg-yellow text-white border border-solid border-yellow hover:bg-green hover:text-yellow' :
    'border border-solid border-dark text-dark hover:border-yellow hover:text-yellow'

  return (
    <div className={`flex justify-${position}`}>
        <button  className={`${classes} ${props.className} ${isHide ? 'hidden' : 'block'} rounded-[20px] px-4 py-2 hover:bg-green transition-all duration-300`}
        onClick={props.onClick}
        >
          {link ?
            <Link to={link}>
              <span>{title}</span>
              {children}
            </Link>
          :
          <div className="flex">
            <span className="mr-2">{title}</span>
            {children}
          </div>
          }
        </button>
    </div>
  )
}

export default Button
