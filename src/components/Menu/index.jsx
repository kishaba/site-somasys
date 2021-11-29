import React, { useState, useEffect } from 'react';
import { Link as ReactScroll } from 'react-scroll';
import Burger from '../Burger';
import Image from 'next/image';
import Link from 'next/link';

function Menu() {
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeNavbar();

    window.addEventListener('scroll', changeNavbar);
  });

  const [colorChange, setColorchange] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div>
      <nav className='fixed w-full z-50 text-white'>
        <div className='fixed w-full z-50'>
          <div
            className={colorChange ? 'text-white  hidden lg:block' : 'text-white  hidden lg:block'}
          >
            <div
              className={navbar ? 'bg-gradient-to-b from-blue-soma backdrop-blur shadow-xl' : ''}
            >
              <div className='container px-5 py-3 mx-auto text-center items-center flex flex-row '>
                <MenuBrand></MenuBrand>
                <MenuNav></MenuNav>
              </div>
            </div>
          </div>
        </div>

        <Burger />
      </nav>
    </div>
  );
}

const MenuItem = ({ children }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);
  });
  return (
    <div
      className={
        colorChange
          ? 'hover:scale-110 hover:text-blue-soma hover:cursor-pointer inline'
          : 'hover:scale-110 hover:text-blue-soma hover:cursor-pointer inline'
      }
    >
      {children}
    </div>
  );
};

const MenuBrand = () => {
  return (
    <div className='flex'>
      <Image unoptimized={true} src='logo.png' alt='logo' width='100' height='70' />
    </div>
  );
};

const MenuNav = () => {
  return (
    <div className='space-x-4 hidden md:block md:ml-auto items-center text-xl'>
      <ReactScroll to='home' smooth={true}>
        <MenuItem>Home</MenuItem>
      </ReactScroll>

      <ReactScroll to='about' smooth={true}>
        <MenuItem>Sobre</MenuItem>
      </ReactScroll>

      <ReactScroll to='services' smooth={true}>
        <MenuItem>Serviços</MenuItem>
      </ReactScroll>

      <ReactScroll to='clients' smooth={true}>
        <MenuItem>Parceiros</MenuItem>
      </ReactScroll>

      <ReactScroll to='contact' smooth={true}>
        <MenuItem>Contato</MenuItem>
      </ReactScroll>

      <Link href='/blog'>
        <a target='_blank'>
          <MenuItem>Blog</MenuItem>
        </a>
      </Link>
    </div>
  );
};

export default Menu;
