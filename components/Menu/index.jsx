import MenuBrand from "./Brand";
import MenuNav from "./Nav";

const Menu = () => {
  return (
    <div className='w-full fixed text-white body-font bg-gradient-to-b from-blue
    z-50 w-full px-5 py-2 flex justify-between items-center'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <MenuBrand>Somasys</MenuBrand>
        <MenuNav></MenuNav>
      </div>
    </div>
  );
};

export default Menu;
