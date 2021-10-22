import MenuItem from "./Itens";

const MenuNav = () => {
    return (
      <nav className='md:ml-auto flex flex-wrap items-center text-xl	 justify-center '>
        <MenuItem>Home</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Serviços</MenuItem>
        <MenuItem>Talentos</MenuItem>
        <MenuItem>Contato</MenuItem>
      </nav>
    );
};
  
export default MenuNav;