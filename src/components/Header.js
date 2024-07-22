import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { to: '/home', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/menu', text: 'Menu' },
    { to: '/reservations', text: 'Reservations' },
    { to: '/order', text: 'Order online' },
    { to: '/login', text: 'Login' }
  ];

  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className='container mx-auto p-4'>
      <nav className="flex items-center justify-between flex-wrap">
        <Nav.Item>
          <Nav.Link as={Link} to="/home" className="flex items-center flex-shrink-0 mr-6 ">
            <img className="mr-2" src="Logo.svg" alt="lemon-logo" />
          </Nav.Link>
        </Nav.Item>
        <div className={`flex items-center lg:flex lg:items-center lg:w-auto`}>
          <div className={`text-sm hidden lg:flex lg:flex-grow justify-end`}>
            {navLinks.map((link) => (
              <Nav.Item key={link.to} className='mr-5'>
                <Nav.Link as={Link} to={link.to} className='block lg:inline-block px-2 rounded-md lg:mt-0 bg-white text-green hover:text-white hover:bg-green hover:transition-all duration-300 mr-4 focus-visible:outline-none'>
                  {link.text}
                </Nav.Link>
              </Nav.Item>
            ))}
          </div>
          <div className={`block lg:hidden`}>
            <button
              className="flex items-center px-3 py-2 border hover:fill-white rounded text-green border-green hover:text-green hover:bg-green hover:transition-all duration-300"
              onClick={() => setVisibleNav(!visibleNav)}
            >
              <svg className="fill-current h-3 w-3 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`text-sm flex-col lg:hidden lg:flex-grow w-full justify-end ${visibleNav ? 'flex': 'hidden'}`}>
            {navLinks.map((link) => (
              <Nav.Item key={link.to} className='text-center'>
                <Nav.Link as={Link} to={link.to} className='block text-xl text-dark hover:text-white hover:bg-green hover:transition-all duration-300 focus-visible:outline-none'>
                  {link.text}
                </Nav.Link>
              </Nav.Item>
            ))}
          </div>
      </nav>
    </header>
  );
}

export default Header;
