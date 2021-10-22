const MenuBrand = ({ children }) => {
    return (
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 '>
            <img className='object-cover object-center rounded h-12' alt='logo' src='s.png' />
            <span className='ml-3 text-xl text-white hover:text-green-soma hover:cursor-pointer hover:animate-pulse '>
                {children}
            </span>
        </a>
    );
};

export default MenuBrand;