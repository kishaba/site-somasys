const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center
        bg-gradient-to-r from-green-soma to-blue-soma h-screen flex-1 overflow-y-auto p-5'>
            <div className='text-gray-600 body-font'>
                <div className=' container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className=' lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        <img
                            className='object-cover object-center rounded'
                            alt='hero'
                            src='http://www.somasys.com.br/wp-content/uploads/2017/12/logo-branco-assessoria.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;