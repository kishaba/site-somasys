const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full flex-1 px-20
        bg-gradient-to-l from-green-soma to-blue-soma h-screen flex-1 overflow-y-auto p-5'>
            <div className='text-gray-600 body-font'>
                <div className=' container mx-auto flex px-5 py-24 md:flex-row'>
                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        <img
                            className='object-contain object-center rounded'
                            alt='hero'
                            src='logo-branco-assessoria.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;