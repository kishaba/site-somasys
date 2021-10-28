import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <div className="text-gray-600 body-font bg-gradient-to-r from-green-soma to-blue-soma">
      <div className="px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="flex-grow flex flex-wrap md:px-20 -mb-10 md:text-left text-center">

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className='mx-auto flex px-5 md:flex-row flex-col items-center'>
              <div className=' lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                <img
                  className='object-cover object-center rounded'
                  alt='hero'
                  src='logo-branco-assessoria.png'
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              MENU
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="cursor-pointer text-white hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="cursor-pointer text-white hover:text-gray-800">Sobre</a>
              </li>
              <li>
                <a className="cursor-pointer text-white hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="cursor-pointer text-white hover:text-gray-800">Serviços</a>
              </li>
              <li>
                <a className="cursor-pointer text-white hover:text-gray-800">Parceiros</a>
              </li>
              <li>
                <a className="cursor-pointer text-white hover:text-gray-800">Contato</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              ENDEREÇO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white">Rua Alfredo Chaves, 568</a>
              </li>
              <li>
                <a className="text-white">Bairro Lucas Araújo - Passo Fundo/RS</a>
              </li>
              <li>
                <a className="text-white">54 3311.1388 - Comercial</a>
              </li>
              <li>
                <a className="text-white">54 9 9940.1388 - Administrativo</a>
              </li>
              <li>
                <a className="text-white">comercial@somasys.com.br</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              SIGA-NOS EM NOSSAS REDES SOCIAIS:
            </h2>
            <div className="flex space-x-4 py-8">
              <SocialIcon network="linkedin" fgColor="#fff" url="https://www.linkedin.com/company/somasysassessoriaesistemas/about/" />
              <SocialIcon network="instagram" fgColor="#fff" url="https://www.instagram.com/somasys_sistemas/" />
              <SocialIcon network="facebook" fgColor="#fff" url="https://www.facebook.com/somasysPF/" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-600 body-font bg-gradient-to-r from-green-soma to-blue-soma">
        <div className="px-5 py-6 mx-auto text-center">
          <p className="text-lg text-white">
            Uma empresa que você pode confiar!
          </p>
          <p className="text-sm text-white">
            © 2021 Somasys
          </p>
        </div>
      </div>




    </div>
  )
}

export default Footer;
