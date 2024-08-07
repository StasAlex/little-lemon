export const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About'},
    { to: '/menu', text: 'Menu'},
    { to: '/booking', text: 'Book table'}
  ];

  export const address = [
    { context: 'name', text: 'Little Lemon Restaurant' },
    { context: 'street', text: '123 Main Street.' },
    { context: 'city', text: 'Chicago, IL 60601' },
    { context: 'phone', text: '(312) 555-1234' }
  ];

  export const socials = [
    {link: 'https://facebook.com', img: '/icons/social/facebook.png' },
    {link: 'https://instagram.com', img: '/icons/social/instagram.png' },
    {link: 'https://youtube.com', img: '/icons/social/youtube.ico' },
    {link: 'https://pinterest.com', img: '/icons/social/pinterest.png' }
  ];

export const cards = [
    {
      id: 1,
      qty: 1,
      img: '/cards/greek-salad.jpg',
      title: 'Greek salad',
      price: '12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      link: 'greek-salad'
    },
    {
      id: 2,
      qty: 1,
      img: '/cards/bruchetta.jpg',
      title: 'Bruchetta',
      price: '5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
      link: 'bruchetta'},
    {
      id: 3,
      qty: 1,
      img: '/cards/lemon-dessert.jpg',
      title: 'Lemon Dessert',
      price: '5.00',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', 
      link: 'lemon-dessert'
    }
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