import React, { useRef } from 'react'
import About from '../About';

console.log(About)

const Menu = () => {
  return (
    <div className='fixed text-white bg-gradient-to-b from-blue-soma
    z-50 w-full px-5 py-2 flex justify-between items-center'>
      <div className='container mx-auto flex flex-wrap p-5 items-center md:flex-row'>
        <MenuBrand></MenuBrand>
        <MenuNav></MenuNav>
      </div>
    </div>
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
      <MenuItem>Home</MenuItem>
      <MenuItem>Sobre</MenuItem>
      <MenuItem>Blog</MenuItem>
      <MenuItem>Serviços</MenuItem>
      <MenuItem>Parceiros</MenuItem>
      <MenuItem>Contato</MenuItem>
    </div>

  );
};

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const MenuItem = ({ children }) => {
  const myRef = useRef(null)
  // const executeScroll = () => scrollToRef(myRef)

  const executeScroll = () => {
    console.log('clicou')
    window.scrollTo(0, myRef.current.offsetTop)    
  }

  return (
    <a className='mr-5 hover:scale-110 hover:text-green-soma hover:cursor-pointer'
      onClick={executeScroll}>
      {children}
    </a>
  );
};


Menu.Brand = MenuBrand;
Menu.Nav = MenuNav;
Menu.item = MenuItem;

export default Menu;