export const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/menu', text: 'Menu' },
    { to: '/booking', text: 'Book table' },
    { to: '/order', text: 'Order online' },
  ];

export const cards = [
    {
        img: '/cards/greek-salad.jpg',
        title: 'Greek salad',
        price: '12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        link: 'greek-salad'
    },
    {
        img: '/cards/bruchetta.jpg',
        title: 'Bruchetta',
        price: '5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        link: 'bruchetta'},
    {
        img: '/cards/lemon-dessert.jpg',
        title: 'Lemon Dessert',
        price: '5.00',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', 
        link: 'lemon-dessert'}
];

export const icons = [
    { title: 'no-animals-icon', img: '../icons/booking/no-animals.svg' },
    { title: 'no-drunk-icon', img: '../icons/booking/no-drunk.svg' },
    { title: 'no-smokings-icon', img: '../icons/booking/no-smoking.svg' },
    { title: 'no-cards-icon', img: '../icons/booking/no-cards.svg' }
  ];

export const testimonials = [
    {
        name: 'John Doe',
        image: './review/reviewer1.png',
        rating: '5',
        review: 'This is an amazing place! Highly recommended.'
    },
    {
      name: 'Jane Smith',
      image: './review/reviewer2.png',
      rating: '4',
      review: 'Great food and excellent service.'
    },
    {
      name: "Amanda",
      image: './review/reviewer3.png',
      rating: '5',
      review:'Amazing food. The service was a bit slow, but overall a fantastic experience.'
    },
    {
      name: "Brain",
      image: './review/reviewer4.png',
      rating: '4',
      review: 'The pasta was delicious, but the portions were a bit small for the price. Cozy atmosphere.'
    }
]

export const toastConfig = {theme: "success", position: 'top-right', maxVisibleToasts: 5};