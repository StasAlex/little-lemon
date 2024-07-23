import React from 'react';
import Button from '../utils/Button';
import Card from './Card';

const cards = [
    {
        img: './cards/greek-salad.jpg', 
        title: 'Greek salad', 
        price: '12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        link: 'greek-salad'
    },
    {
        img: './cards/bruchetta.jpg', 
        title: 'Bruchetta', price: '5.99', 
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        link: 'bruchetta'},
    {
        img: './cards/lemon-dessert.jpg',
        title: 'Lemon Dessert', 
        price: '5.00', 
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', 
        link: 'lemon-dessert'}
]

const Specials = () => {
  return (
    <div className="px-4 py-6">
        <div className='flex items-center justify-center flex-wrap mb-5'>
            <h2 className='text-primary font-medium text-3xl mb-3'>Whis week specials!</h2>
            <Button type="primary" link="/menu" title="Online Menu"/>
        </div>
        <div>
        {cards.map((card) => (
              <Card key={card.title} card={card}/>
            ))}
        </div>
    </div>
  )
}

export default Specials
