import { useState, useEffect } from 'react';
const Menu = ({ children }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 550) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    console.log('scroll event', window.scrollY);
  };
  return (
    <header className='w-full fixed text-white body-font'>
      <div className={colorChange ? 'bg-gradient-to-b from-blue border-none bg-opacity-75' : 'bg-gradient-to-b from-blue border-none bg-opacity-0'}>
        {/* bg-gradient-to-r from-white to-green overflow-y-visible */}
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  '>
          <MenuBrand>Somasys</MenuBrand>
          <MenuNav></MenuNav>
        </div>
      </div>
    </header>
  );
};

const MenuBrand = ({ children }) => {
  return (
    <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 '>
      <img className='object-cover object-center rounded h-12' alt='logo' src='s.png' />
      <span className='ml-3 text-xl text-white hover:text-green hover:cursor-pointer hover:animate-pulse '>
        {children}
      </span>
    </a>
  );
};

const MenuNav = ({ children }) => {
  return (
    <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center '>
      <MenuItem>Primeiro link</MenuItem>
      <MenuItem>Segundo link</MenuItem>
      <MenuItem>Third Link</MenuItem>
      <MenuItem>Fourth Link</MenuItem>
    </nav>
  );
};
const MenuItem = ({ children }) => {
  return (
    <a className='mr-5 transform hover:scale-110 motion-reduce:transform-none hover:text-green hover:cursor-pointer'>
      {children}
    </a>
  );
};

Menu.Brand = MenuBrand;
Menu.Nav = MenuNav;
Menu.item = MenuItem;
export default Menu;
