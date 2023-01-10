import React, { useState } from 'react';
import Logo from "./img/yelizlogo.png";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-[8%] flex items-center justify-between shadow-md p-2 relative">
      <img src={Logo} className="w-[150px]" />
      
      <div className='grow invinsible lg:visible'></div>

      <ul className='invisible lg:visible lg:flex lg:gap-8 font-display3 text-lg'>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
         <a href='/portfolio'>Portfolio</a>
        </li>
        <li>
         <a href='/services'>Services</a>
        </li>

        <li>
         <a href='/contact'>Contact Us</a>
        </li>
      </ul>


      <button onClick={handleMenuClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[33px] lg:invisible">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>


      {menuOpen && (
        <ul className="absolute top-0 left-0 w-full bg-white shadow-md py-2">
          <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
          <a href='/'>Home</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
            <a href='/about'>About</a>
           </li>
          <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
           <a href='/portfolio'>Portfolio</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
           <a href='/services'>Services</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200" onClick={handleMenuItemClick}>
           <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      )}
    </div>
  );
}
