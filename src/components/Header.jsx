import React, { useState, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { navLinks } from '../constants/index';
import { useAuth } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/success.css';
import {toastConfig} from '../constants/index';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/icons/cart/cart.svg';
import cartFullIcon from '../assets/icons/cart/cart-full.svg';

const Header = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const { isLoggedIn, username, logout } = useAuth();
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    setVisibleNav(false);
    navigate(to);
  };

  const handleLogout = () => {
    logout();
    toast('Successfully logged out', toastConfig);
  };

  return (
    <header className='container mx-auto p-4'>
      <nav className="flex items-center justify-between flex-wrap">
        <Nav.Item>
          <Nav.Link as={Link} to="/" className="flex items-center flex-shrink-0 mr-6">
            <img className="mr-2" src={logo} alt="lemon-logo" />
          </Nav.Link>
        </Nav.Item>
        <div className={`flex items-center lg:flex lg:items-center lg:w-auto`}>
          <div className={`text-sm hidden lg:flex lg:flex-grow justify-end`}>
            {navLinks.map((link) => (
              <Nav.Item key={link.to} className='mr-5'>
                <Nav.Link
                  as={Link}
                  to={link.to}
                  className='block lg:inline-block px-2 rounded-md lg:mt-0 bg-white text-green hover:text-white hover:bg-green hover:transition-all duration-300 mr-4 focus-visible:outline-none'
                  onClick={() => handleNavClick(link.to)}
                >
                   <span>{link.text}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
            {isLoggedIn ? (
              <Nav.Item className='mr-5'>
                {username && (
                  <span>
                    <span className='hidden lg:inline-block'>Hello, </span>
                    <span
                      className='block lg:inline-block px-2 rounded-md lg:mt-0 text-green hover:text-white hover:bg-green hover:transition-all duration-300 mr-4 focus-visible:outline-none cursor-pointer'
                      title="Logout"
                      onClick={handleLogout}
                    >
                      {username}
                    </span>
                  </span>
                )}
              </Nav.Item>
            ) : (
              <Nav.Item className='mr-5'>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className='block lg:inline-block px-2 rounded-md lg:mt-0 bg-white text-green hover:text-white hover:bg-green hover:transition-all duration-300 mr-4 focus-visible:outline-none'
                  onClick={() => handleNavClick('/login')}
                >
                  Login
                </Nav.Link>
              </Nav.Item>
            )}
           <Link to='/cart'>
            {cartItems.length ? 
            <img src={cartFullIcon} alt="cart-icon" /> :
            <img src={cartIcon} alt="cart-icon" />}
           </Link>
          </div>
          <div className={`block lg:hidden`}>
            <button
              className="flex items-center px-3 py-2 border hover:fill-white rounded text-green border-green hover:text-green hover:bg-green hover:transition-all duration-300"
              onClick={() => setVisibleNav(!visibleNav)}
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`text-sm flex-col lg:hidden lg:flex-grow w-full justify-end ${visibleNav ? 'flex' : 'hidden'}`}>
          {navLinks.map((link) => (
            <Nav.Item key={link.to} className='text-center'>
              <Nav.Link
                as={Link}
                to={link.to}
                className='block text-xl text-dark hover:text-white hover:bg-green hover:transition-all duration-300 focus-visible:outline-none'
                onClick={() => handleNavClick(link.to)}
              >
                {link.text}
              </Nav.Link>
            </Nav.Item>
          ))}
          {isLoggedIn ? (
              <Nav.Item>
                {username && (
                  <>
                   <span className='hidden lg:inline-block text-dark'>Hello, </span>
                    <span
                      className='block lg:inline-block text-center text-xl text-dark rounded-md lg:mt-0 hover:text-white hover:bg-green hover:transition-all duration-300 focus-visible:outline-none cursor-pointer'
                      title="Logout"
                      onClick={handleLogout}
                    >
                      {username}
                    </span>
                  </>
                )}
              </Nav.Item>
            ) : (
              <Nav.Item className='mr-5'>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className='block lg:inline-block text-center text-xl rounded-md lg:mt-0 text-dark hover:text-white hover:bg-green hover:transition-all duration-300 focus-visible:outline-none cursor-pointer'
                  onClick={() => handleNavClick('/login')}
                >
                  Login
                </Nav.Link>
              </Nav.Item>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
