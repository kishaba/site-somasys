// import Menu from '../Menu';
import Hero from '../Hero';
import About from '../About';
import Clients from '../Clients';
import Footer from '../Footer';
import Services from '../Services';
import Contact from '../Contact';
import Numbers from '../Numbers';

import React from 'react'
import { Link } from "react-scroll";

const Menu2 = () => {
  return (
    <>
      <div className='fixed text-white bg-gradient-to-b from-blue-soma
    z-50 w-full px-5 py-2 flex justify-between items-center'>
        <div className='container mx-auto flex flex-wrap p-5 items-center md:flex-row'>
          <MenuBrand></MenuBrand>
          <MenuNav></MenuNav>
        </div>
      </div>

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="clients">
        <Clients />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Numbers />
      <Footer />
    </>
  );
};

const MenuBrand = () => {
  return (
    <a className='flex-1'>
      <img className='object-cover object-center h-14' alt='logo' src='logo.png' />
    </a>
  );
};

const MenuNav = () => {
  return (

    <div className='hidden md:block md:ml-auto items-center text-xl'>

      <Link to="home" smooth={true}>
        <MenuItem>Home</MenuItem>
      </Link>

      <Link to="about" smooth={true}>
        <MenuItem>Sobre</MenuItem>
      </Link>

      <Link to="services" smooth={true}>
        <MenuItem>Serviços</MenuItem>
      </Link>

      <Link to="clients" smooth={true}>
        <MenuItem>Clientes</MenuItem>
      </Link>

      <Link to="contact" smooth={true}>
        <MenuItem>Contato</MenuItem>
      </Link>

      <Link to="blog" smooth={true}>
        <MenuItem>Blog</MenuItem>
      </Link>

    </div>
  )
}

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