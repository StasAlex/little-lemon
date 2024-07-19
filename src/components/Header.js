import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  const navLinks = [
    { to: 'home', text: 'Home' },
    { to: 'about', text: 'About' },
    { to: 'menu', text: 'Menu' },
    { to: 'reservations', text: 'Reservations' },
    { to: 'order', text: 'Order online' }
  ];

  return (
    <header className='flex flex-row justify-between py-5'>
      <Nav.Item>
        <Nav.Link href="home">
          <img src="Logo.svg" alt="lemon-logo" />
        </Nav.Link>
      </Nav.Item>
      <Nav defaultActiveKey="/home" as="ul" className='flex flex-1 justify-center items-center'>
        {navLinks && navLinks.map((link) => (
          <Nav.Item key={link.to} className='mr-5'>
            <Nav.Link href={link.to}>{link.text}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <button className="login">Login</button>
    </header>
  );
}

export default Header;
