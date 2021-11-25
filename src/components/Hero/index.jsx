import Image from 'next/image';
import Logo from '../../../public/fundo_estatico.jpg'

const Hero = () => {
  return (
    <div
      className='flex justify-center items-center
        bg-gradient-to-l from-green-soma to-blue-soma'
    >
      <div className='flex'>
        {/* <Image
          w="full"
          h="auto"
          src={Logo}
          alt="Imagem estatica"
          loading="lazy"
          objectFit="cover"
        /> */}
        <img
          className='object-cover w-screen'
          alt='hero'
          src='fundo_estatico.jpg'
        />

        <video
          loop
          muted
          autoPlay
          className='absolute'
        >
          <source
            src='/videos/cidade.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='absolute w-36 sm:w-96 object-center z-30'>
        <Image
          unoptimized={true}
          src="logo-branco-assessoria.png"
          alt="Logo Somasys Branco"
          height="100"
          width="100"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
