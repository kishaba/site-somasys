const Footer = () => {
  return (
    <div className="text-gray-600 body-font bg-gradient-to-r from-green-soma to-blue-soma">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className='container mx-auto flex px-5 md:flex-row flex-col items-center'>
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
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              MENU
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Sobre</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Serviços</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Parceiros</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Contato</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ENDEREÇO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Rua Alfredo Chaves, 568</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Bairro Lucas Araújo - Passo Fundo/RS</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">54 3311.1388 - Comercial</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">54 9 9940.1388 - Administrativo</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">comercial@somasys.com.br</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SIGA-NOS EM NOSSAS REDES SOCIAIS:
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Rua Alfredo Chaves, 568</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Bairro Lucas Araújo - Passo Fundo/RS</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">54 3311.1388 - Comercial</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">54 9 9940.1388 - Administrativo</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">comercial@somasys.com.br</a>
              </li>
            </nav>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer;