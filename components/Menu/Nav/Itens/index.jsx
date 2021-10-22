const MenuItem = ({ children }) => {
    return (
      <a className='mr-5 transform hover:scale-110 motion-reduce:transform-none hover:text-blue hover:cursor-pointer'>
        {children}
      </a>
    );
};

export default MenuItem;