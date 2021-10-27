import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const Menu = () => {

  const [navbar, setNavbar] = useState(false)
  const changeNavbar = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeNavbar()

    window.addEventListener("scroll", changeNavbar)
  })


  const [colorChange, setColorchange] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  useEffect(() => {
    changeBackground()

    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
      <div className='fixed w-full'>
        <div className={colorChange ? 'text-green-soma' : 'text-white'}>
          <div className={navbar ? 'bg-gradient-to-b from-blue-soma backdrop-blur shadow-xl' : ''}>
            <div className='container mx-auto flex p-5 items-center md:flex-row px-5 py-5'>
              <MenuBrand></MenuBrand>
              <MenuNav></MenuNav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuBrand = () => {
  return (
    <div className='flex-1'>
      <img className='object-contain h-14 hidden md:block' alt='logo' src='logo.png' />
    </div>
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

  );
};

const MenuItem = ({ children }) => {
  const [colorChange, setColorchange] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  useEffect(() => {
    changeBackground()

    window.addEventListener("scroll", changeBackground)
  })
  return (
    <a className={
      colorChange ?
        'mr-5 hover:scale-110 hover:text-white hover:cursor-pointer'
        : 'mr-5 hover:scale-110 hover:text-green-soma hover:cursor-pointer'
    }>
      {children}
    </a>
  );
};

Menu.Brand = MenuBrand;
Menu.Nav = MenuNav;
Menu.item = MenuItem;

export default Menu;