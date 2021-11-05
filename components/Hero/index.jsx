const Hero = () => {
  return (
    <div
      className='flex justify-center items-center
        bg-gradient-to-l from-green-soma to-blue-soma '
    >
      <div className='flex '>
        <img className='object-cover w-screen' alt='hero' src='fundo_estatico.jpg' />
        <video
          loop
          muted
          autoPlay
          className='absolute
          '
        >
          <source src='/videos/cidade.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='absolute w-36 sm:w-96'>
        <img className='object-contain object-center' alt='hero' src='logo-branco-assessoria.png' />
      </div>
    </div>
  );
};

export default Hero;
