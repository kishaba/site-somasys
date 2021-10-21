const Menu = ({ children }) => {
  return (
    <header className='text-gray-600 body-font bg-green text-white bg-gradient-to-r from-blue to-green  '>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <MenuBrand>Somasys</MenuBrand>
        <MenuNav></MenuNav>
      </div>
    </header>
  );
};

const MenuBrand = ({ children }) => {
  return (
    <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        className='w-10 h-10 text-white p-2 bg-blue rounded-full'
        viewBox='0 0 24 24'
      >
        <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
      </svg>
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
    <a className='mr-5 transform hover:scale-110 motion-reduce:transform-none hover:text-blue hover:cursor-pointer'>
      {children}
    </a>
  );
};

Menu.Brand = MenuBrand;
Menu.Nav = MenuNav;
Menu.item = MenuItem;
export default Menu;
