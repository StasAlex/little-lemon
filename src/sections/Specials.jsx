import React from 'react';
import Button from '../utils/Button';
import MenuList from '../components/MenuList';

const Specials = ({title, isButton, cards, ...props}) => {
  const classes = props.className || '';

  return (
    <section className={`${classes} container mx-auto px-4 xs:px-0 mb-10 lg:mb-14`}>
        <div className='flex items-center justify-center sm:justify-between flex-wrap mb-5 lg:mb-10'>
            <h2 className='text-primary text-3xl md:text-5xl font-semibold mb-3 xs:mb-0 mx-2'>{title}</h2>
            {isButton ?
            (
              <Button action="primary" link="/menu" title="Online Menu"/>
            ) :
            null
          }
        </div>
        {cards ? <MenuList cards={cards}/> : <div>Loading...</div>}
    </section>
  )
}

export default Specials
