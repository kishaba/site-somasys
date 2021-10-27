import React, { useState } from 'react';

const Burger = () => {
    return (
        <div className='fixed flex flex-col text-white bg-gray-500 px-5 py-5 right-0'>
            <MenuToggle />
            <MenuItem>Home</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Serviços</MenuItem>
            <MenuItem>Parceiros</MenuItem>
            <MenuItem>Contato</MenuItem>
        </div>
    )
}

const MenuItem = ({ children }) => {
    return (
        <a className='hover:text-green-soma hover:cursor-pointer px-5 py-5 right-0'>
            {children}
        </a>
    );
};

const MenuToggle = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-wrap p-5 items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                  hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-offset-2
                  focus:ring-offset-gray-800 md:flex-row"
                aria-controls="mobile-menu"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
};

Burger.item = MenuItem;
Burger.toggle = MenuToggle;

export default Burger;