// import Menu from '../Menu';
import Hero from '../Hero';
import About from '../About';
import Clients from '../Clients';
import Footer from '../Footer';
import Services from '../Services';
import Contact from '../Contact';
import Numbers from '../Numbers';

import React, { useRef } from 'react'

import Link from 'next/link'


const Menu2 = ({ children }) => {
  return (
    <div>
      <div className='fixed text-white bg-gradient-to-b from-blue-soma
    z-50 w-full px-5 py-2 flex justify-between items-center'>
        <div className='container mx-auto flex flex-wrap p-5 items-center md:flex-row'>
          <MenuBrand></MenuBrand>
          <MenuNav></MenuNav>
        </div>
      </div>

      <Hero />
      <div id="about">
        <About />
      </div>
      <Services />
      <Clients />
      <Contact />
      <Numbers />
      <Footer />
    </div>
  );
};

const MenuBrand = ({ children }) => {
  return (
    <a className='flex-1'>
      <img className='object-cover object-center h-14' alt='logo' src='logo.png' />
    </a>
  );
};

const MenuNav = () => {
  // const executeScroll = () => {
  //   console.log('clicou')
  //   window.scrollTo(0, myRef.current.offsetTop)
  // }

  return (

    <div className='hidden md:block md:ml-auto items-center text-xl'>
      <MenuItem>Home</MenuItem>

      <Link href="#about">
        <a 
          className='mr-5 hover:scale-110 hover:text-green-soma hover:cursor-pointer'>
          Sobre
        </a>
      </Link>

      {/* <MenuItem>Sobre</MenuItem> */}
      <MenuItem>Blog</MenuItem>
      <MenuItem>Serviços</MenuItem>
      <MenuItem>Parceiros</MenuItem>
      <MenuItem>Contato</MenuItem>
    </div>

  );
};

const MenuItem = ({ children }) => {
  return (
    <a className='mr-5 hover:scale-110 hover:text-green-soma hover:cursor-pointer'>
      {children}
    </a>
  )
}



Menu2.Brand = MenuBrand;
Menu2.Nav = MenuNav;
Menu2.item = MenuItem;

export default Menu2;