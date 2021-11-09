import React, { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OpenCloseMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className='flex justify-end md:hidden z-50 absolute inset-y-0 right-0'>
        <BurguerButton onClick={OpenCloseMenu}>
          <span className='sr-only'>Open main menu</span>
          <BurguerSvG isOpen={isOpen} />
        </BurguerButton>
      </div>
      <BurguerNav isOpen={isOpen}>
        <div className='md:hidden' id='mobile-menu'>
          <BuguerLink onClick={OpenCloseMenu}/>
        </div>
      </BurguerNav>
    </div>
  );
};

const BurguerButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='inline-flex items-center justify-center p-2 h-12 w-12 rounded-md text-white  hover:text-white   shadow-xl rounded-xl bg-gradient-to-b from-blue-soma backdrop-blur'
      aria-controls='mobile-menu'
      aria-expanded='false'
    >
      {children}
    </button>
  );
};

const BurguerItem = ({ children }) => {
  return (
    <div className='hover:scale-110 hover:text-blue-soma hover:cursor-pointer inline'>
      {children}
    </div>
  );
};

const BuguerLink = ({onClick}) => {
  return (
    <div className='flex flex-col px-12 pt-6 h-96 absolute inset-x-0 top-0 z-30 space-y-6  bg-gradient-to-b from-blue-soma backdrop-blur shadow-xl text-2xl '>
      <Link onClick={onClick} to='home' smooth={true}>
        <BurguerItem>Home</BurguerItem>
      </Link>

      <Link onClick={onClick} to='about' smooth={true}>
        <BurguerItem>Sobre</BurguerItem>
      </Link>

      <Link onClick={onClick} to='services' smooth={true}>
        <BurguerItem> Serviços</BurguerItem>
      </Link>

      <Link onClick={onClick} to='clients' smooth={true}>
        <BurguerItem>Parceiros</BurguerItem>
      </Link>

      <Link onClick={onClick} to='contact' smooth={true}>
        <BurguerItem>Contato</BurguerItem>
      </Link>

      <a href='/blog'>
        <BurguerItem>Blog</BurguerItem>
      </a>
    </div>
  );
};

const BurguerSvG = ({ isOpen }) => {
  return (
    <div>
      {!isOpen ? (
        <svg
          className='block h-6 w-6 '
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      ) : (
        <svg
          className='block h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      )}
    </div>
  );
};

const BurguerNav = ({ children, isOpen }) => {
  return (
    <Transition
      show={isOpen}
      enter='transition ease-out duration-100 transform'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='transition ease-in duration-75 transform'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <div className='md:hidden' id='mobile-menu'>
        <div className='flex flex-col px-12 pt-6 h-96 absolute inset-x-0 top-0 z-30 space-y-6  bg-gradient-to-b from-blue-soma backdrop-blur shadow-xl text-2xl '>
          {children}
        </div>
      </div>
    </Transition>
  );
};

export default Burger;
