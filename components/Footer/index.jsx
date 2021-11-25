import Image from 'next/image';
import { FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='text-gray-600 py-3 body-font bg-gradient-to-l from-green-soma to-blue-soma'>
      <div className='px-5 pt-6 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col '>
        <div className='flex-grow flex flex-wrap mb-10 justify-center '>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <div className='mx-auto flex px-5 md:flex-row flex-col items-center'>
              <div className=' lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-3'>
                <Image
                  unoptimized={true}
                  src="logo-branco-assessoria.png"
                  alt="Logo Somasys"
                  width="90"
                  height="70"
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          <Info />
          <SocialMedia />

        </div>
      </div>

      <div className='text-gray-600 body-font bg-gradient-to-l from-green-soma to-blue-soma'>
        <div className='px-5 mx-auto text-center'>
          <p className='text-lg text-white'>Uma empresa que você pode confiar!</p>
          <p className='text-sm text-white'>© {new Date().getFullYear()} Somasys</p>
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className='lg:w-1/4 md:w-1/2 w-full px-4 text-center'>
      <h2 className='title-font font-medium text-white tracking-widest text-lg mb-3'>
        ENDEREÇO
      </h2>
      <nav className='list-none mb-10'>
        <li>
          <a className='text-white'>Rua Alfredo Chaves, 568</a>
        </li>
        <li>
          <a className='text-white'>Bairro Lucas Araújo - Passo Fundo/RS</a>
        </li>
        <li>
          <a className='text-white'>54 3311.1388 - Comercial</a>
        </li>
        <li>
          <a className='text-white'>54 9 9940.1388 - Administrativo</a>
        </li>
        <li>
          <a className='text-white'>comercial@somasys.com.br</a>
        </li>
      </nav>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className='lg:w-1/4 md:w-1/2 w-full flex flex-col items-center'>
      <h2 className='title-font text-center font-medium text-white tracking-widest text-lg mb-3'>
        SIGA-NOS EM NOSSAS
      </h2>
      <h2 className='title-font text-center font-medium text-white tracking-widest text-lg '>
        REDES SOCIAIS:
      </h2>
      <div className='ml-6 flex space-x-4 py-6 flex-wrap content-center text-2xl text-white md:text-5xl'>
        <a className='hover:text-green-soma'
          href='https://www.linkedin.com/company/somasysassessoriaesistemas/about/'
          rel="noopener noreferrer"
          target='_blank'
          title='LinkedIn Profile'
        >
          <FiLinkedin />
        </a>
        <a className='hover:text-green-soma'
          href='https://www.instagram.com/somasys_sistemas/'
          rel="noopener noreferrer"
          target='_blank'
          title='LinkedIn Profile'
        >
          <FiInstagram />
        </a>
        <a className='hover:text-green-soma'
          href='https://www.facebook.com/somasysPF/'
          rel="noopener noreferrer"
          target='_blank'
          title='LinkedIn Profile'
        >
          <FiFacebook />
        </a>
      </div>
    </div>
  );
};

Footer.Info = Info;
Footer.SocialMedia = SocialMedia;

export default Footer;
