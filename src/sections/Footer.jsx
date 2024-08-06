import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { navLinks } from '../constants/index';
import { address } from '../constants/index';
import { socials } from '../constants/index';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-grey">
      <div className='container mx-auto p-4'>
        <div className="flex flex-wrap">
          <div className='w-full xs:w-[49%] lg:w-[24%]'>
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="flex items-center flex-shrink-0 mr-6">
                <img className="mr-2" src="./logo.svg" alt="lemon-logo" />
              </Nav.Link>
            </Nav.Item>
            </div>
          <div className='w-full xs:w-[49%] lg:w-[24%]'>
            <h3 className='text-lg text-green font-bold mb-2'>Navigation</h3>
            <ul className={`text-sm`}>
            {navLinks.map((link) => (
              link.to !== '/' ? (
                <li key={link.to} className='mb-1 last:mb-0 -ml-2'>
                   <Nav.Link
                      as={Link}
                      to={link.to}
                      className='text-black hover:text-white hover:bg-green hover:transition-all duration-300 focus-visible:outline-none px-2 py-1 rounded-lg'
                      onClick={() => navigate(link.to)}
                    >
                      {link.text}
                    </Nav.Link>
                </li>
              ) : null
            ))}
            </ul>
          </div>
          <div className='w-full xs:w-[49%] lg:w-[24%]'>
            <h3 className='text-lg text-green font-bold mb-2'>Contacts</h3>
            <ul className={`text-sm`}>
              {address.map(string => (
                <li key={string.text} className='mb-1 last:mb-0 -ml-2'>
                  {string.context !== 'phone' ? 
                    <span className='text-black hover:text-white hover:bg-green hover:transition-all duration-300 focus-visible:outline-none px-2 rounded-lg mb-0'>
                      {string.text}
                    </span>
                    :
                   <a href={`tel:${string.text.replace(/[\s()-]/g, '')}`} className='text-black hover:text-white hover:bg-green hover:transition-all duration-300 focus-visible:outline-none px-2 rounded-lg mb-0'>
                    Phone: {string.text}
                  </a>
                   }
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full xs:w-[49%] lg:w-[24%]'>
            <h3 className='text-lg text-green font-bold mb-2'>Social</h3>
            <ul className="flex">
              {socials.map((item) => (
                <li key={item.img} className='mr-4 last:mr-0'>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" >
                    <img className='w-7' src={item.img} alt='social-icon'/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
